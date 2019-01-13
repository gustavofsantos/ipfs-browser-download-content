import React, { Component } from 'react';
import './App.css';
import DownloadButton from './components/download-button';
import Input from './components/input';

class App extends Component {
  state = {
    ready: false,
    cid: ''
  }

  downloadToBuffer = (cid) => {
    console.log('download from cid', cid);
    return new Promise((resolve, reject) => {
      const stream = this.node.files.getReadableStream(cid);

      stream.on('data', file => {
        if (file.type !== 'dir') {
          file.content.on('data', data => {
            resolve(data);
          });
          file.content.resume();
        } else {
          reject('The CID represents a directory. Only files are supported yet.');
        }
      })
    })
  }

  onChangeCid = (cid) => {
    this.setState({
      cid
    });
  }

  onDownloadClick = async () => {
    const { cid } = this.state;

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
    }
  }

  cleanUp = () => {
    this.setState({
      cid: ''
    });
  }

  startLookPeers = () => {
    setInterval(() => {
      this.node.swarm.peers((err, peers) => {
        if (!err) {
          console.log(peers);
        }
      });
    }, 5000);
  }

  componentDidMount() {
    this.node = new window.Ipfs();

    this.node.on('ready', () => {
      this.setState({
        ready: true
      });
    });

    this.startLookPeers();
  }

  render() {
    return (
      <div className="App">
        <Input
          onUpdateText={this.onChangeCid}
        />

        <DownloadButton 
          ready={this.state.ready}
          onClick={this.onDownloadClick}
        />
      </div>
    );
  }
}

export default App;
