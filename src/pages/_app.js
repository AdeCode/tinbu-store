import Layout from "@/components/layout";
import CartContextProvider from "@/contexts/cartContext";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return <CartContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer />
        </CartContextProvider>
    
}
