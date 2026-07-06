export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  applications: string[];
  specs: Record<string, string>;
  image: string;
};
