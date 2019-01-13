import React from 'react';
import './style.css';

export default function DownloadButton(props) {
  return (
    <div className="download-container">
      {
        props.ready ? 
          <button
            className="download-button"
            onClick={props.onClick}
          >
            download
          </button>
        :
          <p className="download-wait-text">
            wait
          </p>
      }
    </div>
  )
}