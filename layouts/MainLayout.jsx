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
      <QueryClientProvider client={queryClient}>
        <TopNav />
        <ContentLayout>{props.children}</ContentLayout>
        <ReactQueryDevtools initialIsOpen={false} />
        <Footer />
      </QueryClientProvider>
    </>
  );
};

export default MainLayout;
