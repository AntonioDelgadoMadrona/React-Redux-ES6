import { createAction } from "redux-actions";
import { DELETE_CUSTOMER } from "../constants/index";
import { apiDelete } from "../api/index";
import { urlCustomer } from "../api/urls";

export const deleteCustomer = createAction(DELETE_CUSTOMER, id =>
  apiDelete(urlCustomer, id)()
);
