(this["webpackJsonpceleste-ellerby-project-05"]=this["webpackJsonpceleste-ellerby-project-05"]||[]).push([[0],{27:function(e,t,a){e.exports=a(53)},32:function(e,t,a){},33:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),o=a.n(s),i=(a(32),a(2)),c=a(3),l=a(5),u=a(4),h=a(8),p=a(6),m=(a(33),a(13)),d=a.n(m),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.handleFormSubmit,action:"submit"},r.a.createElement("label",{htmlFor:"gifSearch"},"enter a keyword to get started!"),r.a.createElement("input",{onChange:this.props.handleChange,id:"gifSearch",type:"text",placeholder:"enter keyword here"}),r.a.createElement("button",{type:"submit"},"Search!"))}}]),t}(n.Component),b=a(9),g=a(10),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).copyToClipboard=function(e){a.textarea.select(),document.execCommand("copy"),a.setState({copySuccess:"Copied!"})},a.state={copySuccess:""},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.props.show?r.a.createElement("div",{className:"modal"},r.a.createElement("textarea",{ref:function(t){return e.textarea=t},name:"copyField",id:"copyField",cols:"30",rows:"5",value:this.props.url,readOnly:!0}),r.a.createElement("button",{onClick:this.copyToClipboard},r.a.createElement(b.a,{icon:g.a}),r.a.createElement("p",null,this.state.copySuccess))):null}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},a.showModal=function(e){a.setState({show:!a.state.show})},a.onClose=function(e){console.log(a.props.onClose,a.props.onClose(e)),a.props.onClose&&a.props.onClose(e)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:this.props.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(b.a,{icon:g.c,className:"icon"})),r.a.createElement("button",{onClick:function(t){e.showModal()}},this.state.show?r.a.createElement(b.a,{icon:g.d,className:"icon"}):r.a.createElement(b.a,{icon:g.b,className:"icon"})),r.a.createElement(v,{onClose:this.showModal,show:this.state.show,url:this.props.url}))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleMouseHover=function(){window.matchMedia("(max-width: 850px)").matches?a.setState({isHovering:!0}):a.setState({isHovering:!a.state.isHovering})},a.handleMouseHover=a.handleMouseHover.bind(Object(h.a)(a)),window.matchMedia("(max-width: 850px)").matches?a.state={isHovering:!0}:a.state={isHovering:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("li",{key:this.props.id,className:"featuredGif",onMouseEnter:this.handleMouseHover,onMouseLeave:this.handleMouseHover},r.a.createElement("img",{src:this.props.src,alt:this.props.title}),this.state.isHovering&&r.a.createElement(j,{url:this.props.url}))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleMouseHover=function(){a.setState({isHovering:!a.state.isHovering})},a.handleMouseHover=a.handleMouseHover.bind(Object(h.a)(a)),a.state={isHovering:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("li",{key:this.props.id,className:"featuredGif",onMouseEnter:this.handleMouseHover,onMouseLeave:this.handleMouseHover},r.a.createElement("img",{src:this.props.src,alt:this.props.alt}),this.state.isHovering&&r.a.createElement(j,{url:this.props.url}))}}]),t}(n.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"featuredGifsContainer"},r.a.createElement("ul",{className:"featuredGifs"},"trending"===this.props.page?this.props.featuredGifs.map((function(e,t){var a=e.id,n=e.images,s=e.title,o=e.url;return r.a.createElement(O,{key:a,src:n.original.url,alt:s,url:o})})):this.props.searchResult.slice(0,this.props.visible).map((function(e,t){var a=e.id,n=e.images,s=e.title,o=e.url;return r.a.createElement(y,{key:a,src:n.original.url,alt:s,url:o})}))))}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Celeste Ellerby 2020, powered by GIPHY"))}}]),t}(n.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"header",onClick:this.props.restart},r.a.createElement("h1",null,"Find That GIF!"))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return"search"===this.props.page&&r.a.createElement("button",{className:"load",onClick:this.props.getMoreGifs},"Load more...")}}]),t}(n.Component),M=a(26),S=a.n(M),H=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).getMoreGifs=function(){e.setState((function(e){return{visible:e.visible+6}}))},e.handleChange=function(t){e.setState({userInput:t.target.value})},e.handleFormSubmit=function(t){""===e.state.userInput?S()("please enter something to look for!",{button:"fine...."}):e.setState({loading:!0,error:!1}),t.preventDefault(),d()({url:"https://api.giphy.com/v1/gifs/search",type:"GET",data:"json",params:{api_key:"IcOIA7uzXjoJB4UpdoRW2d6pCcJlgqzW",dataType:"json",q:e.state.userInput,lang:"en",limit:100}}).then((function(t){console.log(e.state.searchResult.length),e.setState({page:"search",loading:!1,searchResult:t.data.data},(function(){0===e.state.searchResult.length&&e.setState({error:!0})}))}))},e.restart=function(){e.setState({page:"trending"})},e.state={featuredGifs:[],userInput:"",page:"trending",searchResult:[],visible:6,loading:!0,error:!1},e.getMoreGifs=e.getMoreGifs.bind(Object(h.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),d()({url:"https://api.giphy.com/v1/gifs/trending",type:"GET",responseType:"json",params:{api_key:"IcOIA7uzXjoJB4UpdoRW2d6pCcJlgqzW",dataType:"json",lang:"en"}}).then((function(t){e.setState({featuredGifs:t.data.data,loading:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App ".concat(this.state.page)},r.a.createElement("div",{className:"wrapper"},r.a.createElement(w,{restart:this.restart}),r.a.createElement(f,{handleChange:this.handleChange,handleFormSubmit:this.handleFormSubmit}),this.state.loading?r.a.createElement("div",{className:"lds-circle"},r.a.createElement("div",null)):r.a.createElement(n.Fragment,null,r.a.createElement(E,{page:this.state.page,featuredGifs:this.state.featuredGifs,searchResult:this.state.searchResult,visible:this.state.visible}),this.state.error?r.a.createElement("p",null,"no results found. :c"):r.a.createElement(k,{page:this.state.page,getMoreGifs:this.getMoreGifs})),r.a.createElement(C,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.8f384737.chunk.js.map