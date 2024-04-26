import { sanityClient, urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getBlogData(slug) {
  const query = `
  * [_type == "blog" && slug.current == '${slug}' ] {
  "currentSlug": slug.current,
    title,
    content,
    titleImage,
    _createdAt
}[0]`;

  const data = await sanityClient.fetch(query, { slug });
  return data;
}

const BlogArticle = async ({ params }) => {
  const blogArticle = await getBlogData(params.slug);

  return (
    <section className="min-h-screen">
      <div className="mx-auto my-4 flex flex-col items-center w-[700px]  ">
        <h1>
          <span className="block text-center h4 text-primary font-semibold tracking-wide uppercase">
            Austin Farr - Blog
          </span>
          <span className="block mt-4 text-6xl font-bold text-center tracking-tight">
            {" "}
            {blogArticle.title}
          </span>
          <span className="block text-muted-foreground text-center text-sm mt-4 ">
            Written {format(new Date(blogArticle._createdAt), "MMMM dd, yyyy")}
          </span>
        </h1>
        <Image
          src={urlFor(blogArticle.titleImage).url()}
          alt={blogArticle.title}
          width={900}
          height={800}
          className="rounded-lg mt-8 border max-h-[400px] max-w-[700px] object-cover"
          priority
        />
        <div className="my-16 w-full prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary ">
          <PortableText
            className="w-full m-0 p-0"
            value={blogArticle.content}
          />
        </div>
        <div className="border-b w-full border-border mb-4 dark:border-white/20"></div>
        <p className="text-muted-foreground text-sm font-light mb-2">
          Written {format(new Date(blogArticle._createdAt), "MMMM dd, yyyy")}
        </p>
      </div>
    </section>
  );
};

export default BlogArticle;
