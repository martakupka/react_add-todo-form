(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),o=a.n(r),s=a(10),l=a(3),c=a(4),m=a(6),u=a(5),d=a(7),p=(a(16),[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}]),h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],b=(a(17),a(18),a(19),a(1)),y=a.n(b),g=y.a.shape({name:y.a.string.isRequired}),f=function(e){var t=e.name;return i.a.createElement("div",{className:"todo__user"},t)},v=(y.a.shape({id:y.a.number.isRequired,title:y.a.string.isRequired,completed:y.a.bool.isRequired,user:g.isRequired}),function(e){var t=e.id,a=e.title,n=e.completed,r=e.user;return i.a.createElement("div",{className:"todo__item"},i.a.createElement("div",null,t),i.a.createElement("div",null,a),i.a.createElement("div",null,n?"completed":"incomplete"),i.a.createElement(f,{name:r.name}))}),E=function(e){var t=e.todos;return i.a.createElement("ul",{className:"todo__list"},t.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(v,{id:e.id,title:e.title,completed:e.completed,user:e.user}))})))},S=a(2),w=(a(22),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={userName:"",todoTitle:"",isEmptyUser:!1,isEmptyTitle:!1,errors:{emptyUser:"Please choose a user",emptyTitle:"Please enter the title"}},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.userName,i=a.todoTitle.trim();if(""!==n&&""!==i){var r=e.props,o=r.addTodo,s=r.todoLength,l=h.find((function(e){return e.name===n}));o({userId:l.id,id:s+1,title:i,completed:!1,user:l}),e.setState((function(){return{userName:"",todoTitle:""}}))}e.setState((function(){return{isEmptyUser:""===n,isEmptyTitle:""===i}}))},e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;e.setState((function(){var e,t;return"userName"===n?(t={},Object(S.a)(t,n,i),Object(S.a)(t,"isEmptyUser",!1),t):(e={},Object(S.a)(e,n,i),Object(S.a)(e,"isEmptyTitle",!1),e)}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.userName,a=e.todoTitle,n=e.isEmptyUser,r=e.isEmptyTitle,o=e.errors;return i.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},i.a.createElement("div",null,i.a.createElement("input",{name:"todoTitle",type:"text",placeholder:"Enter the title",className:"form__input",autoComplete:"off",value:a,onChange:this.handleChange}),r&&i.a.createElement("span",{className:"form__message"},o.emptyTitle)),i.a.createElement("div",null,i.a.createElement("select",{name:"userName",className:"form__select",value:t,onChange:this.handleChange},i.a.createElement("option",{value:""},"Choose a user"),h.map((function(e){return i.a.createElement("option",{key:e.name,value:e.name},e.name)}))),n&&i.a.createElement("span",{className:"form__message"},o.emptyUser)),i.a.createElement("button",{className:"form__button",type:"submit"},"Add"))}}]),a}(i.a.Component)),C=p.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{user:h.find((function(t){return t.id===e.userId}))})})),_=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={todos:C},e.addTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(s.a)(e.todos),[t])}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.todos;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",{className:"App__title"},"Add todo"),i.a.createElement(w,{addTodo:this.addTodo,todoLength:e.length}),i.a.createElement(E,{todos:e}))}}]),a}(i.a.Component);o.a.render(i.a.createElement(_,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.b5fa076b.chunk.js.map