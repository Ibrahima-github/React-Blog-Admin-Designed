(this["webpackJsonpblog-admin"]=this["webpackJsonpblog-admin"]||[]).push([[0],{36:function(e,t,a){},47:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(19),s=a.n(i),o=(a(47),a(9)),c=a(7),l=a(8),d=a(12),u=a(11),j=a(2),h=a(14),p=a(62),b=a(58),m=a(40),O=a(63),x=a(64),f=a(59),g=a(0),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).photofilename="anonymous.png",n.imagesrc=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API:"https://deploiement-webapi-aspnetcore.herokuapp.com/api/"}).REACT_APP_PHOTOPATH+n.photofilename,n.state={category:[]},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.handleFileSelected=n.handleFileSelected.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/categories").then((function(e){return e.json()})).then((function(t){e.setState({category:t})}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/posts",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({PostName:e.target.PostName.value,Category:e.target.Category.value,PostDescription:e.target.PostDescription.value,PostYoutubeHref:e.target.PostYoutubeHref.value,AdsTitle:e.target.AdsTitle.value,AdsImageFileName:this.imagesrc,AdsLink:e.target.AdsLink.value})}).then((function(e){return e.json()})).then((function(e){alert(e)})).catch((function(e){console.error(e.message)}))}},{key:"handleFileSelected",value:function(e){var t=this;e.preventDefault(),this.photofilename=e.target.files[0].name;var a=new FormData;a.append("myFile",e.target.files[0],e.target.files[0].name),fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/Posts/SaveFile",{method:"POST",body:a}).then((function(e){return e.json()})).then((function(e){t.imagesrc=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API:"https://deploiement-webapi-aspnetcore.herokuapp.com/api/"}).REACT_APP_PHOTOPATH+e,console.log({result:e})}),(function(e){alert("Failed")}))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(p.a,Object(j.a)(Object(j.a)({},this.props),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(g.jsx)(p.a.Header,{children:Object(g.jsx)(p.a.Title,{id:"contained-modal-title-vcenter",children:"Ajouter un Post"})}),Object(g.jsx)(p.a.Body,{children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(m.a,{sm:6,children:Object(g.jsxs)(O.a,{onSubmit:this.handleSubmit,children:[Object(g.jsxs)(O.a.Group,{controlId:"Post",children:[Object(g.jsx)(O.a.Label,{children:"Cr\xe9ation d'un post"}),Object(g.jsx)(O.a.Control,{type:"text",name:"PostName",required:!0,placeholder:"Entrez un titre"}),Object(g.jsx)(O.a.Control,{as:"select",name:"Category",children:this.state.category.map((function(e){return Object(g.jsx)("option",{children:e.CategoryName},e.CategoryId)}))}),Object(g.jsx)(O.a.Control,{type:"text",name:"PostDescription",required:!0,placeholder:"Entrez une description"}),Object(g.jsx)(O.a.Control,{type:"text",name:"PostYoutubeHref",required:!0,placeholder:"Entrez l'url youtube de la vid\xe9o"}),Object(g.jsx)(O.a.Control,{type:"text",name:"AdsTitle",required:!0,placeholder:"Entrez le titre de votre pub"}),Object(g.jsx)(O.a.Control,{type:"text",name:"AdsLink",required:!0,placeholder:"Entrez l'url de votre pub"})]}),Object(g.jsx)(O.a.Group,{children:Object(g.jsx)(x.a,{variant:"primary",type:"submit",children:"Ajouter un Post"})})]})}),Object(g.jsxs)(m.a,{sm:6,children:[Object(g.jsx)(f.a,{width:"200px",height:"200px",src:this.imagesrc}),Object(g.jsx)("input",{onChange:this.handleFileSelected,type:"File"})]})]})}),Object(g.jsx)(p.a.Footer,{children:Object(g.jsx)(x.a,{variant:"danger",onClick:this.props.onHide,children:"Fermer"})})]}))})}}]),a}(n.Component),y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/posts",{method:"PUT",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({PostId:e.target.PostId.value,PostName:e.target.PostName.value,Category:e.target.Category.value,PostDescription:e.target.PostDescription.value,PostYoutubeHref:e.target.PostYoutubeHref.value,AdsTitle:e.target.AdsTitle.value,AdsImageFileName:this.photofilename,AdsLink:e.target.AdsLink.value})}).then((function(e){return e.json()})).then((function(e){alert(e)})).catch((function(e){console.error(e.message)}))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(p.a,Object(j.a)(Object(j.a)({},this.props),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(g.jsx)(p.a.Header,{children:Object(g.jsx)(p.a.Title,{id:"contained-modal-title-vcenter",children:"Modifier une cat\xe9gorie"})}),Object(g.jsx)(p.a.Body,{children:Object(g.jsx)(b.a,{children:Object(g.jsx)(m.a,{sm:6,children:Object(g.jsxs)(O.a,{onSubmit:this.handleSubmit,children:[Object(g.jsxs)(O.a.Group,{controlId:"CategoryId",children:[Object(g.jsx)(O.a.Label,{children:"ID du post"}),Object(g.jsx)(O.a.Control,{type:"text",name:"PostId",required:!0,disabled:!0,defaultValue:this.props.postid})]}),Object(g.jsxs)(O.a.Group,{controlId:"PostName",children:[Object(g.jsx)(O.a.Label,{children:"Titre du post"}),Object(g.jsx)(O.a.Control,{type:"text",name:"PostName",required:!0,defaultValue:this.props.postname})]}),Object(g.jsxs)(O.a.Group,{controlId:"Category",children:[Object(g.jsx)(O.a.Label,{children:"Categorie du post"}),Object(g.jsx)(O.a.Control,{type:"text",name:"Category",required:!0,defaultValue:this.props.postcategory})]}),Object(g.jsxs)(O.a.Group,{controlId:"PostDescription",children:[Object(g.jsx)(O.a.Label,{children:"Description du post"}),Object(g.jsx)(O.a.Control,{type:"text",name:"PostDescription",required:!0,defaultValue:this.props.postdescription})]}),Object(g.jsxs)(O.a.Group,{controlId:"PostYoutubeHref",children:[Object(g.jsx)(O.a.Label,{children:"Url de la vid\xe9o"}),Object(g.jsx)(O.a.Control,{type:"text",name:"PostYoutubeHref",required:!0,disabled:!0,defaultValue:this.props.postyoutubehref})]}),Object(g.jsxs)(O.a.Group,{controlId:"ImageFileName",children:[Object(g.jsx)(O.a.Label,{children:"Nom de l'image publicitaire"}),Object(g.jsx)(O.a.Control,{type:"text",name:"ImageFileName",required:!0,defaultValue:this.props.postimagefilename})]}),Object(g.jsx)(O.a.Group,{children:Object(g.jsx)(x.a,{variant:"primary",type:"submit",children:"Mettre \xe0 jour"})})]})})})}),Object(g.jsx)(p.a.Footer,{children:Object(g.jsx)(x.a,{variant:"danger",onClick:this.props.onHide,children:"Fermer"})})]}))})}}]),a}(n.Component),C=a(60),S=a(61),w=a(22),P=a.n(w),N=a(26),k=a(10),U=a(23),I=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],i=function(){var e=Object(N.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/utilisateurs/logout",{method:"POST",headers:{"Content-type":"application/json",Accept:"application/json"},credentials:"include"});case 2:t=e.sent,console.log(t),r(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a?Object(g.jsx)(k.a,{to:"/"}):Object(g.jsxs)("nav",{id:"nav-wrap",children:[Object(g.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(g.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(g.jsxs)("ul",{id:"nav",className:"nav",style:{justifyContent:"center"},children:[Object(g.jsx)("li",{className:"current",children:Object(g.jsx)(U.b,{to:"/posts",children:"Posts"})}),Object(g.jsx)("li",{children:Object(g.jsx)(U.b,{to:"/categories",children:"Cat\xe9gories"})}),Object(g.jsx)("li",{children:Object(g.jsx)(U.b,{to:"/utilisateurs",children:"Utilisateurs"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://ibrahimasall.com",target:"_blank",children:"R\xe9alisations"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://blog.ibrahimasall.com",target:"_blank",children:"Blog"})}),Object(g.jsx)("li",{style:{margin:10},children:Object(g.jsx)(x.a,{onClick:i,children:"Logout"})})]})]})},A=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={post:[],addModalShow:!1,editModalShow:!1,UtilisateurUsername:!1},n}return Object(l.a)(a,[{key:"refreshList",value:function(){var e=this;fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/posts").then((function(e){if(console.log(e),200===e.status)return e.json();throw console.log(e.status),e})).then((function(t){console.log(t),e.setState({post:t.reverse()})})).catch((function(e){console.error(e.message)}))}},{key:"componentDidMount",value:function(){this.refreshList()}},{key:"componentDidUpdate",value:function(){this.refreshList()}},{key:"deletePost",value:function(e){window.confirm("\xcates vous s\xfbr de vouloir supprimer ?")&&fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/posts/"+e,{method:"DELETE",header:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){alert(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.post,n=t.postid,r=t.postname,i=t.postcategory,s=t.postarticleuploaddate,o=t.postdescription,c=t.postyoutubehref,l=t.postimagefilename,d=function(){return e.setState({editModalShow:!1})};return Object(g.jsxs)("div",{children:[Object(g.jsxs)("nav",{id:"nav-wrap",children:[Object(g.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(g.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(g.jsx)(I,{})]}),"  ",Object(g.jsxs)("div",{style:{marginTop:60,justifyContent:"center"},children:[Object(g.jsx)("h3",{children:"This is Posts page"}),Object(g.jsx)("div",{className:"mt-5 d-flex justify-content-right",children:Object(g.jsxs)(C.a,{children:[Object(g.jsx)(x.a,{variant:"primary",onClick:function(){return e.setState({addModalShow:!0})},children:"Ajouter un post"}),Object(g.jsx)(v,{show:this.state.addModalShow,onHide:function(){return e.setState({addModalShow:!1})}})]})}),Object(g.jsx)("div",{className:"mt-5 d-flex justify-content-left",children:Object(g.jsxs)(S.a,{className:"mt-4",striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{className:"m-2",children:[Object(g.jsx)("th",{children:"Post Id"}),Object(g.jsx)("th",{children:"Post Name"}),Object(g.jsx)("th",{children:"Category"}),Object(g.jsx)("th",{children:"Article upload date"}),Object(g.jsx)("th",{children:"Post Description"}),Object(g.jsx)("th",{children:"Post Youtube Href"})]})}),Object(g.jsx)("tbody",{children:a.map((function(t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:t.PostId}),Object(g.jsx)("td",{children:t.PostName}),Object(g.jsx)("td",{children:t.Category}),Object(g.jsx)("td",{children:t.ArticleUploadDate}),Object(g.jsx)("td",{children:t.PostDescription}),Object(g.jsx)("td",{children:t.PostYoutubeHref}),Object(g.jsx)("td",{children:t.ImageFileName}),Object(g.jsx)("td",{children:Object(g.jsxs)(C.a,{children:[Object(g.jsx)(x.a,{className:"mr-2",variant:"info",onClick:function(){return e.setState({editModalShow:!0,postid:t.PostId,postname:t.PostName,postcategory:t.Category,postarticleuploaddate:t.ArticleUploadDate,postdescription:t.PostDescription,postyoutubehref:t.PostYoutubeHref,postimagefilename:t.ImageFileName})},children:"Modifier"}),Object(g.jsx)(x.a,{className:"mr-2",variant:"danger",onClick:function(){return e.deletePost(t.PostId)},children:"Supprimer"}),Object(g.jsx)(y,{show:e.state.editModalShow,onHide:d,postid:n,postname:r,postcategory:i,postarticleuploaddate:s,postdescription:o,postyoutubehref:c,postimagefilename:l})]})})]},t.PostId)}))})]})})]})]})}}]),a}(n.Component),T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/categories",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({CategoryName:e.target.CategoryName.value})}).then((function(e){return e.json()})).then((function(e){alert(e)})).catch((function(e){console.error(e.message)}))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(p.a,Object(j.a)(Object(j.a)({},this.props),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(g.jsx)(p.a.Header,{children:Object(g.jsx)(p.a.Title,{id:"contained-modal-title-vcenter",children:"Ajouter une cat\xe9gorie"})}),Object(g.jsx)(p.a.Body,{children:Object(g.jsx)(b.a,{children:Object(g.jsx)(m.a,{sm:6,children:Object(g.jsxs)(O.a,{onSubmit:this.handleSubmit,children:[Object(g.jsxs)(O.a.Group,{controlId:"CategoryName",children:[Object(g.jsx)(O.a.Label,{children:"Nom de cat\xe9gorie"}),Object(g.jsx)(O.a.Control,{type:"text",name:"CategoryName",required:!0,placeholder:"Entrez une cat\xe9gorie"})]}),Object(g.jsx)(O.a.Group,{children:Object(g.jsx)(x.a,{variant:"primary",type:"submit",children:"Ajouter une cat\xe9gorie"})})]})})})}),Object(g.jsx)(p.a.Footer,{children:Object(g.jsx)(x.a,{variant:"danger",onClick:this.props.onHide,children:"Fermer"})})]}))})}}]),a}(n.Component),E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/categories",{method:"PUT",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({CategoryId:e.target.CategoryId.value,CategoryName:e.target.CategoryName.value})}).then((function(e){return e.json()})).then((function(e){alert(e)})).catch((function(e){console.error(e.message)}))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(p.a,Object(j.a)(Object(j.a)({},this.props),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(g.jsx)(p.a.Header,{children:Object(g.jsx)(p.a.Title,{id:"contained-modal-title-vcenter",children:"Modifier une cat\xe9gorie"})}),Object(g.jsx)(p.a.Body,{children:Object(g.jsx)(b.a,{children:Object(g.jsx)(m.a,{sm:6,children:Object(g.jsxs)(O.a,{onSubmit:this.handleSubmit,children:[Object(g.jsxs)(O.a.Group,{controlId:"CategoryId",children:[Object(g.jsx)(O.a.Label,{children:"ID de cat\xe9gorie"}),Object(g.jsx)(O.a.Control,{type:"text",name:"CategoryId",required:!0,disabled:!0,defaultValue:this.props.categoryid})]}),Object(g.jsxs)(O.a.Group,{controlId:"CategoryName",children:[Object(g.jsx)(O.a.Label,{children:"Nom de cat\xe9gorie"}),Object(g.jsx)(O.a.Control,{type:"text",name:"CategoryName",required:!0,defaultValue:this.props.categoryname})]}),Object(g.jsx)(O.a.Group,{children:Object(g.jsx)(x.a,{variant:"primary",type:"submit",children:"Mettre \xe0 jour"})})]})})})}),Object(g.jsx)(p.a.Footer,{children:Object(g.jsx)(x.a,{variant:"danger",onClick:this.props.onHide,children:"Fermer"})})]}))})}}]),a}(n.Component),L=(a(36),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={category:[],addModalShow:!1,editModalShow:!1},n}return Object(l.a)(a,[{key:"refreshList",value:function(){var e=this;fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/categories").then((function(e){if(console.log(e),200===e.status)return e.json();throw console.log(e.status),e})).then((function(t){console.log(t),e.setState({category:t.reverse()})})).catch((function(e){console.error(e.message)}))}},{key:"componentDidMount",value:function(){this.refreshList()}},{key:"componentDidUpdate",value:function(){this.refreshList()}},{key:"deleteCategory",value:function(e){window.confirm("\xcates vous s\xfbr de vouloir supprimer ?")&&fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/categories/"+e,{method:"DELETE",header:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){alert(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.category,n=t.categoryid,r=t.categoryname,i=function(){return e.setState({editModalShow:!1})};return Object(g.jsxs)("div",{children:[Object(g.jsx)(I,{}),Object(g.jsxs)("div",{style:{marginTop:60,justifyContent:"center"},children:[Object(g.jsx)("h3",{children:"This is Categories page"}),Object(g.jsx)("div",{className:"mt-5 d-flex justify-content-right",children:Object(g.jsxs)(C.a,{children:[Object(g.jsx)(x.a,{variant:"primary",onClick:function(){return e.setState({addModalShow:!0})},children:"Ajouter une cat\xe9gorie"}),Object(g.jsx)(T,{show:this.state.addModalShow,onHide:function(){return e.setState({addModalShow:!1})}})]})}),Object(g.jsx)("div",{className:"mt-5 d-flex justify-content-left",children:Object(g.jsxs)(S.a,{className:"mt-4",striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Category Id"}),Object(g.jsx)("th",{children:"Category Name"})]})}),Object(g.jsx)("tbody",{children:a.map((function(t){return Object(g.jsxs)("tr",{className:"m-2",children:[Object(g.jsx)("td",{children:t.CategoryId}),Object(g.jsx)("td",{children:t.CategoryName}),Object(g.jsx)("td",{children:Object(g.jsxs)(C.a,{children:[Object(g.jsx)(x.a,{className:"mr-2",variant:"info",onClick:function(){return e.setState({editModalShow:!0,categoryid:t.CategoryId,categoryname:t.CategoryName})},children:"Modifier"}),Object(g.jsx)(x.a,{className:"mr-2",variant:"danger",onClick:function(){return e.deleteCategory(t.CategoryId)},children:"Supprimer"}),Object(g.jsx)(E,{show:e.state.editModalShow,onHide:i,categoryid:n,categoryname:r})]})})]},t.CategoryId)}))})]})})]})]})}}]),a}(n.Component)),D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/utilisateurs",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({UtilisateurUsername:e.target.UtilisateurUsername.value,UtilisateurEmailAddress:e.target.UtilisateurEmailAddress.value,UtilisateurPassword:e.target.UtilisateurPassword.value})}).then((function(e){return e.json()})).then((function(e){alert(e)})).catch((function(e){console.error(e.message)}))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(p.a,Object(j.a)(Object(j.a)({},this.props),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(g.jsx)(p.a.Header,{children:Object(g.jsx)(p.a.Title,{id:"contained-modal-title-vcenter",children:"Ajouter un utilisateur"})}),Object(g.jsx)(p.a.Body,{children:Object(g.jsx)(b.a,{children:Object(g.jsx)(m.a,{sm:6,children:Object(g.jsxs)(O.a,{onSubmit:this.handleSubmit,children:[Object(g.jsxs)(O.a.Group,{controlId:"Utilisateur",children:[Object(g.jsx)(O.a.Label,{children:"Cr\xe9ation d'un utilisateur"}),Object(g.jsx)(O.a.Control,{type:"text",name:"UtilisateurUsername",required:!0,placeholder:"Entrez votre nom"}),Object(g.jsx)(O.a.Control,{type:"email",name:"UtilisateurEmailAddress",required:!0,placeholder:"Entrez votre adresse mail"}),Object(g.jsx)(O.a.Control,{type:"password",name:"UtilisateurPassword",required:!0,placeholder:"Entrez un mot de passe"})]}),Object(g.jsx)(O.a.Group,{children:Object(g.jsx)(x.a,{variant:"primary",type:"submit",children:"Ajouter un utilisateur"})})]})})})}),Object(g.jsx)(p.a.Footer,{children:Object(g.jsx)(x.a,{variant:"danger",onClick:this.props.onHide,children:"Fermer"})})]}))})}}]),a}(n.Component),H=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/utilisateurs",{method:"PUT",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({UtilisateurId:e.target.UtilisateurId.value,UtilisateurUsername:e.target.UtilisateurUsername.value,UtilisateurEmailAddress:e.target.UtilisateurEmailAddress.value,UtilisateurPassword:e.target.UtilisateurPassword.value})}).then((function(e){return e.json()})).then((function(e){alert(e)})).catch((function(e){console.error(e.message)}))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(p.a,Object(j.a)(Object(j.a)({},this.props),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(g.jsx)(p.a.Header,{children:Object(g.jsx)(p.a.Title,{id:"contained-modal-title-vcenter",children:"Modifier les infos d'un utilisateur"})}),Object(g.jsx)(p.a.Body,{children:Object(g.jsx)(b.a,{children:Object(g.jsx)(m.a,{sm:6,children:Object(g.jsxs)(O.a,{onSubmit:this.handleSubmit,children:[Object(g.jsxs)(O.a.Group,{controlId:"UtilisateurId",children:[Object(g.jsx)(O.a.Label,{children:"ID de l'utilisateur"}),Object(g.jsx)(O.a.Control,{type:"text",name:"UtilisateurId",required:!0,disabled:!0,defaultValue:this.props.utilisateurid})]}),Object(g.jsxs)(O.a.Group,{controlId:"UtilisateurUsername",children:[Object(g.jsx)(O.a.Label,{children:"Nom de l'utilisateur"}),Object(g.jsx)(O.a.Control,{type:"text",name:"UtilisateurUsername",required:!0,defaultValue:this.props.utilisateurname})]}),Object(g.jsxs)(O.a.Group,{controlId:"UtilisateurEmailAddress",children:[Object(g.jsx)(O.a.Label,{children:"Adresse email de l'utilisateur"}),Object(g.jsx)(O.a.Control,{type:"text",name:"UtilisateurEmailAddress",required:!0,defaultValue:this.props.utilisateuremailaddress})]}),Object(g.jsxs)(O.a.Group,{controlId:"UtilisateurPassword",children:[Object(g.jsx)(O.a.Label,{children:"Entrez un  mot de passe"}),Object(g.jsx)(O.a.Control,{type:"password",name:"UtilisateurPassword",required:!0,defaultValue:this.props.utilisateurpassword})]}),Object(g.jsx)(O.a.Group,{children:Object(g.jsx)(x.a,{variant:"primary",type:"submit",children:"Mettre \xe0 jour"})})]})})})}),Object(g.jsx)(p.a.Footer,{children:Object(g.jsx)(x.a,{variant:"danger",onClick:this.props.onHide,children:"Fermer"})})]}))})}}]),a}(n.Component),M=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={utilisateur:[],addModalShow:!1,editModalShow:!1,UtilisateurUsername:!1},n}return Object(l.a)(a,[{key:"refreshList",value:function(){var e=this;fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/utilisateurs").then((function(e){if(console.log(e),200===e.status)return e.json();throw console.log(e.status),e})).then((function(t){console.log(t),e.setState({utilisateur:t.reverse()})})).catch((function(e){console.error(e.message)}))}},{key:"componentDidMount",value:function(){this.refreshList()}},{key:"componentDidUpdate",value:function(){this.refreshList()}},{key:"deletePost",value:function(e){window.confirm("\xcates vous s\xfbr de vouloir supprimer ?")&&fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/utilisateurs/"+e,{method:"DELETE",header:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){alert(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.utilisateur,n=t.utilisateurid,r=t.utilisateurname,i=t.utilisateuremailaddress,s=t.utilisateurpassword,o=function(){return e.setState({editModalShow:!1})};return Object(g.jsxs)("div",{children:[Object(g.jsx)(I,{}),Object(g.jsxs)("div",{style:{marginTop:60,justifyContent:"center"},children:[Object(g.jsx)("h3",{children:"This is Posts page"}),Object(g.jsx)("div",{className:"mt-5 d-flex justify-content-right",children:Object(g.jsxs)(C.a,{children:[Object(g.jsx)(x.a,{variant:"primary",onClick:function(){return e.setState({addModalShow:!0})},children:"Ajouter un utilisateur"}),Object(g.jsx)(D,{show:this.state.addModalShow,onHide:function(){return e.setState({addModalShow:!1})}})]})}),Object(g.jsx)("div",{className:"mt-5 d-flex justify-content-left",children:Object(g.jsxs)(S.a,{className:"mt-4",striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{className:"m-2",children:[Object(g.jsx)("th",{children:"Utilisateur Id"}),Object(g.jsx)("th",{children:"Utilisateur Name"}),Object(g.jsx)("th",{children:"Utilisateur Email Address"}),Object(g.jsx)("th",{children:"Utilisateur Password "})]})}),Object(g.jsx)("tbody",{children:a.map((function(t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:t.UtilisateurId}),Object(g.jsx)("td",{children:t.UtilisateurUsername}),Object(g.jsx)("td",{children:t.UtilisateurEmailAddress}),Object(g.jsx)("td",{children:t.UtilisateurPassword}),Object(g.jsx)("td",{children:Object(g.jsxs)(C.a,{children:[Object(g.jsx)(x.a,{className:"mr-2",variant:"info",onClick:function(){return e.setState({editModalShow:!0,utilisateurid:t.UtilisateurId,utilisateurname:t.UtilisateurUsername,utilisateuremailaddress:t.UtilisateurEmailAddress,utilisateurpassword:t.UtilisateurPassword})},children:"Modifier"}),Object(g.jsx)(x.a,{className:"mr-2",variant:"danger",onClick:function(){return e.deletePost(t.UtilisateurId)},children:"Supprimer"}),Object(g.jsx)(H,{show:e.state.editModalShow,onHide:o,utilisateurid:n,utilisateurname:r,utilisateuremailaddress:i,utilisateurpassword:s})]})})]},t.UtilisateurId)}))})]})})]})]})}}]),a}(n.Component),F=function(){return Object(g.jsxs)("div",{className:"contentCss",children:[Object(g.jsx)("div",{children:Object(g.jsx)(I,{})}),Object(g.jsx)("div",{className:"mt-5 d-flex justify-content-left",children:"This is HomePage"})]})},_=(a(55),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),c=s[0],l=s[1],d=Object(n.useState)(!1),u=Object(o.a)(d,2),j=u[0],h=u[1],p=function(){var e=Object(N.a)(P.a.mark((function e(t){var n,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/utilisateurs/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({UtilisateurEmailAddress:a,UtilisateurPassword:c})});case 3:return n=e.sent,e.next=6,n.json();case 6:"success"===(r=e.sent).message?h(!0):alert(r.message),console.log(r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return j?Object(g.jsx)(k.a,{to:"/home"}):Object(g.jsx)("div",{className:"Login",children:Object(g.jsx)("main",{className:"form-signin",children:Object(g.jsxs)("form",{onSubmit:p,children:[Object(g.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(g.jsxs)("div",{className:"form-floating",children:[Object(g.jsx)("input",{type:"email",className:"form-control",id:"floatingInput",placeholder:"name@example.com",onChange:function(e){return r(e.target.value)}}),Object(g.jsx)("label",{children:"Email address"})]}),Object(g.jsxs)("div",{className:"form-floating",children:[Object(g.jsx)("input",{type:"password",className:"form-control",id:"floatingPassword",placeholder:"Password",onChange:function(e){return l(e.target.value)}}),Object(g.jsx)("label",{children:"Password"})]}),Object(g.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Sign in"})]})})})}),q=a(3),G=["component","isLoggedIn"],z=function(e){var t=e.component,a=e.isLoggedIn,r=Object(q.a)(e,G);return Object(n.useEffect)((function(){return Object(N.a)(P.a.mark((function e(){var t,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://deploiement-webapi-aspnetcore.herokuapp.com/api/utilisateurs/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,console.log(t),e.next=6,t.json();case 6:if(n=e.sent,console.log(n.message),"Authenticated"!==n.message){e.next=12;break}return e.abrupt("return",a=!0);case 12:return alert(n.message),e.abrupt("return",a=!1);case 14:case"end":return e.stop()}}),e)})))})),Object(g.jsx)(k.b,Object(j.a)(Object(j.a)({},r),{},{render:function(e){return a?Object(g.jsx)(t,Object(j.a)({},e)):Object(g.jsx)(k.a,{to:{pathname:"/",state:{from:e.location}}})}}))};var V=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=(t[0],t[1]);return Object(g.jsx)(U.a,{children:Object(g.jsxs)(k.d,{children:[Object(g.jsx)(k.b,{path:"/",component:_,exact:!0}),Object(g.jsx)(z,{isLoggedIn:a,path:"/home",component:F}),Object(g.jsx)(z,{isLoggedIn:a,path:"/posts",component:A}),Object(g.jsx)(z,{isLoggedIn:a,path:"/utilisateurs",component:M}),Object(g.jsx)(z,{isLoggedIn:a,path:"/addCategorie",component:T}),Object(g.jsx)(z,{isLoggedIn:a,path:"/categories",component:L}),Object(g.jsx)(k.b,{path:"*",component:function(){return Object(g.jsx)("h1",{children:"Erreur 404! D\xe9sol\xe9, cette page n'existe pas."})}})]})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(V,{})}),document.getElementById("root")),R()}},[[56,1,2]]]);
//# sourceMappingURL=main.7fbce638.chunk.js.map