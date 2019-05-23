import { createAction } from "redux-actions";
import { UPDATE_CUSTOMER } from "../constants";
import { apiPut } from "../api";
import { urlCustomer } from "../api/urls";

export const updateCustomer = createAction(UPDATE_CUSTOMER, (id, customer) =>
  apiPut(urlCustomer, id, customer)()
);
