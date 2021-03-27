import React from "react";
import { useParams } from "react-router";
import { NotFound } from "./NotFound";
import { News } from "../components/news/News.jsx";

export function NewsPage() {
  const { id } = useParams();

  return <News id={id} showAll />;
}
