import React, { Component } from 'react';

class Education extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
            <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
            <div style={{fontWeight: "bold"}}>Selected Courses</div>
            {education.courses.map((course) => <div><em className="date">{course}</em><span/></div>)}
            <hr/>
        </div>
      })
    }

    return (
      <section id="edu">
        <div className="row education">
          <div style={{ paddingBottom: '100px' }}> 
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
                <div className="row item">
                <div className="twelve columns">
                    {education}
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;