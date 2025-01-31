import {NewList} from '@/app/ui/buttons'
import {Create} from '@/app/ui/inputs';


export default async function createList() {
    return(
        <div className="w-full h-screen flex items-center justify-center">
            <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <Create placeholder='Name...'/>
                <NewList/>
            </div>
        </div>
    )
}