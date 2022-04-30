import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductUpdateInput = {
  createdBy?: UserWhereUniqueInput | null;
  longDescription?: string;
  name?: string;
  seoDescription?: string | null;
  seoTitle?: string | null;
  shorDescription?: string;
  slug?: string;
};
