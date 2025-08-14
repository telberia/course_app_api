import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET() {
  try {
    // Test if courses table exists and is accessible
    const { data, error } = await supabaseAdmin
      .from('courses')
      .select('*')
      .limit(1)

    if (error) {
      console.error('Courses table error:', error)
      return NextResponse.json({ 
        error: 'Courses table access failed',
        details: error.message,
        code: error.code,
        hint: error.code === '42P01' ? 'Table does not exist' : 'Other error'
      }, { status: 500 })
    }

    return NextResponse.json({ 
      message: 'Courses table accessible!',
      data: data,
      count: data?.length || 0,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json({ 
      error: 'Unexpected error occurred',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
