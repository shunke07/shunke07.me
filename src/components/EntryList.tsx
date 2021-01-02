/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import Link from "next/link";
import { Contents } from "types/cms";
import { dayjs } from "utils/dayjs";
//
import { $colors } from "common/theme";

type Props = {
  contents: Contents[];
};

const styles = css`
  list-style: none;
  margin-bottom: 16px;

  .published-at {
    color: ${$colors.gray.light};
  }
  .blog-title {
    color: ${$colors.gray.main};
    font-size: 18px;

    :hover {
      opacity: 0.6;
    }
  }
`;

export const EntryList: React.FC<Props> = ({ contents }) => {
  return (
    <ul>
      {contents &&
        contents.map((content) => (
          <li css={styles} key={content.id}>
            <p className="published-at">
              {dayjs(content.publishedAt).add(9, "hour").format("YYYY.MM.DD")}
            </p>
            <Link href={`/blog/${content.id}`}>
              <a className="blog-title" href={`/blog/${content.id}`}>
                {content.title}
              </a>
            </Link>
          </li>
        ))}
    </ul>
  );
};
