
export async function fetchTasks() {
    let tasks = [{"id":2,"title":"Subtask 1.2","category_id":1,"completed":false},{"id":3,"title":"Subtask 1.3","category_id":1,"completed":false},{"id":4,"title":"Subtask 2.1","category_id":2,"completed":false},{"id":5,"title":"Subtask 2.2","category_id":2,"completed":false},{"id":6,"title":"Subtask 3.1","category_id":3,"completed":false},{"id":7,"title":"Subtask 3.2","category_id":3,"completed":false},{"id":8,"title":"Subtask 3.3","category_id":3,"completed":false},{"id":9,"title":"Subtask 3.4","category_id":3,"completed":false},{"id":1,"title":"Task 1.420","category_id":1,"completed":false},{"id":10,"title":"asd","category_id":null,"completed":false},{"id":11,"title":"asd","category_id":null,"completed":false},{"id":12,"title":"asd","category_id":null,"completed":false},{"id":13,"title":"asd","category_id":null,"completed":false},{"id":14,"title":"asddd","category_id":null,"completed":false},{"id":15,"title":"asdddd","category_id":null,"completed":false},{"id":16,"title":"sd","category_id":null,"completed":false},{"id":17,"title":"Task 1.420","category_id":null,"completed":false},{"id":18,"title":"Task 1.420","category_id":null,"completed":false},{"id":19,"title":"Task 1.420","category_id":null,"completed":false},{"id":20,"title":"Task 1.420","category_id":null,"completed":false},{"id":21,"title":"Task 1.421","category_id":null,"completed":false},{"id":22,"title":"Task 1.422","category_id":null,"completed":true}]
    return tasks;
}

export async function fetchCategories() {
    let categories = [{"id":1,"name":"Task 1"},{"id":2,"name":"Task 2"},{"id":3,"name":"Task 3"},{"id":4,"name":"Task 4"}]
    return categories;
}