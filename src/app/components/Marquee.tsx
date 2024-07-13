"use client"
// src/components/Marquee.tsx
import React, { useEffect, useState } from 'react';

interface Article {
  title: string;
}

const Marquee: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const apiKey = '70cf179a0da22157dceeecde9407ae63'; // Reemplaza con tu API Key
  const url = `https://gnews.io/api/v4/search?q=hacking&token=${apiKey}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        if (!data.articles) {
          throw new Error('No se encontraron artículos');
        }
        setArticles(data.articles);
        localStorage.setItem('articles', JSON.stringify(data.articles));
        localStorage.setItem('lastFetch', new Date().toISOString());
        setLoading(false);
      } catch (error: any) {
        console.error('Error al obtener noticias:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    const storedArticles = localStorage.getItem('articles');
    const lastFetch = localStorage.getItem('lastFetch');
    const now = new Date();

    if (storedArticles && lastFetch) {
      const lastFetchDate = new Date(lastFetch);
      const oneDay = 24 * 60 * 60 * 1000;
      if (now.getTime() - lastFetchDate.getTime() < oneDay) {
        setArticles(JSON.parse(storedArticles));
        setLoading(false);
        return;
      }
    }

    fetchNews();
  }, [url]);

  return (
    <div className="overflow-hidden bg-green-500 text-black py-1">
      <div className="marquee">
        {loading ? (
          <span>Cargando noticias...</span>
        ) : error ? (
          <span>{error}</span>
        ) : (
          <>
            <div className="track">
              {articles.map((article, index) => (
                <span key={index} className="mx-4">
                  {article.title}
                </span>
              ))}
            </div>
            <div className="track">
              {articles.map((article, index) => (
                <span key={`repeat-${index}`} className="mx-4">
                  {article.title}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Marquee;
