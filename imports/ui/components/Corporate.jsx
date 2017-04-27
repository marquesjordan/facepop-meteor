import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AccessModal from './AccessModal';

export default class Corporate extends Component {

  constructor(props){
    super(props);

    this.state = {
     showModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(isRestricted) {
    this.props.handleSubmitAccess(isRestricted);
  }

  toggleModal(){
    this.setState({showModal: !this.state.showModal});
  }

  render() {
    return (
      <div>
        <button type="submit"
          onClick={this.toggleModal}
          className="btn btn-default btn-access"
        >
          All Access
        </button>

        <AccessModal
          showModal={this.state.showModal}
          title="All Access"
          onCancel={this.toggleModal}
          cancelLabel="Cancel"
          handleModalSubmit={this.handleSubmit}
        />
      </div>

    );
  }
}
