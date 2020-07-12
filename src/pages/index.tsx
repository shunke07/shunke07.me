import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>shunke07.com</title>
      </Head>

      <main>
        <div>
          <div>
            <a
              href="https://github.com/shunke07"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/shunke07"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://theunify.jp"
              target="_blank"
              rel="noopener noreferrer"
            >
              UNIFY
            </a>
          </div>
        </div>

        <section>
          <h1>About</h1>
          <p>Software Developer / Web Front-End Developer in Tokyo</p>
          <p>Skills:</p>
          <ul>
            <li>JavaScript (ES2015+)</li>
            <li>TypeScript</li>
            <li>Vue.js / Nuxt.js</li>
            <li>React / Next.js</li>
            <li>Firebase</li>
          </ul>
        </section>

        <section>
          <h1>Portfolio</h1>
        </section>

        <section>
          <h1>Blog</h1>
        </section>

        <section>
          <h1>Contact</h1>
          <p>contact[At]shunke07.com</p>
        </section>

        <footer>
          <small>Copyright © 2020 Shunke Takami</small>
        </footer>
      </main>
    </div>
  );
};

export default Home;
