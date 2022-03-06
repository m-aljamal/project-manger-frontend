import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "./auth-context";
import { MantineProvider } from "@mantine/core";

const AppProviders: FC = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
        retry(failureCount, error: any) {
          if (error.status === 404) return false;
          else if (failureCount < 2) return true;
          else return false;
        },
      },
      mutations: {
        onError: (err, variables, recover) =>
          typeof recover === "function" ? recover() : null,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Router>
        <MantineProvider
          withNormalizeCSS
          theme={{
            dir: "ltr",

            colors: {
              slate: ["#0f172a"],
              gray: ["#e5e7eb", "#374151", "#9ca3af"],
            },
            // fontFamily: "Open Sans, sans serif",
            // spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
            // colorScheme: "dark",
            // colors: {
            //   // Add your color
            //   "deep-blue": ["#E9EDFC", "#C1CCF6", "#99ABF0" /* ... */],
            //   // or replace default theme color
            //   blue: ["#E9EDFC", "#C1CCF6", "#99ABF0" /* ... */],
            // },

            // shadows: {
            //   // other shadows (xs, sm, lg) will be merged from default theme
            //   md: "1px 1px 3px rgba(0,0,0,.25)",
            //   xl: "5px 5px 3px rgba(0,0,0,.25)",
            // },

            // headings: {
            //   fontFamily: "Roboto, sans-serif",
            //   sizes: {
            //     h1: { fontSize: 30 },
            //   },
            // },
          }}
        >
          <AuthProvider>{children}</AuthProvider>
        </MantineProvider>
      </Router>
    </QueryClientProvider>
  );
};

export default AppProviders;
