import React from 'react'
import BlogContent from '@/Components/BlogContent'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'

const query = groq`*[_type == 'post'] {
  ...,
  author->,
    categories[]->,
}`

const page = async () => {
  const post = await client.fetch(query)
  console.log(post)
  
  return (
    <div>
      <BlogContent />
    </div>
  )
}

export default page
