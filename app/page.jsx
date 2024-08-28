import Image from "next/image";
import News from "./components/News";
import Link from "next/link";
const Home = async () => {
  const res = await fetch(
    "https://api.thenewsapi.com/v1/news/top?api_token=5BRLLwB0MnFhmhWNVp8Wm9RzUR8vUYCD5OREYUon&locale=us&limit=3&page=1"
  );
  const news = await res.json();

  return (
    <>
      <div className="flex m-auto md:w-[80vw] justify-center md:justify-between  flex-wrap mt-10">
        {news.data.map((d) => {
          return (
            <News
              key={d.uuid}
              uuid
              title={d.title}
              description={d.description}
              snippet={d.snippet}
              url={d.url}
              image_url={d.image_url}
              source={d.source}
              published_at={d.published_at}
            />
          );
        })}
      </div>
      <div className="flex justify-between md:w-[80vw] md:m-auto mt-10 m-4 text-sm md:text-lg">
        <div></div>
        <Link href={"/page/2"}>
          <div className="btn bg-black text-white p-4    w-fit rounded    mt-4">
            Next Page
          </div>
        </Link>
      </div>
    </>
  );
};
export default Home;
