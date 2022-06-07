import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Events For You</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="NextJs Events" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
