/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import { AppProps } from "next/app";
import Link from "next/link";
//
import { $colors } from "common/theme";

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Helvetica Neue",
      Arial, Meiryo, sans-serif;
    letter-spacing: 0.02em;
    background-color: #fafafa;
    color: ${$colors.gray.main};
  }
  @font-face {
    font-family: "Montserrat-Bold";
    src: url("/fonts/Montserrat-Bold.ttf");
  }
`;

const styles = css`
  position: relative;
  max-width: 480px;
  overflow: hidden;
  min-height: 100vh;
  margin: 0 auto;
  padding: 32px 24px;
  background: #fff;

  > footer {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  > header {
    > h1 {
      font-family: "Montserrat-Bold", "Hiragino Sans",
        "Hiragino Kaku Gothic ProN", "Helvetica Neue", Arial, Meiryo, sans-serif;
      font-size: 40px;
      letter-spacing: 0.04em;

      a {
        text-decoration: none;
      }
    }

    > h2 {
      font-size: 16px;
      font-weight: normal;
    }
  }
`;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <div css={styles}>
    <Global styles={globalStyles} />
    <header>
      <h1>
        <Link href="/">
          <a href="/">SHUNKE</a>
        </Link>
      </h1>
      <h2>Shunsuke Takami</h2>
    </header>
    <main>
      <Component {...pageProps} />
    </main>
    <footer>
      <small>Copyright © 2020 Shunke Takami</small>
    </footer>
  </div>
);

export default MyApp;
