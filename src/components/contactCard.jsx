/**
 * @author prajwalmr62
 * contact card component
 */


import * as React from "react";

class ContactCard extends React.Component {
    render() {
         const associateClass = this.props.isSelected? "bg-success text-white": "bg-secondary text-dark";
        return (
            <div className="card contact-card card-shadow mt-2" onClick={this.props.onCardSelect}>
                <div className="row no-gutters">
                    <div className="col-9 text-center p-3">
                        <span className="contact-name font-weight-bold text-center">
                            {this.props.firstName + " " + this.props.lastName}
                        </span>
                        <div className="additional-info row no-gutters justify-content-around">
                            <div className="info">
                                <i className="fas fa-envelope text-danger"></i> {this.props.email}
                            </div>
                            <div className="info">
                                <i className="fas fa-phone  text-danger"></i>{this.props.phone}
                            </div>
                        </div>
                    </div>
                    <div className={associateClass + " col-3 associate-card-addon text-center font-weight-bold"}>
                        {this.props.association}
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactCard;

