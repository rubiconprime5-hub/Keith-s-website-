const data=[
['TRADE JOURNAL','A comprehensive, accessible and highly refined journal system built for education and tech startups.','FIGMA|UI/UX|DESIGN SYSTEMS','./project-trade.webp'],
['PRIME DYNAMICS','A digital hub designed for the PRIME TEC team, enabling team work, collaboration, project sharing and resources.','REACT|TYPESCRIPT|TAILWIND CSS','./project-dynamics.webp'],
['PRIME ENTAX','An interactive entertainment management system facilitating music requests, event registration and talent showcase curation.','REACT|TYPESCRIPT|TAILWIND CSS','./project-entax.webp'],
['NEXUS CONNECT','A comprehensive intranet dashboard aggregating student resources, library index tracking and peer tutoring networks.','REACT|TYPESCRIPT|TAILWIND CSS','./project-nexus.webp']
];
const grid=document.querySelector('#projectGrid');
grid.innerHTML=data.map((x,i)=>`<article class="project"><img src="${x[3]}" alt="${x[0]} preview" width="${x[3].includes('trade')?633:x[3].includes('dynamics')?636:x[3].includes('entax')?636:639}" height="369" loading="lazy" decoding="async"><div class="project-body"><h3>${x[0]}</h3><p>${x[1]}</p><div class="chips">${x[2].split('|').map(t=>`<span>${t}</span>`).join('')}</div><div class="project-links"><a href="#contact">LIVE DEMO ↗</a><a href="#contact" class="expand-link" data-index="${i}">GITHUB ↗</a></div><div class="more">Detailed project specification ready for your real repository and deployment links.</div></div></article>`).join('');
document.querySelectorAll('.project').forEach(card=>card.addEventListener('click',e=>{if(e.target.tagName==='A')card.classList.toggle('open')}));
const nav=document.querySelector('#nav'),menu=document.querySelector('#menuBtn');menu.onclick=()=>nav.classList.toggle('open');nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const progress=document.querySelector('.top-progress');addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max?scrollY/max*100:0)+'%'},{passive:true});
document.querySelector('#up').onclick=()=>scrollTo({top:0,behavior:'smooth'});document.querySelector('#year').textContent=new Date().getFullYear();
const toast=document.querySelector('#toast');function showToast(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2800)}
document.querySelector('#contactForm').addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget,m=document.querySelector('#formMessage');if(!f.checkValidity()){m.textContent='PLEASE COMPLETE ALL FIELDS WITH A VALID EMAIL.';m.className='error';f.reportValidity();return}m.textContent='✓ MESSAGE SENT SUCCESSFULLY.';m.className='';f.reset();showToast('SUCCESS — MESSAGE SENT TO PRIME TEC')});
document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')});
