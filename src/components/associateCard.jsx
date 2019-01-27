import * as React from "react";

class AssociateCard extends React.Component {
    render() {
        let sideColorClass = "";
        let sideButtonClass = "";
        if(this.props.success){
            sideColorClass = "bg-success";
            sideButtonClass = "bg-success-light";
        } else if(this.props.warning){
            sideColorClass="bg-warning";
            sideButtonClass="bg-warning-light";
        }
        return (
            <div className="mb-5 card card-rounded">
                <div className="row no-gutters">
                    <div className={sideColorClass + " col-4 px-1 py-2 text-light text-center card-left-rounded "}>
                        <p className="label font-weight-bold">{this.props.sideHeader}</p>
                        <p className="count font-weight-bold">{this.props.sideCount}</p>
                    </div>
                    <div className="col-8">
                        <p className="side-pane-top">{this.props.helpBlock}</p>
                        <button onClick={this.props.onButtonClick} className={sideButtonClass + " side-pane-bottom-button"}>{this.props.buttonText}<i className="fas fa-chevron-right pl-3"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AssociateCard;

