/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { NextPage } from "next";
import Head from "next/head";

const styles = css`
  section {
    margin: 56px 0;

    > h1 {
      color: #ff5722;
      margin-bottom: 16px;
      padding-bottom: 4px;
      border-bottom: 2px solid #ff5722;
      letter-spacing: 0.03em;
    }
  }

  .profile {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 16px 0 -32px;

    .thumbnail {
      object-fit: cover;
      width: 80px;
      height: 80px;
      margin-bottom: 16px;
    }
  }

  .link-buttons {
    a {
      display: inline-block;
      box-sizing: content-box;
      padding: 8px;
      width: 32px;
      height: 32px;
      border-radius: 50%;

      :hover {
        opacity: 0.6;
        transition-duration: 0.25s;
      }

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;

        &.site {
          background-color: #ff7043;
          padding: 2px;
        }
      }
    }
  }

  .biography {
    > .skills {
      font-weight: bold;
      margin: 12px 0 4px;
    }
    > ul {
      padding-left: 20px;
    }
  }

  .mail {
    display: flex;
    align-items: center;

    > img {
      margin-right: 4px;
    }
  }
`;

const Home: NextPage = () => {
  return (
    <div css={styles}>
      <Head>
        <title>shunke07.com</title>
      </Head>

      <div className="profile">
        <picture>
          <source srcSet="/assets/images/icon.webp" type="image/webp" />
          <img
            className="thumbnail"
            src="/assets/images/icon.png"
            alt="プロフィール画像"
          />
        </picture>
        <div className="link-buttons">
          <a
            href="https://github.com/shunke07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/svg/github-logo.svg" alt="GitHubアイコン" />
          </a>
          <a
            href="https://twitter.com/shunke07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/svg/twitter-logo.svg" alt="Twitterアイコン" />
          </a>
          <a
            href="https://theunify.jp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/svg/group.svg"
              alt="チームサイトアイコン"
              className="site"
            />
          </a>
        </div>
      </div>

      <section className="biography">
        <h1>About</h1>
        <p>Software Developer / Web Front-End Developer in Tokyo</p>
        <p className="skills">Skills:</p>
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
        <p className="mail">
          <img src="assets/svg/mail.svg" alt="メールアイコン" />
          contact[At]shunke07.com
        </p>
      </section>
    </div>
  );
};

export default Home;
