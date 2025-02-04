'use client';

import {CreateList} from '@/app/ui/create-list';
import { CreateCategory, create } from "@/app/lib/data";
// import { z } from 'zod'; // TODO should install zod and check against definitions.tsx https://nextjs.org/learn/dashboard-app/mutating-data
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default function createList() {

    return(
        <main className="w-full h-screen flex items-center justify-center">
            {/* could add a bradcrum here like example and move form to own component */}
            <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <CreateList placeholder='Name...' onSubmit={create} />
            </div>
        </main>
    )
}