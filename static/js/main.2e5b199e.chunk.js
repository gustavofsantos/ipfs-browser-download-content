(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(28)},16:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),r=n.n(c),i=(n(16),n(6)),l=n.n(i),s=n(9),d=n(1),u=n(2),p=n(4),w=n(3),m=n(5);n(20);function h(e){return o.a.createElement("div",{className:"download-container"},e.ready?o.a.createElement("button",{className:"download-button",onClick:e.onClick},"download"):o.a.createElement("p",{className:"download-wait-text"},"wait"))}n(22);var f=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(o)))).state={value:""},n.onChange=function(e){n.setState({value:e.target.value},function(){return n.props.onUpdateText(n.state.value)})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"input-container"},o.a.createElement("input",{className:"input-container__input",placeholder:"IPFS CID",onChange:this.onChange,value:this.state.value}))}}]),t}(o.a.Component);n(24);function v(e){return o.a.createElement("div",{className:"title-container"},o.a.createElement("p",{className:"title-text"},e.children||"IPFS Downloader"))}n(26);var b=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(o)))).state={ready:!1,cid:"",downloading:!1},n.downloadToBuffer=function(e){return new Promise(function(t,a){n.node.files.get(e,function(e,n){e||1!==n.length?a():t(n[0].content)})})},n.onChangeCid=function(e){n.setState({cid:e})},n.onDownloadClick=Object(s.a)(l.a.mark(function e(){var t,a,o,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.cid,n.setState({downloading:!0}),e.prev=2,e.next=5,n.downloadToBuffer(t);case 5:a=e.sent,o=new Uint8Array(a),(c=window.document.createElement("a")).href=window.URL.createObjectURL(new Blob([o],{type:"application/octet-stream"})),document.body.appendChild(c),c.click(),document.body.removeChild(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.error(e.t0);case 17:return e.prev=17,n.setState({downloading:!1}),e.finish(17);case 20:case"end":return e.stop()}},e,this,[[2,14,17,20]])})),n.cleanUp=function(){n.setState({cid:""})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.node=new window.Ipfs,this.node.on("ready",function(){e.setState({ready:!0})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.downloading?o.a.createElement("div",{className:"App-container"},o.a.createElement("p",null,"downloading...")):o.a.createElement("div",{className:"App-container"},o.a.createElement(v,null,"IPFS Content Downloader"),o.a.createElement(f,{onUpdateText:this.onChangeCid}),o.a.createElement(h,{ready:this.state.ready,onClick:this.onDownloadClick})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.2e5b199e.chunk.js.map