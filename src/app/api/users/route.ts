import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    // Fetch users from profiles table with actual schema
    const { data: profiles, error: profilesError } = await supabaseAdmin
      .from('profiles')
      .select(`
        id,
        role,
        display_name,
        avatar_url,
        created_at
      `)
      .order('created_at', { ascending: false })

    if (profilesError) {
      console.error('Error fetching profiles:', profilesError)
      return NextResponse.json(
        { error: 'Failed to fetch profiles' },
        { status: 500 }
      )
    }

    // Fetch emails from auth.users table
    const { data: authUsers, error: authError } = await supabaseAdmin.auth.admin.listUsers()
    
    if (authError) {
      console.error('Error fetching auth users:', authError)
      // Continue without auth data, use profiles only
    }

    // Create a map of user IDs to emails
    const emailMap = new Map()
    if (authUsers?.users) {
      authUsers.users.forEach(user => {
        emailMap.set(user.id, user.email)
      })
    }

    // Transform data to match frontend expectations
    const transformedUsers = profiles?.map(profile => ({
      id: profile.id,
      name: profile.display_name || 'Unknown User',
      email: emailMap.get(profile.id) || 'No email available',
      role: profile.role || 'user',
      status: 'Active', // Default to active since is_active column doesn't exist
      joinDate: new Date(profile.created_at).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
      }),
      avatar: profile.avatar_url || null,
      createdAt: profile.created_at
    })) || []

    return NextResponse.json({ users: transformedUsers })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { display_name, role, email, password } = body

    // Create user in Supabase Auth first
    let authUser = null
    if (email && password) {
      const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true
      })

      if (authError) {
        console.error('Auth error:', authError)
        return NextResponse.json(
          { error: 'Failed to create auth user', details: authError.message },
          { status: 400 }
        )
      }

      authUser = authData.user
    }

    // Create profile record with current schema
    const { data: profile, error: profileError } = await supabaseAdmin
      .from('profiles')
      .insert({
        id: authUser?.id || undefined, // Use auth user ID if available
        display_name,
        role: role || 'user',
        avatar_url: null
      })
      .select()
      .single()

    if (profileError) {
      console.error('Profile error:', profileError)
      return NextResponse.json(
        { error: 'Failed to create profile' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      message: 'User created successfully',
      user: {
        id: profile.id,
        display_name,
        role: role || 'user',
        email: authUser?.email || 'No email'
      }
    })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
