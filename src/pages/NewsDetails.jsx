import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homeLayouts/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [id, data]);

  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 py-10">
        {/* Main Content */}
        <section className="lg:col-span-9">
          <h2 className="font-bold text-xl mb-5 ml-35">News Details</h2>
          <NewsDetailsCard news={news} />
        </section>

        {/* Right Aside */}
        <aside className="lg:col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
