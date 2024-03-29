import React, { Component } from 'react';

class Header extends Component {
    render() {

        if (this.props.data) {
            var resumeDownload = this.props.data.resumedownload;
            var networks = this.props.data.social.map(function (network) {
                return <li style={{ padding: '10px' }} key={network.name}><a target="_blank" rel="noopener noreferrer" href={network.url}><i className={network.className}></i></a></li>
            })
        }

        return (
            <header id="home">

                <nav id="nav-wrap">

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul style={{ backgroundColor: 'white' }} id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#projs">Projects</a></li>
                        <li><a className="smoothscroll" href="#edu">Education</a></li>
                    </ul>

                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">
                            <div className="greeting-header">
                                <span class="wave">👋</span> Hey! I'm George.
                            </div>
                        </h1>
                        <h3>
                            <ul>
                                <li style={{ padding: '3px' }}>📚 Second year CS grad student at <a href="https://www.ucla.edu/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>UCLA</a> graduating June 2023</li>
                                <li style={{ padding: '3px' }}>🔎 Interested in better capturing the information around us with more intelligence and automation</li>
                                <li style={{ padding: '3px' }}>💻 ML Research Engineer intern at <a href="https://scale.com/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>Scale</a>, past: <a href="https://convoy.com/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>Convoy </a> (2x), <a href="https://www.americanexpress.com/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>AMEX</a>, and incubator startups</li>
                                <li style={{ padding: '3px' }}>📝 Publishing utility patents on <a href="https://patents.justia.com/patent/20210042662" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}> Interactive Information Capture and Retrieval with Prompts</a>, Dynamic Search Optimization (draft), etc.</li>
                                <li style={{ padding: '3px' }}>🧑‍🔬 Researching ML/NLP with the <a href="http://web.cs.ucla.edu/~kwchang/publications_area/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>UCLA-NLP</a> lab under <a href="http://web.cs.ucla.edu/~kwchang/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>Prof. Kai-Wei Chang</a>, past: <a href="https://shangjingbo1226.github.io/lab/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>SDLab</a> under <a href="https://shangjingbo1226.github.io/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold" }}>Jingbo Shang (UCSD)</a></li>
                                <li style={{ padding: '3px' }}>🏃‍♂️ Enjoy hiking, gyming, and playing/watching many sports 🎾🏓🏀! </li>
                            </ul>
                        </h3>
                        <div>Feel free to reach me at gnpu@g.ucla.edu</div>
                        <hr />
                        <ul className="social">
                            {networks}
                            <a style={{ margin: '10px' }} href={resumeDownload} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i> Resume</a>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;