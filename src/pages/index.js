import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout description="Yet another game designer blog">
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "65vh",
        }}
      >
        <div className="prose">
          <p>Bonjour, je suis Grégoire Siraudin, étudiant en 3ème année de l'Epita Paris.</p>
          <p>
            A l'école, j'étudie l'algorithmie, la programmation et les mathématiques. <strong>J'aime créer des choses originals 
            ayant pour but de créer des experiences engagantes</strong>. J'ai été forgé par mon entourages au travail d'equipe. 
            Et durant ma scolarité, j'ai eu la chance de pouvoir réaliser divers projects enseignants des sujets complexes.
          </p>
          <p>
            Ce site web retranscris plusieurs <Link to="/blog">blogs</Link> ayant des analyses sur le game design,
            la musique et plusieurs description de <Link to="/portefolio">projets</Link> auxquelles j'ai participé.
          </p>
          <p>Restez autant que vous voulez ☕</p>
        </div>
      </main>
    </Layout>
  );
}
