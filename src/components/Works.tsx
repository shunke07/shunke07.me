/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { $boxShadows } from "common/theme";
import OpenIcon from "../../public/assets/svg/open-in-new.svg";

const styles = css`
  list-style: none;

  > section {
    position: relative;
    width: 100%;
    height: 216px;
    margin-bottom: 24px;
    border-radius: 4px;
    box-shadow: ${$boxShadows["1dp"]};
    transition: all 0.1s;

    @media screen and (max-width: 375px) {
      height: 300px;
    }

    @media screen and (min-width: 376px) and (max-width: 480px) {
      height: 240px;
    }

    @media (prefers-color-scheme: dark) {
      background-color: #373737;
    }

    :hover {
      box-shadow: ${$boxShadows["4dp"]};
    }
    > a {
      width: 100%;
      height: 100%;
      padding: 12px 16px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      color: var(--main-text);
      text-decoration: none;

      .title {
        display: flex;
        align-items: center;
        margin: 0 0 12px -32px;
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        color: var(--secondary);
        position: relative;

        > svg {
          margin-right: 8px;
          color: var(--secondary-gray);
        }
      }
      .tools {
        position: absolute;
        width: 100%;
        text-align: center;
        font-size: 15px;
        padding: 0 16px;
        bottom: 12px;
      }
    }
  }
`;

const works = [
  {
    title: "ShareTune",
    url: "https://github.com/shunke07/share-tune",
    description:
      "ShareTuneは音楽の最新リリース情報を手に入れ、ブックマークを作成したり、コメントを投稿することができるWebアプリです。",
    tools: "TypeScript, Nuxt.js, Firebase, SCSS, Spotify API",
  },
  {
    title: "shunke07.com",
    url: "https://github.com/shunke07/shunke07.com",
    description:
      "本サイト。Headless CMS と Next.js、Vercel を利用した静的ブログサイトです。デバイスのテーマに応じたカラーを表示（ダークモード対応）しています。",
    tools: "TypeScript, Next.js, Emotion (CSS in JS), microCMS (Headless CMS)",
  },
];

export const Works: React.FC = () => {
  return (
    <ul>
      {works &&
        works.map((work, index) => (
          <li css={styles} key={index}>
            <section>
              <a href={work.url} target="_blank" rel="noopener noreferrer">
                <h1 className="title">
                  <OpenIcon title="新規タブで開く" />
                  {work.title}
                </h1>
                <p>{work.description}</p>
                <p className="tools">{work.tools}</p>
              </a>
            </section>
          </li>
        ))}
    </ul>
  );
};
