const d=document,h=d.documentElement,b=d.querySelector('.menu'),n=d.querySelector('header nav');
const set=o=>{n.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu');h.classList.toggle('lock',o)};
b.addEventListener('click',()=>set(b.getAttribute('aria-expanded')!=='true'));
n.addEventListener('click',e=>{if(e.target.closest('a'))set(false)});
d.addEventListener('keydown',e=>{if(e.key==='Escape'&&n.classList.contains('open')){set(false);b.focus()}});
matchMedia('(min-width:821px)').addEventListener('change',e=>e.matches&&set(false));
const hd=d.querySelector('header.site'),sc=()=>hd.classList.toggle('stuck',scrollY>8);sc();addEventListener('scroll',sc,{passive:true});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion:reduce)').matches){const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});d.querySelectorAll('main>section,.case section,.cert,.role').forEach(e=>{e.classList.add('rv');io.observe(e)})}
