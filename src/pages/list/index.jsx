/**
 * @author prajwalmr62
 * contacts listing page
 */

 // required imports
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Table } from 'reactstrap';
import { Link } from "react-router-dom";

// redux store related
import selectors from "../../store/selectors";
import * as actions from "../../store/contacts/actions";

/**
 * contact listing LOC
 */
class ListLOC extends React.Component {

    /**
     * constructor
     * @param {object} props 
     */
    constructor(props) {
        super(props);
        this.getTable = this.getTable.bind(this);
    }

    /**
     * creates table object
     * @param {userList} list user list 
     */
    getTable(list) {
        return (
            <div className="row">
                <div className="col">
                    <Table bordered={false} borderless striped hover>
                        <tbody>
                            {
                                list.map(user => (
                                    <tr key={user.id}>
                                        <td>
                                            {user.firstName + " " + user.lastName}
                                            {user.association &&
                                                <span className="badge badge-success card-rounded ml-3">{user.association}</span>
                                            }
                                        </td>
                                        <td>
                                            {user.email}
                                        </td>
                                        <td>
                                            {user.phone}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }

    /**
     * render method
     * TODO: Make multiple components from this.
     */
    render() {
        return (<React.Fragment>
            <div className="row">
                <div className="col">
                    <h1>Contacts</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-right">
                    <Link to="/manage" className="btn btn-link text-dark font-weight-bold">Manage List</Link>
                </div>
            </div>
            {this.props.associatedContacts.length > 0 &&
                <React.Fragment>
                    <h4 className="mt-2">Family Member {"(" + this.props.associatedContacts.length + ")"}</h4>
                    {
                        this.getTable(this.props.associatedContacts)
                    }
            </React.Fragment>
            }
            {this.props.unAssociatedContacts.length > 0 &&
                <React.Fragment>
                    <h4 className="mt-2">Unidentified {"(" + this.props.unAssociatedContacts.length + ")"}</h4>
                    {
                        this.getTable(this.props.unAssociatedContacts)
                    }
            </React.Fragment>
            }
        </React.Fragment>);
    }
}

/**
 * state to props mapper
 * @param {state} state 
 */
function matchStateToProps(state) {
    return {
        user: selectors.user.getUser(state),
        associatedContacts: selectors.contacts.getContacts(state, "*"),
        unAssociatedContacts: selectors.contacts.getUnidentifiedContacts(state),
        unidentifiedCount: selectors.contacts.getUnidentifiedCount(state)
    };
}

/**
 * state to dispatch mapper
 * @param {function} dispatch 
 */
function matchDispatchToProps(dispatch) {
    return {
        addContacts: (history, username, accountSource) => {
            actions.fetchUserContacts(dispatch, history, username, accountSource);
        }
    }

}

/**
 * HOC export
 */
export default withRouter(connect(matchStateToProps, matchDispatchToProps)(ListLOC));