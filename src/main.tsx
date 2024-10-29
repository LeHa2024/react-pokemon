import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./routers/Home.tsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routers/Root.tsx";
import Pokemon from "./routers/Pokemon.tsx";

const queryClient = new QueryClient({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "pokemon/:name",
        element: <Pokemon />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
);
