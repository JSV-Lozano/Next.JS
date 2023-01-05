import MainLayaout from '@layout/MainLayaout';
import '@styles/tailwind.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayaout>
        <Component {...pageProps} />
      </MainLayaout>
    </>
  );
}
