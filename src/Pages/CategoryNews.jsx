import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCatagoryNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCatagoryNews(data);
      return;
    } else if (id == "1") {
      const filternews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCatagoryNews(filternews);
      
    }
    else{
        const filternews = data.filter(news=>news.category_id == id)
        setCatagoryNews(filternews)
    }
  }, [data, id]);
  return <div>
    <h2 className="font-semibold">Total <span className="text-secondary"> {categoryNews.length}</span> News found</h2>
    <div className="grid grid-cols-1 gap-4">
        {
        categoryNews.map(news=> <NewsCard key={news.id} news={news}></NewsCard>)
        }
    </div>
  </div>;
};

export default CategoryNews;
