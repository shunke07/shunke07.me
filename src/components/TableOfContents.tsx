/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export type TOC = {
  text: string;
  id: string;
  name: string;
};

const styles = css`
  margin-bottom: 40px;
  border-radius: 8px;
  padding: 16px 24px;
  background-color: var(--card-bg);

  h1 {
    margin-bottom: 12px;
  }
  > ul {
    margin-left: 20px;

    > li {
      margin-bottom: 8px;

      > a {
        color: var(--main-text);
      }

      &.toc-h3 {
        margin-left: 24px;
        list-style: circle;
      }
    }
  }
`;

export const TableOfContents: React.FC<{ toc: TOC[] }> = ({ toc }) => (
  <section css={styles}>
    <h1>目次</h1>
    <ul>
      {toc.map(({ text, id, name }) => (
        <li key={id} className={`toc-${name}`}>
          <a href={`#${id}`}>{text}</a>
        </li>
      ))}
    </ul>
  </section>
);
