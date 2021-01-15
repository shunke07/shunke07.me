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
  background-color: #f5f5f5;

  @media (prefers-color-scheme: dark) {
    background-color: #373737;
  }

  h1 {
    margin-bottom: 12px;
  }
  > ul {
    margin-left: 20px;

    > li {
      margin-bottom: 8px;

      &.toc-h3 {
        margin-left: 24px;

        + .toc-h3 {
          margin-top: -4px;
        }
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
