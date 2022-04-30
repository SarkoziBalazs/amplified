import { User } from "../user/User";

export type Product = {
  createdAt: Date;
  createdBy?: User | null;
  id: string;
  longDescription: string;
  name: string;
  seoDescription: string | null;
  seoTitle: string | null;
  shorDescription: string;
  slug: string;
  updatedAt: Date;
};
