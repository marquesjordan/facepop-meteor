import React, { Component } from 'react';
import classNames from 'classnames';

export default class AccessModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const modalClassName = classNames( this.props.className, {
      'modal': true,
      'show-modal': this.props.showModal
    });

    return (
      <div className={modalClassName}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" onClick={this.props.onCancel}>
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">{this.props.title}</h4>
            </div>
            <div className="modal-body">
              Blah Blagh
            </div>
          </div>
        </div>
      </div>
    );
  }
}
