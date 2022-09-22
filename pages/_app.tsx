import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import type { AppProps } from 'next/app';

import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

import { ParsedUrlQuery } from 'querystring';

import { COLORS } from '@terraimaginaria/styles/colors';
import { fontFaces } from '@terraimaginaria/styles/fonts';
import { isMobile } from '@terraimaginaria/utils/isMobile';
import { viewport } from '@terraimaginaria/styles/helpers';

const globalStyle = css`
  ${fontFaces}

  ${isMobile() &&
  viewport(
    'mobile_portrait',
    css`
      html {
      }

      body {
      }

      #__next {
      }
    `
  )};
`;

const queryToString = (query: ParsedUrlQuery) => {
  const entries = [];
  for (let key in query) {
    if (!query[key]) {
      continue;
    }
    if (query[key] instanceof Array) {
      (query[key] as string[]).forEach((value) =>
        entries.push(`${key}=${value}`)
      );
    } else {
      entries.push(`${key}=${query[key]}`);
    }
  }
  return `?${entries.join('&')}`;
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [device, setDevice] = useState<'mobile' | 'desktop' | undefined>();

  useEffect(() => {
    if (isMobile()) {
      if (!/^\/m/.test(router.asPath) && !/^\/404/.test(router.asPath)) {
        if (Object.keys(router.query).length) {
          window.location.assign(
            `/m${router.asPath}${queryToString(router.query)}`
          );
          return;
        } else {
          window.location.assign(`/m${router.asPath}`);
          return;
        }
      }
      window.addEventListener(
        'ondeviceorientation',
        (e) => Math.abs(window.orientation) === 90 && window.scrollTo(0, 0)
      );
      window.addEventListener(
        'orientationchange',
        (e) => Math.abs(window.orientation) === 90 && window.scrollTo(0, 0)
      );
      setDevice('mobile');
    } else {
      setDevice('desktop');
    }
  }, [router]);

  return (
    <>
      <Global styles={globalStyle} />
      <Head>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-180674878-1"></script>
        <script dangerouslySetInnerHTML={{__html: `if (typeof window !== undefined) {
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments)}
            gtag('js', new Date());
          
            gtag('config', 'UA-180674878-1');
          }`}}>
        </script> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#2f2537" />
        <meta key="og:title" property="og:title" content="" />
        <meta key="og:description" property="og:description" content="" />
        <meta key="og:locale" property="og:locale" content="fr_FR" />
        <meta key="og:url" property="og:url" content="" />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:site_name" property="og:site_name" content="" />
        <meta key="og:image" property="og:image" content="" />
        <meta key="og:image:width" property="og:image:width" content="2920" />
        <meta key="og:image:height" property="og:image:height" content="2920" />
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta key="twitter:site" name="twitter:site" content="" />
        <meta key="twitter:creator" name="twitter:creator" content="" />
      </Head>
      {device === 'mobile' && (
        <>
          <Component {...pageProps} />
        </>
      )}
      {device === 'desktop' && (
        <>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}
export default MyApp;
