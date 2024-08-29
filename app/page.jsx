import { Suspense } from "react";
import News from "./components/News";
import Loading from "./loading";
const Home = async () => {
  const res = await fetch(
    "https://api.thenewsapi.com/v1/news/top?api_token=5BRLLwB0MnFhmhWNVp8Wm9RzUR8vUYCD5OREYUon&locale=us&limit=3&page=1"
  );
  const news = await res.json();

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex m-auto md:w-[80vw] justify-center md:justify-between p-4 flex-wrap mt-10">
        {news.data.map((d) => (
          <News
            key={d.uuid}
            uuid={d.uuid}
            title={d.title}
            description={d.description}
            snippet={d.snippet}
            url={d.url}
            image_url={d.image_url}
            source={d.source}
            published_at={d.published_at}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default Home;
