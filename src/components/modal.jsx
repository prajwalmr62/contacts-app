/**
 * @author prajwalmr62
 * modal component
 */

import React from 'react';
import { Modal, ModalHeader } from 'reactstrap';

class SideOpenModal extends React.Component {
  render() {
    const closeBtn = <button className="close" onClick={this.props.toggle}>&times;</button>;
    return (
      <React.Fragment>
        <Modal isOpen={this.props.isOpen} fade={false}  toggle={this.props.toggle} className={"side-modal"}>
          <ModalHeader className={"bg-gray-1 text-light"} toggle={this.props.toggle} close={closeBtn}>{this.props.headerText}</ModalHeader>
          {this.props.children}
        </Modal>
      </React.Fragment>
    );
  }
}

export default SideOpenModal;