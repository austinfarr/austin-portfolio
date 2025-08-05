import { sanityClient } from "@/lib/sanity";
import BlogCard from "./BlogCard";
import { Card, CardContent, CardHeader } from "./ui/card";
import { format } from "date-fns";
import Link from "next/link";

const getRecentBlogs = async () => {
  const query = `*[_type == 'blog'] | order(_createdAt desc) [0...3] {
        title,
          smallDescription,
          "currentSlug": slug.current,
          titleImage,
          _createdAt
      }`;

  const data = await sanityClient.fetch(query);

  return data;
};

const Blogs = async () => {
  const recentBlogs = await getRecentBlogs();

  return (
    <section>
      <div className="container mx-auto lg:px-32 px-0">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
          Blog
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 xl:px-24 px-8 mb-12 gap-x-8 gap-y-4 ">
          <div className="w-full px-0 mx-0 ">
            {recentBlogs &&
              recentBlogs.map((blog, index) => {
                return (
                  <Link key={index} href={`/blog/${blog.currentSlug}`}>
                    <Card className="w-full h-[240px] border-border border rounded-2xl dark:bg-secondary">
                      <div className="pt-8 px-8 mb-0 pb-0 ">
                        <h2 className="h4 line-clamp-2 mb-0">{blog.title}</h2>
                        <p className="text-muted-foreground text-sm font-light mb-2">
                          Written{" "}
                          {format(new Date(blog._createdAt), "MMMM dd, yyyy")}
                        </p>
                      </div>
                      <CardContent className="mt-0 pt-0">
                        <div className="border-b border-border mb-2 dark:border-white/20"></div>
                        <p className="line-clamp-3">{blog.smallDescription}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
          </div>
          <div>
            {recentBlogs.length < 2 && (
              <Card className="w-full h-[240px] border-border border rounded-2xl dark:bg-secondary">
                <div className="flex h-full items-center justify-center ">
                  <h2 className="h4 line-clamp-2 mb-0">More Coming Soon!</h2>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
