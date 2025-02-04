
import TaskWrapper from '@/app/ui/taskwrapper';
import Header from '@/app/ui/header';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <main className="w-full mx-auto p-4">
      
      <div className='mb-3'>
       <Header></Header>
      </div>

      <div className="flex w-full items-center justify-between rounded-lg bg-gray-700 min-h-screen">
          <TaskWrapper query={query} /> 
          {/* TODO add suspense and a skeleton */}
      </div>

    </main>
  );
}