import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>RAS-A Goodrich Company</title>
        <link rel="shortcut icon" href="https://goodrich.co/wp-content/uploads/2022/03/Goodrich-Favicon.svg" type="image/x-icon" />
        <meta name="description" content="RAS, a Goodrich company, focuses on supply chain continuity through a well connected agency network, building on delivering solutions that are responsible, safe, and sustainable." />
        <meta name="keywords" content="RAS, Goodrich, supply chain, continuity, agency network, logistics, responsible solutions, safe solutions, sustainable solutions, supply chain management, logistics company" />
        <meta name="author" content="RAS Team" />
        <meta property="og:title" content="RAS, a Goodrich company, focuses on supply chain continuity through a well connected agency network, building on delivering solutions that are responsible, safe, and sustainable." />
        <meta property="og:description" content="RAS, a Goodrich company, focuses on supply chain continuity through a well connected agency network, building on delivering solutions that are responsible, safe, and sustainable." />
        <meta property="og:image" content="/images/twitter_image.png" />
        <meta property="og:url" content="https://ras-seven.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RAS, a Goodrich company, focuses on supply chain continuity through a well connected agency network, building on delivering solutions that are responsible, safe, and sustainable." />
        <meta name="twitter:description" content="RAS, a Goodrich company, focuses on supply chain continuity through a well connected agency network, building on delivering solutions that are responsible, safe, and sustainable." />
        <meta name="twitter:image" content="/images/twitter_image.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
