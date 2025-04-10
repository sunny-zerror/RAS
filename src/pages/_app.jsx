import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import LenisScroll from "@/components/LenisScroll";
// import Header from "@/components/common/Header";

export default function App({ Component, pageProps }) {
  return (
    <LenisScroll>
      {/* <Header /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LenisScroll>
  );
}
