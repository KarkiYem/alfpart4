(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{645:function(t,e,r){},709:function(t,e,r){"use strict";r(645)},755:function(t,e,r){"use strict";r.r(e);var n=r(11),o=(r(43),r(118)),c=r(71),d={middleware:"check",methods:{checks:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,e.next=3,o.a.collection("partners").getOne(o.a.authStore.model.id);case 3:1==e.sent.isApprove&&(c.set("isApprove",!0),r.$store.commit("isApprove",!0)),o.a.collection("partners").subscribe(o.a.authStore.model.id,(function(t){1==t.record.isApprove&&(c.set("isApprove",!0),r.$store.commit("isApprove",!0))}));case 6:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.checks()}},v=(r(709),r(7)),component=Object(v.a)(d,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"main"}},[e("div",{staticClass:"box s"},[e("div",{staticClass:"bar",attrs:{id:"a1"}}),t._v(" "),e("div",{staticClass:"bar",attrs:{id:"a2"}})]),t._v(" "),e("h3",{staticStyle:{"margin-top":"4rem"}},[t._v("Waiting for Approval ...")])])])}],!1,null,"bfa70bf2",null);e.default=component.exports}}]);