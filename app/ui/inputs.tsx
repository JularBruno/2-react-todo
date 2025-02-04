'use client';

import { FireIcon, MagnifyingGlassIcon, TagIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce'; 

export function SearchInvoices({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    // console.log(term);
    console.log(`Searching... ${term}`);
    // no pagination

    const params = new URLSearchParams(searchParams);
    
    if (term) {
      console.log(term);
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0 w-full sm:w-auto text-black">
      <label htmlFor="search" className="sr-only">
        Search Invoices
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          console.log(e);
          handleSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}

export function CreateCategory({ placeholder }: { placeholder: string }) {
  return (
    <div className="w-full mb-4 relative">  
        <label htmlFor="name" className="sr-only">
            Name
        </label>
        <div className="relative">
          <input
              type="text" 
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              placeholder={placeholder}
              name="name"/>
          <TagIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
    </div>
  );
}

export function CreateTask({ placeholder, category_id }: { placeholder: string, category_id: number }) {
  const [inputValue, setInputValue] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Action to perform when Enter is pressed
      console.log("Enter pressed! Input value:", inputValue);
      // You can reset the input value or perform any other actions
      setInputValue("");

      const params = new URLSearchParams(searchParams);
      params.set('id', category_id.toString());
      params.set('value', inputValue.toString());

      replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <div className="relative flex flex-1 flex-shrink-0 text-black">
      <label htmlFor="task" className="sr-only">
        Task
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          console.log(e.target.value);
          // handleSearch(e.target.value);
          setInputValue(e.target.value)
        }}
        onKeyDown={handleKeyDown} 
        // defaultValue={searchParams.get('query')?.toString()}
        // since you're not using state, you can use defaultValue. This means the native input will manage its own state. This is okay since you're saving the search query to the URL instead of state.
      />
      
      <FireIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-500" />
    </div>
  );
}