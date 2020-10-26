import React, { Component } from 'react';
import { education } from './input/education';


class EducationPositon extends Component {
  render() {
    return (
      <div className="position">
        <span className='degree'>{this.props.degree + " degree in "}</span>
        <span className='major'>{this.props.major}</span>
        <span className='dates'>{this.props.dates}</span>
        <span className='school'>{this.props.school}</span>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}

const educationSet = education.map((element, index) =>
  <EducationPositon key={index} dates={element.dates} major={element.major} degree={element.degree} school={element.school} desc={element.desc} />
);

export class EducationList extends Component {
  render() {
    return (
      <section className="education">
        <h3>Education</h3>
        {educationSet}
      </section>
    )
  }
}