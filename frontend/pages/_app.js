import Head from "next/head";
import "bulma/css/bulma.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Slashroot 5</title>
        <link rel="icon" href="/static/images/slashroot_logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/static/fontawesome/css/all.css" />
      </Head>
      <Component {...pageProps} />
      <style global jsx>{`
        body {
          font-family: monospace;
          letter-spacing: -0.5px;
        }
      `}</style>
    </>
  );
};

export default App;
