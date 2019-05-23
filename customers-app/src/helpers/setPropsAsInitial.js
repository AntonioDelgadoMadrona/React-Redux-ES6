import React, { Component } from "react";

export const setPropsAsInitial = WrappedComponent =>
  class extends Component {
    render() {
      return <WrappedComponent {...this.props} initialValues={this.props} enableReinitialize />;
    }
  };

  //  initialValues solo se inicia una vez pero si refrescamos la pag no funciona, por eso utilizamos enableReinitialize
