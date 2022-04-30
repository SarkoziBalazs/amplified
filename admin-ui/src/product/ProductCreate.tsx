import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="createdBy">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="longDescription" multiline source="longDescription" />
        <TextInput label="name" source="name" />
        <TextInput label="seoDescription" multiline source="seoDescription" />
        <TextInput label="seoTitle" source="seoTitle" />
        <TextInput label="shorDescription" multiline source="shorDescription" />
        <TextInput label="slug" source="slug" />
      </SimpleForm>
    </Create>
  );
};
