import { Button } from './button';
import { CreateCategory } from './inputs';
import { PlusIcon } from '@heroicons/react/20/solid';

export function CreateList({ placeholder, onSubmit }: { placeholder: string, onSubmit: (formData: FormData) => void }) { 

  return (
    <form action={onSubmit} className="relative flex flex-col w-full  text-black">
        <CreateCategory placeholder={"Name..."}/>
        <Button className="w-full">
            Create List{' '}
            <PlusIcon className="h-5 ml-2" />
        </Button>
    </form>
  );
}
