import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => {
      return (
        <div  className="w-full flex justify-center my-5">
          <Image
            src={urlFor(value).url()}
            alt="Blog Post Image"
            width={700}
            height={500}
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-lg">{children}</ol>,
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-4xl mb-5 underline">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-md mb-3">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <Link href={value.href} rel={rel} className="underline decoration-orange-400 hover:decoration-black transition-colors duration-200">
          {children}
        </Link>
      );
    },
  },
};
