import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var resumeDownload = this.props.data.resumedownload;
      var networks= this.props.data.social.map(function(network){
        return <li style={{padding: '10px'}} key={network.name}><a target="_blank" rel="noopener noreferrer" href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul style={{backgroundColor: 'white'}}id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            {/* <li><a className="smoothscroll" href="#about">About</a></li> */}
	         <li><a className="smoothscroll" href="#resume">More</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">
               <div>Hey! I'm {name}</div>
            </h1>
            <h3>
               <ul>
                  I'm a first year graduate CS student at <a href="https://www.ucla.edu/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>UCLA</a>. 
                      My technical interests are in  intelligent information extraction, organization, generation, and delivery. 
                      I've co-authored a patent application on prompt-based and interactive info capture and retrieval (with ML/DL/NLP/CV techniques), and I am working on other patent/technical areas for intelligent navigation and search result optimization. 
                      Along with this, I'm actively researching ML/DL/NLP (Current: <a href="http://web.cs.ucla.edu/~kwchang/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>Prof. Kai-Wei Chang @ UCLA</a>; Past: <a href="https://shangjingbo1226.github.io/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>Prof. Jingbo Shang @ UCSD</a>). 
                      I've been a SWE Intern at <a href="https://convoy.com/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>Convoy </a> (2x), <a href="https://www.americanexpress.com/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>AMEX</a>, and incubator startups.
                      Lastly, I'm into gyming, traveling/hiking, and sports (tennis/table tennis).
                  
                  {/* <li>- interested in intelligent information extraction, organization, generation, and delivery</li> */}
                  {/* <li>- working on utility patents and tech associated with "Interactive Information Capture and Retrieval", intelligent navigation, and search optimization</li>
                  <li>- actively researching ML/DL/NLP (Past: <a href="https://shangjingbo1226.github.io/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>Prof. Jingbo Shang @ UCSD</a>)</li>
                  <li>- a SWE Intern at <a href="https://convoy.com/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>Convoy </a> (returning), <a href="https://www.americanexpress.com/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>AMEX</a>, and incubator startups</li>
                  <li>- into gyming, traveling/hiking, and sports (tennis/table tennis) 🏃</li> */}
               </ul>
            </h3>
            <div>Feel free to reach me at gnpu@g.ucla.edu</div>
            <hr />
            <ul className="social">
               {networks}
               <a style={{margin: '10px'}} href={resumeDownload} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i> Resume</a>
            </ul>
         </div>
      </div>
   </header>
    );
  }
}

export default Header;