/**
 * @author prajwalmr62
 * import page
 */


// required imports
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

// components import
import selectors from "../../store/selectors";
import * as actions from "../../store/contacts/actions";
import Progress from "../../components/progress";

/**
 * Import page component
 */
class ImportLOC extends React.Component {

    /**
     * constructor for import loc
     * @param {Object} props props
     */
    constructor(props) {
        super(props);
        this.onImportClick = this.onImportClick.bind(this);
        this.state = { isImporting: false };

    }

    /**
     * on click of btn import
     * @param {string} fromBtn source of contacts
     */
    onImportClick(fromBtn) {
        this.props.addContacts(this.props.history, this.props.user.username, fromBtn);
        this.setState({ isImporting: true });
    }

    /**
     * Render method
     * TODO: Create more components from this page.
     */
    render() {
        return (<React.Fragment>
            <div className="row">
                <div className="col col-md-7 offset-md-2">
                    <Progress currentStage="1"></Progress>
                    <div className="row justify-content-between no-gutters">
                        <span className="text-dark header-align font-weight-bold">Import your contacts</span>
                        <button className="btn text-dark font-weight-bold">Help?</button>
                    </div>
                    <div className="card card-shadow">
                        <div className="text-center card-header bg-gray-1 text-light"> Select a platform to import contacts</div>

                        {!this.state.isImporting &&
                            <div className="card-body justify-content-around no-gutters row p-5">
                                <button className="contact-button" onClick={()=> this.onImportClick('google')} ><i className="fab fa-google"></i></button>
                                <button className="contact-button" onClick={()=> this.onImportClick('facebook')} ><i className="fab fa-facebook"></i></button>
                                <button className="contact-button" onClick={()=> this.onImportClick('contacts')} ><i className="fas fa-address-card"></i></button>
                            </div>
                        }
                        {this.state.isImporting &&
                            <div className="card-body justify-content-around no-gutters row p-5">
                                <div className='loader'></div>
                                <p className="font-weight-bold pt-5 w-100 text-center">Please wait while we fetch your contacts...</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>);
    }
}

/**
 * start to props mapper
 * @param {object} state 
 */
function matchStateToProps(state) {
    return {
        user: selectors.user.getUser(state)
    };
}

/**
 * state to dispatch mapper
 * @param {object} dispatch 
 */
function matchDispatchToProps(dispatch) {
    return {
        addContacts: (history, username, accountSource) => {
            actions.fetchUserContacts(dispatch, history, username, accountSource);
        }
    }

}

/**
 * exported HOC
 */
export default withRouter(connect(matchStateToProps, matchDispatchToProps)(ImportLOC));