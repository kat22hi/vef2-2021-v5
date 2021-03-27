import React from "react";
import { useParams } from "react-router";
import { NotFound } from "./NotFound";
import { News } from "../components/news/News.jsx";

const apiUrl = process.env.REACT_APP_API_URL;

export function NewsPage() {
  const { id } = useParams();

  return <News id={id} showAll />;
}
