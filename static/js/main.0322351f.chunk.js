(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{42:function(n,e,t){"use strict";t.r(e);var o,r=t(10),a=t(0),i=t.n(a),c=t(13),d=t.n(c),b=t(16),s=t(8),l=t(7),p=t(1),g=t(4),u=t(3),j=t(17),f=Object(b.b)({key:"toDo",default:{"To Do":[],Doing:[],Done:[]}}),h=t(31),x=t(6),O=s.c.div(o||(o=Object(r.a)(["\n  border-radius: 5px;\n  margin-bottom: 5px;\n  padding: 10px;\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(n){return n.isDragging?"#74b9ff":n.theme.cardColor}),(function(n){return n.isDragging?"0px 2px 5px rgba(0, 0, 0, 0.05)":"none"}));function m(n){var e=n.toDoId,t=n.toDoText,o=n.index;return Object(x.jsx)(j.b,{draggableId:e+"",index:o,children:function(n,e){return Object(x.jsx)(O,Object(p.a)(Object(p.a)(Object(p.a)({isDragging:e.isDragging,ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:t}))}},e)}var v,y,D,k,w=i.a.memo(m),I=s.c.div(v||(v=Object(r.a)(["\n  width: 300px;\n  padding-top: 10px;\n  background-color: ",";\n  border-radius: 5px;\n  min-height: 300px;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){return n.theme.boardColor})),q=s.c.h2(y||(y=Object(r.a)(["\n  text-align: center;\n  font-weight: 600;\n  margin-bottom: 10px;\n  font-size: 18px;\n"]))),S=s.c.div(D||(D=Object(r.a)(["\n  background-color: ",";\n  flex-grow: 1;\n  transition: background-color 0.3s ease-in-out;\n  padding: 20px;\n"])),(function(n){return n.isDraggingOver?"#b2bec3":n.isDraggingFromThis?"#dfe6e9":"transparent"})),T=s.c.form(k||(k=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding-bottom: 10px;\n  input {\n    font-size: 16px;\n    border: 0;\n    background-color: white;\n    width: 80%;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: center;\n    margin: 0 auto;\n  }\n"])));var C,P,z=function(n){var e=n.toDos,t=n.boardId,o=Object(b.d)(f),r=Object(h.a)(),a=r.register,i=r.setValue,c=r.handleSubmit;return Object(x.jsxs)(I,{children:[Object(x.jsx)(q,{children:t}),Object(x.jsx)(T,{onSubmit:c((function(n){var e=n.toDo,r={id:Date.now(),text:e};o((function(n){return Object(p.a)(Object(p.a)({},n),{},Object(l.a)({},t,[].concat(Object(g.a)(n[t]),[r])))})),i("toDo","")})),children:Object(x.jsx)("input",Object(p.a)(Object(p.a)({},a("toDo",{required:!0})),{},{type:"text",placeholder:"Add task on ".concat(t)}))}),Object(x.jsx)(j.c,{droppableId:t,children:function(n,t){return Object(x.jsxs)(S,Object(p.a)(Object(p.a)({isDraggingOver:t.isDraggingOver,isDraggingFromThis:Boolean(t.draggingFromThisWith),ref:n.innerRef},n.droppableProps),{},{children:[e.map((function(n,e){return Object(x.jsx)(w,{toDoId:n.id,toDoText:n.text,index:e},n.id)})),n.placeholder]}))}})]})},F=s.c.div(C||(C=Object(r.a)(["\n  display: flex;\n  width: 100vw;\n  margin: 0 auto;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]))),B=s.c.div(P||(P=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  gap: 10px;\n"])));var E,H=function(){var n=Object(b.c)(f),e=Object(u.a)(n,2),t=e[0],o=e[1];return Object(x.jsx)(j.a,{onDragEnd:function(n){var e=n.destination,t=n.source;e&&((null===e||void 0===e?void 0:e.droppableId)===t.droppableId&&o((function(n){var o=Object(g.a)(n[t.droppableId]),r=o[t.index];return o.splice(t.index,1),o.splice(e.index,0,r),Object(p.a)(Object(p.a)({},n),{},Object(l.a)({},t.droppableId,o))})),e.droppableId!==t.droppableId&&o((function(n){var o,r=Object(g.a)(n[t.droppableId]),a=r[t.index],i=Object(g.a)(n[e.droppableId]);return r.splice(t.index,1),i.splice(e.index,0,a),Object(p.a)(Object(p.a)({},n),{},(o={},Object(l.a)(o,t.droppableId,r),Object(l.a)(o,e.droppableId,i),o))})))},children:Object(x.jsx)(F,{children:Object(x.jsx)(B,{children:Object.keys(t).map((function(n){return Object(x.jsx)(z,{boardId:n,toDos:t[n]},n)}))})})})},J=Object(s.b)(E||(E=Object(r.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: ",";\n  color: black;\n  line-height: 1.2;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n"])),(function(n){return n.theme.bgColor}));d.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(b.a,{children:Object(x.jsxs)(s.a,{theme:{bgColor:"#3f8cf2",boardColor:"#dadfe9",cardColor:"white"},children:[Object(x.jsx)(J,{}),Object(x.jsx)(H,{})]})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.0322351f.chunk.js.map