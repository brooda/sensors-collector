(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(t,e,a){t.exports=a(43)},43:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(16),i=a.n(r);a(7),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(2),s=a(3),l=a(5),u=a(4),d=a(17),m=a.n(d),h=(a(23),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).motion=function(t){if(n.state.recording){var e=Math.round(t.timeStamp),a=[e,Math.round(100*t.rotationRate.alpha),Math.round(100*t.rotationRate.beta),Math.round(100*t.rotationRate.gamma),Math.round(100*t.accelerationIncludingGravity.x),Math.round(100*t.accelerationIncludingGravity.y),Math.round(100*t.accelerationIncludingGravity.z)];n.setState({current_signals:e.toString()+"\n "+Math.round(100*t.rotationRate.alpha).toString()+"\n "+Math.round(100*t.rotationRate.beta).toString()+"\n "+Math.round(100*t.rotationRate.gamma).toString()+"\n "+Math.round(100*t.accelerationIncludingGravity.x).toString()+"\n "+Math.round(100*t.accelerationIncludingGravity.y).toString()+"\n "+Math.round(100*t.accelerationIncludingGravity.z).toString()+"\n "}),n.movement_signals.push(a)}},n.start=function(){n.setState({recording:!0})},n.stop=function(){n.setState({recording:!1})},n.registerBigMotion=function(t){n.big_motion_times.push(t.timeStamp)},n.state={problems:"",recording:!1,current_signals:""},n.movement_signals=[],n.big_motion_times=[],window.DeviceMotionEvent?window.addEventListener("devicemotion",n.motion,!1):n.setState({problems:"DeviceMotionEvent is not supported"}),n}return Object(s.a)(a,[{key:"render",value:function(){var t=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,this.state.problems?this.state.problems:"Motion is ready to be recorded"),o.a.createElement("h1",null,o.a.createElement("b",null,this.state.recording?"RECORDING":"")),o.a.createElement("p",null,this.state.current_signals),o.a.createElement("div",{className:"footer",onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},o.a.createElement("button",{type:"button",className:"btn btn-success btn-block",onClick:this.start}," START"),o.a.createElement("button",{type:"button",className:"btn btn-danger btn-block",onClick:this.stop},"STOP"),o.a.createElement("button",{type:"button",className:"btn btn-primary btn-block",onClick:this.registerBigMotion},"BIG MOTION"),o.a.createElement(m.a,{keyboardRef:function(e){return t.keyboard=e},mergeDisplay:"true",layout:{default:["1 2 3 4 5 6 7 8 9 0","q w e r t y u i o p","a s d f g h j k l","{shift} z x c v b n m {backspace}",", {space} ."],shift:["1 2 3 4 5 6 7 8 9 0","Q W E R T Y U I O P","A S D F G H J K L","{shift} Z X C V B N M {backspace}",", {space} ."]},display:{"{escape}":"esc \u238b","{tab}":"tab \u21e5","{backspace}":"\u232b","{capslock}":"caps lock \u21ea","{shift}":"\u21e7","{controlleft}":"ctrl \u2303","{controlright}":"ctrl \u2303","{altleft}":"alt \u2325","{altright}":"alt \u2325","{metaleft}":"cmd \u2318","{metaright}":"cmd \u2318","{abc}":"ABC","{space}":"space"},disableButtonHold:!0,buttonTheme:[{class:"margin-left",buttons:"A a ,"},{class:"margin-right",buttons:"L l ."},{class:"space",buttons:"{space}"}]})))}}]),a}(n.Component)),p=a(24),b=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).sendDataToAPI=function(t,e){var a={movement_signals:t,big_motion_times:e};n.setState({uploaded:!1}),p.post("https://keystrokesapi2.azurewebsites.net/api/Savekeystrokes?code=aZXAMrWM8eMnsao6YrpcolAYZjAgagbeHAaz4eDfKfaPZh9nWw2fbA==",a).then((function(t){n.setState({uploaded:!0})})).catch((function(t){n.setState({uploaded:!0}),console.log("An error occured while transfering data:",t)}))},n.state={taskCompleted:!1,uploaded:!1},n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(h,{sendDataToAPI:this.sendDataToAPI})}}]),a}(n.Component);b.displayName=b.name;a(42);i.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.7cda476b.chunk.js.map