import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import '../styles.scss';
const apiUrl = process.env.REACT_APP_API_URL;

export function News({ id, showAll = false }) {
  const [data, setData] = useState(null);
  const [errorEncountered, setErrorEncountered] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}${id}`);
      const items = await response.json();
      setData(items);
      setErrorEncountered(false);
    } catch (e) {
      console.error(e);
      setErrorEncountered(true);
    }
    setLoading(false);
  }, []);

  if (loading || !data) return <div>{loading && "Sækir flokk"}</div>;
  if (errorEncountered) return <div>Villa kom upp. Gat ekki sótt fréttir.</div>;

  const news = showAll ? data.items : data.items.slice(0, 5);

  return (
    <div className="row">
      <div className="column">
        <div className="cards">
          <h3>{data && data.title}</h3>
          {news.map((item) => (
            <div key={item.link}>
              <a href={item.link}>{item.title}</a>
            </div>
          ))}
          <div className="link">
            {!showAll && <Link to={`/${id}`}>Allar fréttir</Link>}
            {showAll && <Link to={'./'}>Til baka</Link>}
          </div>
        </div>
      </div>
    </div>
  );
}
