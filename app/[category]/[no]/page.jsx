import Image from "next/image";
import News from "@/app/components/News";
import Link from "next/link";
import { Suspense } from "react";

const Home = async ({ params }) => {
  try {
    const res = await fetch(
      `https://api.thenewsapi.com/v1/news/top?api_token=5BRLLwB0MnFhmhWNVp8Wm9RzUR8vUYCD5OREYUon&locale=us&limit=3&categories=${params.category}&page=${params.no}`
    );

    if (!res.ok) {
      // Handle response errors
      console.error("Failed to fetch news:", res.statusText);
      return <div>Error loading news.</div>;
    }

    const news = await res.json();

    // Ensure `news.data` exists and is an array
    if (!news.data || !Array.isArray(news.data)) {
      console.error("Invalid news data:", news);
      return <div>No news available.</div>;
    }

    return (
      <>
        <Suspense fallback="loading">
          <div className="flex m-auto md:w-[80vw] justify-center md:justify-between flex-wrap mt-10">
            {news.data.map((d) => {
              return (
                <News
                  key={d.uuid}
                  title={d.title}
                  description={d.description}
                  snippet={d.snippet}
                  url={d.url}
                  image_url={d.image_url}
                  published_at={d.published_at}
                  source={d.source}
                />
              );
            })}
          </div>
          <div className="flex justify-between md:w-[70vw] md:m-auto mt-10 m-4 text-sm md:text-lg">
            {params.no > 1 ? (
              <Link href={`/${params.category}/${parseInt(params.no) - 1}`}>
                <div className="btn bg-black text-white p-4  w-fit rounded mt-4">
                  Previous Page
                </div>
              </Link>
            ) : (
              <div></div>
            )}
            <Link href={`/${params.category}/${parseInt(params.no) + 1}`}>
              <div className="btn bg-black text-white p-4  w-fit rounded mt-4">
                Next Page
              </div>
            </Link>
          </div>
        </Suspense>
      </>
    );
  } catch (error) {
    console.error("Error fetching news:", error);
    return <div>Error loading news.</div>;
  }
};

export default Home;
