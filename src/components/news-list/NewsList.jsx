import React, { useEffect, useState } from "react";
import { getNews } from "../../api";
import { News } from "../news/News";
import '../styles.scss';

export function NewsList() {
  // TODO sækja yfirlit fréttaflokka

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorEncountered, setErrorEncountered] = useState(false);

  useEffect(async () => {
    setLoading(true);
    try {
      const news = await getNews();
      setData(news);
      setErrorEncountered(false);
    } catch (e) {
      console.error(e);
      setErrorEncountered(true);
    }
    setLoading(false);
  }, []);

  if (errorEncountered) return <div>Villa kom upp, gat ekki sótt fréttir.</div>;

  return (
    <div className="row">
      {loading && "Sækir flokka"}
      {data &&
        data.map((flokkur) => (
          <News key={flokkur.id} id={flokkur.id} title={flokkur.title} />
        ))}
    </div>
  );
}
