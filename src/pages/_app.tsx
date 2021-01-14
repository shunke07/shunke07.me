/** @jsxRuntime classic */
/** @jsx jsx */
import { Global, css, jsx } from "@emotion/react";
import { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";

const globalStyles = css`
  :root {
    --main-text: #424242; // gray 800
    --primary: #ef6c00; // orange 800
    --primary-text: #b53d00; // orange 800 dark
    --secondary: #00838f; // cyan 800
    --primary-gray: #616161; // gray 700
    --secondary-gray: #9e9e9e; // gray 500
    --main-bg: #fff;
    --box-shadow-1dp: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    --box-shadow-4dp: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --main-text: #fafafa; // gray 50
      --primary-text: #f57c00; // orange 700
      --secondary: #4fb3bf; // cyan 800 light
      --secondary-gray: #eeeeee; // gray 200
      --primary-gray: #9e9e9e; // gray 500
      --main-bg: #212121; // gray 900
    }
  }

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
  background: var(--main-bg);
  color: var(--main-text);

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
        color: var(--main-text);
      }
    }

    > h2 {
      font-size: 16px;
      font-weight: normal;
      color: var(--main-text);
    }
  }
`;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <div css={styles}>
    <Global styles={globalStyles} />
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <header>
      <h1>
        <Link href="/">
          <a href="/">SHUNKE</a>
        </Link>
      </h1>
      <h2>Shunke Takami</h2>
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
