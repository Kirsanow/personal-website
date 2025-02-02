'use server'

import config from '@/config'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

async function signUpNewUser(formData: FormData) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signUp({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      emailRedirectTo: `${config.domainName}/confirm`,
    },
  })
  if (error) {
    console.error(error)
    return { error: error.message }
  }
  const userData = await checkUserData()
  if (userData) {
    revalidatePath('/account', 'layout')
    const checkout = formData.get('checkout') as string
    if (checkout) {
      redirect('/account?checkout=true')
    } else {
      redirect('/account')
    }
  }
}
async function signInWithEmail(formData: FormData) {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })
  if (error) {
    console.error(error)
    return { error: error.message }
  }
  const userData = await checkUserData()
  if (userData) {
    revalidatePath('/account', 'layout')
    const checkout = formData.get('checkout') as string
    if (checkout) {
      redirect('/account?checkout=true')
    } else {
      redirect('/account')
    }
  }
}

async function checkUserData() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error) {
    console.error(error)
    return { error: error.message }
  }
  const { data: userData } = await supabase
    .from('user_data')
    .select('*')
    .eq('id', data.user?.id)
    .single()
  if (userData) {
    return userData
  }
  if (!userData) {
    const { data: newUserData, error: newUserError } = await supabase
      .from('user_data')
      .insert({
        id: data.user?.id,
        avatar_url: `https://api.dicebear.com/9.x/big-smile/svg?seed=${data.user?.id}`,
      })
      .select()
      .single()
    if (newUserError) {
      console.error(newUserError)
      return { error: newUserError.message }
    }
    return newUserData
  }
}

export { signUpNewUser, signInWithEmail, checkUserData }
