export type BlogStat = {
  article_code: string
  title:string
  description: string
  picture_path: string
  id: number
  tags: string[]
  path: string
  date_published: Date
  total_read: number
  like: number
}

export type Comments = {
  id: number
  article_id:number
  name: string | null
  content: string
  created_at: Date
  approved: boolean
}