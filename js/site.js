/* EDIT HERE: contact details used on every page. Empty values are hidden automatically. */
const S={phone:'9405285486',wa:'919405285486',address:'',hours:'',email:'',endpoint:''};
/* Products: [folder, name, description, list, colour class]. Edit text here; it updates the whole site. */
const P=[
['artwood','Artwood','Wooden wall art, carved panels and statement pieces for walls and tables.',['Wall panels','Carved decor','Custom nameplates'],'s-wood'],
['resin-art','Resin Art','Colourful resin tables, wall art, trays and gifts, made one piece at a time.',['Resin tables','Wall art','Trays and coasters'],'s-resin'],
['modular-interiors','Modular Interiors','Modular kitchens, wardrobes, TV units and storage planned around your room.',['Modular kitchen','Bedroom','Living room'],'s-mod'],
['mandir','Mandir','Home mandir units in wood, wall mounted or floor standing, sized for your space.',['Wall mandir','Standing mandir','Custom sizes'],'s-mandir'],
['premium-doors','Premium Doors','Main doors and room doors with strong frames and a clean finish.',['Main doors','Bedroom doors','Carved and flush doors'],'s-door'],
['sagwan','Sagwan Work','Teak (sagwan) doors, frames, windows and furniture built to last.',['Teak doors','Frames and windows','Furniture'],'s-teak'],
['aluminium-glass','Aluminium & Glass','Aluminium windows, sliding doors, glass partitions and railings.',['Sliding windows','Partitions','Glass doors'],'s-glass'],
['kids-toys','Kids Wooden Toys','Wooden toys, puzzles and play sets for children.',['Puzzles','Play sets','Gifts'],'s-toys']];
const $=(s,r=document)=>r.querySelector(s),pg=document.body.dataset.page,tel='tel:+91'+S.phone;
const wa=t=>`https://wa.me/${S.wa}?text=${encodeURIComponent(t)}`,hi='Hello Mr. ArtistA, I would like to know more about your work.';
const nav=[['index','Home'],['products','Products'],['portfolio','Our Work'],['about','About'],['contact','Contact']];
const links=nav.map(([h,t])=>`<a href="${h}.html"${h===pg?' aria-current="page"':''}>${t}</a>`).join('');
$('#hdr').outerHTML=`<header class="hd"><div class="w bar"><a href="index.html" class="lg"><img src="images/logo/logo.png" alt="Mr. ArtistA home"></a><button class="mt" aria-expanded="false" aria-controls="nv">Menu</button><nav id="nv" aria-label="Main">${links}</nav><a class="btn hc" href="${tel}">Call ${S.phone.slice(0,5)} ${S.phone.slice(5)}</a></div></header>`;
$('#ftr').outerHTML=`<footer class="ft"><div class="w fg"><div><img src="images/logo/logo-light.png" alt="Mr. ArtistA"><p>Design | Create | Transform</p></div><div><h3>Pages</h3>${links}</div><div><h3>Contact</h3><a href="${tel}">${S.phone.slice(0,5)} ${S.phone.slice(5)}</a><a href="${wa(hi)}" target="_blank" rel="noopener">WhatsApp</a>${S.email?`<a href="mailto:${S.email}">${S.email}</a>`:''}${S.address?`<span>${S.address}</span>`:''}${S.hours?`<span>${S.hours}</span>`:''}</div></div><p class="w cp">&copy; ${new Date().getFullYear()} Mr. ArtistA</p></footer><div class="fab"><a class="btn" href="${tel}">Call</a><a class="btn wa" href="${wa(hi)}" target="_blank" rel="noopener">WhatsApp</a></div>`;
const mt=$('.mt');mt.onclick=()=>mt.setAttribute('aria-expanded',$('#nv').classList.toggle('open'));
if(/guide/.test(location.search))document.body.classList.add('guide');

const rail=$('#rail');if(rail){rail.innerHTML=P.map((p,i)=>`<li${i?'':' class="on"'}><a class="${p[4]}" href="products.html#${p[0]}"><span class="slot" data-img="images/products/${p[0]}/01"></span><b>${p[1]}</b><small>${p[2]}</small></a></li>`).join('');
rail.querySelectorAll('li').forEach(li=>{const on=()=>{rail.querySelector('.on').classList.remove('on');li.classList.add('on')};li.onmouseenter=on;li.onfocusin=on})}
const pr=$('#prods');if(pr){$('#chips').innerHTML=P.map(p=>`<a href="#${p[0]}">${p[1]}</a>`).join('');
pr.innerHTML=P.map(p=>`<section class="pr" id="${p[0]}"><div class="txt"><h2>${p[1]}</h2><p>${p[2]}</p><ul>${p[3].map(x=>`<li>${x}</li>`).join('')}</ul><a class="btn wa" data-wa="Hello Mr. ArtistA, I would like to know about ${p[1]}.">Ask about ${p[1]}</a></div><div class="m">${[1,2,3].map(n=>`<span class="slot ${p[4]}" data-img="images/products/${p[0]}/0${n}"></span>`).join('')}</div></section>`).join('')}
const g=$('#gal');if(g){const fl=$('#flt');fl.innerHTML='<button class="on" data-c="">All</button>'+P.map(p=>`<button data-c="${p[0]}">${p[1]}</button>`).join('');
g.innerHTML=P.flatMap(p=>[1,2].map(n=>`<span class="slot ${p[4]}" data-c="${p[0]}" data-img="images/gallery/${p[0]}-${n}"></span>`)).join('');
fl.onclick=e=>{const c=e.target.dataset.c;if(c===undefined)return;fl.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b===e.target));g.querySelectorAll('.slot').forEach(s=>s.classList.toggle('hide',!!c&&s.dataset.c!==c))}}
const f=$('#cf');if(f){f.prod.innerHTML=P.map(p=>`<option>${p[1]}</option>`).join('')+'<option>Something else</option>';
f.onsubmit=async e=>{e.preventDefault();const d=new FormData(f),s=$('#fs'),t=`Hello Mr. ArtistA, I am ${d.get('name')}. Phone: ${d.get('phone')}. Interested in: ${d.get('prod')}. ${d.get('msg')||''}`.trim();
if(S.endpoint){try{const r=await fetch(S.endpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(Object.fromEntries(d))});if(r.ok){s.textContent='Thank you. We will call you back soon.';f.reset();return}}catch(_){}}
window.open(wa(t),'_blank','noopener');s.textContent='WhatsApp is opening with your details filled in. Press send there to reach us.'}}
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=wa(a.dataset.wa);a.target='_blank';a.rel='noopener'});
document.querySelectorAll('[data-call]').forEach(a=>a.href=tel);
if(!S.address&&!S.hours)document.querySelectorAll('.addr').forEach(e=>e.remove());
/* Photos: each .slot loads images/<path>.jpg (or .jpeg/.webp/.png) if it exists, otherwise keeps its material swatch. */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const el=e.target,b=el.dataset.img,x=['jpg','jpeg','webp','png'];
(function t(i){if(i>3)return;const m=new Image();m.onload=()=>{el.style.backgroundImage=`url(${b}.${x[i]})`;el.classList.add('has')};m.onerror=()=>t(i+1);m.src=`${b}.${x[i]}`})(0)}),{rootMargin:'200px'});
document.querySelectorAll('.slot').forEach(s=>io.observe(s));
