/**
 * @author prajwalmr62
 * navbar component
 */

import * as React from "react";
import { connect } from "react-redux";
import selectors from "../store/selectors";

/**
 * navbar component
 */
class NavBarComponent extends React.Component {

    render() {
      return (
        <div className="bg-primary navbar navbar-md px-5 py-3">
        <a href="/" className="navbar-brand text-light">Hello {this.props.firstName}!</a>
        </div>
      );
    }
  }

  /**
   * Navbar HOC 
   */
  export default connect((state)=>{
    return {
        firstName: selectors.user.getFirstName(state)
    }
  })(NavBarComponent);

  