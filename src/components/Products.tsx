import { useMemo } from 'react'
import { Ic, Pic } from '../ui'
import { CATS, PRODS, STOCK } from '../data'

export function Products({cat,setCat,q,setQ,add,inQuote,view}){
const cats=["All",...CATS.map(c=>c[0])];
const list=useMemo(()=>PRODS.filter(p=>(cat=="All"||p.c==cat)&&(p.n+p.sku+p.c).toLowerCase().includes(q.toLowerCase())),[cat,q]);
return <section id="products" className="bg-mist py-20 md:py-28"><div className="mx-auto max-w-7xl px-5">
<h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-navy md:text-5xl">Professional-Grade Electrical Supplies.</h2>
<div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
<div className="flex flex-wrap gap-2">{cats.map(c=><button key={c} onClick={()=>setCat(c)} className={"px-4 py-2 text-sm font-semibold transition-colors "+(cat==c?"bg-navy text-white":"bg-white text-slate-600 hover:text-navy")}>{c}</button>)}</div>
<label className="relative block lg:w-80"><Ic n="search" s={18} c="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search name, SKU or category" className="w-full bg-white py-3 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-blue"/></label></div>
{list.length?<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{list.map(p=><article key={p.id} className="lift flex flex-col bg-white">
<div className="bg-gradient-to-b from-white to-mist"><Pic src={`/images/products/${p.k}.jpg`} k={p.k} c="h-40 w-full"/></div>
<div className="flex flex-1 flex-col p-5"><div className="text-xs font-semibold text-blue">{p.c}</div><h3 className="mt-1 font-bold leading-snug text-navy">{p.n}</h3><div className="mt-1 text-xs text-slate-500">SKU {p.sku}</div>
<div className="mt-3 text-sm font-bold">{p.p||"Request Bulk Pricing"}</div>
<div className="mt-1 flex items-center gap-2 text-xs text-slate-600"><span className={"h-2 w-2 rounded-full "+STOCK[p.s]}/>{p.s}</div>
<div className="mt-auto grid grid-cols-2 gap-2 pt-5 rounded-lg"><button onClick={()=>view(p)} className="border border-navy/20 px-2 py-2.5 text-sm font-semibold hover:border-navy rounded-lg">View Details</button><button onClick={()=>add(p.id)} className={"px-2 py-2.5 text-sm font-semibold text-white transition-colors rounded-lg "+(inQuote(p.id)?"bg-emerald-600":"bg-blue hover:bg-[#1d5cb4]")}>{inQuote(p.id)?"Added":"Add to Quote"}</button></div></div></article>)}</div>
:<p className="mt-10 bg-white p-8 text-slate-600">No products match “{q}”. Try a SKU, or clear the search and pick another category.</p>}
</div></section>}
