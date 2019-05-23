import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import AppFrame from "../components/AppFrame";
import CustomersActions from "../components/CustomersActions";

class HomeContainer extends Component {

    handleOnClick = () => {
        this.props.history.push('/customers')
    }

  render() {
    return (
      <div>
        <AppFrame
          header="Inicio"
          body={
            <div>
              <img src="https://cdn-images-1.medium.com/max/1200/1*VeM-5lsAtrrJ4jXH96h5kg.png" alt="imagen"></img>
              <CustomersActions>
                  <button onClick={this.handleOnClick}>Lista de clientes</button>
              </CustomersActions>
            </div>
          }
        />
      </div>
    );
  }
}


export default withRouter(HomeContainer);   // Al envolverlo en el decorador withRouter me aseguro que sea accesible de todas todas