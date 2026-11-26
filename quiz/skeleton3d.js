/* 3D skeleton viewer. ULSkeleton.mount(root) after this file is loaded.
   Loads three.js (pinned, from jsDelivr) + models/skeleton.json/.bin (176 separately named bones).
   Drag = rotate, pinch/scroll = zoom, two-finger drag/right-drag = pan, tap a bone = label it. */
(function(){
var CDN='https://cdn.jsdelivr.net/npm/three@0.128.0/',BASE='models/skeleton';
var RC={'Skull':0xe6d9bd,'Vertebral column':0xe3b84e,'Thoracic cage':0x7fc08f,'Pectoral girdle':0xe27f7f,'Upper limb':0x7aa3e6,'Pelvic girdle':0xb98be0,'Lower limb':0x5cc2d1},IVORY=0xe9e1d0;
var st=document.createElement('style');st.textContent=`
.sk{--card:#fff;--bd:#dfe4ee;--ac:var(--brand);max-width:1100px;margin:0 auto}
:root[data-theme=dark] .sk{--card:#182033;--bd:#2c3a56;--ac:#6cc3ff}
.sk button,.sk input{font:inherit;color:var(--tx)}
.sk-stage{position:relative;height:min(64svh,620px);min-height:380px;border-radius:18px;overflow:hidden;border:1px solid var(--bd);background:linear-gradient(#e3ebf7,#c3d1e8);touch-action:none}
:root[data-theme=dark] .sk-stage{background:linear-gradient(#1c2744,#0d1322)}
.sk-stage canvas{position:absolute;inset:0;width:100%;height:100%;display:block;outline:0}
.sk-pins{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.sk-pin{position:absolute;left:0;top:0;pointer-events:auto;cursor:pointer;white-space:nowrap;font-size:11.5px;line-height:1;padding:5px 8px;border-radius:8px;background:rgba(255,255,255,.93);color:#14213d;border-left:4px solid var(--c);box-shadow:0 2px 8px rgba(0,0,0,.28);transform:translate(-50%,-130%)}
.sk-pin.on{background:#0880e8;color:#fff;font-weight:700}
.sk-tools{position:absolute;top:10px;right:10px;display:flex;flex-direction:column;gap:6px;align-items:flex-end}
.sk-tools button,.sk-chips button,.sk-card button,.sk-list button{background:var(--card);border:1px solid var(--bd);border-radius:999px;padding:7px 13px;min-height:36px;cursor:pointer;touch-action:manipulation}
.sk-tools button{font-size:.8rem;background:rgba(255,255,255,.9);color:#14213d;border-color:transparent}
:root[data-theme=dark] .sk-tools button{background:rgba(24,32,51,.9);color:#e8edf7}
.sk-tools button.on{background:var(--brand);color:#fff}
.sk-load{position:absolute;inset:0;display:grid;place-items:center;color:var(--mu);text-align:center;padding:20px}
.sk-hint{position:absolute;left:12px;bottom:10px;font-size:.78rem;color:var(--mu);pointer-events:none}
.sk-chips{display:flex;gap:7px;overflow-x:auto;padding:10px 2px 4px;scrollbar-width:none}
.sk-chips::-webkit-scrollbar{display:none}
.sk-chips button{flex:none;font-size:.86rem;display:flex;align-items:center;gap:6px}
.sk-chips button i{width:10px;height:10px;border-radius:50%;background:var(--c,#999)}
.sk-chips button.on{background:var(--brand);border-color:var(--brand);color:#fff}
.sk-chips.sub button{font-size:.8rem;min-height:32px;padding:5px 11px}
.sk-card{margin:10px 0;padding:14px 16px;border:1px solid var(--bd);border-radius:14px;background:var(--card)}
.sk-card h3{margin:0 0 2px;font-size:1.15rem}.sk-card em{color:var(--mu)}
.sk-card p{margin:6px 0;color:var(--mu);font-size:.9rem}
.sk-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
.sk-opts{display:grid;gap:8px;margin-top:10px}
.sk-opts button{border-radius:12px;text-align:left}
.sk-opts .ok{background:#e3f4ea;border-color:#1f7a45;color:#14532d}.sk-opts .no{background:#fbe8e6;border-color:#b3261e;color:#7f1d1d}
:root[data-theme=dark] .sk-opts .ok{background:#16301f;color:#6fd49a}:root[data-theme=dark] .sk-opts .no{background:#3a1b18;color:#f2998f}
.sk input[type=search]{width:100%;padding:10px 14px;border-radius:12px;border:1px solid var(--bd);background:var(--card);margin:2px 0 8px}
.sk-list{display:flex;flex-wrap:wrap;gap:6px;max-height:220px;overflow:auto}
.sk-list button{font-size:.82rem;padding:5px 11px;min-height:32px;border-radius:10px;border-left:4px solid var(--c)}
.sk-list button.on{background:var(--brand);color:#fff}
.sk-credit{margin:14px 0 0;font-size:.78rem;color:var(--mu);line-height:1.5}.sk-credit a{color:var(--brand)}
@media(min-width:900px){.sk-stage{height:min(72svh,720px)}}`;
document.head.appendChild(st);
function script(u){return new Promise(function(ok,no){var s=document.createElement('script');s.src=u;s.onload=ok;s.onerror=no;document.head.appendChild(s)})}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.random()*(i+1)|0,t=a[i];a[i]=a[j];a[j]=t}return a}

function mount(root){
root.innerHTML='<div class="sk"><div class="sk-stage"><canvas></canvas><div class="sk-pins"></div><div class="sk-load">Loading 3D skeleton\u2026</div>'
+'<div class="sk-tools"><button data-a="reset">Reset view</button><button data-a="labels" class="on">Labels</button><button data-a="hide">Hide others</button><button data-a="color" class="on">Colours</button></div>'
+'<div class="sk-hint">Drag to rotate \u00b7 pinch to zoom \u00b7 tap a bone</div></div>'
+'<div class="sk-chips" id="skr"></div><div class="sk-chips sub" id="sks"></div><div class="sk-card" id="skc"></div>'
+'<input type="search" id="skq" placeholder="Search bones (e.g. scaphoid, rib 5, femur)" aria-label="Search bones"><div class="sk-list" id="skl"></div>'
+'<p class="sk-credit">Model: <a href="https://3d.nih.gov/entries/3DPX-016838/2" target="_blank" rel="noopener">&ldquo;Human Skeleton&rdquo; by My Segmenter</a>, NIH 3D (3DPX-016838), licensed <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>. Modified: the single mesh was split into individual bones and labelled. Labels were assigned automatically from position, size and joint contacts, so confirm against your atlas. Hyoid, patellae and ear ossicles are not in this model.</p></div>';
var $=function(s){return root.querySelector(s)},stage=$('.sk-stage'),cv=$('canvas'),pinsEl=$('.sk-pins'),loadEl=$('.sk-load');
Promise.all([script(CDN+'build/three.min.js').then(function(){return script(CDN+'examples/js/controls/OrbitControls.js')}),fetch(BASE+'.json').then(function(r){return r.json()}),fetch(BASE+'.bin').then(function(r){return r.arrayBuffer()})])
.then(function(r){init(r[1].bones,r[2])}).catch(function(){loadEl.innerHTML='Could not load the 3D skeleton.<br><a href="" onclick="location.reload();return false">Retry</a>'});

function init(bones,buf){
var T=window.THREE,renderer=new T.WebGLRenderer({canvas:cv,antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio||1,2));
var scene=new T.Scene(),cam=new T.PerspectiveCamera(35,1,.05,300);
scene.add(new T.HemisphereLight(0xffffff,0x6b7690,.85));var hl=new T.DirectionalLight(0xffffff,.8);cam.add(hl);hl.position.set(.4,.6,1);scene.add(cam);
var ctl=new T.OrbitControls(cam,cv);ctl.enableDamping=true;ctl.dampingFactor=.12;ctl.screenSpacePanning=true;ctl.minDistance=.35;ctl.maxDistance=45;ctl.rotateSpeed=.8;
var HOME={p:new T.Vector3(0,.3,32),t:new T.Vector3(0,0,0)};cam.position.copy(HOME.p);ctl.target.copy(HOME.t);
var meshes=[],byName={};
bones.forEach(function(b){
 var q=new Int16Array(buf,b.vo,b.nv*3),ix=new Uint16Array(buf,b.io,b.nt*3),p=new Float32Array(b.nv*3);
 for(var k=0;k<3;k++){var lo=b.lo[k],s=(b.hi[k]-lo)/65534;for(var j=k;j<p.length;j+=3)p[j]=(q[j]+32767)*s+lo}
 var g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(p,3));g.setIndex(new T.BufferAttribute(ix,1));g.computeVertexNormals();g.computeBoundingSphere();
 var m=new T.Mesh(g,new T.MeshStandardMaterial({color:RC[b.r],roughness:.78,metalness:0,emissive:0x000000}));
 m.userData={b:b,c:g.boundingSphere.center.clone(),rad:g.boundingSphere.radius};m.matrixAutoUpdate=false;scene.add(m);meshes.push(m);byName[b.n]=m;
});
loadEl.remove();
var regions=[],subs={};bones.forEach(function(b){if(regions.indexOf(b.r)<0)regions.push(b.r);(subs[b.r]=subs[b.r]||[]);if(subs[b.r].indexOf(b.s)<0)subs[b.r].push(b.s)});
var sel=null,grp=null,labels=true,hideOthers=false,colour=true,quiz=null,dirty=true,fly=null,pins=[];
var ray=new T.Raycaster(),v3=new T.Vector3();

function inGrp(b){return !grp||(b.r===grp.r&&(!grp.s||b.s===grp.s))}
function solid(m){var b=m.userData.b;if(quiz)return m===quiz.t;if(sel&&!grp)return m===sel;return inGrp(b)}
function paint(){
 meshes.forEach(function(m){var b=m.userData.b,on=solid(m),mt=m.material,isSel=m===sel||(quiz&&m===quiz.t);
  mt.color.setHex(colour?RC[b.r]:IVORY);mt.emissive.setHex(isSel?0x0a5fb0:0x000000);mt.emissiveIntensity=isSel?.85:1;
  m.visible=on||!hideOthers;m.userData.ghost=!on;mt.transparent=!on;mt.opacity=on?1:.12;mt.depthWrite=on});
 dirty=true;
}
function focus(list,keepDir){
 var box=new T.Box3();list.forEach(function(m){box.expandByObject(m)});
 var sp=box.getBoundingSphere(new T.Sphere()),r=Math.max(sp.radius,.12),d=Math.min(Math.max(r/Math.sin(cam.fov*Math.PI/360)*1.25,.5),32);
 var dir=cam.position.clone().sub(ctl.target).normalize();
 fly={t0:performance.now(),dur:550,fp:cam.position.clone(),ft:ctl.target.clone(),tt:sp.center.clone(),tp:sp.center.clone().add(dir.multiplyScalar(d))};
}
function home(){fly={t0:performance.now(),dur:600,fp:cam.position.clone(),ft:ctl.target.clone(),tt:HOME.t.clone(),tp:HOME.p.clone()}}
function groupMeshes(){return meshes.filter(function(m){return inGrp(m.userData.b)})}

/* ---- UI ---- */
var chipsR=$('#skr'),chipsS=$('#sks'),card=$('#skc'),list=$('#skl'),q=$('#skq');
function renderChips(){
 chipsR.innerHTML='<button data-r="" class="'+(grp?'':'on')+'">Whole skeleton</button>'+regions.map(function(r){return'<button data-r="'+esc(r)+'" style="--c:#'+RC[r].toString(16)+'" class="'+(grp&&grp.r===r?'on':'')+'"><i></i>'+esc(r)+'</button>'}).join('')+'<button data-quiz="1" class="'+(quiz?'on':'')+'">Quiz me</button>';
 chipsS.innerHTML=grp&&subs[grp.r].length>1?'<button data-s="" class="'+(grp.s?'':'on')+'">All '+esc(grp.r.toLowerCase())+'</button>'+subs[grp.r].map(function(s){return'<button data-s="'+esc(s)+'" class="'+(grp.s===s?'on':'')+'">'+esc(s)+'</button>'}).join(''):'';
}
function renderList(){
 var t=q.value.trim().toLowerCase(),arr=[];
 if(t)arr=meshes.filter(function(m){var b=m.userData.b;return(b.n+' '+b.l+' '+b.s).toLowerCase().indexOf(t)>=0});else if(grp)arr=groupMeshes();
 list.innerHTML=quiz?'':arr.slice(0,90).map(function(m){var b=m.userData.b;return'<button data-n="'+esc(b.n)+'" style="--c:#'+RC[b.r].toString(16)+'" class="'+(m===sel?'on':'')+'">'+esc(b.n)+'</button>'}).join('');
}
function renderCard(){
 if(quiz){return}
 if(!sel){card.innerHTML='<h3>Tap a bone</h3><p>Rotate and zoom the skeleton, then tap any bone to see its name. Choose a region above to label every bone in it, or use the search box to find a bone.</p>';return}
 var b=sel.userData.b;
 card.innerHTML='<h3>'+esc(b.n)+'</h3><em>'+esc(b.l)+'</em><p>'+esc(b.r)+' \u203a '+esc(b.s)+(b.note?'<br>'+esc(b.note):'')+'</p><div class="sk-row"><button data-a="focus">Zoom to bone</button><button data-a="clear">Clear selection</button></div>';
}
function refresh(){renderChips();renderList();renderCard();paint()}
function select(m,zoom){sel=m;if(m&&grp&&!inGrp(m.userData.b))grp=null;refresh();if(m&&zoom)focus([m])}

/* ---- quiz ---- */
function nextQ(){
 var pool=grp?groupMeshes():meshes,t=pool[Math.random()*pool.length|0],b=t.userData.b,names=[],mirror=b.sd?b.n.replace(b.sd,b.sd==='Right'?'Left':'Right'):null;
 if(mirror&&byName[mirror])names.push(mirror);
 shuffle(meshes.filter(function(m){return m!==t&&m.userData.b.s===b.s&&names.indexOf(m.userData.b.n)<0})).forEach(function(m){if(names.length<3)names.push(m.userData.b.n)});
 shuffle(meshes.filter(function(m){return m!==t&&m.userData.b.r===b.r&&names.indexOf(m.userData.b.n)<0})).forEach(function(m){if(names.length<3)names.push(m.userData.b.n)});
 quiz.t=t;quiz.done=false;quiz.opts=shuffle(names.concat([b.n]));sel=null;paint();renderQuiz();focus([t]);
}
function renderQuiz(){
 var b=quiz.t.userData.b;
 card.innerHTML='<h3>Which bone is highlighted?</h3><p>Score: '+quiz.s+' / '+quiz.n+(grp?' \u00b7 '+esc(grp.s||grp.r):'')+'</p><div class="sk-opts">'+quiz.opts.map(function(o){var c=quiz.done?(o===b.n?'ok':o===quiz.pick?'no':''):'';return'<button class="'+c+'" data-o="'+esc(o)+'"'+(quiz.done?' disabled':'')+'>'+esc(o)+'</button>'}).join('')+'</div>'
 +(quiz.done?'<p><em>'+esc(b.l)+'</em> \u00b7 '+esc(b.s)+'</p><div class="sk-row"><button data-a="next" style="background:var(--brand);color:#fff;border-color:var(--brand)">Next bone</button><button data-a="endquiz">Exit quiz</button></div>':'<div class="sk-row"><button data-a="endquiz">Exit quiz</button></div>');
}
function endQuiz(){quiz=null;refresh()}

/* ---- events ---- */
chipsR.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
 if(b.dataset.quiz){if(quiz){endQuiz()}else{quiz={s:0,n:0};renderChips();renderList();nextQ()}return}
 var r=b.dataset.r;grp=r?{r:r,s:''}:null;sel=null;refresh();if(quiz){nextQ()}else focus(r?groupMeshes():meshes.slice());if(!r&&!quiz)home()});
chipsS.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;grp.s=b.dataset.s;sel=null;refresh();if(quiz)nextQ();else focus(groupMeshes())});
list.addEventListener('click',function(e){var b=e.target.closest('button');if(b)select(byName[b.dataset.n],true)});
q.addEventListener('input',renderList);
card.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
 if(b.dataset.o){quiz.pick=b.dataset.o;quiz.done=true;quiz.n++;if(quiz.pick===quiz.t.userData.b.n)quiz.s++;renderQuiz();return}
 var a=b.dataset.a;if(a==='next')nextQ();else if(a==='endquiz')endQuiz();else if(a==='focus')focus([sel]);else if(a==='clear'){sel=null;refresh();focus(grp?groupMeshes():meshes.slice());if(!grp)home()}});
$('.sk-tools').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var a=b.dataset.a;
 if(a==='reset'){sel=null;grp=null;if(quiz)quiz=null;refresh();home();return}
 if(a==='labels'){labels=!labels;b.classList.toggle('on',labels)}
 if(a==='hide'){hideOthers=!hideOthers;b.classList.toggle('on',hideOthers)}
 if(a==='color'){colour=!colour;b.classList.toggle('on',colour)}
 paint();pinsDirty=true});
var down=null,ptrs={};
cv.addEventListener('pointerdown',function(e){ptrs[e.pointerId]=1;fly=null;down=Object.keys(ptrs).length>1?null:{x:e.clientX,y:e.clientY,t:Date.now()}});
cv.addEventListener('pointercancel',function(e){delete ptrs[e.pointerId];down=null});
cv.addEventListener('pointerup',function(e){
 delete ptrs[e.pointerId];if(!down||quiz)return;var moved=Math.hypot(e.clientX-down.x,e.clientY-down.y),dt=Date.now()-down.t;down=null;if(moved>7||dt>600)return;
 var r=cv.getBoundingClientRect();ray.setFromCamera({x:(e.clientX-r.left)/r.width*2-1,y:-((e.clientY-r.top)/r.height)*2+1},cam);
 var hit=ray.intersectObjects(meshes.filter(function(m){return m.visible&&!m.userData.ghost}),false)[0];
 if(hit)select(hit.object,false);else if(sel){sel=null;refresh()}});
ctl.addEventListener('change',function(){dirty=true});

/* ---- pins (HTML labels that follow bones) ---- */
var pinsDirty=true;
function updatePins(){
 var want=quiz?[]:(!labels?(sel?[sel]:[]):(sel&&!grp?[sel]:grp?groupMeshes():[]));
 if(sel&&want.indexOf(sel)<0)want.push(sel);
 var W=cv.clientWidth,H=cv.clientHeight,placed=[],out=[];
 want.sort(function(a,b){return(b===sel)-(a===sel)||b.userData.rad-a.userData.rad});
 want.forEach(function(m){
  if(out.length>=45&&m!==sel)return;v3.copy(m.userData.c).project(cam);if(v3.z>1||v3.z<-1)return;
  var x=(v3.x+1)/2*W,y=(1-v3.y)/2*H,n=m.userData.b.n,w=n.length*6.4+22,h=22,box=[x-w/2,y-h*1.5,x+w/2,y-h*.5];
  if(x<0||x>W||y<0||y>H)return;
  if(m!==sel&&placed.some(function(p){return box[0]<p[2]&&box[2]>p[0]&&box[1]<p[3]&&box[3]>p[1]}))return;
  placed.push(box);out.push({m:m,x:x,y:y});
 });
 var keep={};out.forEach(function(o){var id=o.m.userData.b.n;keep[id]=1;var el=pins[id];
  if(!el){el=document.createElement('div');el.className='sk-pin';el.textContent=id;el.style.setProperty('--c','#'+RC[o.m.userData.b.r].toString(16));el.onclick=function(ev){ev.stopPropagation();select(o.m,false)};pinsEl.appendChild(el);pins[id]=el}
  el.classList.toggle('on',o.m===sel);el.style.display='';el.style.zIndex=o.m===sel?5:1;el.style.transform='translate('+o.x.toFixed(1)+'px,'+o.y.toFixed(1)+'px) translate(-50%,-130%)'});
 Object.keys(pins).forEach(function(k){if(!keep[k])pins[k].style.display='none'});
}

/* ---- loop ---- */
function size(){var w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return false;if(cv.width!==(w*renderer.getPixelRatio()|0)||cv.height!==(h*renderer.getPixelRatio()|0)){renderer.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();dirty=true}return true}
function loop(){
 requestAnimationFrame(loop);if(!root.offsetParent||!size())return;
 if(fly){var k=Math.min((performance.now()-fly.t0)/fly.dur,1),e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
  cam.position.lerpVectors(fly.fp,fly.tp,e);ctl.target.lerpVectors(fly.ft,fly.tt,e);if(k>=1)fly=null;dirty=true}
 if(ctl.update())dirty=true;
 if(dirty){renderer.render(scene,cam);updatePins();dirty=false}
}
refresh();loop();
}}
window.ULSkeleton={mount:mount};
})();
