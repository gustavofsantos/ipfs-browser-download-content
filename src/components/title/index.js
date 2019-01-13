import React from 'react';
import './style.css';

export default function Title(props) {

  const title = 'IPFS Downloader';

  return (
    <div className="title-container">
      <p className="title-text">
        { props.children || title }
      </p>
    </div>
  )
}