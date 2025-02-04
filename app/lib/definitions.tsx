export type Category = {
    id: number;
    name: string;
  };

export type Invoice = {
    id: number;
    category_id: number;
    title: string;
    completed: boolean;
};