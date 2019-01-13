import React, { Component } from 'react';
import DownloadButton from './components/download-button';
import Input from './components/input';
import Title from "./components/title";

import './App.css';

class App extends Component {
  state = {
    ready: false,
    cid: '',
    downloading: false,
  }

  downloadToBuffer = (cid) => {
    return new Promise((resolve, reject) => {
      this.node.files.get(cid, (err, files) => {
        if (!err && files.length === 1) {
          resolve(files[0].content);
        } else {
          reject();
        }
      });
    });
  }

  onChangeCid = (cid) => {
    this.setState({
      cid
    });
  }

  onDownloadClick = async () => {
    const { cid } = this.state;

    this.setState({
      downloading: true
    });

    try {
      const buffer = await this.downloadToBuffer(cid);
      const byteArray = new Uint8Array(buffer);
      const a = window.document.createElement('a');

      a.href = window.URL.createObjectURL(new Blob([byteArray], { type: 'application/octet-stream' }));
      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({
        downloading: false
      });
    }
  }

  cleanUp = () => {
    this.setState({
      cid: ''
    });
  }

  componentDidMount() {
    this.node = new window.Ipfs();

    this.node.on('ready', () => {
      this.setState({
        ready: true
      });
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.downloading ? 
            <div className="App-container">
              <p>
                downloading...
              </p>
            </div>
          :
            <div className="App-container">
              <Title>
                IPFS Content Downloader
              </Title>

              <Input
                onUpdateText={this.onChangeCid}
              />

              <DownloadButton 
                ready={this.state.ready}
                onClick={this.onDownloadClick}
              />
            </div>
        }
      </div>
    );
  }
}

export default App;
