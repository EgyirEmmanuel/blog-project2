import { Post } from '@/types'

interface Props {
  post: Post[]
}



const BlogContent = ( { post }: Props ) => {
  console.log(post)
 
  return (
    <div>
      hello from BlogList component
    </div>
  )
}

export default BlogContent
