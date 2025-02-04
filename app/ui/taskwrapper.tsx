import {
  PencilIcon, TrashIcon
} from '@heroicons/react/24/outline';
// import { lusitana } from '@/app/ui/fonts';
import { fetchTasks,
    fetchCategories} from '@/app/lib/data'

import {CreateTask} from '@/app/ui/inputs';
// import { fetchCardData } from '@/app/lib/data';


// const iconMap = {
//   collected: BanknotesIcon,
//   customers: UserGroupIcon,
//   pending: ClockIcon,
//   invoices: InboxIcon,
// };

export default async function TaskWrapper({
  query,
}: {
  query: string
}) {
    let tasks = await fetchTasks();
    let categories = await fetchCategories(query);
//   const {
//     numberOfInvoices,
//     numberOfCustomers,
//     totalPaidInvoices,
//     totalPendingInvoices,
//   } = await fetchCardData();

  return (
        <div className="bg-gray-200 w-full min-h-screen">
                
            <div className="flex flex-wrap">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2"
                    >
                        <div className="bg-blue-500 h-48 w-full rounded-lg p2 min-h-32">
                            <div className="flex items-center justify-between p-2">
                                <h3 className="bold ">{category.name}</h3>
                                <div className="flex gap-2">
                                    <button>
                                        <PencilIcon className="bold h-5 md:ml-4"/>
                                    </button>
                                    <button>
                                        <TrashIcon className="bold h-5 md:ml-4"/>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="flexmt-2 max-h-32 min-h-32 overflow-y-auto p-2"> {/* Scrollable container */}
                                <ul className="mt-2 max-h-32">
                                    {tasks
                                    .filter((task) => task.category_id === category.id)
                                    .map((task) => (
                                        <li key={task.id} className="text-sm bg-gray-700 p-2 rounded mt-1">
                                            {task.title}
                                        </li>
                                    ))}
                                    <li key={'new'} className="text-sm bg-gray-700 p-2 rounded mt-1">
                                        {/* {'New Task'} */}
                                        <CreateTask placeholder='New Task...' category_id={category.id}/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
//   const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <li>
        <ol>asd</ol>
        <ol>asd</ol>
        <ol>asd</ol>
        <ol>asd</ol>
      </li>
      {/* <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p> */}
    </div>
  );
}
