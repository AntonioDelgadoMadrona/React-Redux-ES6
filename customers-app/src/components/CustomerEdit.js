import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "../helpers/setPropsAsInitial";
import CustomersActions from "./CustomersActions";
import { Prompt } from "react-router-dom";

// const isRequired = value => !value && "Este campo es requerido";

const isNumber = value => isNaN(Number(value)) && "El campo debe ser un numero";

const validate = values => {
  const error = {};

  if (!values.name) {
    error.name = "El campo nombre es requerido";
  }

  if (!values.dni) {
    error.dni = "El dni es un campo obligatorio";
  }

  return error;
};

const toNumber = value => {
  return value && Number(value);
};

const toUpper = value => {
  return value && value.toUpperCase();
};

const toLower = value => value && value.toLowerCase();

const onlyGrow = (
  value,
  previousValue,
  values // Solo permite una modificacion si incrementa su valor, si no, no se modifica
) =>
  value && !previousValue
    ? value
    : value > previousValue
    ? value
    : previousValue;

const MyField = ({ input, meta, type, label, name }) => (
  <div>
    <label htmlFor={name}>{label}:</label>
    <input {...input} type={!type ? "text" : type} />
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
);

// La validaciones a nivel local predominan sobre las globales

const CustomerEdit = ({
  name,
  dni,
  age,
  handleSubmit,
  submitting,
  onBack,
  pristine
}) => {
  return (
    <div>
      <h2>Edicion del cliente</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          component={MyField}
          // validate={isRequired}
          label="Nombre"
          parse={toUpper}
          format={toLower}
        />
        <Field
          name="dni"
          component={MyField}
          // validate={[isRequired, isNumber]}
          label="Dni"
        />
        <Field
          name="age"
          component={MyField}
          type="number"
          validate={isNumber}
          label="Edad"
          parse={toNumber}
          normalize={onlyGrow}
        />
        <CustomersActions>
          <button type="submit" disabled={pristine || submitting}>
            Aceptar
          </button>
          <button type="button" onClick={onBack} disabled={submitting}>
            Cancelar
          </button>
        </CustomersActions>
        <Prompt when={!pristine} message="Se perderán los datos si continua" />
      </form>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired
};

const CustomerEditForm = reduxForm({
  form: "CustomerEdit",
  validate: validate
})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);
