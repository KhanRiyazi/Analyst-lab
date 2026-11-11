const norm=s=>s.toLowerCase().trim().replace(/\s+/g," ").replace(/\s*([,=:;])\s*/g,"$1").replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")");
const APPS=PH;
document.getElementById("dc").onclick=()=>document.getElementById("dlg").close();
document.getElementById("dlg").addEventListener("click",e=>{if(e.target.id==="dlg")e.target.close()});

const KEY="analystlab:v1";
let S={};try{S=JSON.parse(localStorage.getItem(KEY)||localStorage.getItem("wl")||"{}")}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const DAY=864e5,GAP=[0,1,3,7,14];
let cur=M[0].id;
const get=id=>S[id]||(S[id]={box:0,tries:0,due:0,note:""});
function nextId(){const now=Date.now();
 const due=M.filter(m=>get(m.id).box>0&&get(m.id).due<=now).sort((a,b)=>S[a.id].due-S[b.id].due);
 if(due.length)return{id:due[0].id,why:"due for review"};
 const nx=M.find(m=>get(m.id).box<1);
 if(nx)return{id:nx.id,why:S[nx.id].tries?"try again":"next in your path"};
 const wk=M.slice().sort((a,b)=>S[a.id].box-S[b.id].box)[0];
 return{id:wk.id,why:"your weakest skill"}}
function stats(){const n=M.filter(m=>get(m.id).box>0).length,p=Math.round(n/M.length*100);
 document.getElementById("ring").style.setProperty("--p",p);
 document.getElementById("pct").textContent=p+"%";
 document.getElementById("stat").textContent=n+" of "+M.length+" missions learned"}
function renderApps(){const g=document.getElementById("apps-grid");g.innerHTML="";
 PH.forEach((p,k)=>{const ms=M.filter(m=>m.app===k),n=ms.filter(m=>get(m.id).box>0).length;
  const first=ms.find(m=>get(m.id).box<1)||ms[0];
  const c=document.createElement("div");c.className="app";
  const b=document.createElement("button");b.className="am";b.type="button";
  b.innerHTML="<div class='ic' style='background:"+p[1]+"'>"+(k+1)+"</div><h3></h3><p></p>";
  b.querySelector("h3").textContent=p[0];b.querySelector("p").textContent=p[2]+" · "+n+"/"+ms.length+" done";
  b.onclick=()=>{cur=first.id;render();location.hash="lab"};
  const rb=document.createElement("div");rb.className="rb";
  const f=document.createElement("button");f.type="button";f.textContent="Free";f.setAttribute("aria-label","Best free resource for "+p[0]);f.onclick=()=>openLinks(k,"free");
  const q=document.createElement("button");q.type="button";q.className="pd";q.textContent="Paid";q.setAttribute("aria-label","Best paid resource for "+p[0]);q.onclick=()=>openLinks(k,"paid");
  rb.append(f,q);c.append(b,rb);g.appendChild(c)})}
function render(){
 const l=document.getElementById("list");l.innerHTML="";
 M.forEach(m=>{const s=get(m.id),b=document.createElement("button");b.className="m"+(m.id===cur?" on":"");
  const d=document.createElement("span");d.className="dot";d.style.background=APPS[m.app][1];
  const t=document.createElement("span");t.textContent="P"+(m.app+1)+" · "+m.t;
  const sm=document.createElement("small");sm.textContent=s.box>0?"Level "+s.box:"New";
  b.append(d,t,sm);b.onclick=()=>{cur=m.id;render()};l.appendChild(b)});
 const m=M.find(x=>x.id===cur),s=get(cur),p=document.getElementById("panel"),nx=nextId();
 p.innerHTML="";
 const tag=document.createElement("span");tag.className="tag";tag.style.background=APPS[m.app][1];tag.textContent=APPS[m.app][0];
 const h=document.createElement("h3");h.textContent=m.t;
 const tk=document.createElement("p");tk.textContent=m.task;
 const inp=document.createElement("input");inp.type="text";inp.placeholder="Type your answer";inp.setAttribute("aria-label","Your answer");inp.autocomplete="off";inp.spellcheck=false;
 const fb=document.createElement("div");fb.className="fb";fb.setAttribute("role","status");
 const hint=document.createElement("div");hint.className="hint";hint.textContent="Hint: "+m.hint;
 const row=document.createElement("div");row.className="row";
 const chk=document.createElement("button");chk.className="btn";chk.textContent="Check";
 const hb=document.createElement("button");hb.className="btn o";hb.textContent="Hint";
 hb.onclick=()=>{hint.style.display=hint.style.display==="block"?"none":"block"};
 const go=()=>{const v=norm(inp.value);if(!v){return}
  const r=get(m.id);r.tries++;
  if(m.ok(v)){r.box=Math.min(r.box+1,GAP.length-1)||1;r.due=Date.now()+GAP[r.box]*DAY;
   fb.className="fb ok";fb.textContent="Correct. Level "+r.box+". "+(r.box>=4?"You will see this again in 14 days.":"Review in "+GAP[r.box]+" day(s).")}
  else{r.box=r.box>0?1:0;r.due=Date.now();fb.className="fb no";fb.textContent="Not yet. Open the hint, change one thing and try again. Missed missions come back sooner.";hint.style.display="block"}
  save();stats();refreshList();renderApps()};
 chk.onclick=go;inp.onkeydown=e=>{if(e.key==="Enter")go()};
 row.append(chk,hb);
 const rl=document.createElement("label");rl.textContent="Reflect: what did you learn?";rl.style.cssText="display:block;margin-top:16px;color:var(--mut);font-size:.9rem";
 const rf=document.createElement("textarea");rf.value=s.note||"";rf.placeholder="One line in your own words";
 rf.oninput=()=>{get(m.id).note=rf.value;save()};
 const sol=document.createElement("button");sol.className="btn o";sol.textContent="Show answer";
 sol.onclick=()=>{fb.className="fb no";fb.textContent="Answer: "+m.ans+". Now type it yourself from memory.";};
 row.append(sol);
 const nt=document.createElement("div");nt.className="next";
 const nb=document.createElement("button");nb.className="btn o";nb.textContent="Go to next mission";
 nb.onclick=()=>{cur=nx.id;render()};
 nt.append("Recommended next: "+M.find(x=>x.id===nx.id).t+" ("+nx.why+") ");nt.appendChild(nb);
 p.append(tag,h,tk,inp,row,hint,fb,rl,rf,nt);
 stats()}
function refreshList(){const l=document.getElementById("list").children;M.forEach((m,i)=>{l[i].querySelector("small").textContent=S[m.id].box>0?"Level "+S[m.id].box:"New"})}

/* ---------- popups ---------- */
const safe=l=>/^https?:\/\//i.test(l.url);
function show(badge,paid,title,nodes){
 const b=document.getElementById("db");b.textContent=badge;b.className="bdg"+(paid?" paid":"");
 document.getElementById("dt").textContent=title;
 const body=document.getElementById("dbody");body.innerHTML="";nodes.forEach(n=>body.appendChild(n));
 document.getElementById("dlg").showModal()}
function el(tag,txt,cls){const e=document.createElement(tag);if(txt)e.textContent=txt;if(cls)e.className=cls;return e}
function linkBtn(url,label,outline){const a=el("a",label,"btn"+(outline?" o":""));a.href=url;a.target="_blank";a.rel="noopener noreferrer";return a}
function item(l){const d=el("div","","li");d.appendChild(el("h4",l.title));d.appendChild(el("p","Why explore it: "+l.why));
 if(l.note)d.appendChild(el("p",l.note,"note2"));d.appendChild(linkBtn(l.url,"Open site"));return d}
function openLinks(k,kind){const items=LINKS.filter(l=>l.phase===k&&l.type===kind&&safe(l));
 const nodes=items.length?items.map(item):[el("p","No links yet. Add one in data/links.js.")];
 show(PH[k][0]+" · "+(kind==="free"?"Free":"Paid"),kind==="paid","Best "+kind+" places to learn "+PH[k][0],nodes)}
function openEx(k){const e=EX[k];
 const nodes=[el("p",e[2],"pre"),el("p",e[3]+VNOTE,"note2"),(()=>{const d=el("div","","dact");d.append(linkBtn(VID[0],"Free video"),linkBtn(VID[1],"Paid course"));return d})()];
 show("Example · "+e[0],false,e[1],nodes)}
document.querySelectorAll(".ex").forEach(b=>{b.onclick=()=>openEx(+b.dataset.k)});

/* ---------- library and tricks ---------- */
let fType="all",fPhase="all",fq="";
const hit=(...s)=>!fq||s.join(" ").toLowerCase().includes(fq);
function chips(l){const c=el("div","","chips");c.appendChild(el("span",PH[l.phase][0]));
 if(l.type){const t=el("span",l.type==="free"?"Free":"Paid",l.type==="paid"?"pdc":"");c.appendChild(t)}
 if(l.kind)c.appendChild(el("span",l.kind));return c}
function drawLib(){const g=document.getElementById("lib");g.innerHTML="";let n=0;
 LINKS.filter(l=>PH[l.phase]&&safe(l)).forEach(l=>{
  if(fType!=="all"&&l.type!==fType)return;if(fPhase!=="all"&&l.phase!==+fPhase)return;if(!hit(l.title,l.why,l.kind))return;
  const d=el("div","","li");d.append(chips(l),el("h3",l.title),el("p",l.why));if(l.note)d.appendChild(el("p",l.note,"note2"));
  d.appendChild(linkBtn(l.url,"Open"));g.appendChild(d);n++});
 if(!n)g.appendChild(el("p","No links match. Try another filter, or add one in data/links.js."));
 const t=document.getElementById("trk");t.innerHTML="";let m=0;
 TRICKS.filter(x=>PH[x.phase]).forEach(x=>{
  if(fPhase!=="all"&&x.phase!==+fPhase)return;if(!hit(x.title,x.code,x.note))return;
  const d=el("div","","li");d.append(chips({phase:x.phase,kind:"trick"}),el("h3",x.title),el("pre",x.code),el("p",x.note));t.appendChild(d);m++});
 if(!m)t.appendChild(el("p","No tricks match. Add yours in TRICKS inside data/links.js."))}
function initLib(){
 const sel=document.getElementById("fp");sel.appendChild(new Option("All phases","all"));
 PH.forEach((p,i)=>sel.appendChild(new Option((i+1)+". "+p[0],i)));
 sel.onchange=()=>{fPhase=sel.value;drawLib()};
 document.getElementById("q").oninput=e=>{fq=e.target.value.trim().toLowerCase();drawLib()};
 const seg=document.getElementById("ft");
 [["all","All"],["free","Free"],["paid","Paid"]].forEach(([v,l])=>{const b=el("button",l);b.type="button";if(v==="all")b.className="on";
  b.onclick=()=>{fType=v;[...seg.children].forEach(x=>x.className="");b.className="on";drawLib()};seg.appendChild(b)});
 LINKS.forEach(l=>{if(!safe(l)||!PH[l.phase])console.warn("Check this entry in data/links.js:",l.title)});
 document.getElementById("rs").onclick=()=>{if(confirm("Reset all progress and notes on this device?")){try{localStorage.removeItem(KEY);localStorage.removeItem("wl")}catch(e){}S={};renderApps();render()}};
 drawLib()}
renderApps();render();initLib();
