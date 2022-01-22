import React, { useEffect, useState } from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../lib/createEmotionCache";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import getDesignToken from "../lib/theme";
import GlobalStyles from "../lib/GlobalStyles";
import Head from "next/head";

function MyApp(props) {
  const clientSideEmotionCache = createEmotionCache();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [mode, setMode] = useState("light");
  const theme = React.useMemo(() => createTheme(getDesignToken(mode)), [mode]);

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
          alt="icon"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
          alt="icon"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
          alt="icon"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <Component setMode={setMode} {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
