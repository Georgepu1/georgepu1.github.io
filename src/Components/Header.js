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
               <div>Hey! I'm {name}. Currently,</div>
            </h1>
            <h3>
               <ul>
                  <li>- I'm an entering (Fall 21) first year graduate CS student at <a href="https://www.ucla.edu/" target="_blank" rel="noopener noreferrer">UCLA</a>,</li>
                  <li>- I'm actively doing research in NLP under <a href="https://shangjingbo1226.github.io/" target="_blank" rel="noopener noreferrer">Prof. Jingbo Shang (UCSD)</a>,</li>
                  <li>- I'm a SWE Intern at <a href="https://convoy.com/" target="_blank" rel="noopener noreferrer">Convoy</a> and have worked at <a href="https://www.americanexpress.com/" target="_blank" rel="noopener noreferrer">AMEX</a>/other startups, and </li>
                  <li>- I'm into gyming, hiking, sports (tennis/table tennis) and gaming (chess/valo)</li>
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