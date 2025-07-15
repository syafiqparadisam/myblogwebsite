import { supabase } from '../lib/SupabaseClient'

export async function getDataForYou() {
  const { data } = await supabase.from('articles').select()
  return await data
}
export async function getTotalArticle() {
  const { count } = await supabase.from('articles').select('*', { count: 'exact', head: true }) // head: true untuk ambil count saja, tanpa data

  return count
}

export async function getTotalLike() {
  const { data, error } = await supabase.from('articles').select('like', { count: 'exact' })

  if (error) {
    console.error(error)
    return null
  }
  const total = data.reduce((sum, item) => sum + (item.like || 0), 0)
  return total
}

export async function getTotalReader() {
  const { data, error } = await supabase.from('articles').select('total_read', { count: 'exact' })

  if (error) {
    console.error(error)
    return null
  }
  const total = data.reduce((sum, item) => sum + (item.total_read || 0), 0)
  return total
}

export async function getBlogByArticleCode(code: string) {
  const { data } = await supabase.from('articles').select().eq('article_code', code).single()
  return await data
}

export async function getTechBlog() {
  const { data } = await supabase.from('articles').select().contains('tags', ['Tech'])
  return await data
}

export async function incrementTotalReadById(id: number) {
  // Ambil current total_read
  const { data: currentRow, error: selectError } = await supabase
    .from('articles')
    .select('total_read')
    .eq('id', id)
    .single()

  if (selectError || !currentRow) {
    throw selectError ?? new Error('Data not found')
  }

  const newTotal = currentRow.total_read + 1

  const { data, error } = await supabase
    .from('articles')
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
    .from('articles')
    .select('like')
    .eq('id', id)
    .single()

  if (selectError || !currentRow) {
    throw selectError ?? new Error('Data not found')
  }

  const newTotal = currentRow.like + 1

  const { data, error } = await supabase
    .from('articles')
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
    .from('articles')
    .select('like')
    .eq('id', id)
    .single()

  if (selectError || !currentRow) {
    throw selectError ?? new Error('Data not found')
  }

  const newTotal = currentRow.like - 1

  const { data, error } = await supabase
    .from('articles')
    .update({ like: newTotal })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error

  return data
}
