(this["webpackJsonpj4s-react"]=this["webpackJsonpj4s-react"]||[]).push([[0],{178:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(37),c=a.n(s),o=(a(92),a(7)),l=a(14),i=(a(93),a(64),a(94),a(4)),u=a.n(i),m=a(5),p=a(8),d=a(9),h=a(11),b=a(10),f=a(16),v=new f.a;var E=function(e){var t=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),v.remove("userId"),v.remove("isLogged"),window.location.href="/Jobs4Students/signin";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(e.isLogged),e.isLogged?r.a.createElement(o.b,{className:"nav-link","aria-disabled":"true",to:"#",onClick:t},"LogOut"):r.a.createElement("div",{className:"row"},r.a.createElement(o.b,{className:"nav-link","aria-disabled":"true",to:"/Jobs4Students/signin"},"Login"),r.a.createElement(o.b,{className:"nav-link","aria-disabled":"true",to:"/Jobs4Students/signup"},"Sign Up"))},g=new f.a,N=g.get("userId"),w=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLogged:!1},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(this.state.isLogged),g.get("isLogged")&&this.setState({isLogged:!0}),console.log(this.state.isLogged);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(o.b,{className:"navbar-brand",to:"/Jobs4Students/"},"Jobs 4 Students"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement(o.b,{to:"/jobs",className:"nav-link dropdown-toggle",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Jobs"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement(o.b,{className:"dropdown-item",to:"/Jobs4Students/jobs"},"Search Job"),r.a.createElement(o.b,{className:"dropdown-item",to:"/Jobs4Students/create-job"},"Create Job"),r.a.createElement(o.b,{className:"dropdown-item",to:"/Jobs4Students/my-jobs/"+N},"My Jobs"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link","aria-disabled":"true",to:"/Jobs4Students/profile"},"Profile"))),r.a.createElement("ul",{className:"navbar-nav ml-auto mt-2 mt-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(E,{isLogged:this.state.isLogged})))))}}]),a}(n.Component),j=a(6),y=a.n(j),k=a(85),x=new f.a,O={userId:x.get("userId"),userName:x.get("userName")},S=a(51),A=a(74),C=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={jobs:[]},e.dayWithOutWeekend=function(e,t){var a=S(e,"YYYY-MM-DD"),n=S(t,"YYYY-MM-DD");return A.diff(a,n)},e.getJobs=Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://backendj4s.herokuapp.com/api/jobs");case 2:a=t.sent,e.setState({jobs:a.data});case 4:case"end":return t.stop()}}),t)}))),e.deleteJob=function(){var t=Object(m.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.delete("https://backendj4s.herokuapp.com/api/jobs/"+a);case 2:e.getJobs();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.doPostulation=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("https://backendj4s.herokuapp.com/api/postulacion/"+t,O);case 2:0===e.sent.data.res?alert("\xdda te postulaste anteeriormente a este empleo"):alert("Te postulaste");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getJobs();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.jobs.map((function(t){return r.a.createElement("div",{className:"col-md-6 mx-auto p-2",key:t._id},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header d-flex "},r.a.createElement("div",{className:"mx-auto"},r.a.createElement("h2",null,t.title))),r.a.createElement("div",{className:"card-subtitle text-sm-right mr-2"},r.a.createElement(k.a,{datetime:t.createdAt})),r.a.createElement("div",{className:"card-body mx-auto"},r.a.createElement("p",null,e.dayWithOutWeekend(t.duration.dateStart,t.duration.dateEnd)," Days work"),r.a.createElement("h5",null,"Description"),r.a.createElement("p",null,t.description),r.a.createElement("h5",null,"Address"),r.a.createElement("p",null,t.address)),r.a.createElement("div",{className:" row pb-3 m-auto"},r.a.createElement("button",{className:"btn btn-primary btn-circle btn-xl",onClick:function(){e.doPostulation(t._id)}},"Aplicar"))))})))}}]),a}(n.Component),D=a(31),J=a(62),I=a.n(J),L=(a(118),a(82)),Y=a.n(L),M=(new f.a).get("userId"),U=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:"",description:"",address:"",dateStart:new Date,dateEnd:new Date,edit:!1},e.onSubmit=function(){var t=Object(m.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n={title:e.state.title,description:e.state.description,address:e.state.address,duration:{dateStart:e.state.dateStart,dateEnd:e.state.dateEnd},userId:M},!1!==e.state.edit){t.next=7;break}return t.next=5,y.a.post("https://backendj4s.herokuapp.com/api/jobs/",n);case 5:t.next=9;break;case 7:return t.next=9,y.a.put("https://backendj4s.herokuapp.com/api/jobs/"+e.props.match.params.id,n);case 9:e.props.history.push("/my-jobs/"+M);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onChangeDateStart=function(t){e.setState({dateStart:t})},e.onChangeDateEnd=function(t){e.setState({dateEnd:t})},e.onInputChange=function(){var t=Object(m.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState(Object(D.a)({},a.target.name,a.target.value));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"H3Text",value:function(e){var t=e.edit;return console.log(t),t?r.a.createElement("h3",{align:"center"},"Edit Job"):r.a.createElement("h3",{align:"center"},"New Job")}},{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.match.params.id){e.next=5;break}return e.next=3,y.a.get("https://backendj4s.herokuapp.com/api/jobs/"+this.props.match.params.id);case 3:t=e.sent,this.setState({title:t.data.title,description:t.data.description,address:t.data.address,dateStart:new Date(t.data.duration.dateStart),dateEnd:new Date(t.data.duration.dateEnd),edit:!0});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"card card-body col-md-6 mx-auto mt-3"},r.a.createElement("div",{align:"center"},r.a.createElement("img",{src:Y.a,alt:"Job"})),r.a.createElement("form",null,r.a.createElement(this.H3Text,{edit:this.state.edit}),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",required:!0,placeholder:"Title",value:this.state.title,name:"title",onChange:this.onInputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",required:!0,placeholder:"Description",value:this.state.description,name:"description",onChange:this.onInputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",required:!0,placeholder:"Address",name:"address",value:this.state.address,onChange:this.onInputChange})),r.a.createElement("div",{className:"row  ",align:"center"},r.a.createElement("div",{className:"form-group col-6"},r.a.createElement("label",null,"Date Start"),r.a.createElement(I.a,{className:"form-control ml-1",name:"dateStart",required:!0,selected:this.state.dateStart,onChange:this.onChangeDateStart})),r.a.createElement("div",{className:"form-group col-6"},r.a.createElement("label",null,"Date End"),r.a.createElement(I.a,{className:"form-control ml-1",name:"dateEnd",required:!0,selected:this.state.dateEnd,onChange:this.onChangeDateEnd}))),r.a.createElement("div",{className:"form-group mx-auto col-md-4"},r.a.createElement("button",{className:"btn btn-success form-control",onClick:this.onSubmit}," Submit"))))}}]),a}(n.Component),H=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-white text-justify"},r.a.createElement("main",{role:"main",className:"inner cover"},r.a.createElement("h1",{className:"cover-heading",align:"center"},"WELCOME TO JOBS 4 STUDENTS"),r.a.createElement("p",{className:"lead"},"Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own."),r.a.createElement("p",{className:"lead"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi in enim fuga, beatae consequatur voluptates suscipit repellat illum quia dolorem atque praesentium nostrum nihil accusantium odit unde distinctio ipsa!")),r.a.createElement("footer",{className:"mastfoot mt-auto"},r.a.createElement("div",{className:"inner"},r.a.createElement("p",{align:"center"},"Cover template for ",r.a.createElement(o.b,{to:"https://getbootstrap.com/"},"Bootstrap"),", by ",r.a.createElement("a",{href:"https://www.facebook.com/javier.ruizzcadena"},"@FJRC"),"."))))}}]),a}(n.Component),P=a(51),q=a(74),R=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={jobs:[]},e.dayWithOutWeekend=function(e,t){var a=P(e,"YYYY-MM-DD"),n=P(t,"YYYY-MM-DD");return q.diff(a,n)},e.getJobs=Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://backendj4s.herokuapp.com/api/jobs/myjobs/"+e.props.match.params.id);case 2:a=t.sent,e.setState({jobs:a.data});case 4:case"end":return t.stop()}}),t)}))),e.deleteJob=function(){var t=Object(m.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.delete("https://backendj4s.herokuapp.com/api/jobs/"+a);case 2:return t.next=4,y.a.delete("https://backendj4s.herokuapp.com/api/postulacion/job/"+a);case 4:e.getJobs();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getJobs();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.jobs.map((function(t){return r.a.createElement("div",{className:"col-md-6 mx-auto p-2",key:t._id},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header d-flex justify-content-between"},r.a.createElement("h2",{className:"mx-auto"},t.title)),r.a.createElement("p",{className:"card-subtitle mb-2 text-muted mx-auto pt-2 pb-0"},e.dayWithOutWeekend(t.duration.dateStart,t.duration.dateEnd)," Days"),r.a.createElement("div",{className:"card-body mx-auto"},r.a.createElement("h5",null,"Description"),r.a.createElement("p",null,t.description),r.a.createElement("h5",null,"Address"),r.a.createElement("p",null,t.address)),r.a.createElement("div",{className:" row pb-3 m-auto"},r.a.createElement("button",{className:"btn btn-danger mr-2",onClick:function(){e.deleteJob(t._id)}},"Delete"),r.a.createElement(o.b,{className:"btn btn-secondary fat",to:"/Jobs4Students/edit/"+t._id},"Edit"),r.a.createElement(o.b,{className:"btn btn-info fat ml-3",to:"/Jobs4Students/postulations/"+t._id},"View postulations"))))})))}}]),a}(n.Component),W=new f.a,B=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={userName:"",password:""},e.login=function(){var t=Object(m.a)(u.a.mark((function t(a){var n,r,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={userName:e.state.userName,password:e.state.password},t.next=4,y.a.post("https://backendj4s.herokuapp.com/api/users/signin",n);case 4:(r=t.sent).data.length>0?(s=r.data[0],W.set("userId",s._id,{path:"/",sameSite:"lax",secure:!0}),W.set("isLogged",!0,{path:"/",sameSite:"lax",secure:!0}),W.set("userName",s.username,{path:"/",sameSite:"lax",secure:!0}),e.props.history.push("/Jobs4Students/jobs")):alert("Incorrecto");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.inputChange=function(t){e.setState(Object(D.a)({},t.target.name,t.target.value))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){W.get("isLogged")&&this.props.history.push("/jobs")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container p-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 mx-auto"},r.a.createElement("div",{className:"card test-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"SignIn")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"userName",value:this.state.userName,onChange:this.inputChange,placeholder:"Username",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.inputChange,placeholder:"Password",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-success btn-block",onClick:this.login},"SignIn")),r.a.createElement("div",{className:"row"},r.a.createElement("p",null,"New User? "),r.a.createElement("a",{className:"ml-2",href:"/signup"},"Sing Up"))))))))}}]),a}(n.Component),F=a(86),Q=new f.a,T=function(e){var t=e.component,a=Object(F.a)(e,["component"]);return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return Q.get("isLogged")?r.a.createElement(t,e):r.a.createElement(l.a,{to:"/Jobs4Students/signin"})}}))},K=new f.a,z=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={fullName:"",userName:"",email:"",password:"",age:Date(),schoolName:""},e.signUp=function(){var t=Object(m.a)(u.a.mark((function t(a){var n,r,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={fullName:e.state.fullName,userName:e.state.userName,email:e.state.email,password:e.state.password,age:e.state.age,schoolName:e.state.schoolName},t.next=4,y.a.post("https://backendj4s.herokuapp.com/api/users",n);case 4:200===(r=t.sent).status?(s=r.data,K.set("userId",s._id,{path:"/",sameSite:"lax",secure:!0}),K.set("isLogged",!0,{path:"/",sameSite:"lax",secure:!0}),e.props.history.push("/profile")):alert("Incorrecto");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.inputChange=function(t){e.setState(Object(D.a)({},t.target.name,t.target.value))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){K.get("isLogged")&&this.props.history.push("/Jobs4Students/jobs")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container p-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 mx-auto"},r.a.createElement("div",{className:"card test-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"SignUp")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"fullName",value:this.state.fullName,onChange:this.inputChange,placeholder:"Full name",className:"form-control",required:!0,autoFocus:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"userName",value:this.state.userName,onChange:this.inputChange,placeholder:"Username",className:"form-control",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:this.inputChange,placeholder:"Email",className:"form-control",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"date",name:"age",value:this.state.age,onChange:this.inputChange,required:!0,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"schoolName",value:this.state.schoolName,onChange:this.inputChange,placeholder:"School Name",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.inputChange,placeholder:"Password",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-success btn-block",onClick:this.signUp},"Sign Up"))))))))}}]),a}(n.Component),_=(new f.a).get("userId"),X=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={fullName:"",userName:"",email:"",password:"",age:Date(),schoolName:""},e.getData=Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("http://localhost:3001/api/users/"+_);case 2:a=t.sent,e.setState({fullName:a.data.fullName,userName:a.data.userName,email:a.data.email,schoolName:a.data.schoolName});case 4:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getData();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container col-5 pt-4 "},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",{className:"text-center font-weight-bold"},this.state.userName)),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"text-center pb-4 font-weight-bold"},"Personal Information"),r.a.createElement("div",null,r.a.createElement("div",{className:"row"}),r.a.createElement("h4",{className:"pb-3"},"Full Name: ",this.state.fullName),r.a.createElement("h4",{className:"pb-3"},"Email: ",this.state.email),r.a.createElement("h4",{className:"pb-3"},"School: ",this.state.schoolName)),r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center font-weight-bold"},r.a.createElement(o.b,{to:"/my-postulation/"+_},"My postulations"))),r.a.createElement("div",null,r.a.createElement("h4",{className:"pb-3 text-center"},"Status: Active")))))}}]),a}(n.Component),G=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={jobInfo:[],postulations:[]},e.getData=Object(m.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://backendj4s.herokuapp.com/api/jobs/"+e.props.match.params.id);case 2:return a=t.sent,t.next=5,y.a.get("https://backendj4s.herokuapp.com/api/postulacion/"+e.props.match.params.id);case 5:n=t.sent,e.setState({jobInfo:a.data,postulations:n.data});case 7:case"end":return t.stop()}}),t)}))),e.deletePostulation=function(){var t=Object(m.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.delete("https://backendj4s.herokuapp.com/api/postulacion/"+a);case 2:e.getData();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectApplicant=function(){var t=Object(m.a)(u.a.mark((function t(a,n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.put("https://backendj4s.herokuapp.com/api/postulacion/",{idJob:n,idPostulation:a});case 2:r=t.sent,console.log(r.data.res),0===r.data.res?alert("Ya haz seleccionado"):e.getData();case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getData();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center text-white"},"Postulations"),r.a.createElement("h3",{className:"text-center text-white"},"Job  ",this.state.jobInfo.title),r.a.createElement("p",{className:"text-center text-white"},"You have ",this.state.postulations.length," persons interested in your job")),r.a.createElement("div",null,r.a.createElement("table",{className:"table table-bordered col-8 mx-auto"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Number"),r.a.createElement("th",{scope:"col"},"Date"),r.a.createElement("th",{scope:"col"},"Status"),r.a.createElement("th",{scope:"col"},"Options"))),r.a.createElement("tbody",null,this.state.postulations.map((function(t){return r.a.createElement("tr",{className:"table-light",key:t._id},r.a.createElement("th",{scope:"row"},r.a.createElement(o.b,{to:"/Jobs4Students/userProfile/"+t.idApplicant},e.state.postulations.indexOf(t)+1)),r.a.createElement("td",null,t.Date),r.a.createElement("td",null,t.status),r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-danger fat",onClick:function(){return e.deletePostulation(t._id)}},"Delete"),r.a.createElement(o.b,{className:"btn btn-success fat ml-3",to:"#",onClick:function(){return e.selectApplicant(t._id,e.state.jobInfo._id)}},"Select"))))}))))))}}]),a}(n.Component),V=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={myPostulations:[]},e.getData=Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://backendj4s.herokuapp.com/api/postulacion/my_postulation/"+e.props.match.params.id);case 2:a=t.sent,e.setState({myPostulations:a.data});case 4:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-bordered col-8 mx-auto"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Number"),r.a.createElement("th",{scope:"col"},"Date"),r.a.createElement("th",{scope:"col"},"Status"),r.a.createElement("th",{scope:"col"},"Options"))),r.a.createElement("tbody",null,this.state.myPostulations.map((function(t){return r.a.createElement("tr",{className:"table-light",key:t._id},r.a.createElement("th",{scope:"row"},e.state.myPostulations.indexOf(t)+1),r.a.createElement("td",null,t.Date),r.a.createElement("td",null,t.status),r.a.createElement("td",null))})))))}}]),a}(n.Component),Z=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={fullName:"",userName:"",email:"",age:Date(),schoolName:""},e.getData=Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://backendj4s.herokuapp.com/api/users/"+e.props.match.params.userId);case 2:a=t.sent,console.log(a),e.setState({fullName:a.data.fullName,userName:a.data.userName,email:a.data.email,schoolName:a.data.schoolName});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getData();case 2:console.log(this.state);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container col-5 pt-4 "},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",{className:"text-center font-weight-bold"},this.state.userName)),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"text-center pb-4 font-weight-bold"},"Personal Information"),r.a.createElement("div",null,r.a.createElement("div",{className:"row"}),r.a.createElement("h4",{className:"pb-3"},"Full Name: ",this.state.fullName),r.a.createElement("h4",{className:"pb-3"},"Email: ",this.state.email),r.a.createElement("h4",{className:"pb-3"},"School: ",this.state.schoolName)))))}}]),a}(n.Component);a(178);var $=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(w,{component:E}),r.a.createElement("div",null,r.a.createElement(l.b,{path:"/Jobs4Students/signin",component:B}),r.a.createElement(l.b,{path:"/Jobs4Students/signup",component:z}),r.a.createElement(l.b,{exact:!0,path:"/Jobs4Students/",component:H}),r.a.createElement(T,{exact:!0,path:"/Jobs4Students/postulations/:id",component:G}),r.a.createElement(T,{exact:!0,path:"/Jobs4Students/jobs",component:C}),r.a.createElement(T,{exact:!0,path:"/Jobs4Students/my-jobs/:id",component:R}),r.a.createElement(T,{exact:!0,path:"/Jobs4Students/profile",component:X}),r.a.createElement(T,{path:"/Jobs4Students/create-job",component:U}),r.a.createElement(T,{path:"/Jobs4Students/edit/:id",component:U}),r.a.createElement(T,{path:"/Jobs4Students/my-postulation/:id",component:V}),r.a.createElement(T,{path:"/Jobs4Students/userProfile/:userId",component:Z}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root"))},82:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAACK0lEQVR4nO3ZsWtTURQG8Lt2FxSX0r/AUYKLIH3nIlq07x4HobRQWqJJDdEm797o6CRUSFO6OTl07d9QigiKdpEiKg4VJ+3SLopQF53sI973cu952u+Dbz2c8+MmBKIUgiAIgiBDYpm0M3rDGdp1TAeO9ZFvLdOhNfqpS5Nr0veMLNl1OueYXhcBGdJPjnVN+r5S6aWaHOtvAXB+vSj9w6aUSt9ZKC5NzoeC+aPTkxek7/WOZf0xFpBleid9r1cc00y01/O7JrkiffdfxxrazPnO2HecmHtXL57ynfmAkwnLes4Z+nLsbENPQtwSJHlH9FK6UXp2qmdzPmYvR7F7lOR9DNpcGys7uzs1efb4+fR1FLtHSR7QvzI/eAA0JCcOaKW1kPWX63tr2dLR/9D+cn1vpbWQlYZ5OH9zvN+59UH6oFBd7TR2H92eO1MYaNBt7kgfEbz2zvNCOI/bi23x5WO125j1BlrtNN6ILx7tFbW2vYHWsqXv4otH6rpr7XsDDbKm+OKxOsia/j8RAAQgAAEIQACqRAEEIAABCEAVbiGg6H/8CRdAAAIQgABU4QIIQAACEIAqXAABCEAAAlCFCyAAAQhAAKpwvYEs06H00vFKB/4vyOgX8otHA3pW4AUli/KLRwOa8QZSSilr9Cv55QPX0FYhHKWUuj99edyxfit+RKBapp3e1KXThYGUUqrNtTHH+q4z9Fn6oBH2vU2pXgoGQRAEQRAEOdn5CRRnOqz17lHjAAAAAElFTkSuQmCC"},87:function(e,t,a){e.exports=a(179)},92:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.30c8b0e2.chunk.js.map