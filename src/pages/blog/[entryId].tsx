/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { getContents, getEntry } from "repositories/cms";
import { Contents } from "types/cms";
import { dayjs } from "utils/dayjs";
//
import { $colors } from "common/theme";

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
      background-color: ${$colors.primary.main};
      border-radius: 99rem;
    }
  }
  .published-at {
    color: ${$colors.gray.light};
    font-size: 14px;
    margin: 16px 0 40px;
    width: 100%;
    text-align: left;
  }
  a {
    color: ${$colors.primary.dark};
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
    <>
      <Head>
        <title>{entry.title} | shunke07.com</title>
      </Head>
      <article css={styles}>
        {entry && (
          <>
            <h1 className="title">{entry.title}</h1>
            <p className="published-at">
              <time>{dayjs(entry.publishedAt).format("YYYY.MM.DD")}</time>
            </p>
            <div dangerouslySetInnerHTML={{ __html: entry.text }} />
          </>
        )}
      </article>
    </>
  );
};

export default Article;