/* Generic deck quiz: mount(root,slug) after quiz/d_<slug>.js is loaded */
(function(){
var st=document.createElement('style');st.textContent='.dk{max-width:760px;margin:0 auto}.dk .tabs,.dk .opts{display:flex;gap:8px;flex-wrap:wrap}.dk .opts{flex-direction:column;margin:12px 0}.dk button{font:inherit;color:inherit;background:var(--bg);border:1px solid #c9d1e0;border-radius:12px;padding:11px 14px;text-align:left;cursor:pointer}.dk .tabs button{border-radius:999px;padding:7px 14px}.dk .tabs .on,.dk .nx{background:var(--brand);color:#fff;border-color:var(--brand)}.dk .ok{background:#e3f4ea;border-color:#1f7a45;color:#14213d}.dk .no{background:#fbe8e6;border-color:#b3261e;color:#14213d}.dk .q{font-weight:600;margin:14px 0 4px}.dk .bar{height:6px;background:#dfe4ee;border-radius:9px;margin:12px 0}.dk .bar i{display:block;height:100%;background:var(--brand);border-radius:9px}.dk .mu{color:var(--mu);font-size:.9rem}.dk svg{width:100%;height:auto;max-height:70vh;background:#fff;border-radius:12px}.dk .pn line{stroke:#d22;stroke-width:3}.dk .pn circle{fill:#d22}.dk .pn rect{fill:#fff;stroke:#d22;stroke-width:3}.dk .pn text{font:700 28px system-ui;fill:#d22}';document.head.appendChild(st);
var sh=function(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.random()*(i+1)|0,t=a[i];a[i]=a[j];a[j]=t}return a};
function mount(root,slug){
 var D=ULDecks[slug],K='ice.d.'+slug,mode='m',items,i,score,box=document.createElement('div');box.className='dk';
 var ld=function(){try{return JSON.parse(localStorage.getItem(K))||{}}catch(e){return{}}},sv=function(x){try{localStorage.setItem(K,JSON.stringify(x))}catch(e){}};
 function build(){
  items=mode==='m'?D.mcq.map(function(r,n){return{id:'m'+n,q:r[0],a:r[1],o:sh(r.slice(1,5))}}):[];
  if(mode==='d')D.dg.forEach(function(d,di){d.pins.forEach(function(p,n){items.push({id:'d'+di+'.'+n,dg:d,p:p,q:'What is the structure marked by the pin?',a:p[4],o:sh([p[4]].concat(p[5].slice(0,3)))})})});
  items=sh(items);i=0;score=0;draw()}
 function svg(it){var d=it.dg,p=it.p,k=d.w/400*.75,bw=28*k,bh=24*k,bx=p[2],by=p[3];
  return '<svg viewBox="0 0 '+d.w+' '+d.h+'"><image href="'+d.img+'" width="'+d.w+'" height="'+d.h+'"/><g class="pn"><line x1="'+(bx+bw/2)+'" y1="'+(by+bh/2)+'" x2="'+p[0]+'" y2="'+p[1]+'" style="stroke-width:'+1.5*k+'px"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+4*k+'"/><rect x="'+bx+'" y="'+by+'" width="'+bw+'" height="'+bh+'" rx="'+5*k+'"/><text x="'+(bx+bw/2)+'" y="'+(by+bh*.75)+'" text-anchor="middle" style="font-size:'+18*k+'px">?</text></g></svg>'}
 function draw(){
  var h='<div class="tabs"><button data-m="m" class="'+(mode==='m'?'on':'')+'">MCQs ('+D.mcq.length+')</button><button data-m="d" class="'+(mode==='d'?'on':'')+'">Labelling</button></div>';
  if(!items.length){box.innerHTML=h+'<p class="mu">Loading…</p>';tabs();return}
  if(i>=items.length){var m=Object.keys(ld().miss||{}).length;box.innerHTML=h+'<div class="q">Score: '+score+' / '+items.length+' ('+Math.round(score/items.length*100)+'%)</div><p class="mu">'+m+' question(s) in your missed list.</p><button class="nx" id="rs">Restart</button>';tabs();box.querySelector('#rs').onclick=build;return}
  var it=items[i];
  box.innerHTML=h+'<div class="bar"><i style="width:'+i/items.length*100+'%"></i></div><div class="mu">'+(i+1)+' / '+items.length+' · '+D.name+'</div><div class="q">'+it.q+'</div>'+(it.dg?svg(it):'')+'<div class="opts">'+it.o.map(function(o,n){return'<button data-n="'+n+'">'+o+'</button>'}).join('')+'</div><div id="fb"></div>';
  tabs();
  box.querySelectorAll('.opts button').forEach(function(b){b.onclick=function(){
   var ok=it.o[b.dataset.n]===it.a;if(ok)score++;
   box.querySelectorAll('.opts button').forEach(function(x){x.disabled=true;if(it.o[x.dataset.n]===it.a)x.classList.add('ok')});if(!ok)b.classList.add('no');
   var s=ld();s.miss=s.miss||{};if(ok)delete s.miss[it.id];else s.miss[it.id]=1;sv(s);
   box.querySelector('#fb').innerHTML='<button class="nx" id="nx">'+(i+1<items.length?'Next':'Finish')+'</button>';box.querySelector('#nx').onclick=function(){i++;draw();scrollTo(0,0)}}})}
 function tabs(){box.querySelectorAll('.tabs button').forEach(function(b){b.onclick=function(){mode=b.dataset.m;build()}})}
 root.innerHTML='<h2>'+D.name+'</h2>';root.appendChild(box);build()}
window.ULDeck={mount:mount};
})();
