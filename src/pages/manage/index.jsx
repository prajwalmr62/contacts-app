/**
 * @author prajwalmr62
 * contact manage component
 */

 // required imports
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { ModalBody, ModalFooter } from "reactstrap";

// redux related
import selectors from "../../store/selectors";
import * as actions from "../../store/contacts/actions";

// component imports
import Progress from "../../components/progress";
import Modal from "../../components/modal";
import AssociateCard from "../../components/associateCard";
import ContactCard from "../../components/contactCard";

/**
 * manage page LOC
 */
class ManageLOC extends React.Component {

    /**
     * Association available.
     * TODO: Move it to store
     */
    associations = ["father", "mother", "brother", "sister"];
    
    /**
     * header text to be displayed for unidentified modal
     */
    headerText= "";

    /**
     * constructor
     * @param {object} props 
     */
    constructor(props) {
        super(props);
        this.toggleFamily = this.toggleFamily.bind(this);
        this.toggleUnidentified = this.toggleUnidentified.bind(this);
        this.getFamilyModal = this.getFamilyModal.bind(this);
        this.getUnidentifiedModal = this.getUnidentifiedModal.bind(this);
        this.getContactCard = this.getContactCard.bind(this);
        this.selectedUser = this.selectedUser.bind(this);
        this.associateUser = this.associateUser.bind(this);
        this.selectAssociation = this.selectAssociation.bind(this);
        this.state = {
            familyModal: false,
            UnidentifiedModal: false,
            selectedUser: null,
            selectedAssociation: null,
            headerText : "Unidentified (" + this.props.unidentifiedCount.toString() + ")"
        };
    }

    /**
     * toggle family modal
     */
    toggleFamily() {
        this.setState({
            familyModal: !this.state.familyModal,
            selectedUser: null,
            selectedAssociation: null
        });
    }

    /**
     * toggle unidentified modal
     */
    toggleUnidentified() {
        this.setState({
            UnidentifiedModal: !this.state.UnidentifiedModal,
            selectedUser: null,
            selectedAssociation: null,
            headerText : "Unidentified (" + this.props.unidentifiedCount.toString() + ")"
        });
    }

    /**
     * select an user
     * @param {user} selectedUser user object
     */
    selectedUser(selectedUser) {
        this.setState({ selectedUser, headerText: selectedUser.firstName + " " + selectedUser.lastName })
    }

    /**
     * create user contact card
     * @param {Array<user>} userList list of users
     * @param {func} onClick func
     */
    getContactCard(userList, onClick) {
        const arrowIcon = <i className="fas fa-2x fa-arrow-right"></i>;
        return userList.map(user => <ContactCard
            key={user.id} email={user.email} phone={user.phone}
            firstName={user.firstName} lastName={user.lastName}
            onCardSelect={() => onClick? this.selectedUser(user): ""}
            isSelected={user.association}
            association={user.association ? user.association : arrowIcon}></ContactCard>)
    }

    /**
     * get association clicked
     * @param {string} selectedAssociation 
     */
    selectAssociation(selectedAssociation) {
        this.setState({ selectedAssociation });
    }

    /**
     * on select, associate user with selected association
     */
    associateUser() {
        this.props.changeAssociation(this.state.selectedUser.id, this.state.selectedAssociation);
        this.setState({
            familyModal: false,
            UnidentifiedModal: false,
            selectedUser: null,
            selectedAssociation: null,
            headerText : "Unidentified (" + this.props.unidentifiedCount.toString() + ")"
        });
    }

    /**
     * creating family modal
     * TODO: make new component
     */
    getFamilyModal() {
        return (
            <Modal toggle={this.toggleFamily} isOpen={this.state.familyModal} headerText={"Family Members (" + this.props.associatedContacts.length.toString() + ")"}>
                {!this.state.selectedUser &&
                    <ModalBody>
                        <p className="font-weight-bold mt-5">Click a contact and select who is to you.</p>
                        {
                            this.getContactCard(this.props.associatedContacts)
                        }
                        {!this.props.associatedContacts.length &&
                            <p>Nothing to show.</p>
                        }
                    </ModalBody>
                }
            </Modal>
        );
    }

    /**
     * get unidentified modal
     * TODO: move it to new component
     */
    getUnidentifiedModal() {
        return (
            <Modal toggle={this.toggleUnidentified} isOpen={this.state.UnidentifiedModal} headerText={this.state.headerText} >
                {!this.state.selectedUser &&
                    <ModalBody>
                        <p className="font-weight-bold">Click a contact and select who is to you.</p>
                        {
                            this.getContactCard(this.props.unAssociatedContacts, true)
                        }
                        {!this.props.unAssociatedContacts.length &&
                            <p>Nothing to show.</p>
                        }
                    </ModalBody>
                }
                {this.state.selectedUser &&
                    <React.Fragment>
                        <ModalBody>
                            <div className="card">
                                <div className="card-body">
                                    <div className="">Who is {this.state.selectedUser.firstName + " " + this.state.selectedUser.lastName} is to you?</div>
                                    <div className="additional-info row no-gutters justify-content-around">
                                        <div className="info">
                                            <i className="fas fa-map-marker-alt text-danger"></i>{this.state.selectedUser.street}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2">
                                {
                                    this.associations.map(name => (<div key={name} onClick={() => this.selectAssociation(name)} className={this.state.selectedAssociation === name ? "card mb-3 card-selected" : "card-not-selected card mb-3"}>
                                        <div className="card-body">
                                            {name}
                                        </div>
                                    </div>
                                    ))
                                }
                            </div>
                        </ModalBody>
                        <ModalFooter className="text-center">
                            {this.state.selectedAssociation &&
                                <button className="btn btn-primary" onClick={this.associateUser}>Select</button>
                            }
                        </ModalFooter>
                    </React.Fragment>
                }
            </Modal>
        );
    }

    /**
     * render method
     */
    render() {
        return (<React.Fragment>
            <div className="align-items-center row">
                <div className="col col-md-7 offset-md-2">
                    <Progress currentStage="2"></Progress>
                    <div className="row justify-content-between no-gutters">
                        <span className="text-dark header-align font-weight-bold">Manage Family</span>
                        <button className="btn text-dark font-weight-bold">Help?</button>
                    </div>
                    <div className="card card-shadow">
                        <div className="text-center card-header bg-gray-1 text-light"> Choose your family members from the list of contacts you have updated</div>
                        <div className="card-body p-5">
                            <AssociateCard success sideHeader="Family Members" sideCount={this.props.associatedContacts.length.toString()} helpBlock="Your family members are listed here" buttonText="Check your friends" onButtonClick={this.toggleFamily} ></AssociateCard>
                            <AssociateCard warning sideHeader="Unidentified" sideCount={this.props.unidentifiedCount.toString()} helpBlock="Choose your family members and their relationship to you" buttonText="Choose from this list" onButtonClick={this.toggleUnidentified} ></AssociateCard>
                        </div>
                    </div>
                </div>
                <div className="align-items-center col col-md-3 flex-column justify-content-center no-gutters row">
                <Link to="/list"><button className="contact-list-button btn btn-success"><i className="fa-2x fa-user-alt fas"></i></button></Link>
                <span className="font-weight-bold pt-4 text-center">View Phonebook</span>
                </div>
            </div>
            {this.getFamilyModal()}
            {this.getUnidentifiedModal()}
        </React.Fragment>);
    }
}

/**
 * state to props mapper
 * @param {object} state 
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
        changeAssociation: (contactId, association)=>{
            dispatch(actions.changeContactAssociation(contactId, association))
        }

    }

}

// export HOC
export default withRouter(connect(matchStateToProps, matchDispatchToProps)(ManageLOC));