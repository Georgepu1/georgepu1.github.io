import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
    }

    return (
      <section id="resume">
        <div className="row education">
          <div style={{ paddingBottom: '100px' }}> 
            <div className="three columns header-col">
              <h1><span>Blogs</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <div>
                      <a 
                        href="https://medium.com/convoy-tech/integrating-slack-with-amundsen-for-ease-of-data-discovery-ef3b54834da5" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ fontWeight: "bold" }}>
                        Integrating Slack with Amundsen for Ease of Data Discovery (Click to view)
                      </a>
                      <div>
                        Convoy Medium Tech Blog about my summer work on an Open Source data discovery engine.
                      </div>
                      <hr/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
                {console.log(education)}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;