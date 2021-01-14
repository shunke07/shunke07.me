/** @jsxRuntime classic */
/** @jsx jsx */
import { Fragment } from "react";
import { css, jsx } from "@emotion/react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { getContents, getEntry } from "repositories/cms";
import { Contents } from "types/cms";
import { dayjs } from "utils/dayjs";

type Props = {
  entry: Contents;
};

type Params = {
  entryId: string;
};

const styles = css`
  margin: 56px 0;

  .title {
    position: relative;
    font-size: 28px;
    width: 100%;
    padding-left: 32px;

    ::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 6px;
      background-color: var(--primary-main);
      border-radius: 99rem;
    }
  }
  .published-at {
    color: var(--primary-gray);
    font-size: 14px;
    margin: 16px 0 40px;
    width: 100%;
    text-align: left;
  }
  a {
    font-weight: 600;
    color: var(--primary-text);
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const contents = await getContents();

  const paths = contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const entryId = (params as Params).entryId as string;
  const entry = await getEntry(entryId);

  return {
    props: { entry },
  };
};

const Article: NextPage<Props> = ({ entry }: Props) => {
  return (
    <Fragment>
      <Head>
        <title>{entry.title} | shunke07.com</title>
        <meta property="og:url" content={location.href} />
        <meta property="og:title" content={entry.title} />
        <meta property="og:description" content={entry.title} />
        <meta property="og:image" content={entry.thumbnail.url} />
      </Head>
      <article css={styles}>
        {entry && (
          <Fragment>
            <h1 className="title">{entry.title}</h1>
            <p className="published-at">
              <time>{dayjs(entry.publishedAt).format("YYYY.MM.DD")}</time>
            </p>
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: entry.text }}
            />
          </Fragment>
        )}
      </article>
    </Fragment>
  );
};

export default Article;
