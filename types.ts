
type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  publishedAt: string;
  slug: Slug;
  title: string;
}

interface Author extends Post {
    bio: Block[]
    image: Image
    name: string
    slug: Slug
}

interface Block {
    _key:string
_type:'block'
children: Span[]
markDefs: any[]
style:"normal" | 'h1' | 'h2' | 'h3' | 'h4' | 'bloackquote';
}

interface Span {
    _key:string
_type:'span'
marks:string
text: string
}

interface Image {
_type: 'image'
asset: Reference
}

interface Reference {
    _type: 'slug'
    current: string 

}

interface Category extends Base  {
    description: string
    slug: Slug
    title: string
}

interface Slug {
    _type: 'slug'
    current: string
}
   

