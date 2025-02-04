import { SearchInvoices } from '@/app/ui/inputs';
import { ButtonLink } from '@/app/ui/button';
import { PlusIcon } from '@heroicons/react/16/solid';

export default async function Header() {
  
    return (
        <div className="flex w-full items-center justify-between rounded-lg bg-gray-700 p-4 flex-col sm:flex-row">
          <div className="flex w-full items-center justify-between mb-4 sm:mb-0">
            <h1 className="text-2xl">ToDo Lists</h1>
          </div>
          <div className="flex w-full items-center justify-between gap-2 flex-col sm:flex-row">
            <SearchInvoices placeholder="Search invoices..." />
            {/* <CreateList /> */}
            <ButtonLink className="w-full" href="/list/create"> 
              Create list{' '}
              <PlusIcon className="h-5 ml-2" />
              </ButtonLink>
          </div>
        </div>
    )};