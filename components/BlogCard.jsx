import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { format } from "date-fns";
import { urlFor } from "@/lib/sanity";

const BlogCard = ({ blog }) => {
  return (
    <Card className="mb-8  ">
      <Image
        src={urlFor(blog.titleImage).url()}
        alt={blog.title}
        width={600}
        height={500}
        className="rounded-t-3xl h-[300px] object-cover dark:border border-border dark:border-white/30 dark:border-b-0"
      />
      <div className="w-full rounded-b-3xl  dark:border-white/30 dark:border dark:border-t-0 ">
        <div className="pt-8 pl-8 mb-0 pb-0 ">
          <h2 className="h4 line-clamp-2 mb-0">{blog.title}</h2>
          <p className="text-muted-foreground text-sm font-light mb-2">
            Written {format(new Date(blog._createdAt), "MMMM dd, yyyy")}
          </p>
        </div>

        <CardContent className="mt-0">
          <div className="border-b border-border mb-4 dark:border-white/20"></div>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
            {blog.smallDescription}
          </p>
          <div className="flex justify-end">
            <Button asChild className="sm:w-[200px] w-full mt-7 rounded-full">
              <Link href={`/blog/${blog.currentSlug}`}>Read more...</Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default BlogCard;
