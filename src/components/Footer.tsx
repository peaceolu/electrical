import { useState } from 'react'
import { Logo } from '../ui'
import { CATS } from '../data'

export function Footer(){const [e,setE]=useState("");const [m,setM]=useState(null);
const sub=ev=>{ev.preventDefault();setM(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)?"ok":"bad");if(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e))setE("")};
const col=(t,a)=><div><h4 className="font-bold text-white">{t}</h4><ul className="mt-4 space-y-2.5 text-sm">{a.map(x=><li key={x}><a href="#categories" className="hover:text-white">{x}</a></li>)}</ul></div>;
return <footer id="footer" className="bg-char pt-16 text-slate-400"><div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr_1.4fr]">
<div><Logo dark/><p className="mt-5 text-sm leading-relaxed">Wholesale electrical supplies for contractors, retailers and industry, since 2011.</p><div className="mt-5 flex gap-2">{["in","f","x","yt"].map(s=><a key={s} href="#top" aria-label={s} className="grid h-9 w-9 place-items-center border border-white/15 text-xs font-bold uppercase hover:border-blue hover:text-white">{s}</a>)}</div></div>
{col("Quick links",["Home","Products","Categories","About Us","Contact"])}{col("Categories",CATS.map(c=>c[0]))}
<div><h4 className="font-bold text-white">Contact</h4><ul className="mt-4 space-y-2.5 text-sm"><li>48 Harbour Industrial Way, Unit 6</li><li>+1 (555) 014-2290</li><li>sales@voltara-electrical.example</li><li className="pt-2 text-white">Business hours</li><li>Mon–Fri 7:30–18:00</li><li>Sat 8:00–13:00</li></ul></div>
<div><h4 className="font-bold text-white">Trade updates</h4><p className="mt-4 text-sm">Price changes and new stock, monthly.</p><form onSubmit={sub} noValidate className="mt-4 flex"><input value={e} onChange={x=>{setE(x.target.value);setM(null)}} type="email" placeholder="Work email" aria-label="Work email" className="min-w-0 flex-1 bg-navy px-3 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue"/><button className="bg-blue px-4 text-sm font-bold text-white">Subscribe</button></form>
{m=="ok"&&<p className="mt-2 text-sm text-emerald-400">Subscribed. Check your inbox to confirm.</p>}{m=="bad"&&<p className="mt-2 text-sm text-amber-400">Enter a valid email, like name@company.com.</p>}</div></div>
<div className="mx-auto mt-14 max-w-7xl border-t border-white/10 px-5 py-6 text-xs">© 2026 Voltara Electrical Distribution Ltd. All rights reserved. Demo site with mock data.</div></footer>}
