export type Category = { key: string; name: string; icon: string };

export type Transaction = {
  type: "income" | "spending";
  title: string;
  amount: string;
  category: Category;
  date: string;
};
