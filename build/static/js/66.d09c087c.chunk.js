(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{256:function(e,a,t){"use strict";var l=t(267),n=t.n(l).a.create({baseURL:"http://localhost:3008/",timeout:1e4,withCredentials:!0});a.a=n},545:function(e,a,t){"use strict";t.r(a);var l,n=t(293),o=t(85),s=t(86),r=t(88),c=t(87),i=t(89),m=t(90),h=t(0),g=t.n(h),u=t(250),d=t(249),p=t(251),E=t(253),v=t(252),b=t(525),f=t(521),y=t(522),k=t(299),N=t(300),w=t(285),C=t(269),_=t(248),P=t(290),F=t(286),I=t(287),O=t(288),j=t(256),x=t(240),T=t.n(x),S=function(e){function a(e,t){var s,i;return Object(o.a)(this,a),(i=Object(r.a)(this,Object(c.a)(a).call(this,e))).onChangeHandler=function(e){var a=new FormData;a.append("file",e.target.files[0]),j.a.post("/api/gallery/store",a,{}).then(function(e){i.showAllImage()})},i.toggle=i.toggle.bind(Object(m.a)(Object(m.a)(i))),i.toggleFade=i.toggleFade.bind(Object(m.a)(Object(m.a)(i))),i.toggle=i.toggle.bind(Object(m.a)(Object(m.a)(i))),i.togglePrimary=i.togglePrimary.bind(Object(m.a)(Object(m.a)(i))),i.state=(s={collapse:!0,fadeIn:!0,timeout:300,primary:!1,modal:!1,activeTab:"1",name:"",description:"",author:"",selectedFile:null,imageName:"",namecompany:"",address:"",hotline:"",phone:"",website:"",email:"",facebook:"",gplus:""},Object(n.a)(s,"website",""),Object(n.a)(s,"gallerys",[]),Object(n.a)(s,"lang","vi"),Object(n.a)(s,"slogan",""),Object(n.a)(s,"title_seo",""),Object(n.a)(s,"description_seo",""),Object(n.a)(s,"keyword_seo",""),s),l=Object(m.a)(Object(m.a)(i)),i}return Object(i.a)(a,e),Object(s.a)(a,[{key:"toggle",value:function(e){l.setState({collapse:!l.state.collapse}),this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"toggleFade",value:function(){l.setState(function(e){return{fadeIn:!e}})}},{key:"togglePrimary",value:function(e){this.setState({imageName:e.target.value}),this.showAllImage(),this.setState({primary:!this.state.primary})}},{key:"changePrice",value:function(e){l.setState({price:e.target.value})}},{key:"changeName",value:function(e){l.setState({name:e.target.value})}},{key:"changeDescription",value:function(e){l.setState({description:e.target.value})}},{key:"componentDidMount",value:function(){console.log(l.props.match.params.lang),this.getItemPost(),this.getAllImage()}},{key:"getItemPost",value:function(){l.setState({lang:l.props.match.params.lang}),j.a.get("/api/setting/show/"+l.props.match.params.lang).then(function(e){l.setState({lang:e.data.lang,name:e.data.name,slogan:e.data.slogan,namecompany:e.data.namecompany,address:e.data.address,logo:e.data.logo,favicon:e.data.favicon,hotline:e.data.hotline,phone:e.data.phone,email:e.data.email,facebook:e.data.facebook,gplus:e.data.gplus,website:e.data.website,title_seo:e.data.title_seo,description_seo:e.data.description_seo,keyword_seo:e.data.keyword_seo})})}},{key:"savePost",value:function(){var e={lang:l.props.match.params.lang,name:l.state.name,namecompany:l.state.namecompany,address:l.state.address,logo:l.state.logo,favicon:l.state.favicon,hotline:l.state.hotline,phone:l.state.phone,email:l.state.email,facebook:l.state.facebook,gplus:l.state.gplus,website:l.state.website,title_seo:l.state.title_seo,description_seo:l.state.description_seo,keyword_seo:l.state.keyword_seo};j.a.post("/api/setting/update/"+l.props.match.params.lang,e).then(function(e){console.log(e)})}},{key:"getAllImage",value:function(){j.a.get("/api/gallery/getAll").then(function(e){l.setState({gallerys:e.data})})}},{key:"getIdImage",value:function(e){var a=this;j.a.get("/api/gallery/show/"+e).then(function(e){"logo"==a.state.imageName?l.setState({logoNumber:e.data._id,logoPath:e.data.path}):"favicon"==a.state.imageName?l.setState({faviconNumber:e.data._id,faviconPath:e.data.path}):l.setState({logoNumber:"",logoPath:"",faviconNumber:"",faviconPath:""})})}},{key:"logoNumbers",value:function(){return""!=l.state.logoNumber?g.a.createElement("input",{name:"logo",className:"hidden",value:l.state.logoNumber}):""}},{key:"logoPath",value:function(){return""!=l.state.logoPath?g.a.createElement("img",{src:"http://localhost:3008/"+l.state.logoPath}):""}},{key:"faviconNumbers",value:function(){return""!=l.state.logoNumber?g.a.createElement("input",{name:"logo",className:"hidden",value:l.state.faviconNumber}):""}},{key:"faviconPath",value:function(){return""!=l.state.logoPath?g.a.createElement("img",{src:"http://localhost:3008/"+l.state.faviconPath}):""}},{key:"showAllImage",value:function(){return l.state.gallerys.map(function(e,a){return g.a.createElement(u.a,{xs:"6",sm:"3",className:"text-center flol"},g.a.createElement("div",{className:"colItemImage"},g.a.createElement("div",{color:"warning",className:"divItemImage"},g.a.createElement("a",{title:e.filename},g.a.createElement("img",{className:"img100",src:"http://localhost:3008"+e.path,alt:e.filename,"data-path":e.path,"data-id":e._id,onClick:function(a){return l.getIdImage(e._id)}})))))})}},{key:"saveGallery",value:function(){console.log(this.state.selectedFile)}},{key:"render",value:function(){var e=this;return g.a.createElement("div",{className:"animated fadeIn"},g.a.createElement(d.a,null,g.a.createElement(u.a,{xs:"12",sm:"12"},g.a.createElement(p.a,null,g.a.createElement(E.a,null,g.a.createElement("strong",null,"C\u1ea5u h\xecnh chung"),g.a.createElement("button",{onClick:this.savePost,className:"btn btn-sm btn-primary flor"},"C\u1eadp nh\u1eadt")),g.a.createElement(v.a,null,g.a.createElement(b.a,{tabs:!0},g.a.createElement(f.a,null,g.a.createElement(y.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"Chung")),g.a.createElement(f.a,null,g.a.createElement(y.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"M\u1ea1ng online")),g.a.createElement(f.a,null,g.a.createElement(y.a,{className:T()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},"H\xecnh \u1ea3nh"))),g.a.createElement(k.a,{activeTab:this.state.activeTab},g.a.createElement(N.a,{tabId:"1"},g.a.createElement(d.a,null,g.a.createElement(u.a,{sm:"12"},g.a.createElement("div",{className:"form-group"},g.a.createElement(w.a,{htmlFor:"name"},g.a.createElement("strong",null,"T\xean website")),g.a.createElement(C.a,{type:"text",value:l.state.name,onChange:this.changeName,name:"name",id:"name",placeholder:"T\xean website",required:!0})),g.a.createElement("div",{className:"form-group"},g.a.createElement(w.a,{htmlFor:"slogan"},g.a.createElement("strong",null,"Slogan")),g.a.createElement(C.a,{type:"text",value:this.state.slogan,onChange:this.changeSlogan,name:"slogan",id:"slogan",placeholder:"Slogan"})),g.a.createElement("div",{className:"form-group"},g.a.createElement(w.a,{htmlFor:"email"},g.a.createElement("strong",null,"Email")),g.a.createElement(C.a,{type:"text",value:this.state.email,onChange:this.changeEmail,name:"email",id:"email",placeholder:"Email"})),g.a.createElement("div",{className:"form-group"},g.a.createElement(d.a,null,g.a.createElement(u.a,{sm:"6"},g.a.createElement(w.a,{htmlFor:"phone"},g.a.createElement("strong",null,"Phone")),g.a.createElement(C.a,{type:"text",value:this.state.phone,onChange:this.changePhone,name:"phone",id:"phone",placeholder:"Phone"})),g.a.createElement(u.a,{sm:"6"},g.a.createElement(w.a,{htmlFor:"email"},g.a.createElement("strong",null,"Hotline")),g.a.createElement(C.a,{type:"text",value:this.state.hotline,onChange:this.changeHotline,name:"hotline",id:"hotline",placeholder:"Hotline"})))),g.a.createElement("div",{className:"form-group"},g.a.createElement(w.a,{htmlFor:"address"},g.a.createElement("strong",null,"Address")),g.a.createElement(C.a,{type:"text",value:this.state.address,onChange:this.changeAddress,name:"address",id:"address",placeholder:"Address"})),g.a.createElement("hr",null),g.a.createElement("div",{className:"form-group"},g.a.createElement(w.a,{htmlFor:"title_seo"},g.a.createElement("strong",null,"Ti\xeau \u0111\u1ec1 seo")),g.a.createElement(C.a,{type:"text",value:this.state.title_seo,onChange:this.changeName,id:"title_seo",placeholder:"Ti\xeau \u0111\u1ec1 seo"})),g.a.createElement("div",{className:"form-group"},g.a.createElement(w.a,{htmlFor:"description_seo"},g.a.createElement("strong",null,"M\xf4 t\u1ea3 seo")),g.a.createElement(C.a,{type:"textarea",value:this.state.description_seo,onChange:this.changeDescription,name:"description_seo",id:"description_seo",placeholder:"M\xf4 t\u1ea3 seo",rows:"3"})),g.a.createElement("div",{className:"form-group"},g.a.createElement(w.a,{htmlFor:"description_seo"},g.a.createElement("strong",null,"T\u1eeb kh\xf3a seo")),g.a.createElement(C.a,{type:"textarea",value:this.state.keyword_seo,onChange:this.changeDescription,name:"keyword_seo",id:"keyword_seo",placeholder:"T\u1eeb kh\xf3a seo",rows:"3"}))))),g.a.createElement(N.a,{tabId:"2"},g.a.createElement("div",{className:"form-group"},g.a.createElement(d.a,null,g.a.createElement(u.a,{sm:"6"},g.a.createElement(w.a,{htmlFor:"website"},g.a.createElement("strong",null,"Website")),g.a.createElement(C.a,{type:"text",value:this.state.website,onChange:this.changeWebsite,name:"website",id:"website",placeholder:"website"})),g.a.createElement(u.a,{sm:"6"},g.a.createElement(w.a,{htmlFor:"facebook"},g.a.createElement("strong",null,"Facebook")),g.a.createElement(C.a,{type:"text",value:this.state.facebook,onChange:this.changeFacebook,name:"facebook",id:"facebook",placeholder:"Facebook"}))),g.a.createElement(d.a,null,g.a.createElement(u.a,{sm:"6"},g.a.createElement(w.a,{htmlFor:"zalo"},g.a.createElement("strong",null,"Zalo")),g.a.createElement(C.a,{type:"text",value:this.state.zalo,onChange:this.changeZalo,name:"zalo",id:"zalo",placeholder:"Zalo"})),g.a.createElement(u.a,{sm:"6"},g.a.createElement(w.a,{htmlFor:"gplus"},g.a.createElement("strong",null,"Gplus")),g.a.createElement(C.a,{type:"text",value:this.state.gplus,onChange:this.changeGplus,name:"gplus",id:"gplus",placeholder:"G+"}))),g.a.createElement(d.a,null,g.a.createElement(u.a,{sm:"6"},g.a.createElement(w.a,{htmlFor:"linken"},g.a.createElement("strong",null,"Linken")),g.a.createElement(C.a,{type:"text",value:this.state.linken,onChange:this.changeLinken,name:"linken",id:"linken",placeholder:"Linken"})),g.a.createElement(u.a,{sm:"6"},g.a.createElement(w.a,{htmlFor:"twitcher"},g.a.createElement("strong",null,"Twitcher")),g.a.createElement(C.a,{type:"text",value:this.state.twitcher,onChange:this.changeTwitcher,name:"twitcher",id:"twitcher",placeholder:"Twitcher"}))))),g.a.createElement(N.a,{tabId:"3"},g.a.createElement(d.a,null,g.a.createElement(u.a,{sm:"6"},g.a.createElement("div",{className:"form-group"},g.a.createElement(w.a,{htmlFor:"logo"},g.a.createElement("strong",null,"Logo")),g.a.createElement("div",null,g.a.createElement(_.a,{color:"primary",value:"logo",onClick:this.togglePrimary,className:"mr-1"},"Ch\u1ecdn \u1ea3nh"),g.a.createElement("div",{className:"showImage"},this.logoPath(),this.logoNumbers())))),g.a.createElement(u.a,{sm:"6"},g.a.createElement("div",{className:"form-group"},g.a.createElement(w.a,{htmlFor:"favicon"},g.a.createElement("strong",null,"Favicon")),g.a.createElement("div",null,g.a.createElement(_.a,{color:"primary",value:"favicon",onClick:this.togglePrimary,className:"mr-1"},"Ch\u1ecdn \u1ea3nh"),g.a.createElement("div",{className:"showImage"},this.faviconPath(),this.faviconNumbers()))))))))))),g.a.createElement(P.a,{isOpen:this.state.primary,toggle:this.togglePrimary,className:"modal-primary modal-lg "+this.props.className},g.a.createElement(F.a,{toggle:this.togglePrimary},g.a.createElement("button",{className:"buttonUploadImage"},"T\u1ea3i \u1ea3nh ",g.a.createElement("input",{type:"file",name:"file",onChange:this.onChangeHandler}))),g.a.createElement(I.a,null,this.showAllImage()),g.a.createElement(O.a,null,g.a.createElement(_.a,{color:"primary",onClick:this.togglePrimary},"C\u1eadp nh\u1eadt"),g.a.createElement(_.a,{color:"secondary",onClick:this.togglePrimary},"B\u1ecf qua"))))}}]),a}(h.Component);a.default=S}}]);
//# sourceMappingURL=66.d09c087c.chunk.js.map