import React, { Component } from 'react';

export class Copyright extends Component {
  render() {
    return (
      <div className="copyright">
        <span>{new Date().getFullYear() + " Copyright © "} Polina Koriagina</span>
        <a href="https://github.com/bambi007"> <span>Designed by: </span>Bambi007</a>
      </div>
    )
  }
}