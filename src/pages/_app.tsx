/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import { AppProps } from "next/app";
import Link from "next/link";

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
    color: #424242;
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
