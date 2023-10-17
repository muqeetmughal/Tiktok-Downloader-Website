import React from "react";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import ContentLayout from "./ContentLayout";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const MainLayout = (props) => {
  const queryClient = new QueryClient();

  return (
    <>
      <TopNav />
      <QueryClientProvider client={queryClient}>
        <ContentLayout>{props.children}</ContentLayout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>

      <Footer />
    </>
  );
};

export default MainLayout;
