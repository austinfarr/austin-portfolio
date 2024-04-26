import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { sanityClient, urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

async function getBlogData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
        title,
          smallDescription,
          "currentSlug": slug.current,
          titleImage,
          _createdAt
      }`;

  const data = await sanityClient.fetch(query);

  return data;
}

const BlogPage = async () => {
  const blogData = await getBlogData();
  console.log(blogData);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
          Blog page
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 md:mx-10">
          {!blogData && <h3 className="h3">Blogs coming soon!</h3>}
          {blogData &&
            blogData.map((blog, index) => {
              return (
                <Card key={index} className="mb-8 dark:border-white/30">
                  <Image
                    src={urlFor(blog.titleImage).url()}
                    alt={blog.title}
                    width={600}
                    height={500}
                    className="rounded-t-3xl h-[300px] object-cover"
                  />

                  <div className="pt-8 pl-8 mb-0 pb-0">
                    <h2 className="h4 line-clamp-2 mb-0">{blog.title}</h2>
                    <p className="text-muted-foreground text-sm font-light mb-2">
                      Written{" "}
                      {format(new Date(blog._createdAt), "MMMM dd, yyyy")}
                    </p>
                  </div>

                  <CardContent className="mt-0">
                    <div className="border-b border-border mb-4 dark:border-white/20"></div>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                      {blog.smallDescription}
                    </p>
                    <div className="flex justify-end">
                      <Button
                        asChild
                        className="sm:w-[200px] w-full mt-7 rounded-full"
                      >
                        <Link href={`/blog/${blog.currentSlug}`}>
                          Read more...
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
