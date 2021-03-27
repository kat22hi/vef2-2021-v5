import React from "react";
import '../styles.scss';
// TODO sækja Sass

export function Layout({ children }) {
  // TODO setja upp layout fyrir vef
  return (
    <div className="layout">
      <h1>Rúv fréttir</h1>

      {children}

      <footer>
        <hr></hr>
        <span>Fréttir frá </span><a href="http://www.ruv.is">RÚV.</a>
      </footer>
    </div>
  );
}
