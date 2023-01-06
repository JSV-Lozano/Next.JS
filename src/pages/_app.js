import { ProviderAuth } from '@hooks/useAuth';
import MainLayaout from '@layout/MainLayaout';
import '@styles/tailwind.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayaout>
          <Component {...pageProps} />
        </MainLayaout>
      </ProviderAuth>
    </>
  );
}
