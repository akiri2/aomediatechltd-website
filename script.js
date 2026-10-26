// ===== EDIT THIS BLOCK ONLY. Empty values are hidden automatically. =====
const SITE={
 email:'aomediatech@gmail.com', phone:'+250 725 827 554', whatsapp:'', /* whatsapp: digits only, e.g. 2507XXXXXXXX */
 address:'Rugali, Nonko, Nyarugunga, Kicukiro, Kigali, Rwanda',
 social:{Facebook:'',Instagram:'',YouTube:'',LinkedIn:'',TikTok:''}, /* paste full profile URLs */
 management:[{name:'Olivier AKIRI',title:'Managing Director',bio:'Olivier AKIRI is the Managing Director of AO MEDIA TECH Ltd. An IT manager, software and big data specialist with nine years of experience across public and private institutions, he has led IT operations, network and systems administration, software development, training and digital communication. He holds a BSc in Information Technology from the University of Rwanda, is completing an MSc in Big Data Analytics at the Adventist University of Central Africa, and holds an advanced certificate in photographic and film/video technology. At AO MEDIA TECH he leads the company\'s media production, technology consultancy, web development and training services.',linkedin:'https://www.linkedin.com/in/akiri-olivier-5a4259251'}], /* {name:'Full Name',title:'Managing Director',bio:'Short bio',linkedin:'optional profile URL'} */
 board:[],      /* {name:'Full Name',title:'Board Chairperson',bio:'Short bio'} */
 news:[]        /* {kind:'News' or 'Event',title:'...',date:'2026-11-20',text:'...'} */
};
const SERVICES=[
 ['M','Media Production','Video, photography, livestreaming and design for events, brands and institutions.'],
 ['T','Technology Consultancy','IT strategy, systems advice, networks, data and security guidance.'],
 ['W','Website Development','Professional, mobile-friendly websites and web applications built for your goals.'],
 ['S','Website Maintenance','Monthly updates, backups, security checks and content changes.'],
 ['E','Teaching & Training','Digital skills and IT training for teams and individuals, online or on-site.'],
 ['D','Digital Marketing','Social media and online campaigns that reach the right audience.'],
 ['A','Software & Automation','Custom business tools and workflow automation that save time.'],
 ['C','Support & Care','Practical troubleshooting and ongoing IT support after delivery.']];
// ===== end of editable block =====
const $=i=>document.getElementById(i),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const wa=SITE.whatsapp&&'https://wa.me/'+SITE.whatsapp.replace(/\D/g,'');
const links=Object.entries(SITE.social).filter(([,u])=>/^https?:\/\//.test(u)).map(([k,u])=>`<a href="${esc(u)}" target="_blank" rel="noopener">${k}</a>`);
if(wa)links.push(`<a href="${esc(wa)}" target="_blank" rel="noopener">WhatsApp</a>`);
$('tb-soc').innerHTML=$('f-soc').innerHTML=links.join('');
$('tb-contact').innerHTML=`<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>`+(SITE.phone?` &nbsp;|&nbsp; <a href="tel:${esc(SITE.phone.replace(/\s/g,''))}">${esc(SITE.phone)}</a>`:'');
$('ct').innerHTML=`<p>Email: <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></p>`+(SITE.phone?`<p>Phone: ${esc(SITE.phone)}</p>`:'')+(wa?`<p>WhatsApp: <a href="${esc(wa)}">Chat with us</a></p>`:'')+`<p>${esc(SITE.address)}</p>`;
$('svc').innerHTML=SERVICES.map(s=>`<article class="card"><div class="ic">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p><a class="more" href="#contact" data-s="${esc(s[1])}">Book this &rarr;</a></article>`).join('');
$('fs').innerHTML='<b>Services</b>'+SERVICES.slice(0,5).map(s=>`<p><a href="#services">${s[1]}</a></p>`).join('');
$('s').innerHTML=SERVICES.map(s=>`<option>${s[1]}</option>`).join('');
document.addEventListener('click',e=>{const a=e.target.closest('[data-s]');if(a)$('s').value=a.dataset.s});
const person=p=>`<div class="card"><div class="av">${esc(p.name.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase())}</div><h3>${esc(p.name)}</h3><small>${esc(p.title)}</small><p>${esc(p.bio)}</p>${/^https:\/\/([a-z]+\.)?linkedin\.com\//.test(p.linkedin||'')?`<a class="more" href="${esc(p.linkedin)}" target="_blank" rel="noopener">LinkedIn &rarr;</a>`:''}</div>`;
if(SITE.management.length||SITE.board.length){$('team').hidden=$('nav-team').hidden=false;$('mgmt').innerHTML=SITE.management.map(person).join('');$('brd').innerHTML=SITE.board.map(person).join('');$('mh').hidden=!SITE.management.length;$('bh').hidden=!SITE.board.length}
$('nws').innerHTML=SITE.news.length?SITE.news.map(n=>`<article class="card"><small>${esc(n.kind)} &middot; ${esc(n.date)}</small><h3>${esc(n.title)}</h3><p>${esc(n.text)}</p></article>`).join(''):'<p>Updates and events will be announced here soon.</p>';
const mb=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');
mb.onclick=()=>{const o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.innerHTML=o?'&times;':'&#9776;'};
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{nav.classList.remove('open');mb.innerHTML='&#9776;'});
$('y').textContent=new Date().getFullYear();$('d').min=new Date().toISOString().slice(0,10);
$('cf').onsubmit=ev=>{ev.preventDefault();const b=`Name: ${$('n').value}\nEmail: ${$('e').value}\nService: ${$('s').value}\nPreferred date: ${$('d').value||'flexible'}\n\n${$('m').value}`;
 location.href=`mailto:${SITE.email}?subject=${encodeURIComponent('Service request: '+$('s').value)}&body=${encodeURIComponent(b)}`;$('note').textContent='If your email app did not open, write to '+SITE.email+'.'};
