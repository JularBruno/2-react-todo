// import Pagination from '@/app/ui/invoices/pagination';
import {Search} from '@/app/ui/inputs';
import { CreateList } from '@/app/ui/buttons';
import TaskWrapper from '@/app/ui/taskwrapper';
// import Table from '@/app/ui/invoices/table';
// import { CreateInvoice } from '@/app/ui/invoices/buttons';
// import { lusitana } from '@/app/ui/fonts';
// import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
// import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';
 
// export const metadata: Metadata = {
//   title: 'Invoices | Acme Dashboard',
// };
export const metadata: Metadata = {
  title: 'Invoices',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
//   const searchParams = await props.searchParams;
//   const query = searchParams?.query || '';
//   const currentPage = Number(searchParams?.page) || 1;
//   // You might have noticed you used two different ways to extract search params. Whether you use one or the other depends on whether you're working on the client or the server.
//   // <Search> is a Client Component, so you used the useSearchParams() hook to access the params from the client.
//   // <Table> is a Server Component that fetches its own data, so you can pass the searchParams prop from the page to the component.
//   const totalPages = await fetchInvoicesPages(query);

  return (
    <main className="w-full mx-auto p-4">

      <div className="flex w-full items-center justify-between rounded-lg bg-gray-700">
          <div className="flex w-full items-center justify-between">
              {/* <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1> */}
              <h1 className={`text-2xl`}>ToDo Lists</h1>
          </div>
          <div className="mt-4 flex w-full items-center justify-between gap-2 md:mt-8">
              <Search placeholder="Search invoices..." />
              <CreateList />
          </div>
      </div>
      <div className="flex w-full items-center justify-between rounded-lg bg-gray-700 min-h-screen">
          <TaskWrapper />
      </div>

       {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div> */}
    </main>
  );
}