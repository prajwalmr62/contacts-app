import * as React from "react";
import { connect } from "react-redux";
// import { Navbar, NavbarBrand } from "reactstrap";
import selectors from "../store/selectors";

class NavBarComponent extends React.Component {

    render() {
      return (
        <div className="bg-primary navbar navbar-md px-5 py-3">
        <a className="navbar-brand text-light" href="/">Hello {this.props.firstName}!</a>
        </div>
      );
    }
  }

  export default connect((state)=>{
    return {
        firstName: selectors.user.getFirstName(state)
    }
  })(NavBarComponent);

  