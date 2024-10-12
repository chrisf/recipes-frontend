import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ApolloAppProvider from "./components/ApolloAppProvider";
import Layout from "./routes/layout";
import NewRecipePage from "./routes/recipe/new";
import RecipeDetailPage from "./routes/recipe/recipe_detail";
import RecipeListPage from "./routes/recipe/recipe_list";
import theme from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <RecipeListPage />,
      },
      {
        path: "/recipe/new",
        element: <NewRecipePage />,
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetailPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <CssBaseline enableColorScheme />
      <ThemeProvider theme={theme}>
        <ApolloAppProvider>
          <RouterProvider router={router} />
        </ApolloAppProvider>
      </ThemeProvider>
    </div>
  );
}
