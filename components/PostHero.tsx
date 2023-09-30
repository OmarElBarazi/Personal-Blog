import DateFormatter from "./DateFormatter";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "../lib/api";

type Items = {
  [key: string]: string;
};

export default function PostHero() {
  const heroPost = getPostBySlug("hero-post", [
    "title",
    "excerpt",
    "slug",
    "date",
    "coverImage",
  ]);

  return (
    <Link href={`/posts/${heroPost.slug}`}>
      <div className="mx-auto group flex flex-col items-center">
        <Image
          alt={`cover image for ${heroPost.title}`}
          src={heroPost.coverImage}
          width={850}
          height={400}
          // className="h-fit w-fit"
        />

        <div className="mt-4 flex flex-col">
          <div className="mb-2">
            <p className="font-semibold text-xl group-hover:underline">
              {heroPost.title}
            </p>
            <DateFormatter dateString={heroPost.date} />
          </div>
          <p>{heroPost.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
