import { groq } from "next-sanity";
import { Post } from "@/types";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from  '@/Components/RichTextComponent'

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30

export async function generateStaticParams() {
  const query = groq`*[_type == 'post'] {
  slug
}`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => {
    return slug?.slug?.current;
  });

  return slugRoutes.map((slugRoute) => ({ slugRoute }));
}

const page = async ({ params: {slug} }: Props) => {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]  {
  ...,
  author->,
    categories[]->
}`

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-5">
      <section className="w-full bg-orange-400 text-white p-5 flex flex-col gap-3 mb-10">
        <div className="flex flex-col gap-6">
          {/* title, date, author name, author image */}
          <div className="flex flex-col gap-3 md:flex-row md:gap-3 justify-between">
            <div className="w-[70%] font-semibold flex flex-col gap-2">
              <p className="text-5xl">{post.title}</p>
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>

            <div className="w-[30%] flex gap-2 items-center ">
              <Image
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <p> {post.author.name}</p>
            </div>
          </div>

          {/* description */}
          <div className="w-[70%]">
            {post.categories.map((category) => {
              return <p key={category._id} className="line-clamp-1">{category.description}</p>;
            })}
          </div>
        </div>

        {/* category title */}
        <div className="flex justify-end w-full">
          {post.categories.map((category) => {
            return (
              <p key={category._id} className="bg-black px-5 font-semibold py-2 rounded-full">
                {category.title}
              </p>
            );
          })}
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponent} />
    </article>
  );
};

export default page;
