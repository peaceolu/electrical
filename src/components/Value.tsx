import { Ic } from '../ui'
import { Product } from '../data'

export function Value({go}){const B=[["tag","Competitive Wholesale Pricing","Tiered pricing that improves as your volume grows."],["box","Bulk Order Availability","Pallet and container quantities held in regional stock."],["net","Reliable Product Sourcing","Direct relationships with certified manufacturers."],["help","Dedicated Business Support","A named account manager for every business customer."]];
return <section className="bg-char py-20 text-white md:py-28"><div className="mx-auto max-w-7xl px-5">
<h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Built for Businesses. Priced for Volume.</h2>
<div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">{B.map(([i,t,d])=><div key={t} className="group bg-char p-8 transition-colors hover:bg-navy"><Ic n={i} s={28} c="text-[#5B9BF0]"/><h3 className="mt-6 text-lg font-bold">{t}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{d}</p></div>)}</div>
<button onClick={go} className="mt-12 bg-blue px-7 py-4 font-bold hover:bg-[#1d5cb4] rounded-lg transition-colors">Become a Wholesale Partner</button></div></section>}
