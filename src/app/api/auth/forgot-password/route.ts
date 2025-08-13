import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email là bắt buộc' },
        { status: 400 }
      )
    }

    // Gửi email reset password qua Supabase
    const { error } = await supabaseAdmin.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/auth/reset-password`,
    })

    if (error) {
      console.error('Reset password error:', error)
      return NextResponse.json(
        { error: 'Không thể gửi email reset password' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email reset password đã được gửi' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { error: 'Có lỗi xảy ra' },
      { status: 500 }
    )
  }
}
