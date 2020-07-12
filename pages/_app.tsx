import { AppProps } from "next/app";
import Link from "next/link";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <header>
      <h1>
        <Link href="/">
          <a href="/">SHUNKE</a>
        </Link>
      </h1>
      <h2>Shunsuke Takami</h2>
    </header>
    <Component {...pageProps} />
  </>
);

export default MyApp;
