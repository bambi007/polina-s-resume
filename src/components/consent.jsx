import React, { Component } from 'react';
import { consent } from './input/consent';

export class Consent extends Component {
  render() {
    return (
      <section className="consent">
        <p>{consent}</p>
      </section>
    )
  }
}