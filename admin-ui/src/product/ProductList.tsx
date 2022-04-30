import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="createdBy" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="longDescription" source="longDescription" />
        <TextField label="name" source="name" />
        <TextField label="seoDescription" source="seoDescription" />
        <TextField label="seoTitle" source="seoTitle" />
        <TextField label="shorDescription" source="shorDescription" />
        <TextField label="slug" source="slug" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
