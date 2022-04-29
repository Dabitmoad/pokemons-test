import "../styles/globals.css";
import { PokemonProvider } from "../store/store";
import MainLayout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <PokemonProvider pokemon={pageProps.pokemon}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </PokemonProvider>
  );
}

export default MyApp;
