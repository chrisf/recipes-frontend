import CssBaseline from "@mui/material/CssBaseline";

// fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import ApolloAppProvider from "@/components/ApolloAppProvider";
import { ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import Header from "../components/Header";
import theme from "../theme";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "Recipes",
  description: "Let's burn some food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <CssBaseline />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ApolloAppProvider>
              <Header />
              {children}
            </ApolloAppProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
