import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  longDescription?: SortOrder;
  name?: SortOrder;
  seoDescription?: SortOrder;
  seoTitle?: SortOrder;
  shorDescription?: SortOrder;
  slug?: SortOrder;
  updatedAt?: SortOrder;
};
