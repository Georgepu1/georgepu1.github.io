(this["webpackJsonpgp-site"]=this["webpackJsonpgp-site"]||[]).push([[0],{15:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(9),i=a.n(c),r=(a(15),a(3)),l=a(4),o=a(6),j=a(5),d=a(8),h=a(10),u=a.n(h),b=(a(18),a(0)),m=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.description,a=this.props.data.resumedownload,s=this.props.data.social.map((function(e){return Object(b.jsx)("li",{style:{padding:"10px"},children:Object(b.jsx)("a",{target:"_blank",href:e.url,children:Object(b.jsx)("i",{className:e.className})})},e.name)}));return Object(b.jsxs)("header",{id:"home",children:[Object(b.jsxs)("nav",{id:"nav-wrap",children:[Object(b.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(b.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(b.jsxs)("ul",{id:"nav",className:"nav",children:[Object(b.jsx)("li",{className:"current",children:Object(b.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})})]})]}),Object(b.jsx)("div",{className:"row banner",children:Object(b.jsxs)("div",{className:"banner-text",children:[Object(b.jsxs)("h1",{className:"responsive-headline",children:["Hey, I'm ",e,"."]}),Object(b.jsx)("h3",{children:t}),Object(b.jsx)("hr",{}),Object(b.jsxs)("ul",{className:"social",children:[s,Object(b.jsxs)("a",{style:{margin:"10px"},href:a,target:"_blank",className:"button",children:[Object(b.jsx)("i",{className:"fa fa-download"})," Resume"]})]})]})})]})}}]),a}(s.Component),O=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.school}),Object(b.jsxs)("p",{className:"info",children:[e.degree," ",Object(b.jsx)("span",{children:"\u2022"}),Object(b.jsx)("em",{className:"date",children:e.graduated})]}),Object(b.jsx)("p",{children:e.description})]},e.school)}));return Object(b.jsx)("section",{id:"resume",children:Object(b.jsxs)("div",{className:"row education",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Education"})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:Object(b.jsx)("div",{className:"row item",children:Object(b.jsx)("div",{className:"twelve columns",children:e})})})]})})}}]),a}(s.Component),p=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),s}return Object(l.a)(a,[{key:"getResumeData",value:function(){u.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){console.log(a),alert(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{data:this.state.resumeData.main}),Object(b.jsx)(O,{data:this.state.resumeData.resume})]})}}]),a}(s.Component),x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.533b0c8f.chunk.js.map