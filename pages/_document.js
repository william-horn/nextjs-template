import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <meta name="author" content="William J. Horn" />
        <meta name="keywords" content=""/>
        <meta name="description" content="Coming soon"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Rubik+Spray+Paint&family=Rubik+Vinyl&family=Shadows+Into+Light&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/logo.webp"/>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  );
};

export default Document;
