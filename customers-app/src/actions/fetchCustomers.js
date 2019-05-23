import { FETCH_CUSTOMERS } from "./../constants";
import { createAction } from 'redux-actions';
import { apiGet } from "../api";
import { urlCustomer } from '../api/urls.js';

export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomer));
