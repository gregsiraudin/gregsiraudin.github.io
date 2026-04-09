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
          <p>Bonjour, je suis Grégoire Siraudin, étudiant en troisième année à EPITA Paris.</p>

          <p>
            À l’école, j’étudie l’algorithmie, la programmation et les mathématiques. 
            <strong>J’aime créer des expériences originales et engageantes.</strong> 
            J’ai été formé au travail d’équipe grâce aux différents projets menés au cours de ma scolarité, 
            durant lesquels j’ai eu l’opportunité d’aborder des problématiques complexes.
          </p>

          <p>
            Ce site web présente plusieurs <Link to="/blog">articles</Link> autour du game design et de la musique, 
            ainsi que des <Link to="/portfolio">projets</Link> auxquels j’ai participé.
          </p>

          <p>Restez autant que vous voulez ☕</p>
        </div>
      </main>
    </Layout>
  );
}
