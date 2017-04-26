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
  }

  handleSubmit(event) {
      event.preventDefault();
      const allAcessCode = ReactDOM.findDOMNode(this.refs.allAcessCode).value.trim();

      this.props.handleSubmit(allAcessCode);
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
        />
      </div>

    );
  }
}
