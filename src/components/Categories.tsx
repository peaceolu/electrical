import { Ic, Pic } from '../ui'
import { CATS } from '../data'

export function Categories({pick}){return <section id="categories" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
<div className="grid gap-4 md:grid-cols-2 md:items-end rounded-lg"><h2 className="text-4xl font-extrabold leading-tight tracking-tight text-navy md:text-5xl">Everything You Need to Power Your Business.</h2><p className="text-lg text-slate-600 md:max-w-md md:justify-self-end">Explore our extensive range of electrical supplies sourced for professionals, contractors, and businesses.</p></div>
<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 rounded-lg">{CATS.map(([n,d,k])=><button key={n} onClick={()=>pick(n)} className="group lift bg-white text-left">
<div className="overflow-hidden bg-gradient-to-br from-[#1E2C3F] to-navy rounded-lg"><Pic src={`/images/categories/${k}.jpg`} k={k} dark c="h-48 w-full transition-transform duration-500 group-hover:scale-105"/></div>
<div className="p-6"><h3 className="text-xl font-bold text-navy rounded-lg">{n}</h3><p className="mt-2 text-slate-600">{d}</p><span className="mt-4 inline-flex items-center gap-2 font-bold text-blue">Explore Category <Ic n="arrow" s={16} c="transition-transform group-hover:translate-x-1"/></span></div></button>)}</div></section>}
