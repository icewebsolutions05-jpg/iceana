/* Upper limb exam mode: loaded on demand, after quiz/upperlimb.js */
(function(){
const D=ULQuiz.data,ALL=D.ALL,L=D.L,shuffle=D.shuffle,upd=D.upd;
const st=document.createElement('style');st.textContent=`
.ex .cfg{display:grid;gap:12px;max-width:560px}
.ex .cfg .row{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 14px;border:1px solid var(--bd);border-radius:12px;background:var(--card)}
.ex .cfg small{display:block;color:var(--mu);font-size:.8rem}
.ex input[type=number]{width:92px;min-height:44px;border:1px solid var(--bd);border-radius:8px;background:var(--bg);color:var(--tx);padding:0 10px;font:inherit;text-align:right}
.ex .seg{display:flex;gap:8px;flex-wrap:wrap}
.ex .seg button{flex:1 1 130px;min-height:46px;border:1px solid var(--bd);border-radius:10px;background:var(--card);color:var(--tx);cursor:pointer;font-size:.92rem}
.ex .seg button.on{background:var(--brand);border-color:var(--brand);color:#fff}
.ex .go{min-height:50px;border:0;border-radius:12px;background:var(--brand);color:#fff;font-size:1rem;font-weight:600;cursor:pointer}
.ex .warn{margin:0;padding:10px 12px;border-radius:10px;background:var(--nob);color:var(--no);font-size:.88rem}
.ex .xh{position:sticky;top:calc(var(--nav-top) + var(--nav-h) + 6px);z-index:5;background:var(--bg);display:flex;gap:6px;align-items:center;padding:6px 0 8px}
.ex .xh .xq{font-weight:700;flex:1;white-space:nowrap}
.ex .xtm{font-variant-numeric:tabular-nums;font-weight:700;padding:8px 12px;border-radius:20px;background:var(--pin)}
.ex .xtm.low{background:var(--nob);color:var(--no)}
.ex .xh button{min-height:42px;padding:0 12px;border:1px solid var(--bd);background:var(--card);color:var(--tx);border-radius:10px;cursor:pointer;font-size:.9rem}
.ex .xh .sub{background:var(--brand);color:#fff;border-color:var(--brand)}
.ex .xb{display:grid;gap:14px}
.ex .xp{display:none;background:var(--card);border:1px solid var(--bd);border-radius:14px;padding:12px}
.ex .xp.open{display:block;position:fixed;left:8px;right:8px;bottom:8px;max-height:62vh;overflow:auto;z-index:60;box-shadow:0 12px 40px rgba(0,0,0,.3)}
.ex .xph{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
.ex .xph button{min-height:36px;padding:0 12px;border:1px solid var(--bd);background:var(--card);color:var(--tx);border-radius:8px;cursor:pointer}
.ex .pg{display:grid;grid-template-columns:repeat(auto-fill,minmax(42px,1fr));gap:6px}
.ex .pn{min-height:42px;border:1px solid var(--bd);border-radius:8px;background:var(--card);color:var(--tx);cursor:pointer;font-weight:600}
.ex .pn.ans{background:rgba(8,128,232,.2);border-color:var(--brand)}
.ex .pn.flg{box-shadow:inset 0 -4px 0 #e7a600}
.ex .pn.cur{outline:2px solid var(--tx);outline-offset:1px}
.ex .lg{margin:10px 0 0;font-size:.78rem;color:var(--mu)}
.ex .opt.sel{background:rgba(8,128,232,.16);border-color:var(--brand)}
.ex .xn{display:flex;gap:8px;margin-top:12px;position:sticky;bottom:calc(8px + env(safe-area-inset-bottom));z-index:4}
.ex .xn button{flex:1;min-height:48px;border:1px solid var(--bd);background:var(--card);color:var(--tx);border-radius:12px;cursor:pointer;font-size:.95rem}
.ex .xn .nx{background:var(--brand);border-color:var(--brand);color:#fff;font-weight:600}
.ex .xn button:disabled{opacity:.4;cursor:default}
.ex .xn .fl.on{border-color:#e7a600;color:#b07d00;font-weight:600}
.ex .big{font-size:2.2rem;font-weight:800;margin:4px 0}
.ex .sumr{display:flex;flex-wrap:wrap;gap:8px 18px;color:var(--mu);margin:0 0 14px;font-size:.92rem}
.ex .rrow{padding:10px 12px;border:1px solid var(--bd);border-radius:10px;background:var(--card);margin:0 0 8px;font-size:.92rem}
.ex .rrow.ok{border-color:var(--ok)}.ex .rrow.no{border-color:var(--no)}.ex .rrow.na{border-style:dashed}
.ex .rrow .m{color:var(--mu);font-size:.82rem}
.ex .xcalc{position:fixed;z-index:60;right:16px;bottom:16px;width:310px;background:var(--card);border:1px solid var(--bd);border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.3);padding:10px}
.ex .xdisp{background:var(--bg);border-radius:10px;padding:8px 12px;text-align:right;min-height:66px;overflow:hidden}
.ex #cexp{font-size:.95rem;color:var(--mu);word-break:break-all;min-height:1.3em}
.ex #cres{font-size:1.6rem;font-weight:700;min-height:1.4em}
.ex .ckeys{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-top:8px}
.ex .ckeys button{min-height:40px;border:1px solid var(--bd);border-radius:8px;background:var(--card);color:var(--tx);cursor:pointer;font-size:.92rem;padding:0}
.ex .ckeys .op{background:var(--pin)}.ex .ckeys .eq{background:var(--brand);color:#fff;border-color:var(--brand)}.ex .ckeys .w2{grid-column:span 2}
.ex .xmod{position:fixed;inset:0;z-index:70;background:rgba(0,0,0,.5);display:grid;place-items:center;padding:16px}
.ex .xbox{background:var(--card);border-radius:16px;padding:18px;max-width:380px;width:100%}
@media (max-width:899px){.ex .xcalc{left:8px;right:8px;bottom:8px;width:auto}}
@media (min-width:900px){.ex .xb{grid-template-columns:minmax(0,1fr) 270px;align-items:start}
 .ex .xp{display:block;position:sticky;top:calc(var(--nav-top) + var(--nav-h) + 76px)}.ex #xpal,.ex #xpc{display:none}}
`;document.head.appendChild(st);

const MP=ALL.map(q=>({k:'m',q}));
const DP=[];L.forEach((d,di)=>d.pins.forEach((p,i)=>DP.push({k:'d',di,i})));
const KINDS={b:'MCQs + diagrams',m:'MCQs only',d:'Diagrams only'};
const poolOf=k=>k==='m'?MP:k==='d'?DP:MP.concat(DP);
const tf=s=>{s=Math.max(0,Math.round(s));return String(s/60|0).padStart(2,'0')+':'+String(s%60).padStart(2,'0')};
function make(x){
  if(x.k==='m'){const q=x.q;return{k:'m',id:q.id,text:q.q,ans:q.a,exp:q.e,topic:q.t,opts:shuffle([q.a,...q.d]),pick:null,flag:false}}
  const d=L[x.di],p=d.pins[x.i];
  return{k:'d',di:x.di,i:x.i,title:d.title,text:'What is the structure marked '+(x.i+1)+'?',ans:p[4],topic:'Diagram',opts:shuffle([p[4],...p[5]]),pick:null,flag:false};
}
function dsvg(di,i){
  const d=L[di],img=d.img,k=img?(d.k||img.w/400*0.75):1,bw=28*k,bh=24*k,p=d.pins[i];
  let [tx,ty,bx,by]=p;if(p[6]==='c'){bx=tx-bw/2;by=ty-bh/2}
  const vb=img?`0 0 ${img.w} ${img.h}`:'0 0 400 320';
  const pic=img?`<image href="${img.src}" x="0" y="0" width="${img.w}" height="${img.h}"/>${d.extra||''}`:d.shapes;
  return `<svg viewBox="${vb}">${pic}<g class="pin"><line x1="${bx+bw/2}" y1="${by+bh/2}" x2="${tx}" y2="${ty}" stroke-width="${1.2*k}"/><circle cx="${tx}" cy="${ty}" r="${3.5*k}"/><rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="${5*k}" stroke-width="${1.6*k}"/><text x="${bx+bw/2}" y="${by+bh*0.7}" text-anchor="middle" font-size="${13*k}">${i+1}</text></g></svg>`;
}

const KEYS=[['DEG','deg','op'],['(','('],[')',')'],['⌫','bk','op'],['C','c','op'],
['sin','sin('],['cos','cos('],['tan','tan('],['ln','ln('],['log','log('],
['asin','asin('],['acos','acos('],['atan','atan('],['√','sqrt('],['n!','!'],
['x²','^2'],['xʸ','^'],['1/x','^(-1)'],['π','π'],['e','e'],
['7','7'],['8','8'],['9','9'],['÷','÷','op'],['×','×','op'],
['4','4'],['5','5'],['6','6'],['−','−','op'],['+','+','op'],
['1','1'],['2','2'],['3','3'],['Ans','Ans'],['10ˣ','10^('],
['0','0','w2'],['.','.'],['=','=','eq w2']];

const SHELL=`<h2>Upper Limb Exam</h2>
<div id="xs"><p class="lead">One question at a time, timed. Leaving this tab or minimising the app submits the exam automatically.</p>
<div class="cfg">
 <div class="row"><div>Number of questions<small id="xmax"></small></div><input id="xn" type="number" inputmode="numeric" min="1" value="20"></div>
 <div class="row"><div>Time (minutes)<small>Default: 1 minute per question</small></div><input id="xt" type="number" inputmode="numeric" min="1" max="300" value="20"></div>
 <div><div class="lead" style="margin:0 0 6px">Content</div><div class="seg" id="xk"><button data-k="b" class="on">MCQs + diagrams</button><button data-k="m">MCQs only</button><button data-k="d">Diagrams only</button></div></div>
 <p class="warn">Switching tabs, minimising the app or leaving this page ends the exam and shows your result.</p>
 <button class="go" id="xgo">Start exam</button>
</div></div>
<div id="xe" hidden>
 <div class="xh"><span class="xq" id="xq"></span><span class="xtm" id="xtm"></span><button id="xpal"></button><button id="xcal">Calc</button><button class="sub" id="xsub">Submit</button></div>
 <div class="xb"><div class="xm"><div id="xqc"></div>
   <div class="xn"><button id="xpv">&larr; Prev</button><button class="fl" id="xfl">Flag</button><button class="nx" id="xnx">Next &rarr;</button></div></div>
  <aside class="xp" id="xp"><div class="xph"><b>Questions</b><button id="xpc">Close</button></div><div class="pg" id="pg"></div>
   <p class="lg">Blue = answered · Yellow bar = flagged · Outline = current</p></aside></div>
</div>
<div id="xr" hidden></div>
<div class="xcalc" id="calc" hidden><div class="xdisp"><div id="cexp">&nbsp;</div><div id="cres">0</div></div><div class="ckeys" id="ck"></div></div>
<div class="xmod" id="xmod" hidden><div class="xbox"><p id="xmt" style="margin:0 0 14px"></p><div class="act" style="display:flex;gap:8px"><button id="xno" style="flex:1;min-height:44px;border:1px solid var(--bd);background:var(--card);color:var(--tx);border-radius:10px;cursor:pointer">Keep going</button><button id="xyes" style="flex:1;min-height:44px;border:0;background:var(--brand);color:#fff;border-radius:10px;cursor:pointer;font-weight:600">Submit</button></div></div></div>`;

function mount(root){
  root.classList.add('ql','ex');root.innerHTML=SHELL;
  const $=s=>root.querySelector(s);
  const xs=$('#xs'),xe=$('#xe'),xr=$('#xr'),calc=$('#calc'),mod=$('#xmod');
  let S=null,kind='b',touched=false;

  /* ---------- setup ---------- */
  const maxN=()=>poolOf(kind).length;
  const sync=()=>{$('#xmax').textContent='Up to '+maxN();const n=Math.min(Math.max(+$('#xn').value||1,1),maxN());if(!touched)$('#xt').value=n};
  $('#xn').oninput=sync;$('#xt').oninput=()=>{touched=true};
  $('#xk').onclick=e=>{const b=e.target.closest('button');if(!b)return;kind=b.dataset.k;$('#xk').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));sync()};
  sync();

  /* ---------- exam ---------- */
  $('#xgo').onclick=()=>{
    const n=Math.min(Math.max(Math.round(+$('#xn').value)||1,1),maxN()),t=Math.min(Math.max(Math.round(+$('#xt').value)||1,1),300);
    S={items:shuffle(poolOf(kind)).slice(0,n).map(make),i:0,dur:t*60,start:Date.now(),endAt:Date.now()+t*60000,done:false,kind:KINDS[kind]};
    xs.hidden=true;xr.hidden=true;xe.hidden=false;calc.hidden=true;buildPal();show(0);tick();S.tmr=setInterval(tick,1000);scrollTo(0,0);
  };
  function tick(){if(!S||S.done)return;const r=Math.ceil((S.endAt-Date.now())/1000);const e=$('#xtm');e.textContent=tf(r);e.classList.toggle('low',r<=60);if(r<=0)submit('Time is up')}
  function buildPal(){const g=$('#pg');g.innerHTML='';S.items.forEach((it,i)=>{const b=document.createElement('button');b.className='pn';b.textContent=i+1;b.onclick=()=>{show(i);$('#xp').classList.remove('open')};g.appendChild(b)})}
  function pal(){const bs=$('#pg').children;let a=0;S.items.forEach((it,i)=>{const b=bs[i];b.classList.toggle('ans',it.pick!=null);b.classList.toggle('flg',it.flag);b.classList.toggle('cur',i===S.i);if(it.pick!=null)a++});$('#xpal').textContent='☰ '+a+'/'+S.items.length;$('#xq').textContent='Q '+(S.i+1)+'/'+S.items.length}
  function show(i){
    S.i=i;const it=S.items[i],c=$('#xqc');c.innerHTML='';
    const el=document.createElement('div');
    if(it.k==='m'){el.className='card mq';el.innerHTML=`<div class="qh"><span class="topic">MCQ · ${it.topic}</span><div class="q">${it.text}</div></div><div class="os"></div>`}
    else{el.className='card';el.innerHTML=`<span class="topic">Diagram · ${it.title}</span><div class="zr"><div class="q">${it.text}</div><button class="zb" type="button">Zoom</button></div><div class="sv">${dsvg(it.di,it.i)}</div><div class="os" style="margin-top:8px"></div>`;
      el.querySelector('.zb').onclick=function(){this.textContent=el.querySelector('.sv').classList.toggle('z')?'Fit':'Zoom'}}
    const os=el.querySelector('.os');
    it.opts.forEach((t,n)=>{const b=document.createElement('button');b.className='opt'+(it.pick===t?' sel':'');b.dataset.v=t;b.textContent=String.fromCharCode(65+n)+'. '+t;b.onclick=()=>pick(n);os.appendChild(b)});
    c.appendChild(el);
    $('#xpv').disabled=i===0;$('#xnx').textContent=i===S.items.length-1?'Finish':'Next →';$('#xfl').classList.toggle('on',it.flag);$('#xfl').textContent=it.flag?'Unflag':'Flag';pal();
  }
  function pick(n){const it=S.items[S.i],t=it.opts[n];if(t==null)return;it.pick=it.pick===t?null:t;$('#xqc').querySelectorAll('.opt').forEach(b=>b.classList.toggle('sel',b.dataset.v===it.pick));pal()}
  $('#xpv').onclick=()=>S.i>0&&show(S.i-1);
  $('#xnx').onclick=()=>S.i<S.items.length-1?show(S.i+1):ask();
  $('#xfl').onclick=()=>{const it=S.items[S.i];it.flag=!it.flag;$('#xfl').classList.toggle('on',it.flag);$('#xfl').textContent=it.flag?'Unflag':'Flag';pal()};
  $('#xpal').onclick=()=>{calc.hidden=true;$('#xp').classList.toggle('open')};$('#xpc').onclick=()=>$('#xp').classList.remove('open');
  $('#xcal').onclick=()=>{$('#xp').classList.remove('open');calc.hidden=!calc.hidden};
  $('#xsub').onclick=ask;$('#xno').onclick=()=>{mod.hidden=true};$('#xyes').onclick=()=>submit('');
  function ask(){const un=S.items.filter(i=>i.pick==null).length,fl=S.items.filter(i=>i.flag).length;$('#xmt').textContent='Submit the exam now? '+(un?un+' unanswered. ':'All questions answered. ')+(fl?fl+' flagged.':'');mod.hidden=false}

  /* ---------- submit + result ---------- */
  function submit(why){
    if(!S||S.done)return;S.done=true;clearInterval(S.tmr);mod.hidden=true;calc.hidden=true;$('#xp').classList.remove('open');
    const used=Math.min(S.dur,(Date.now()-S.start)/1000);let c=0,mc=0,mn=0,dc=0,dn=0,un=0;
    S.items.forEach(it=>{const ok=it.pick===it.ans;if(it.pick==null)un++;if(ok)c++;if(it.k==='m'){mn++;if(ok)mc++}else{dn++;if(ok)dc++}});
    const n=S.items.length;
    upd(x=>{x.hist.unshift({t:Date.now(),ex:1,kind:S.kind,n:n,c:c,tm:tf(used),why:why});x.hist=x.hist.slice(0,50);
      S.items.forEach(it=>{if(it.k==='m'&&it.pick!=null&&it.pick!==it.ans)x.miss[it.id]=(x.miss[it.id]||0)+1})});
    const pct=Math.round(c/n*100);let h=`<div class="card"><div class="big">${c}/${n} · ${pct}%</div><div class="sumr"><span>Time ${tf(used)} of ${tf(S.dur)}</span>${mn?`<span>MCQs ${mc}/${mn}</span>`:''}${dn?`<span>Diagrams ${dc}/${dn}</span>`:''}<span>Unanswered ${un}</span><span>${S.kind}</span></div>${why?`<p class="warn">Submitted automatically: ${why}.</p>`:''}<div class="act" style="margin-top:12px"><button id="xnew">New exam</button><button id="xwr">Show wrong only</button></div></div><div id="xl">`;
    S.items.forEach((it,i)=>{const cls=it.pick==null?'na':it.pick===it.ans?'ok':'no';
      h+=`<div class="rrow ${cls}" data-c="${cls}"><b>${i+1}.</b> ${it.k==='m'?it.text:it.title+' · structure '+(S.items[i].i+1)}<div class="m">${it.pick==null?'Not answered':'Your answer: '+it.pick}${cls==='ok'?' ✓':''}</div>${cls!=='ok'?`<div class="m">Correct: <b>${it.ans}</b></div>`:''}${it.exp&&cls!=='ok'?`<div class="m">${it.exp}</div>`:''}</div>`});
    xr.innerHTML=h+'</div>';xe.hidden=true;xr.hidden=false;
    $('#xnew').onclick=()=>{S=null;xr.hidden=true;xs.hidden=false;scrollTo(0,0)};
    let wo=false;$('#xwr').onclick=function(){wo=!wo;this.textContent=wo?'Show all':'Show wrong only';xr.querySelectorAll('.rrow').forEach(r=>{r.hidden=wo&&r.dataset.c==='ok'})};
    scrollTo(0,0);
  }
  /* leaving the tab, minimising the app, or leaving the page ends the exam */
  document.addEventListener('visibilitychange',()=>{if(document.hidden)submit('you left the tab or minimised the app')});
  addEventListener('pagehide',()=>submit('you left the page'));
  addEventListener('hashchange',()=>{if(location.hash!=='#anatomy/upper-limb-exam')submit('you left the exam page')});

  /* ---------- calculator ---------- */
  let expr='',ans=0,deg=true,fresh=false;
  const OPS=/^[+\-−×÷*\/^!]/,cexp=$('#cexp'),cres=$('#cres');
  const fmt=v=>{if(Math.abs(v)<1e-12)v=0;return String(parseFloat(v.toPrecision(12)))};
  function ev(src){
    let s=src.replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-').replace(/π/g,'pi').replace(/Ans/g,'ans').replace(/\s/g,'');
    let o=0;for(const ch of s){if(ch==='(')o++;else if(ch===')')o--}if(o<0)throw 0;s+=')'.repeat(o);
    let p=0;const isD=c=>c>='0'&&c<='9',r=deg?Math.PI/180:1;
    const fact=v=>{if(!Number.isInteger(v)||v<0||v>170)throw 0;let f=1;for(let i=2;i<=v;i++)f*=i;return f};
    const fn=(n,a)=>({sin:()=>Math.sin(a*r),cos:()=>Math.cos(a*r),tan:()=>Math.tan(a*r),asin:()=>Math.asin(a)/r,acos:()=>Math.acos(a)/r,atan:()=>Math.atan(a)/r,ln:()=>Math.log(a),log:()=>Math.log10(a),sqrt:()=>Math.sqrt(a),abs:()=>Math.abs(a)})[n]();
    function ex(){let v=tm();while(s[p]==='+'||s[p]==='-'){const o=s[p++],b=tm();v=o==='+'?v+b:v-b}return v}
    function tm(){let v=un();for(;;){const c=s[p];if(c==='*'||c==='/'){p++;const b=un();v=c==='*'?v*b:v/b}else if(c&&(isD(c)||c==='.'||c==='('||/[a-z]/.test(c)))v*=un();else return v}}
    function un(){if(s[p]==='-'){p++;return -un()}if(s[p]==='+'){p++;return un()}return pw()}
    function pw(){const b=po();if(s[p]==='^'){p++;return Math.pow(b,un())}return b}
    function po(){let v=pr();while(s[p]==='!'){p++;v=fact(v)}return v}
    function pr(){
      if(s[p]==='('){p++;const v=ex();if(s[p]!==')')throw 0;p++;return v}
      const m=/^(?:\d+\.?\d*|\.\d+)/.exec(s.slice(p));if(m){p+=m[0].length;return parseFloat(m[0])}
      const f=/^(asin|acos|atan|sin|cos|tan|ln|log|sqrt|abs|pi|ans|e)/.exec(s.slice(p));if(!f)throw 0;const n=f[0];p+=n.length;
      if(n==='pi')return Math.PI;if(n==='e')return Math.E;if(n==='ans')return ans;
      if(s[p]!=='(')throw 0;p++;const a=ex();if(s[p]!==')')throw 0;p++;return fn(n,a)}
    const v=ex();if(p!==s.length||!isFinite(v))throw 0;return v;
  }
  const draw=()=>{cexp.textContent=expr||' ';try{cres.textContent=expr?fmt(ev(expr)):'0'}catch(e){cres.textContent=''}};
  function press(a){
    if(a==='deg'){deg=!deg;root.querySelector('#ck button').textContent=deg?'DEG':'RAD';draw();return}
    if(a==='c'){expr='';fresh=false;draw();return}
    if(a==='bk'){if(fresh){expr='';fresh=false}else expr=expr.replace(/(asin\(|acos\(|atan\(|sin\(|cos\(|tan\(|ln\(|log\(|sqrt\(|Ans|.)$/,'');draw();return}
    if(a==='='){if(!expr)return;try{const v=ev(expr);cexp.textContent=expr+' =';cres.textContent=fmt(v);ans=+fmt(v);fresh=true;expr=''}catch(e){cres.textContent='Error';fresh=true;expr=''}return}
    if(fresh){expr=OPS.test(a)?fmt(ans):'';fresh=false}expr+=a;draw();
  }
  KEYS.forEach(k=>{const b=document.createElement('button');b.textContent=k[0];if(k[2])b.className=k[2];b.onclick=()=>press(k[1]);$('#ck').appendChild(b)});

  /* ---------- keyboard: A-E answer, arrows move, F flags; digits go to the calculator while it is open ---------- */
  document.addEventListener('keydown',e=>{
    if(!S||S.done||!root.offsetParent||e.ctrlKey||e.metaKey||e.altKey||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))return;
    const k=e.key;
    if(!calc.hidden){
      if(k==='Escape'){calc.hidden=true;return}
      if(k==='Enter'||k==='='){e.preventDefault();press('=');return}
      if(k==='Backspace'){e.preventDefault();press('bk');return}
      if(/^[0-9.+\-*\/^()!]$/.test(k)){e.preventDefault();press(k==='-'?'−':k==='*'?'×':k==='/'?'÷':k);return}
    }
    const l=k.toLowerCase(),i='abcde'.indexOf(l);
    if(i>=0&&k.length===1){e.preventDefault();pick(i)}
    else if(k==='ArrowRight'&&S.i<S.items.length-1)show(S.i+1);
    else if(k==='ArrowLeft'&&S.i>0)show(S.i-1);
    else if(l==='f')$('#xfl').click();
  });
}
window.ULExam={mount:mount};
})();
