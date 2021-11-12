import { ColorModeScript } from "@chakra-ui/react";
import GoogleFonts from "next-google-fonts";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";
import theme from "../styles/theme";

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" />
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });`,
            }}
          />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9599752460449934"
            crossorigin="anonymous"
          ></script>
          <link rel="icon" href="/edit-2.svg" />
          <link rel="icon" href="/edit-2.svg" />
          <link rel="apple-touch-icon" sizes="180x180" href="/edit-2.svg" />
          <link rel="mask-icon" href="/edit-2.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
