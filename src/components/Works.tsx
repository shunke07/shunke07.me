/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { $colors, $boxShadows } from "common/theme";

const styles = css`
  position: relative;
  width: 100%;
  height: 216px;
  margin-bottom: 24px;
  border-radius: 4px;
  box-shadow: ${$boxShadows["1dp"]};
  list-style: none;

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
    color: ${$colors.gray.main};
    text-decoration: none;

    .title {
      display: flex;
      align-items: center;
      margin: 0 0 12px -32px;
      font-size: 20px;
      font-weight: bold;
      text-decoration: none;
      color: ${$colors.secondary.main};
      position: relative;

      > img {
        margin-right: 8px;
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
`;

const works = [
  {
    title: "ShareTune",
    url: "https://share-tune.web.app",
    description:
      "ShareTuneは音楽の最新リリース情報を手に入れ、ブックマークを作成したり、コメントを投稿することができるWebアプリです。",
    tools: "TypeScript, Nuxt.js, Firebase, SCSS, Spotify API",
  },
  {
    title: "shunke07.com",
    url: "https://shunke07.com/",
    description:
      "本サイト。Headless CMS と Next.js、Vercel を利用した静的ブログサイトです。",
    tools: "TypeScript, Next.js, Emotion (CSS in JS), microCMS (Headless CMS)",
  },
];

export const Works: React.FC = () => {
  return (
    <ul>
      {works &&
        works.map((work, index) => (
          <li css={styles} key={index}>
            <a href={work.url} target="_blank" rel="noopener noreferrer">
              <p className="title">
                <img src="/assets/svg/open-in-new.svg" alt="新規タブで開く" />
                {work.title}
              </p>
              <p>{work.description}</p>
              <p className="tools">{work.tools}</p>
            </a>
          </li>
        ))}
    </ul>
  );
};
