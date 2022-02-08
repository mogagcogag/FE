import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { globalStyles } from '../styles/styles';

const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <Component {...pageProps} />
  </>
);

export default App;
