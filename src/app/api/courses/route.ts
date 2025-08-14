import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    // Simple fetch from courses table
    const { data: courses, error } = await supabaseAdmin
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching courses:', error)
      return NextResponse.json(
        { error: 'Failed to fetch courses', details: error.message },
        { status: 500 }
      )
    }

    // Transform data to match frontend expectations
    const transformedCourses = courses?.map(course => ({
      id: course.id,
      title: course.title || 'Untitled Course',
      description: course.description || 'No description available',
      level: course.level || 'Beginner',
      duration: course.duration || '8 weeks',
      isFree: course.is_free || false,
      imageUrl: course.image_url || null,
      instructorId: course.instructor_id,
      createdAt: course.created_at,
      updatedAt: course.updated_at
    })) || []

    return NextResponse.json({ courses: transformedCourses })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, level, duration, is_free, instructor_id } = body

    const { data: course, error } = await supabaseAdmin
      .from('courses')
      .insert({
        title,
        description,
        level,
        duration,
        is_free,
        instructor_id
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating course:', error)
      return NextResponse.json(
        { error: 'Failed to create course', details: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json({ 
      message: 'Course created successfully',
      course
    })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
