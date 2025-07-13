import { supabase } from '../lib/SupabaseClient'

export async function getDataForYou() {
  const { data } = await supabase.from('like_total').select()
  return await data
}


export async function getBlogByArticleCode(code: string) {
  const { data } = await supabase.from('like_total').select().eq('article_code', code).single()
  return await data
}

export async function getTechBlog() {
  const { data } = await supabase.from('like_total').select().contains('tags', ['Tech'])
  return await data
}

export async function incrementTotalReadById(id: number) {
  // Ambil current total_read
  const { data: currentRow, error: selectError } = await supabase
    .from('like_total')
    .select('total_read')
    .eq('id', id)
    .single()

  if (selectError || !currentRow) {
    throw selectError ?? new Error('Data not found')
  }

  const newTotal = currentRow.total_read + 1

  const { data, error } = await supabase
    .from('like_total')
    .update({ total_read: newTotal })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error

  return data
}

export async function incrementLikeByid(id: number) {
  // Ambil current total_read
  const { data: currentRow, error: selectError } = await supabase
    .from('like_total')
    .select('like')
    .eq('id', id)
    .single()

  if (selectError || !currentRow) {
    throw selectError ?? new Error('Data not found')
  }

  const newTotal = currentRow.like + 1

  const { data, error } = await supabase
    .from('like_total')
    .update({ like: newTotal })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error

  return data
}

export async function decrementLikeByid(id: number) {
  // Ambil current total_read
  const { data: currentRow, error: selectError } = await supabase
    .from('like_total')
    .select('like')
    .eq('id', id)
    .single()

  if (selectError || !currentRow) {
    throw selectError ?? new Error('Data not found')
  }

  const newTotal = currentRow.like - 1

  const { data, error } = await supabase
    .from('like_total')
    .update({ like: newTotal })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error

  return data
}
