(this["webpackJsonpgp-site"]=this["webpackJsonpgp-site"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(9),r=n.n(c),i=(n(15),n(3)),l=n(4),o=n(6),j=n(5),d=n(8),h=n(10),b=n.n(h),u=(n(18),n(0)),m=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.resumedownload,n=this.props.data.social.map((function(e){return Object(u.jsx)("li",{style:{padding:"10px"},children:Object(u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.url,children:Object(u.jsx)("i",{className:e.className})})},e.name)}));return Object(u.jsxs)("header",{id:"home",children:[Object(u.jsxs)("nav",{id:"nav-wrap",children:[Object(u.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(u.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(u.jsxs)("ul",{style:{backgroundColor:"white"},id:"nav",className:"nav",children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#resume",children:"More"})})]})]}),Object(u.jsx)("div",{className:"row banner",children:Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsx)("h1",{className:"responsive-headline",children:Object(u.jsxs)("div",{children:["Hey! I'm ",e,". Currently,"]})}),Object(u.jsx)("h3",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"- I'm an entering (Fall 21) first year graduate CS student at UCLA,"}),Object(u.jsxs)("li",{children:["- I'm actively doing research in NLP under ",Object(u.jsx)("a",{href:"https://shangjingbo1226.github.io/",target:"_blank",rel:"noopener noreferrer",children:"Prof. Jingbo Shang (UCSD)"}),","]}),Object(u.jsx)("li",{children:"- I'm a SWE Intern at Convoy and have worked at AMEX/other startups, and "}),Object(u.jsx)("li",{children:"- I'm into gyming, hiking, sports (tennis/table tennis) and gaming (chess/valo)"})]})}),Object(u.jsx)("div",{children:"Feel free to reach me at gnpu@g.ucla.edu"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("ul",{className:"social",children:[n,Object(u.jsxs)("a",{style:{margin:"10px"},href:t,target:"_blank",rel:"noopener noreferrer",className:"button",children:[Object(u.jsx)("i",{className:"fa fa-download"})," Resume"]})]})]})})]})}}]),n}(a.Component),O=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.school}),Object(u.jsxs)("p",{className:"info",children:[e.degree," ",Object(u.jsx)("span",{children:"\u2022"}),Object(u.jsx)("em",{className:"date",children:e.graduated})]}),Object(u.jsx)("p",{children:e.description})]},e.school)}));return Object(u.jsx)("section",{id:"resume",children:Object(u.jsxs)("div",{className:"row education",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Education"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"row item",children:Object(u.jsx)("div",{className:"twelve columns",children:e})})})]})})}}]),n}(a.Component),p=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),a}return Object(l.a)(n,[{key:"getResumeData",value:function(){b.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,n){console.log(n),alert(n)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m,{data:this.state.resumeData.main}),Object(u.jsx)(O,{data:this.state.resumeData.resume})]})}}]),n}(a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.7bfcff48.chunk.js.map