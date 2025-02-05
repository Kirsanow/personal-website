'use server'

import { createClient } from '@/lib/supabase/server'

export async function hasCourseAccess(userId: string, courseSlug: string) {
  const supabase = await createClient()
  const { data: userData, error } = await supabase
    .from('user_data')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) {
    console.error(error)
    return false
  }

  return userData?.courses_access.includes(courseSlug)
}

export async function getUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

export async function saveFeedback(
  feedback: string,
  userId: string,
  email: string,
) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('feedback')
    .insert({ feedback, user_id: userId, email })
  if (error) {
    console.error(error)
  }
  return data
}
