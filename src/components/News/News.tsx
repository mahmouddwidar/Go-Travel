import useQueryBlogPosts from "../../hooks/useQueryBlogPosts";
import BlogPost from "./BlogPost";
import Error from "../Error";
import Loader from "../Loader";

export default function News() {
  const { blogPosts, error, isLoading } = useQueryBlogPosts();

  return (
    <section className="px-45.5 py-36">
      <div className="m-auto max-w-389">
        <h2 className="tracking-6 mb-34 text-center text-[3.25rem]/10.5 font-semibold">
          Latest news from us
        </h2>

        {/* Loading State */}
        {isLoading && !error && <Loader />}

        {/* Success State */}
        {!isLoading && !error && (
          <ul className="flex flex-col gap-y-34">
            {blogPosts?.map((post) => <BlogPost post={post} key={post.id} />)}
          </ul>
        )}

        {/* Error State */}
        {!isLoading && error && (
          <Error>
            It looks like something went wrong while loading our recent news.
          </Error>
        )}
      </div>
    </section>
  );
}
