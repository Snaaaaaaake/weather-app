(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{51:function(e,t,n){e.exports=n(61)},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=n(18),l=n(27),u=n(13),s={error:null,isLoading:!0,isModalOpened:!1,cityList:[],city:null,trackingCities:[524901,578072,5128638]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.type),t.type){case"FETCH_CITY_LIST_REQUEST":return Object(u.a)(Object(u.a)({},e),{},{cityList:[],isLoading:!0,error:null});case"FETCH_CITY_LIST_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{cityList:t.payload,isLoading:!1,error:null});case"FETCH_BOOK_LIST_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{cityList:[],isLoading:!1,error:t.payload});case"OPEN_MODAL_CITY":return Object(u.a)(Object(u.a)({},e),{},{isModalOpened:!0,city:t.payload});case"CLOSE_MODAL_CITY":return Object(u.a)(Object(u.a)({},e),{},{isModalOpened:!1});default:return e}},p=Object(l.b)(m),d=n(33),E=n(97),y=n(90),f=n(86),h=function(){return r.a.createElement(E.a,{py:10,align:"center"},r.a.createElement(f.a,null))},C=function(e){return r.a.createElement(E.a,{align:"center"},"\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.error))},b=n(102),O=n(88),g=n(89);function v(e){return Math.round(+e-273.15)}function L(e){return"http://openweathermap.org/img/wn/".concat(e,"@2x.png")}var _=function(e){var t=e.city;return r.a.createElement(b.a,{title:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",key:"city".concat(t.name),button:!0,onClick:e.clickHandler},r.a.createElement(O.a,null,r.a.createElement("img",{src:L(t.weather[0].icon),alt:t.name})),r.a.createElement(g.a,{primary:"".concat(t.name),secondary:"".concat(v(t.main.temp),"\xb0C")}))},j={openModalCity:function(e){return{type:"OPEN_MODAL_CITY",payload:e}}},k=Object(i.b)((function(e){return{state:e}}),j)((function(e){var t,n=function(t){return function(){e.openModalCity(t)}};if(e.state.isLoading)t=function(){return r.a.createElement(h,null)};else if(e.state.error)t=function(){return r.a.createElement(C,{error:e.state.error})};else{var a=e.state.cityList;t=function(){return r.a.createElement(y.a,{component:"nav","aria-label":"main mailbox folders"},a.map((function(e){return r.a.createElement(_,{key:"city".concat(e.name),clickHandler:n(e),city:e})})))}}return r.a.createElement(t,null)})),T=n(98),S=n(96),I=n(91),w=n(100),M=n(94),x=n(93),F=n(92),H=n(95);var B=function(e){var t,n=e.city,a=e.onCloseHandler;return n?r.a.createElement(I.a,{maxWidth:"xs",disableGutters:!0},r.a.createElement(w.a,null,r.a.createElement(E.a,{width:"100px",mx:"auto"},r.a.createElement(F.a,{component:"img",image:L(n.weather[0].icon),title:"Contemplative Reptile"})),r.a.createElement(x.a,null,r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},n.name),r.a.createElement(d.a,{variant:"body1",component:"p"},v(n.main.temp),"\xb0C (\u043e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",v(n.main.feels_like),"\xb0C)"),r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},n.weather[0].description[0].toUpperCase()+n.weather[0].description.substring(1)),r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},"\u0412\u0435\u0442\u0435\u0440 ",n.wind.speed," \u043c/\u0441"),r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435 ",(t=n.main.pressure,Math.round(+t/1.33))," \u043c\u0440\u0441")),r.a.createElement(M.a,null,r.a.createElement(H.a,{onClick:a,size:"small",color:"primary"},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")))):r.a.createElement("p",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434")},Y=Object(S.a)((function(){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"}}})),A={closeModalCity:function(){return{type:"CLOSE_MODAL_CITY"}}},D=Object(i.b)((function(e){return{isModalOpened:e.isModalOpened,city:e.city}}),A)((function(e){var t=e.isModalOpened,n=e.city,a=function(){e.closeModalCity()},c=Y();return r.a.createElement(T.a,{className:c.modal,open:t,onClose:a},r.a.createElement("div",null,r.a.createElement(B,{city:n,onCloseHandler:a})))})),R=r.a.createContext(),U=n(31),P=n(32),K=n(42),N=n(41),q=function(e){Object(K.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(U.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(P.a)(n,[{key:"render",value:function(){return this.state.hasError?r.a.createElement(C,{error:this.state.hasError}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:e}}}]),n}(r.a.Component),J={fetchBookListRequest:function(){return{type:"FETCH_CITY_LIST_REQUEST"}},fetchBookListSuccess:function(e){return{type:"FETCH_CITY_LIST_SUCCESS",payload:e}},fetchBookListFailure:function(e){return{type:"FETCH_CITY_LIST_FAILURE",payload:e}}},Q=Object(i.b)((function(e){return{trackingCities:e.trackingCities}}),J)((function(e){var t=Object(a.useContext)(R),n=e.fetchBookListRequest,c=e.fetchBookListSuccess,o=e.fetchBookListFailure,i=e.trackingCities;return Object(a.useEffect)((function(){n(),t.getData(i).then((function(e){return c(e)})).catch((function(e){return o(e)}))}),[n,c,o,i,t]),r.a.createElement(I.a,{my:20,maxWidth:"xs"},r.a.createElement(E.a,{py:5},r.a.createElement(d.a,{align:"center",variant:"h4"},"\u041f\u043e\u0433\u043e\u0434\u0430 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f")),r.a.createElement(q,null,r.a.createElement(k,null)),r.a.createElement(q,null,r.a.createElement(D,null)))})),W=function(){return r.a.createElement(Q,null)},z=new(function(){function e(){var t=this;Object(U.a)(this,e),this.getData=function(e){var n=e.map((function(e){return t._getCity(e)}));return Promise.all(n)},this.url="https://api.openweathermap.org/data/2.5/weather?",this.apiKey="9a69c63930e012b4ba90d3284ead1e6d",this.lang="ru"}return Object(P.a)(e,[{key:"_getCity",value:function(e){var t="".concat(this.url,"id=").concat(e,"&appid=").concat(this.apiKey,"&lang=").concat(this.lang);return fetch(t).then((function(e){return e.ok?e.json():new Error(e.status)}))}}]),e}());o.a.render(r.a.createElement(i.a,{store:p},r.a.createElement(q,null,r.a.createElement(R.Provider,{value:z},r.a.createElement(W,null)))),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.851282ea.chunk.js.map