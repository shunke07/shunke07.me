import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta
            name="description"
            content="Shunke is Software Developer, Web Front-End Developer in Tokyo."
          />
          {/* Web App */}
          <meta name="application-name" content="shunke07.com" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="shunke07.com" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#ef6c00" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="mask-icon" href="/icons/mask-icon.svg" color="#ef6c00" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          {/* OGP */}
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:url"
            content="https://shunke07.com"
            key="twitter:url"
          />
          <meta
            name="twitter:title"
            content="shunke07.com"
            key="twitter:title"
          />
          <meta
            name="twitter:description"
            content="Shunke is Software Developer, Web Front-End Developer in Tokyo."
            key="twitter:description"
          />
          <meta
            name="twitter:image"
            content="/icons/icon-512x512.png"
            key="twitter:image"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="shunke07.com" key="og:title" />
          <meta
            property="og:description"
            content="Shunke is Software Developer, Web Front-End Developer in Tokyo."
            key="og:description"
          />
          <meta property="og:site_name" content="shunke07.com" />
          <meta property="og:url" content="https://shunke07.com" key="og:url" />
          <meta
            property="og:image"
            content="/icons/icon-512x512.png"
            key="og:image"
          />
          {/* Web-font */}
          <link
            rel="preload"
            href="/fonts/Montserrat-Bold.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
