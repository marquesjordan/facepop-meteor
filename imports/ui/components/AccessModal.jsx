import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class AccessModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      granted: false,
      errorMessage: ''
    }
  }

  componentDidMount() {
    this.UserIP();
  }

  UserIP() {
    return $.getJSON('http://ipinfo.io')
      .then((data) => {
        console.log(data);
      });
  }

  handleSubmit(event) {
    const ALL_ACCESS_CODE = "100billion";

    event.preventDefault();
    const allAcessCode = ReactDOM.findDOMNode(this.refs.allAcessCode).value.trim();
    const email = ReactDOM.findDOMNode(this.refs.email).value.trim();

    if(allAcessCode === ALL_ACCESS_CODE) {
      this.setState({granted: true, errorMessage: ''});

      this.props.handleModalSubmit(false);

    } else {
      this.setState({errorMessage: 'Wrong Password'});

    }
  }

  renderFooter() {
    if(this.state.granted) {
      return (
        <div className="text-center"><h1>ACCESS GRANTED</h1></div>
      )
    }

    return (
      <div>
        <form className="beta-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" ref="email" placeholder="Enter Your Email Address" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" ref="allAcessCode" id="password" placeholder="Password" />
            <div className="error-message">
              {this.state.errorMessage}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
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
              <div className="modal-body-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper egestas elit et facilisis. Integer id turpis euismod, pulvinar metus ut, finibus sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sodales et risus sed vestibulum. Praesent mi tellus, consectetur nec arcu at, molestie rhoncus leo. Donec eget malesuada urna. Vivamus sit amet bibendum diam. Maecenas tincidunt massa vel congue rutrum. Phasellus condimentum fermentum augue, et suscipit neque blandit vel. Vivamus aliquet mi ac semper aliquet. Nulla libero dolor, interdum non consequat et, tincidunt finibus dolor. Quisque id felis sit amet neque tincidunt facilisis at in ex. Mauris a efficitur ante, vel aliquet mauris. Etiam porta eleifend ex, eu dictum metus rutrum ut. Sed interdum sem interdum libero placerat, vitae rhoncus lacus vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                Proin scelerisque euismod sapien id cursus. Sed mattis lobortis nibh quis sagittis. Fusce in arcu odio. Curabitur faucibus felis id arcu semper tempus. Nunc non porta urna. Nulla risus ante, ullamcorper id dui at, commodo ornare mi. Nunc mollis auctor dapibus. Nullam sit amet lacinia metus, a vulputate tellus. Donec sed ipsum sed nibh mollis sollicitudin vitae a purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque suscipit gravida nibh id mattis. Aliquam at pulvinar orci.

                In scelerisque, elit id elementum varius, felis mauris tristique felis, sit amet semper mauris ipsum et augue. Nullam sit amet odio feugiat, varius mauris fermentum, laoreet mi. Sed ac mi a justo tincidunt porta. Pellentesque pellentesque pellentesque vulputate. Sed at enim dictum, posuere nisl vel, bibendum lectus. Sed tincidunt dignissim malesuada. Nunc urna eros, ornare quis diam eget, commodo vestibulum eros. Sed tincidunt mi molestie, euismod turpis ut, blandit odio. Fusce id felis cursus, interdum orci quis, tincidunt felis. Morbi iaculis, purus vel sollicitudin consectetur, leo metus vulputate mi, sed aliquam nunc ligula a lorem. Ut imperdiet suscipit accumsan. Maecenas elementum pharetra velit, ac blandit augue laoreet vel.

                Cras nec metus nisi. Ut ex nisi, imperdiet non justo in, consectetur tincidunt nisl. Aenean laoreet tortor lacus, at maximus lorem vulputate quis. Vestibulum placerat magna vitae diam porta, eget dignissim sem faucibus. Nam aliquam neque non enim pulvinar porttitor. Mauris nibh dui, aliquet a ligula at, iaculis condimentum sem. Cras a dui ut purus blandit tempus et vel lacus. Nulla vel ipsum velit. Quisque tempor ante lectus, mollis gravida risus finibus non.

                Maecenas ac sem sit amet nunc ullamcorper luctus in vitae ipsum. Duis a aliquam purus. Duis pellentesque mi placerat auctor lacinia. Fusce vitae eleifend eros. Aliquam erat volutpat. Nam nec ultricies ex, dapibus consectetur nulla. Phasellus bibendum, augue et ultrices elementum, arcu ligula rhoncus dui, non convallis velit tortor non nibh. Etiam ut tortor tellus. Phasellus sed dolor mattis, convallis risus in, molestie sem. Duis dignissim elit sed purus blandit, tristique blandit ex rhoncus.

                Nullam ac tincidunt nibh, ac suscipit ex. In fringilla purus at diam ornare, ac congue dui sodales. Vivamus vel dictum metus. Vivamus fringilla nisl nec ligula ultrices bibendum. Aliquam nec sem luctus, vulputate magna ut, dictum lacus. Proin ac bibendum lacus. Mauris porta euismod erat, eu ornare nibh placerat vel. Vivamus facilisis eu augue vel faucibus. Nunc eget neque dolor. Mauris aliquam diam a mi commodo posuere. Praesent velit felis, bibendum in interdum sit amet, faucibus sit amet nulla. In posuere egestas orci in dapibus.

                Aenean interdum quam sit amet augue luctus, in fringilla sem consectetur. Nam et magna magna. Ut libero arcu, lacinia eu dapibus quis, elementum ut dolor. Aenean dolor nisi, imperdiet vitae sem sed, laoreet pharetra elit. Ut dolor tortor, sagittis quis mi vitae, faucibus dignissim massa. Suspendisse a gravida justo. Nullam egestas sit amet felis eget pharetra. Duis rhoncus augue vitae tellus dignissim tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Phasellus id lorem quis dolor sodales fermentum. Pellentesque et magna magna. Donec feugiat lacus sed consequat mollis. Sed non pretium dui. Fusce scelerisque fringilla ultricies. Cras nec ipsum erat.

                Ut egestas, neque vitae fermentum lacinia, justo dolor maximus risus, vel luctus leo velit sed mi. Aliquam accumsan finibus est. Morbi hendrerit finibus metus, et fermentum risus euismod quis. In hac habitasse platea dictumst. Praesent a elementum est. Mauris laoreet ac neque tincidunt mattis. Fusce ultricies condimentum dolor, in suscipit risus pulvinar eu. Fusce erat nisi, hendrerit non aliquet quis, convallis nec turpis. Sed mattis efficitur justo nec luctus. Mauris vitae aliquam elit. Duis nec tortor egestas, pulvinar nunc sed, sagittis sapien. Phasellus mollis dui in molestie egestas.
              </div>

            </div>
            <div className="modal-footer">
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  {this.renderFooter()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
