import React, { Component } from 'react';
import { experience } from './input/experience';

export class ExperienceList extends Component {
  render() {

    const ExpList = ({ experience }) => (
      <div className="exp">
        {experience.map(element => (
          <Experience dates={element.dates} position={element.position} company={element.company} desc={element.description} resp={element.responsibilities} />
        ))}
      </div>
    );

    return (
      <section className="experience">
        <h2>{experience[0].company}</h2>
        <ExpList experience={experience} />
      </section>
    )
  }
}

class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <span>{this.props.dates}</span>
        <span>{this.props.position + " at"}</span>
        <span>{this.props.company}</span>
        <p>{this.props.desc}</p>
        <p>{this.props.resp}</p>
      </div>
    )
  }
}

// const Experience = ({ experience }) => (
//   <div className="experience">
//     {experience.map(element => (
//       <p>fdgdg</p>
//     ))}
//   </div>
// );

// export { Experience };