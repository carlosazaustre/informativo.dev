import { ApolloProvider } from "@apollo/client";
import client from "../services/client";
import ThemingProvider from "../components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemingProvider>
        <Component {...pageProps} />
      </ThemingProvider>
    </ApolloProvider>
  );
}

export default MyApp;
