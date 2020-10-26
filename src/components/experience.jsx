import React, { Component } from 'react';
import { experience } from './input/experience';


const ExpList = ({ experience }) => (
  <div className="experience-list">
    {experience.map((element, index) => (
      <Experience key={index} dates={element.dates} position={element.position} company={element.company} desc={element.desc} resp={element.resp} />
    ))}
  </div>
);

export class ExperienceList extends Component {
  render() {

    return (
      <section className="experience">
        <h3>Experience</h3>
        <ExpList experience={experience} />
      </section>
    )
  }
}

class Experience extends Component {
  render() {
    return (
      <div className="position">
        <span className='dates'>{this.props.dates}</span>
        <span className='title'>{this.props.position}</span>
        <span className='company'>{" at " + this.props.company}</span>
        <p><span className='label'>Description: </span>{this.props.desc}</p>
        <p><span className='label'>Responsibilities: </span>{this.props.resp}</p>
      </div>
    )
  }
}