import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var description= this.props.data.description;
      var resumeDownload = this.props.data.resumedownload;
      var networks= this.props.data.social.map(function(network){
        return <li style={{padding: '10px'}} key={network.name}><a target="_blank" href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            {/* <li><a className="smoothscroll" href="#about">About</a></li> */}
	         <li><a className="smoothscroll" href="#resume">More</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Hey, I'm {name}.</h1>
            <h3>{description}</h3>
            <hr />
            <ul className="social">
               {networks}
               <a style={{margin: '10px'}} href={resumeDownload} target="_blank" className="button"><i className="fa fa-download"></i> Resume</a>
            </ul>
         </div>
      </div>
   </header>
    );
  }
}

export default Header;