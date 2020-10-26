import React, { Component } from 'react';
import { profilePicture, personalInfo, contactInfo } from './input/info';
import { GeneralSkills } from './skills';



export class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <ProfilePicture source={profilePicture} alt='profile picture' />
          <div className="info">
            <PersonalInfo name={personalInfo.name} position={personalInfo.position} />
            <ContactInfo phone={contactInfo.phone} email={contactInfo.email} />
          </div>
          <GeneralSkills />
        </div>
      </header>
    )
  }
}

class ProfilePicture extends Component {
  render() {
    return (
      <div className="profile-picture">
        <img src={this.props.source} alt={this.props.alt} />
      </div>
    )
  }
}

class PersonalInfo extends Component {
  render() {
    return (
      <div className='personal-info'>
        <h1>{this.props.name}</h1>
        <span>{this.props.position}</span>
      </div>
    )
  }
}

class ContactInfo extends Component {
  render() {
    return (
      <div className='contact-info'>
        <a href={"tel:+" + this.props.phone}><span>e-mail </span>{this.props.phone}</a>
        <a href={"mailto:" + this.props.email}><span>phone </span>{this.props.email}</a>
      </div>
    )
  }
}