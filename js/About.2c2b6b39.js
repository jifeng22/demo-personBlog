"use strict";(self["webpackChunkmy_site"]=self["webpackChunkmy_site"]||[]).push([[74],{764:function(a,e,t){t.r(e),t.d(e,{default:function(){return c}});var d=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:a.loading||!a.loaded,expression:"loading || !loaded"}],staticClass:"about-container"},[t("iframe",{attrs:{src:a.src,frameborder:"0"},on:{load:function(e){a.loaded=!0}}})])},n=[],r=t(6294),o={data(){return{loaded:!1}},computed:(0,r.mapState)("about",{src:"data",loading:"loading"}),created(){this.$store.dispatch("about/fetchData")}},i=o,s=t(1001),l=(0,s.Z)(i,d,n,!1,null,"2d4dccfe",null),c=l.exports}}]);