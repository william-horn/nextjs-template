import '../styles/globals.css';

import AppProvider from '../providers/AppProvider';

import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { findPageByUrl } from './pageData';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currentUrl = router.pathname;
  const currentPage = findPageByUrl(currentUrl);
  const lastPageRef = useRef(null);

  useEffect(() => {
    lastPageRef.current = currentPage;
  }, [currentUrl]);

  return (
    <AppProvider
    value={{
      currentPage,
      currentUrl,
      lastPage: lastPageRef.current
    }}>
      <Component {...pageProps} />
    </AppProvider>
  )
}
