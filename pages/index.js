import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import PageLayout from "../components/PageLayout";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2022-11-21&to=2022-11-21&sortBy=popularity&apiKey=9af7757016d34b67bd2b6306cdb74b89"
    )
      .then((res) => res.json())
      .then((response) => {
        const { articles } = response;
        setArticles(articles);
      });
  }, []);

  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        {articles.length === 0 && <p>Loading...</p>}
        {articles.length > 0 &&
          articles.map((article, index) => {
            return (
              <article key={index}>
                {article.urlToImage && (
                  <Image
                    width={200}
                    height={200}
                    alt={article.title}
                    src={article.urlToImage}
                  ></Image>
                )}
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </article>
            );
          })}
      </div>
    </PageLayout>
  );
}
