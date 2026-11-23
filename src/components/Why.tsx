import { Ic, Pic } from '../ui'
import { Product } from '../data'

export function Why(){const L=["Extensive Product Selection","Quality-Assured Products","Competitive Business Pricing","Reliable Supply Network","Knowledgeable Support Team"];
return <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
<div className="relative bg-navy"><Pic src="/images/why-us.png" k="board" dark c="h-[22rem] w-full md:h-[30rem]" fc="h-[22rem] w-full p-10 md:h-[30rem]"/><div className="absolute bottom-0 left-0 bg-blue px-6 py-4 text-white"><b className="text-2xl font-extrabold">15+ years</b><div className="text-sm opacity-80">supplying the trade</div></div></div>
<div><h2 className="text-4xl font-extrabold leading-tight tracking-tight text-navy md:text-5xl">More Than a Supplier. Your Electrical Supply Partner.</h2>
<p className="mt-5 text-lg text-slate-600">We help contractors, retailers, engineers, and businesses source quality electrical products with confidence.</p>
<ul className="mt-8 divide-y divide-mist border-y border-mist">{L.map(l=><li key={l} className="flex items-center gap-3 py-4 font-semibold text-navy"><Ic n="check" s={18} c="text-blue"/>{l}</li>)}</ul></div></section>}
