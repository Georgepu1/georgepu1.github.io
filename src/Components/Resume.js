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
              <h1><span>Blogs/Research</span></h1>
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
                  <div>
                      <a 
                        href="https://drive.google.com/file/d/1wEYD0OkM9VtW5x_egMUdMQYxcbipGgu-/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ fontWeight: "bold" }}>
                        A Robust Sentiment Analysis Regarding to Financial News Data (Click to view)
                      </a>
                      <div>
                        CS 269 (Fairness in NLP) Final Project &nbsp;
                        <a 
                          href="https://github.com/yw7vvAW611/CS269GroupProject/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ fontWeight: "bold" }}>
                          [Code] 
                        </a> &nbsp;
                        <a 
                          href="https://drive.google.com/file/d/1wiiiDME0hEsGfUcrZ899mUcxsb79jPp-/view" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ fontWeight: "bold" }}>
                          [Video]
                        </a>
                      </div>
                      <hr/>
                  </div>
                  <div>
                      <a 
                        href="https://medium.com/@georgepu/discovering-and-categorising-language-biases-in-reddit-literature-review-57f40e6dd7e0" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ fontWeight: "bold" }}>
                        Literature Review on "Discovering and Categorising Language Biases in Reddit" (Click to view)
                      </a>
                      <div>
                        CS 269 (Fairness in NLP).
                      </div>
                      <hr/>
                  </div>
                  <div>
                      <a 
                        href="https://drive.google.com/file/d/1W_etWs7Q6wvmT5_jVljHnPtPq9qAcpXT/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ fontWeight: "bold" }}>
                        Bias-Variance Tradeoff Under Noisy Dataset Labels: Where Smaller Models are Preferred (Click to view)
                      </a>
                      <div>
                        CS 260 (Machine Learning Algorithms) Final Project &nbsp;
                        <a 
                          href="https://github.com/Georgepu1/CS-260-Project" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ fontWeight: "bold" }}>
                          [Code] 
                        </a> &nbsp;
                        <a 
                          href="https://drive.google.com/file/d/13P38KDHs_sFH6Ai6ZqSkwkvriyjWLZMA/view?usp=sharing" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ fontWeight: "bold" }}>
                          [Slides]
                        </a>
                      </div>
                      <hr/>
                  </div>
                  <div>
                      <a 
                        href="https://drive.google.com/file/d/1hUUQnbwSLbBa2aMj7F1JuVfGxAqQuLSI/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ fontWeight: "bold" }}>
                        Knowledge Graph Entity Alignment (Click to view)
                      </a>
                      <div>
                        CS 245 (Big Data Analytics) Final Project &nbsp;
                        <a 
                          href="https://github.com/tluccs/CS245_final_project" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ fontWeight: "bold" }}>
                          [Code] 
                        </a>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;