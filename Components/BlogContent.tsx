import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  return (
    <div>
      <hr className="mb-10" />
      {/* grid layout */}
      <div className="grid grid-rows-1 gap-8 md:grid-cols-2 md:gap-10 px-5 ">
        {posts.map((post) => {
          return (
            // overall page div
            <Link
              href={{
                pathname: `/post/${post.slug.current}`,
                query: { slug: post.slug.current },
              }}
              key={post._id}
            >
              <div className="group">
                {/* post div */}
                <div className="flex flex-col gap-4">
                  {/* image */}
                  <div className="w-full relative drop-shadow-xl hover:cursor-pointer group-hover:scale-105 transition-transform duration-200">
                    <div className="relative h-60 w-auto ">
                    <Image
                      src={urlFor(post?.mainImage).url()}
                      alt={post.author.name}
                      fill
                      style={{
                        objectFit: 'cover'
                      }}
                    />
                    </div>
                   
                    {/* image description */}
                    <div className="w-full bg-black bg-opacity-20 backdrop-blur-xl absolute bottom-0 flex justify-between p-3 items-center text-white">
                      {/* title and date */}
                      <div>
                        <p className="font-semibold">{post.title}</p>
                        <p>
                          {new Date(post._createdAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </div>
                      <div>
                        {post.categories.map((category) => {
                          return (
                            <p
                              key={category._id}
                              className="bg-orange-400 text-black rounded-full py-1 px-5 font-semibold"
                            >
                              {category.title}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* title and description */}
                    <div>
                      <p className="font-semibold underline">{post.title}</p>
                      {post.categories.map((category) => {
                        return (
                          <p
                            key={category._id}
                            className="text-sm line-clamp-2"
                          >
                            {category.description}
                          </p>
                        );
                      })}
                    </div>

                    {/* read post */}
                    <p className="flex gap-2 items-center font-semibold hover:cursor-pointer group-hover:underline">
                      Read Post
                      <span className="text-xl">
                        <GoArrowUpRight />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogContent;
