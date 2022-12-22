import '../styles/globals.css';

import AppProvider from '../providers/AppProvider';
import LayoutController from '../components/layouts';
import Container from '../components/Container';

import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { findPageByUrl } from './page.config';

if (typeof window !== 'undefined') {
  const allEl = window.document.querySelector("body");
  window.addEventListener("keydown", (event) => {
    if (event.keyCode === 87) {
      if (allEl.classList.contains("wireframe")) {
        allEl.classList.remove("wireframe");
      } else {
        allEl.classList.add("wireframe");
      }
    }
  });
}

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
      <Container className="bg-gray-600">
        <LayoutController>
          <Component {...pageProps} />
        </LayoutController>
      </Container>
    </AppProvider>
  )
}
