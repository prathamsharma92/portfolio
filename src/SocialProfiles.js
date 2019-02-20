import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
  render() {
    const {link, image} = this.props.profile;
    return(
      <span>
        <a href={link} target="_blank"><img src={image} alt="image" style={{ width: 50, height: 50, margin: 10}} /></a>
      </span>
    );
  }
}

class SocialProfiles extends Component {
  render() {
    return(
      <div>
        <h3>Connect with me!</h3>
        {
          SOCIAL_PROFILES.map(SP => {
            return( < SocialProfile key={SP.id} profile={SP} /> );
          })
        }
      </div>
    )
  }
}

export default SocialProfiles;
