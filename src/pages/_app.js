import Layout from "@/components/layout";
import CartContextProvider from "@/contexts/cartContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <CartContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartContextProvider>
    
}
