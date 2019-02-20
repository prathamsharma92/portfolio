import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';

class App extends Component {
    constructor() {
     super();
     this.state = {displayBio: false};
     this.toggleThisBio = this.toggleThisBio.bind(this);
     // this.readLess = this.readLess.bind(this);
    }

    toggleThisBio(){
      var cll = this.state.displayBio === true ? false : true;
      this.setState({displayBio: cll});
    }
    // readLess(){
    //  this.setState({displayBio: false});
    // }

    render() {
     // const bio = this.state.displayBio ? (
     //     <div>
     //     <p>welcome</p>
     //     <p>to react</p>
     //     </div>
     //     ) : null;
     // if(!this.state.displayBio){
     //     bio = null;
     // }

     return(
       <div>
         <img src={profile} alt='profile-image' className='profile'/>
         <h1>Hello,</h1>
         <p>My name is Pratham. I'm a software engineer.</p>
         <p>I like to look for new things.</p>
         {this.state.displayBio ? (
         <div>
         <p>Welcome to react</p>
         <button onClick = {this.toggleThisBio}>Read less</button>
         </div>
         ) : (
           <button onClick = {this.toggleThisBio}>Read more</button>
         )}
         <hr/>
         <Projects/>
         <hr/>
         <SocialProfiles/>
       </div>
     )
    }
}

export default App;
