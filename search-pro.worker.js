const L=Object.entries,st=Object.fromEntries,nt="ENTRIES",T="KEYS",R="VALUES",_="";class k{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===_)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==_).join("")}value(){return E(this._path).node.get(_)}result(){switch(this._type){case R:return this.value();case T:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],ot=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return W(e,t,s,n,i,1,o,""),n},W=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const c of e.keys())if(c===_){const a=o[d-1];a<=s&&n.set(r,[e.get(c),a])}else{let a=u;for(let h=0;h<c.length;++h,++a){const g=c[h],m=i*a,p=m-i;let l=o[m];const f=Math.max(0,a-s-1),y=Math.min(i-1,a+s);for(let F=f;F<y;++F){const D=g!==t[F],w=o[p+F]+ +D,A=o[p+F+1]+1,z=o[m+F]+1,V=o[m+F+1]=Math.min(w,A,z);V<l&&(l=V)}if(l>s)continue t}W(e.get(c),t,s,n,o,a,i,r+c)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=M(n);for(const i of o.keys())if(i!==_&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ut(this._tree,t)}entries(){return new k(this,nt)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return ot(this._tree,t,s)}get(t){const s=I(this._tree,t);return s!==void 0?s.get(_):void 0}has(t){const s=I(this._tree,t);return s!==void 0&&s.has(_)}keys(){return new k(this,T)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,O(this._tree,t).set(_,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=O(this._tree,t);return n.set(_,s(n.get(_))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=O(this._tree,t);let o=n.get(_);return o===void 0&&n.set(_,o=s()),o}values(){return new k(this,R)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==_&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},I=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==_&&t.startsWith(s))return I(e.get(s),t.slice(s.length))},O=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==_&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const c=new Map;c.set(u.slice(r),d),e.set(t.slice(n,n+r),c),e.delete(u),e=c}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ut=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(_),s.size===0)q(n);else if(s.size===1){const[o,u]=s.entries().next().value;$(n,o,u)}}},q=e=>{if(e.length===0)return;const[t,s]=M(e);if(t.delete(s),t.size===0)q(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==_&&$(e.slice(0,-1),n,o)}},$=(e,t,s)=>{if(e.length===0)return;const[n,o]=M(e);n.set(o+t,s),n.delete(o)},M=e=>e[e.length-1],it=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},rt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,S="or",N="and",ct="and_not",lt=(e,t)=>{e.includes(t)||e.push(t)},P=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},G=({score:e},{score:t})=>t-e,ht=()=>new Map,b=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},H=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,dt={[S]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),P(n.terms,u)}}return e},[N]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);P(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[ct]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},at=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},ft=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},J=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},gt=(e,t,s,n)=>{if(!e._index.has(n)){J(e,s,t,n);return}const o=e._index.fetch(n,ht),u=o.get(t);u==null||u.get(s)==null?J(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},mt={k:1.2,b:.7,d:.5},pt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(rt),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},U={combineWith:S,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:mt},Ft={combineWith:N,prefix:(e,t,s)=>t===s.length-1},_t={batchSize:1e3,batchWait:10},K={minDirtFactor:.1,minDirtCount:20},yt={..._t,...K},X=Symbol("*"),At=(e,t)=>{const s=new Map,n={...e._options.searchOptions,...t};for(const[o,u]of e._documentIds){const i=n.boostDocument?n.boostDocument(u,"",e._storedFields.get(o)):1;s.set(o,{score:i,terms:[],match:{}})}return s},Y=(e,t=S)=>{if(e.length===0)return new Map;const s=t.toLowerCase(),n=dt[s];if(!n)throw new Error(`Invalid combination operator: ${t}`);return e.reduce(n)||new Map},B=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const c of Object.keys(u)){const a=u[c],h=e._fieldIds[c],g=o.get(h);if(g==null)continue;let m=g.size;const p=e._avgFieldLength[h];for(const l of g.keys()){if(!e._documentIds.has(l)){gt(e,h,l,s),m-=1;continue}const f=i?i(e._documentIds.get(l),s,e._storedFields.get(l)):1;if(!f)continue;const y=g.get(l),F=e._fieldLength.get(l)[h],D=at(y,m,e._documentCount,F,p,r),w=n*a*f*D,A=d.get(l);if(A){A.score+=w,lt(A.terms,t);const z=H(A.match,s);z?z.push(c):A.match[s]=[c]}else d.set(l,{score:w,terms:[t],match:{[s]:[c]}})}}return d},Ct=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((l,f)=>({...l,[f]:H(n.boost,f)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:c,prefix:a}={...U.weights,...i},h=e._index.get(t.term),g=B(e,t.term,t.term,1,h,o,u,d);let m,p;if(t.prefix&&(m=e._index.atPrefix(t.term)),t.fuzzy){const l=t.fuzzy===!0?.2:t.fuzzy,f=l<1?Math.min(r,Math.round(t.term.length*l)):l;f&&(p=e._index.fuzzyGet(t.term,f))}if(m)for(const[l,f]of m){const y=l.length-t.term.length;if(!y)continue;p?.delete(l);const F=a*l.length/(l.length+.3*y);B(e,t.term,l,F,f,o,u,d,g)}if(p)for(const l of p.keys()){const[f,y]=p.get(l);if(!y)continue;const F=c*l.length/(l.length+y);B(e,t.term,l,F,f,o,u,d,g)}return g},Q=(e,t,s={})=>{if(t===X)return At(e,s);if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(g=>Q(e,g,a));return Y(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,c=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(ft(i)).map(a=>Ct(e,a,i));return Y(c,i.combineWith)},Z=(e,t,s={})=>{const n=Q(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const c=r.length||1,a={id:e._documentIds.get(u),score:i*c,terms:Object.keys(d),queryTerms:r,match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return t===X&&s.boostDocument==null&&e._options.searchOptions.boostDocument==null||o.sort(G),o},Et=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of Z(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(G),o};class wt{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?yt:t.autoVacuum;this._options={...pt,...t,autoVacuum:s,searchOptions:{...U,...t.searchOptions||{}},autoSuggestOptions:{...Ft,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=K,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:c},a)=>{if(c!==1&&c!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new wt(a);h._documentCount=t,h._nextId=s,h._documentIds=b(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=b(u),h._avgFieldLength=i,h._storedFields=b(r),h._dirtCount=d||0,h._index=new C;for(const[g,m]of h._documentIds)h._idToShortId.set(m,g);for(const[g,m]of e){const p=new Map;for(const l of Object.keys(m)){let f=m[l];c===1&&(f=f.ds),p.set(parseInt(l,10),b(f))}h._index.set(g,p)}return h},j=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(c,a=!1)=>{let h="";i===0?h=c.length>20?`… ${c.slice(-20)}`:c:a?h=c.length+i>100?`${c.slice(0,100-i)}… `:c:h=c.length>20?`${c.slice(0,20)} … ${c.slice(-20)}`:c,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const c=d+n.length;if(r(e.slice(u,d)),u=c,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},xt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),bt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),tt=(e,t,s={})=>{const n={};return Z(t,e,{boost:{h:2,t:1,c:4},prefix:!0,...s}).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),c=u.includes("#"),[a,h]=u.split(/[#@]/),g=Number(a),m=i.sort((l,f)=>l.length-f.length).filter((l,f)=>i.slice(f+1).every(y=>!y.includes(l))),{contents:p}=n[g]??={title:"",contents:[]};if(d)p.push([{type:"customField",id:g,index:h,display:m.map(l=>o.c.map(f=>j(f,l))).flat().filter(l=>l!==null)},r]);else{const l=m.map(f=>j(o.h,f)).filter(f=>f!==null);if(l.length&&p.push([{type:c?"heading":"title",id:g,...c&&{anchor:h},display:l},r]),"t"in o)for(const f of o.t){const y=m.map(F=>j(f,F)).filter(F=>F!==null);y.length&&p.push([{type:"text",id:g,...c&&{anchor:h},display:y},r])}}}),L(n).sort(([,o],[,u])=>"max"==="total"?xt(o,u):bt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=it(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},et=(e,t,s={})=>Et(t,e,{fuzzy:.2,...s}).map(({suggestion:n})=>n),v=st(L(JSON.parse("{\"/\":{\"documentCount\":1,\"nextId\":1,\"documentIds\":{\"0\":\"20\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1,3]},\"averageFieldLength\":[1,3],\"storedFields\":{\"0\":{\"h\":\"\",\"t\":[\"404 Not Found\"]}},\"dirtCount\":0,\"index\":[[\"found\",{\"1\":{\"0\":1}}],[\"not\",{\"1\":{\"0\":1}}],[\"404\",{\"1\":{\"0\":1}}]],\"serializationVersion\":2},\"/en/\":{\"documentCount\":16,\"nextId\":16,\"documentIds\":{\"0\":\"0\",\"1\":\"0@0\",\"2\":\"4\",\"3\":\"4@0\",\"4\":\"8\",\"5\":\"8@0\",\"6\":\"9\",\"7\":\"9@0\",\"8\":\"10\",\"9\":\"10@0\",\"10\":\"11\",\"11\":\"11@0\",\"12\":\"12\",\"13\":\"12@0\",\"14\":\"13\",\"15\":\"13@0\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[4],\"1\":[null,null,4],\"2\":[2],\"3\":[null,null,2],\"4\":[3],\"5\":[null,null,3],\"6\":[2],\"7\":[null,null,2],\"8\":[3],\"9\":[null,null,3],\"10\":[3],\"11\":[null,null,3],\"12\":[3],\"13\":[null,null,3],\"14\":[3],\"15\":[null,null,3]},\"averageFieldLength\":[3.0596736596736593,null,2.3865443638392856],\"storedFields\":{\"0\":{\"h\":\"Open Source Chip Universe\"},\"1\":{\"c\":[\"Open Source Chip Universe\"]},\"2\":{\"h\":\"Quick Start\"},\"3\":{\"c\":[\"Quick Start\"]},\"4\":{\"h\":\"Aurora Particle Module\"},\"5\":{\"c\":[\"Aurora Particle Module\"]},\"6\":{\"h\":\"Blackhole Environment\"},\"7\":{\"c\":[\"Blackhole Environment\"]},\"8\":{\"h\":\"Eclipse Backend Script\"},\"9\":{\"c\":[\"Eclipse Backend Script\"]},\"10\":{\"h\":\"Galaxy Hitchhiker Guide\"},\"11\":{\"c\":[\"Galaxy Hitchhiker Guide\"]},\"12\":{\"h\":\"Meteor Processor Core\"},\"13\":{\"c\":[\"Meteor Processor Core\"]},\"14\":{\"h\":\"Space Selection Program\"},\"15\":{\"c\":[\"Space Selection Program\"]}},\"dirtCount\":0,\"index\":[[\"core\",{\"0\":{\"12\":1},\"2\":{\"13\":1}}],[\"chip\",{\"0\":{\"0\":1},\"2\":{\"1\":1}}],[\"program\",{\"0\":{\"14\":1},\"2\":{\"15\":1}}],[\"processor\",{\"0\":{\"12\":1},\"2\":{\"13\":1}}],[\"particle\",{\"0\":{\"4\":1},\"2\":{\"5\":1}}],[\"meteor\",{\"0\":{\"12\":1},\"2\":{\"13\":1}}],[\"module\",{\"0\":{\"4\":1},\"2\":{\"5\":1}}],[\"guide\",{\"0\":{\"10\":1},\"2\":{\"11\":1}}],[\"galaxy\",{\"0\":{\"10\":1},\"2\":{\"11\":1}}],[\"hitchhiker\",{\"0\":{\"10\":1},\"2\":{\"11\":1}}],[\"backend\",{\"0\":{\"8\":1},\"2\":{\"9\":1}}],[\"blackhole\",{\"0\":{\"6\":1},\"2\":{\"7\":1}}],[\"eclipse\",{\"0\":{\"8\":1},\"2\":{\"9\":1}}],[\"environment\",{\"0\":{\"6\":1},\"2\":{\"7\":1}}],[\"aurora\",{\"0\":{\"4\":1},\"2\":{\"5\":1}}],[\"selection\",{\"0\":{\"14\":1},\"2\":{\"15\":1}}],[\"space\",{\"0\":{\"14\":1},\"2\":{\"15\":1}}],[\"script\",{\"0\":{\"8\":1},\"2\":{\"9\":1}}],[\"start\",{\"0\":{\"2\":1},\"2\":{\"3\":1}}],[\"source\",{\"0\":{\"0\":1},\"2\":{\"1\":1}}],[\"quick\",{\"0\":{\"2\":1},\"2\":{\"3\":1}}],[\"universe\",{\"0\":{\"0\":1},\"2\":{\"1\":1}}],[\"open\",{\"0\":{\"0\":1},\"2\":{\"1\":1}}]],\"serializationVersion\":2},\"/zh/\":{\"documentCount\":16,\"nextId\":16,\"documentIds\":{\"0\":\"1\",\"1\":\"1@0\",\"2\":\"7\",\"3\":\"7@0\",\"4\":\"14\",\"5\":\"14@0\",\"6\":\"15\",\"7\":\"15@0\",\"8\":\"16\",\"9\":\"16@0\",\"10\":\"17\",\"11\":\"17@0\",\"12\":\"18\",\"13\":\"18@0\",\"14\":\"19\",\"15\":\"19@0\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1],\"1\":[null,null,1],\"2\":[1],\"3\":[null,null,1],\"4\":[1],\"5\":[null,null,1],\"6\":[1],\"7\":[null,null,1],\"8\":[1],\"9\":[null,null,1],\"10\":[1],\"11\":[null,null,1],\"12\":[1],\"13\":[null,null,1],\"14\":[1],\"15\":[null,null,1]},\"averageFieldLength\":[1,null,0.803619384765625],\"storedFields\":{\"0\":{\"h\":\"开源芯片宇宙\"},\"1\":{\"c\":[\"开源芯片宇宙\"]},\"2\":{\"h\":\"快速上手\"},\"3\":{\"c\":[\"快速上手\"]},\"4\":{\"h\":\"极光粒子模块\"},\"5\":{\"c\":[\"极光粒子模块\"]},\"6\":{\"h\":\"黑洞运行环境\"},\"7\":{\"c\":[\"黑洞运行环境\"]},\"8\":{\"h\":\"日食后端脚本\"},\"9\":{\"c\":[\"日食后端脚本\"]},\"10\":{\"h\":\"银河漫游指南\"},\"11\":{\"c\":[\"银河漫游指南\"]},\"12\":{\"h\":\"流星处理器核\"},\"13\":{\"c\":[\"流星处理器核\"]},\"14\":{\"h\":\"太空选拔计划\"},\"15\":{\"c\":[\"太空选拔计划\"]}},\"dirtCount\":0,\"index\":[[\"太空选拔计划\",{\"0\":{\"14\":1},\"2\":{\"15\":1}}],[\"流星处理器核\",{\"0\":{\"12\":1},\"2\":{\"13\":1}}],[\"银河漫游指南\",{\"0\":{\"10\":1},\"2\":{\"11\":1}}],[\"日食后端脚本\",{\"0\":{\"8\":1},\"2\":{\"9\":1}}],[\"黑洞运行环境\",{\"0\":{\"6\":1},\"2\":{\"7\":1}}],[\"极光粒子模块\",{\"0\":{\"4\":1},\"2\":{\"5\":1}}],[\"快速上手\",{\"0\":{\"2\":1},\"2\":{\"3\":1}}],[\"开源芯片宇宙\",{\"0\":{\"0\":1},\"2\":{\"1\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n}})=>{e==="suggest"?self.postMessage(et(t,v[s],n)):e==="search"?self.postMessage(tt(t,v[s],n)):self.postMessage({suggestions:et(t,v[s],n),results:tt(t,v[s],n)})};
//# sourceMappingURL=index.js.map
