import React, { Component } from 'react';
import { skillList, generalSkills } from './input/skills';


class Skill extends Component {

  render() {
    return (
      <div className="skill">
        <div className="desc">
          <span>{this.props.skill}</span>
          <span>{this.props.level + "%"}</span>
        </div>
        <ProgressBar level={this.props.level} />
      </div>
    )
  }
}

class ProgressBar extends Component {
  render() {
    return (
      <div className="progress-bar">
        <div className="progress-drag" style={{ width: `${this.props.level + "%"}` }}>
        </div>
      </div>
    )
  }
}

const skillSet = skillList.map((element, index) =>
  <Skill key={index} skill={element.skill} level={element.level} />
);

export class Skills extends Component {
  render() {
    return (
      <section className="skill-set">
        <h3>Technical skills</h3>
        {skillSet}
      </section>
    )
  }
}


// GENERAL SKILLS 

class Brick extends Component {
  render() {
    return (
      <div className="brick">
        <span>{this.props.brick}</span>
      </div>
    )
  }
}

const skillBricks = generalSkills.map((element, index) =>
  <Brick key={index} brick={element} />
);

export class GeneralSkills extends Component {
  render() {
    return (
      <section className="general-skills">
        <h3>Skills</h3>
        { skillBricks}
      </section>
    )
  }
}