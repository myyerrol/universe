import{u as I,d as $,b as ee,e as B,f as se,h as te,t as ae,r as le,g as A,i as b,j as re,w as M,k as t,n as _,l as U,R as F,m as ue,p as oe,q as ne,s as ie,O as ce,P as ve,v as pe,x as ye,y as de,z as L,A as he,B as me,C as fe,D as ge}from"./app-D3Mc7y_L.js";const He=["/","/about/","/en/","/projects/","/start/","/en/about/","/en/projects/","/en/start/","/projects/aurora/","/projects/blackhole/","/projects/eclipse/","/projects/galaxy/","/projects/meteor/","/projects/space/","/en/projects/aurora/","/en/projects/blackhole/","/en/projects/eclipse/","/en/projects/galaxy/","/en/projects/meteor/","/en/projects/space/","/404.html"],Re="SEARCH_PRO_QUERY_HISTORY",y=I(Re,[]),ke=()=>{const{queryHistoryCount:a}=L,l=a>0;return{enabled:l,queryHistory:y,addQueryHistory:r=>{l&&(y.value.length<a?y.value=Array.from(new Set([r,...y.value])):y.value=Array.from(new Set([r,...y.value.slice(0,a-1)])))},removeQueryHistory:r=>{y.value=[...y.value.slice(0,r),...y.value.slice(r+1)]}}},D=a=>He[a.id]+("anchor"in a?`#${a.anchor}`:""),Qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:q}=L,d=I(Qe,[]),xe=()=>{const a=q>0;return{enabled:a,resultHistory:d,addResultHistory:l=>{if(a){const r={link:D(l),display:l.display};"header"in l&&(r.header=l.header),d.value.length<q?d.value=[r,...d.value]:d.value=[r,...d.value.slice(0,q-1)]}},removeResultHistory:l=>{d.value=[...d.value.slice(0,l),...d.value.slice(l+1)]}}},je=a=>{const l=ce(),r=B(),{search:Q,terminate:v}=ve(),m=A(!1),f=pe([]);return ye(()=>{const h=()=>{f.value=[],m.value=!1},x=de(g=>{m.value=!0,g?Q({type:"search",query:g,locale:r.value,options:l.value}).then(p=>{f.value=p,m.value=!1}).catch(p=>{console.error(p),h()}):h()},L.searchDelay);M([a,r],()=>x(a.value),{immediate:!0}),he(()=>{v()})}),{searching:m,results:f}};var Se=$({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=ee(),Q=B(),v=se(te),{enabled:m,addQueryHistory:f,queryHistory:h,removeQueryHistory:x}=ke(),{enabled:g,resultHistory:p,addResultHistory:P,removeResultHistory:Y}=xe(),E=m||g,j=ae(a,"query"),{results:H,searching:z}=je(j),u=le({isQuery:!0,index:0}),i=A(0),c=A(0),T=b(()=>E&&(h.value.length>0||p.value.length>0)),w=b(()=>H.value.length>0),S=b(()=>H.value[i.value]||null),V=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?p.value.length-1:h.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?h.value.length-1:p.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{i.value=i.value>0?i.value-1:H.value.length-1,c.value=S.value.contents.length-1},K=()=>{i.value=i.value<H.value.length-1?i.value+1:0,c.value=0},N=()=>{c.value<S.value.contents.length-1?c.value+=1:K()},W=()=>{c.value>0?c.value-=1:J()},C=e=>e.map(s=>me(s)?s:t(s[0],s[1])),X=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[o,k=""]=ge(s)?s[Q.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",C([o,...n,k])))}return e.display.map(s=>t("div",C(s)))},R=()=>{i.value=0,c.value=0,l("updateQuery",""),l("close")};return re("keydown",e=>{if(a.isFocusing){if(w.value){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const s=S.value.contents[c.value];f(a.query),P(s),r.push(D(s)),R()}}else if(g){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",h.value[s]),e.preventDefault()):(r.push(p.value[s].link),R())}}}}),M([i,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:j.value?!w.value:!T.value}],id:"search-pro-results"},j.value===""?E?T.value?[m?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},v.value.queryHistory),h.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t(_,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:U,onClick:o=>{o.preventDefault(),o.stopPropagation(),x(s)}})]))])):null,g?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},v.value.resultHistory),p.value.map((e,s)=>t(F,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{R()}},()=>[t(_,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>C(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:U,onClick:o=>{o.preventDefault(),o.stopPropagation(),Y(s)}})]))])):null]:v.value.emptyHistory:v.value.emptyResult:z.value?t(ue,{hint:v.value.searching}):w.value?t("ul",{class:"search-pro-result-list"},H.value.map(({title:e,contents:s},o)=>{const k=i.value===o;return t("li",{class:["search-pro-result-list-item",{active:k}]},[t("div",{class:"search-pro-result-title"},e||v.value.defaultTitle),s.map((n,Z)=>{const O=k&&c.value===Z;return t(F,{to:D(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{f(a.query),P(n),R()}},()=>[n.type==="text"?null:t(n.type==="title"?oe:n.type==="heading"?ne:ie,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",X(n))])])})])})):v.value.emptyResult)}});export{Se as default};
