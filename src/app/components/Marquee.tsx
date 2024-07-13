// src/components/Marquee.tsx
"use client"
// components/NewsMarquee.tsx
import React, { useEffect, useState } from 'react';

interface NewsItem {
  title: string;
  url: string;
}

const NewsMarquee: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=hacking&apiKey=7071f43fc95245aa9de4ca578d64874a'
        );
        const data = await response.json();
        if (data.articles) {
          setNews(data.articles.slice(0, 10).map((article: any) => ({
            title: article.title,
            url: article.url,
          })));
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-gray-800 py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {news.map((item, index) => (
          
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-4 hover:text-green-500"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsMarquee;