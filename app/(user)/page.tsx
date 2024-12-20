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
  const posts = await client.fetch(query)
 
  
  return (
    <div>
      <BlogContent posts={posts}/>
    </div>
  )
}

export default page
