import Image from "next/image";
import News from "@/app/components/News";
import Link from "next/link";

const Home = async ({ params }) => {
  const res = await fetch(
    `https://api.thenewsapi.com/v1/news/top?api_token=RdYQd0w7y842dxup39KiqVqJSbysD0zExK307ba9&locale=us&limit=3&page=${params.no}`
  );
  const news = await res.json();

  return (
    <>
      <div className="flex m-auto w-fit gap-6 flex-wrap">
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
              published_at={d.published_at}
            />
          );
        })}
      </div>
      <Link href={`/page/${parseInt(params.no) + 1}`}>
        <div className="btn bg-black text-white p-4 text-lg  w-fit rounded ml-auto  mr-[15vw] mt-4">
          Next Page
        </div>
      </Link>
    </>
  );
};
export default Home;
