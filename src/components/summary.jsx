import React, { Component } from 'react';

import { summary } from './input/info';

export class Summary extends Component {
  render() {
    return (
      <section className="summary">
        <h2>About me</h2>
        <p>{summary}</p>
      </section>
    )
  }
}