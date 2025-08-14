import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    const { data: user, error } = await supabaseAdmin
      .from('profiles')
      .select(`
        id,
        role,
        display_name,
        avatar_url,
        created_at
      `)
      .eq('id', id)
      .single()

    if (error) {
      console.error('Error fetching user:', error)
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Try to get email from auth.users
    let email = 'No email available'
    try {
      const { data: authUser, error: authError } = await supabaseAdmin.auth.admin.getUserById(id)
      if (!authError && authUser?.user) {
        email = authUser.user.email || 'No email available'
      }
    } catch (authErr) {
      console.log('Could not fetch auth user email:', authErr)
    }

    const transformedUser = {
      id: user.id,
      name: user.display_name || 'Unknown User',
      email: email,
      role: user.role || 'user',
      status: 'Active',
      joinDate: new Date(user.created_at).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
      }),
      avatar: user.avatar_url || null,
      createdAt: user.created_at
    }

    return NextResponse.json({ user: transformedUser })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const body = await request.json()
    const { display_name, role } = body

    const { error } = await supabaseAdmin
      .from('profiles')
      .update({
        display_name,
        role
      })
      .eq('id', id)

    if (error) {
      console.error('Error updating user:', error)
      return NextResponse.json(
        { error: 'Failed to update user' },
        { status: 400 }
      )
    }

    return NextResponse.json({ message: 'User updated successfully' })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    // Delete profile
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .delete()
      .eq('id', id)

    if (profileError) {
      console.error('Error deleting profile:', error)
      return NextResponse.json(
        { error: 'Failed to delete user profile' },
        { status: 400 }
      )
    }

    // Try to delete auth user as well
    try {
      await supabaseAdmin.auth.admin.deleteUser(id)
    } catch (authErr) {
      console.log('Could not delete auth user:', authErr)
      // Continue even if auth deletion fails
    }

    return NextResponse.json({ message: 'User deleted successfully' })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
