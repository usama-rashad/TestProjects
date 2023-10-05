export type TBookProps = {
  id: number;
  book: string;
  author: string;
  pages: number;
};

export type TMedProps = {
  id: number;
  drug_name: string;
  qty: number;
  price: number;
  manufacturer?: string;
};
