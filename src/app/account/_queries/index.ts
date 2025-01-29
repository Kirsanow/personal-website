import { createClient } from '@/lib/supabase/server'

export async function getUserData() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data, error } = await supabase
    .from('user_data')
    .select('*')
    .eq('id', user?.id)
    .single()
  if (error) {
    return []
  }
  return data
}
