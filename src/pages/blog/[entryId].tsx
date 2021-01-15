/** @jsxRuntime classic */
/** @jsx jsx */
import { Fragment } from "react";
import { css, jsx } from "@emotion/react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { TableOfContents, TOC } from "components/TableOfContents";
import { getContents, getEntry } from "repositories/cms";
import { Contents } from "types/cms";
import { dayjs } from "utils/dayjs";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/a11y-dark.css";

type Props = {
  entry: Contents;
  entryId: string;
  toc: TOC[];
};

type Params = {
  entryId: string;
};

const styles = css`
  margin: 56px 0;

  .thumbnail {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
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
      background-color: var(--primary);
      border-radius: 99rem;
    }
  }
  .published-at {
    color: var(--primary-grey);
    font-size: 14px;
    margin: 16px 0 40px;
    width: 100%;
    text-align: left;
  }
  a {
    color: var(--primary-text);
  }
  .text {
    h2 {
      margin-bottom: 16px;

      &:not(:first-of-type) {
        margin-top: 56px;
      }
    }
    h3 {
      margin: 32px 0 12px;
    }
    h4 {
      margin: 32px 0 12px;
    }
    strong {
      display: inline-block;
      margin-bottom: 12px;
    }
    pre {
      margin-top: 12px;
    }
    ul {
      margin-top: 16px;
      padding-left: 20px;
    }
    li {
      margin-bottom: 8px;
    }
    code {
      font-size: 15px;
    }
    img {
      width: 100%;
      height: 100%;
    }
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

  const $ = cheerio.load(entry.text);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  $("h1, h2, h3").each((_, elm) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    $(elm).attr("id", () => (elm.children[0] as any).data ?? "");
  });

  $("img").each((_, elm) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentSrc = $(elm).attr("src");
    $(elm).attr("src", () => currentSrc + "?w=680");
    $(elm).attr("width", () => "680");
    $(elm).attr("height", () => "340");
    $(elm).attr("loading", () => "lazy");
    $(elm).attr("alt", () => "画像");
  });

  const headings = $("h1, h2, h3").toArray();
  const toc = headings.map((data) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    text: (data.children[0] as any).data ?? "",
    id: data.attribs.id,
    name: data.name,
  }));

  return {
    props: {
      entry: { ...entry, text: $.html() },
      entryId,
      toc,
    },
  };
};

const Article: NextPage<Props> = ({ entry, entryId, toc }: Props) => {
  return (
    <Fragment>
      <Head>
        <title>{entry.title} | shunke07.com</title>
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:url"
          content={`https://shunke07.com/blog/${entryId}`}
          key="twitter:url"
        />
        <meta name="twitter:title" content={entry.title} key="twitter:title" />
        <meta
          name="twitter:description"
          content={entry.title}
          key="twitter:description"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="shunke07.com" />
        {!!entry.thumbnail && (
          <meta
            name="twitter:image"
            content={entry.thumbnail.url}
            key="twitter:image"
          />
        )}
        <meta
          property="og:url"
          content={`https://shunke07.com/blog/${entryId}`}
          key="og:url"
        />
        <meta property="og:title" content={entry.title} key="og:title" />
        <meta
          property="og:description"
          content={entry.title}
          key="og:description"
        />
        {!!entry.thumbnail && (
          <meta
            property="og:image"
            content={entry.thumbnail.url}
            key="og:image"
          />
        )}
      </Head>
      <article css={styles}>
        {entry && (
          <Fragment>
            <h1 className="title">{entry.title}</h1>
            <p className="published-at">
              <time>{dayjs(entry.publishedAt).format("YYYY.MM.DD")}</time>
            </p>
            {!!entry.thumbnail && (
              <Image
                className="thumbnail"
                src={entry.thumbnail.url}
                alt="サムネイル"
                width={680}
                height={340}
              />
            )}
            {!!toc && !!toc.length && <TableOfContents toc={toc} />}
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
