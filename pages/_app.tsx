import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';


export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
          /** Put your mantine theme override here */
          colors: {
            ben: ['#00643b','#00643b','#00643b','#00643b','#00643b','#00643b','#00643b','#00643b','#00643b','#00643b', ],
            lightBen: ['#49b96d','#49b96d','#49b96d','#49b96d','#49b96d','#49b96d','#49b96d','#49b96d','#49b96d','#49b96d'],
            white: ['#efeff0'],
            background: ['#001914']
          },
          primaryColor: 'ben',
          fontFamily: 'Helvetica',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}