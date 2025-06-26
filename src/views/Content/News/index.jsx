import moment from "moment";
import React, { useEffect, useState } from "react";

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataNews = async () => {
    fetch("https://berita-indo-api.vercel.app/v1/tempo-news")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNews(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDataNews();
  }, []);

  if (loading) return <p>Loading berita...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="flex flex-col gap-5">
        {news.map((item) => (
          <div
            key={item.title}
            className="rounded-[14px] overflow-hidden hover:shadow-[0_0_8px_4px_rgba(200,200,200,0.5)] flex cursor-pointer"
            onClick={() => {
              window.open(item.link, "blank");
            }}
          >
            {/* <img
              class="w-max-sm"
              src="https://www.dummyimg.in/placeholder"
              alt="Sunset in the mountains"
            /> */}
            <div class="flex flex-col gap-2 px-6 py-4">
              <span className="text-xs text-gray-500">TEMPO</span>
              <span class="font-bold text-xl">{item?.title}</span>
              <span class="text-gray-700 text-base">{item.content}</span>
              <span className="text-xs text-gray-500">{moment(item.isoDate).format("DD MMM YYYY")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
