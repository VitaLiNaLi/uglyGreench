import React from 'react';
import { Outlet } from 'react-router';
// import Loading from './Loading';
import Header from './Header';

export default function Layout(): JSX.Element {
  // const [showLoading, setShowLoading] = useState(true);

  // useEffect(() => {
  //   const handleLoad = (): void => {
  //     setShowLoading(false);
  //   };

  //   window.addEventListener('load', handleLoad);

  //   return () => {
  //     window.removeEventListener('load', handleLoad);
  //   };
  // }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
