/* Generic deck quiz: mount(root,slug) after quiz/d_<slug>.js is loaded.
   Tabs: MCQs, and (when the deck has diagrams) Labelling, which works like the upper limb labelling tab. */
(function(){
var st=document.createElement('style');st.textContent=`
.dk{--card:#fff;--bd:#dfe4ee;--pin:#eef2f8;--ok:#1f7a45;--okb:#e3f4ea;--no:#b3261e;--nob:#fbe8e6;--ac:var(--brand);max-width:760px;margin:0 auto}
:root[data-theme=dark] .dk{--card:#182033;--bd:#2c3a56;--pin:#222d45;--ok:#6fd49a;--okb:#16301f;--no:#f2998f;--nob:#3a1b18;--ac:#6cc3ff}
.dk.wide{max-width:760px}
@media (min-width:900px){.dk.wide{max-width:1120px}}
.dk .tabs,.dk .opts{display:flex;gap:8px;flex-wrap:wrap}
.dk .opts{flex-direction:column;margin:12px 0}
.dk button{font:inherit;color:var(--tx);background:var(--card);border:1px solid var(--bd);border-radius:12px;padding:11px 14px;text-align:left;cursor:pointer;touch-action:manipulation}
.dk .tabs{margin:0 0 10px}
.dk .tabs button{border-radius:999px;padding:8px 16px;min-height:40px}
.dk .tabs .on,.dk .nx{background:var(--brand);color:#fff;border-color:var(--brand)}
.dk .opts button.ok{background:var(--okb);border-color:var(--ok)}
.dk .opts button.no{background:var(--nob);border-color:var(--no)}
.dk .opts button:disabled{cursor:default;opacity:1;color:var(--tx)}
.dk .q{font-weight:600;margin:14px 0 4px}
.dk .bar{height:6px;background:var(--bd);border-radius:9px;margin:12px 0}
.dk .bar i{display:block;height:100%;background:var(--brand);border-radius:9px}
.dk .mu{color:var(--mu);font-size:.9rem}
.dk svg{width:100%;height:auto;display:block;background:#fff;border-radius:12px}
.dk .lsc{font-size:.88rem;color:var(--mu);margin:0 0 10px}
.dk .lc{background:var(--card);border:1px solid var(--bd);border-radius:14px;padding:14px;margin:0 0 14px}
.dk .lc h3{margin:0 0 2px;font-size:1.05rem}
.dk .lc .zr{display:flex;align-items:center;gap:10px;justify-content:space-between}
.dk .lc .zr .mu{margin:2px 0 8px}
.dk .lc .zb{flex:none;padding:6px 14px;border-radius:20px;font-size:.85rem;min-height:36px}
.dk .lc .sv{overflow:auto;border-radius:8px}
.dk .lc .sv.z svg{width:220%;max-width:none}
.dk .lc .pin{cursor:pointer}
.dk .lc .pin line{stroke:var(--ac)}
.dk .lc .pin circle{fill:var(--ac)}
.dk .lc .pin rect{fill:var(--card);stroke:var(--ac)}
.dk .lc .pin text{fill:var(--tx);font-weight:700;pointer-events:none}
.dk .lc .pin.act rect{fill:var(--pin);stroke-dasharray:6 3}
.dk .lc .pin.ok rect{fill:var(--okb);stroke:var(--ok)}
.dk .lc .pin.ok line{stroke:var(--ok)}.dk .lc .pin.ok circle{fill:var(--ok)}
.dk .lc .pin.no rect{fill:var(--nob);stroke:var(--no)}
.dk .lc .pin.no line{stroke:var(--no)}.dk .lc .pin.no circle{fill:var(--no)}
.dk .lc .side{position:sticky;bottom:calc(8px + env(safe-area-inset-bottom));z-index:3}
.dk .lc .panel{min-height:48px;border:1px dashed var(--bd);border-radius:10px;padding:8px 10px;font-size:.92rem;color:var(--mu);background:var(--card);max-height:36vh;overflow:auto;box-shadow:0 -6px 18px rgba(0,0,0,.14)}
.dk .lc .panel b{color:var(--tx)}
.dk .lc .panel .o{display:block;width:100%;margin:3px 0;padding:6px 10px;min-height:38px;border-radius:10px;font-size:.88rem}
.dk .lc .panel .o.ok{background:var(--okb);border-color:var(--ok)}
.dk .lc .panel .o.no{background:var(--nob);border-color:var(--no)}
.dk .lc .panel .e{margin-top:6px;font-size:.88rem;color:var(--mu)}
.dk .lc .prog{font-size:.82rem;color:var(--mu);margin-top:6px;background:var(--card)}
.dk .rl{margin:4px 0 24px;color:var(--mu)}
@media (min-width:900px){
 .dk .lc{display:grid;grid-template-columns:minmax(0,1.7fr) minmax(300px,1fr);column-gap:22px;align-items:start}
 .dk .lc>h3,.dk .lc>.zr{grid-column:1/-1}
 .dk .lc>.sv{grid-column:1;grid-row:3}
 .dk .lc>.side{grid-column:2;grid-row:3;top:calc(var(--nav-top) + var(--nav-h) + 20px);bottom:auto;align-self:start}
 .dk .lc .panel{max-height:none;box-shadow:none;min-height:200px}
}`;document.head.appendChild(st);
var sh=function(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.random()*(i+1)|0,t=a[i];a[i]=a[j];a[j]=t}return a};
function mount(root,slug){
 var D=ULDecks[slug],K='ice.d.'+slug,mode='m',items,i,score,box=document.createElement('div');box.className='dk';
 var DG=D.dg||[],LT=DG.reduce(function(a,d){return a+d.pins.length},0);
 var ld=function(){try{return JSON.parse(localStorage.getItem(K))||{}}catch(e){return{}}},sv=function(x){try{localStorage.setItem(K,JSON.stringify(x))}catch(e){}};
 function head(){return '<div class="tabs"><button data-m="m" class="'+(mode==='m'?'on':'')+'">MCQs ('+D.mcq.length+')</button>'+(LT?'<button data-m="l" class="'+(mode==='l'?'on':'')+'">Labelling ('+LT+')</button>':'')+'</div>'}
 function tabs(){box.querySelectorAll('.tabs button').forEach(function(b){b.onclick=function(){mode=b.dataset.m;build()}})}
 function build(){
  box.classList.toggle('wide',mode==='l');
  if(mode==='l'){drawLab();return}
  items=sh(D.mcq.map(function(r,n){return{id:'m'+n,q:r[0],a:r[1],o:sh(r.slice(1,5))}}));i=0;score=0;draw()}
 function draw(){
  var h=head();
  if(i>=items.length){var m=Object.keys(ld().miss||{}).length;box.innerHTML=h+'<div class="q">Score: '+score+' / '+items.length+' ('+Math.round(score/items.length*100)+'%)</div><p class="mu">'+m+' question(s) in your missed list.</p><button class="nx" id="rs">Restart</button>';tabs();box.querySelector('#rs').onclick=build;return}
  var it=items[i];
  box.innerHTML=h+'<div class="bar"><i style="width:'+i/items.length*100+'%"></i></div><div class="mu">'+(i+1)+' / '+items.length+' · '+D.name+'</div><div class="q">'+it.q+'</div><div class="opts">'+it.o.map(function(o,n){return'<button data-n="'+n+'">'+o+'</button>'}).join('')+'</div><div id="fb"></div>';
  tabs();
  box.querySelectorAll('.opts button').forEach(function(b){b.onclick=function(){
   var ok=it.o[b.dataset.n]===it.a;if(ok)score++;
   box.querySelectorAll('.opts button').forEach(function(x){x.disabled=true;if(it.o[x.dataset.n]===it.a)x.classList.add('ok')});if(!ok)b.classList.add('no');
   var s=ld();s.miss=s.miss||{};if(ok)delete s.miss[it.id];else s.miss[it.id]=1;sv(s);
   box.querySelector('#fb').innerHTML='<button class="nx" id="nx">'+(i+1<items.length?'Next':'Finish')+'</button>';box.querySelector('#nx').onclick=function(){i++;draw();scrollTo(0,0)}}})}

 /* ---------- labelling: every diagram with all its numbered boxes; tap a box, pick the structure ---------- */
 function drawLab(){
  var saved=ld().lab||{},got=0,ans=0;
  box.innerHTML=head()+'<p class="lsc" id="ls"></p><div id="ll"></div><button id="lr" type="button">Reset labelling</button>';tabs();
  var ls=box.querySelector('#ls'),ll=box.querySelector('#ll');
  function total(){ls.textContent='Labelling: '+got+'/'+ans+' correct (of '+LT+')'}
  DG.forEach(function(d,di){
   var k=d.w/400*.75,bw=28*k,bh=24*k,pins='';
   d.pins.forEach(function(p,n){var bx=p[2],by=p[3];
    pins+='<g class="pin" data-i="'+n+'"><line x1="'+(bx+bw/2)+'" y1="'+(by+bh/2)+'" x2="'+p[0]+'" y2="'+p[1]+'" stroke-width="'+1.2*k+'"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+3.5*k+'"/><rect x="'+bx+'" y="'+by+'" width="'+bw+'" height="'+bh+'" rx="'+5*k+'" stroke-width="'+1.6*k+'"/><text x="'+(bx+bw/2)+'" y="'+(by+bh*.7)+'" text-anchor="middle" font-size="'+13*k+'">'+(n+1)+'</text></g>'});
   var sec=document.createElement('section');sec.className='lc';
   sec.innerHTML='<h3>'+(di+1)+'. '+d.title+'</h3><div class="zr"><p class="mu">'+(d.note||'Tap a numbered box to reveal the options.')+'</p><button class="zb" type="button">Zoom</button></div><div class="sv"><svg viewBox="0 0 '+d.w+' '+d.h+'"><image href="'+d.img+'" x="0" y="0" width="'+d.w+'" height="'+d.h+'"/>'+pins+'</svg></div><div class="side"><div class="panel">Tap a numbered box.</div><div class="prog"></div></div>';
   var panel=sec.querySelector('.panel'),prog=sec.querySelector('.prog'),g=0,a=0;
   sec.querySelector('.zb').onclick=function(){this.textContent=sec.querySelector('.sv').classList.toggle('z')?'Fit':'Zoom'};
   var stt=d.pins.map(function(p,n){var s=saved[di+'.'+n];return{opts:sh([p[4]].concat(p[5])),done:s!=null,pick:s!=null?s:null}});
   stt.forEach(function(s,n){if(s.done){a++;ans++;var ok=s.pick===d.pins[n][4];if(ok){g++;got++}sec.querySelector('.pin[data-i="'+n+'"]').classList.add(ok?'ok':'no')}});
   var pg=function(){prog.textContent=a+'/'+d.pins.length+' answered, '+g+' correct'};pg();
   sec.querySelectorAll('.pin').forEach(function(pn){pn.addEventListener('click',function(){
    var n=+pn.dataset.i,p=d.pins[n],s=stt[n];
    sec.querySelectorAll('.pin').forEach(function(x){x.classList.remove('act')});pn.classList.add('act');
    panel.innerHTML='<b>Box '+(n+1)+'</b>: what is this?';
    if(s.done){var r=document.createElement('div');r.className='e';r.textContent=s.pick===p[4]?'Correct: '+p[4]:'You chose '+s.pick+'. Correct answer: '+p[4];panel.appendChild(r);return}
    s.opts.forEach(function(o){var b=document.createElement('button');b.type='button';b.className='o';b.textContent=o;
     b.onclick=function(){if(s.done)return;s.done=true;s.pick=o;a++;ans++;var right=o===p[4];if(right){g++;got++}
      var x=ld();x.lab=x.lab||{};x.lab[di+'.'+n]=o;sv(x);
      pn.classList.remove('act');pn.classList.add(right?'ok':'no');
      panel.querySelectorAll('.o').forEach(function(y){y.disabled=true;if(y.textContent===p[4])y.classList.add('ok')});if(!right)b.classList.add('no');
      var r=document.createElement('div');r.className='e';r.textContent=right?'Correct.':'Correct answer: '+p[4];panel.appendChild(r);pg();total()};
     panel.appendChild(b)});
   })});
   ll.appendChild(sec)});
  total();
  box.querySelector('#lr').onclick=function(){var x=ld();delete x.lab;sv(x);drawLab();scrollTo(0,0)};
 }
 root.innerHTML='<h2>'+D.name+'</h2>';root.appendChild(box);build()}
window.ULDeck={mount:mount};
})();
