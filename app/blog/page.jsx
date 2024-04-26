import BlogCard from "@/components/BlogCard";
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
          Blog
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 md:mx-10">
          {blogData &&
            blogData.map((blog, index) => {
              return <BlogCard blog={blog} key={index} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
