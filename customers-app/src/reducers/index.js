import { combineReducers } from "redux";
import { customers } from "./customers";
import { reducer as reduxForm } from "redux-form";
import { CUSTOMER_LIST, CUSTOMER_VIEW } from "../constants/permissions";

const user = (state, action) => ({
  permissions: [CUSTOMER_LIST, CUSTOMER_VIEW]
});

// Este middleware o HOC lo que envuelve es a la aplicacion y solo los componentes que esten envueltos por los componentes y 
// tengan asignados los actions que lo permite (CUSTOMER_VIEW, CUTOMER_EDIT)

export default combineReducers({
  customers,
  form: reduxForm,
  user
});
