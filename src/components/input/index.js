import React from 'react';
import QrReader from "react-qr-reader";
import './style.css';

export default class Input extends React.Component {

  state = {
    value: '',
    qrcodeOpen: false
  }

  onChange = (ev) => {
    this.setState({
      value: ev.target.value
    }, () => this.props.onUpdateText(this.state.value));
  }

  handleError = (err) => {
    console.error(err);
  }

  handleScan = (data) => {
    if (typeof data === 'string') {
      this.setState({
        value: data
      }, () => {
        this.props.onUpdateText(this.state.value);
        this.handleReadQRCode()
      });
    }
  }

  handleReadQRCode = () => {
    this.setState({
      qrcodeOpen: !this.state.qrcodeOpen
    });
  }

  render() {
    return (
      <div>
        {
          this.state.qrcodeOpen ? 
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: "100%" }}
          />
          :
          <div className="input-container">
            <input
              className="input-container__input"
              placeholder="IPFS CID"
              onChange={this.onChange}
              value={this.state.value}
            />

            <button
              className="input-container__button"
              onClick={this.handleReadQRCode}>
              QRCODE
            </button>
          </div>
        }
      </div>
    )
  }
}