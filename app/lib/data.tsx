'use server';

import { log } from "console";
import { Category } from "@/app/lib/definitions";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


let tasks = [{"id":2,"title":"Subtask 1.2","category_id":1,"completed":false},{"id":3,"title":"Subtask 1.3","category_id":1,"completed":false},{"id":4,"title":"Subtask 2.1","category_id":2,"completed":false},{"id":5,"title":"Subtask 2.2","category_id":2,"completed":false},{"id":6,"title":"Subtask 3.1","category_id":3,"completed":false},{"id":7,"title":"Subtask 3.2","category_id":3,"completed":false},{"id":8,"title":"Subtask 3.3","category_id":3,"completed":false},{"id":9,"title":"Subtask 3.4","category_id":3,"completed":false},{"id":1,"title":"Task 1.420","category_id":1,"completed":false},{"id":10,"title":"asd","category_id":null,"completed":false},{"id":11,"title":"asd","category_id":null,"completed":false},{"id":12,"title":"asd","category_id":null,"completed":false},{"id":13,"title":"asd","category_id":null,"completed":false},{"id":14,"title":"asddd","category_id":null,"completed":false},{"id":15,"title":"asdddd","category_id":null,"completed":false},{"id":16,"title":"sd","category_id":null,"completed":false},{"id":17,"title":"Task 1.420","category_id":null,"completed":false},{"id":18,"title":"Task 1.420","category_id":null,"completed":false},{"id":19,"title":"Task 1.420","category_id":null,"completed":false},{"id":20,"title":"Task 1.420","category_id":null,"completed":false},{"id":21,"title":"Task 1.421","category_id":null,"completed":false},{"id":22,"title":"Task 1.422","category_id":null,"completed":true}]
export async function fetchTasks() {
    return tasks;
}

export async function fetchCategories(query?: string): Promise<Category[]> {
    
    const url = new URL("http://localhost:3003/categories");

    if (query) {
        url.searchParams.append("name", query);
    }

    const response = await fetch(url.toString());
    const categories: Category[] = await response.json();
    console.log(categories);
    
    return categories;
  }
  

// export type Category = {
//     errors?: {
//       customerId?: string[];
//       amount?: string[];
//       status?: string[];
//     };
//     message?: string | null;
// };
export async function CreateCategory(name:string) { 

    try {
        const request = new Request("http://localhost:3003/categories", {
            method: "POST",
            headers: { "Content-Type": "application/json" }, // Add this
            body: JSON.stringify({ name: name }),
        });
    
        const response = await fetch(request);
    
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
    
        const category = await response.json();
        console.log(category);
    
        revalidatePath('/home'); // this for cache and stuf should be used properly
        redirect('/home');
    } catch (error) {
        console.log(error);
        revalidatePath('/home'); 
        redirect('/home');
    }
}


export async function create(formData: FormData) {
    try {
        const rawFormData = {
            name: formData.get('name')?.toString() || '',
        };
        // // Test it out:
        // console.log(rawFormData);
        await CreateCategory(rawFormData.name);
        
        revalidatePath('/home'); // this for cache and stuf should be used properly
        redirect('/home');
    } catch (error) {
        console.log(error);
        revalidatePath('/home'); // this for cache and stuf should be used properly
        redirect('/home');
    }
}