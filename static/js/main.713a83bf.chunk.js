(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(50)},19:function(e,t,n){},23:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),c=n.n(r),i=(n(19),n(7)),l=n.n(i),s=n(12),d=n(2),u=n(3),p=n(5),h=n(4),f=n(6);n(23);function m(e){return o.a.createElement("div",{className:"download-container"},e.ready?o.a.createElement("button",{className:"download-button",onClick:e.onClick},"download"):o.a.createElement("p",{className:"download-wait-text"},"wait"))}var w=n(13),v=n.n(w),E=(n(44),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={value:"",qrcodeOpen:!1},n.onChange=function(e){n.setState({value:e.target.value},function(){return n.props.onUpdateText(n.state.value)})},n.handleError=function(e){console.error(e)},n.handleScan=function(e){"string"===typeof e&&n.setState({value:e},function(){n.props.onUpdateText(n.state.value),n.handleReadQRCode()})},n.handleReadQRCode=function(){n.setState({qrcodeOpen:!n.state.qrcodeOpen})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,this.state.qrcodeOpen?o.a.createElement(v.a,{delay:300,onError:this.handleError,onScan:this.handleScan,style:{width:"100%"}}):o.a.createElement("div",{className:"input-container"},o.a.createElement("input",{className:"input-container__input",placeholder:"IPFS CID",onChange:this.onChange,value:this.state.value}),o.a.createElement("button",{className:"input-container__button",onClick:this.handleReadQRCode},"QRCODE")))}}]),t}(o.a.Component));n(46);function g(e){return o.a.createElement("div",{className:"title-container"},o.a.createElement("p",{className:"title-text"},e.children||"IPFS Downloader"))}n(48);var C=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={ready:!1,cid:"",downloading:!1},n.downloadToBuffer=function(e){return new Promise(function(t,a){n.node.files.get(e,function(e,n){e||1!==n.length?a():(console.log(n[0]),t(n[0].content))})})},n.onChangeCid=function(e){n.setState({cid:e})},n.onDownloadClick=Object(s.a)(l.a.mark(function e(){var t,a,o,r,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.cid,n.setState({downloading:!0}),e.prev=2,e.next=5,n.downloadToBuffer(t);case 5:a=e.sent,o=new Uint8Array(a),r=new Blob([o],{type:"application/octet-stream"}),c=prompt("File name","file.txt"),window.saveAs(r,c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:return e.prev=15,n.setState({downloading:!1}),e.finish(15);case 18:case"end":return e.stop()}},e,this,[[2,12,15,18]])})),n.cleanUp=function(){n.setState({cid:""})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.node=new window.Ipfs,this.node.on("ready",function(){e.setState({ready:!0})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.downloading?o.a.createElement("div",{className:"App-container"},o.a.createElement("p",null,"downloading...")):o.a.createElement("div",{className:"App-container"},o.a.createElement(g,null,"IPFS Content Downloader"),o.a.createElement(E,{onUpdateText:this.onChangeCid}),o.a.createElement(m,{ready:this.state.ready,onClick:this.onDownloadClick})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.713a83bf.chunk.js.map