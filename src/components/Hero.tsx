import { motion } from 'framer-motion'
import { Pic } from '../ui'

export function Hero({go}){return <section id="top" className="relative overflow-hidden bg-navy text-white grid-bg">
<Pic src="/images/hero.jpg" k="board" dark c="absolute inset-0 h-full w-full opacity-30 mix-blend-luminosity" fc="none"/>
<div className="absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full bg-blue/30 blur-[120px] pulse"/>
<div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
<motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
    <h1 className="text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">Powering Every Project. Supplying Every Connection.</h1>
<p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">Your trusted wholesale partner for premium electrical supplies, industrial components, lighting solutions, and essential electrical equipment.</p>
<div className="mt-9 flex flex-wrap gap-3 rounded-lg"><a href="#products" className="bg-blue rounded-lg px-7 py-4 font-bold hover:bg-[#1d5cb4] transition-colors">Explore Products</a><button onClick={go} className="border border-white/30 px-7 py-4 font-bold hover:bg-white hover:text-navy transition-colors rounded-lg">Request a Wholesale Quote</button></div>
<p className="mt-8 flex items-center gap-2 text-sm text-slate-400"><span className="h-px w-8 bg-blue"/>Trusted by Contractors, Electricians &amp; Businesses</p></motion.div>
<motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.9,delay:.2}} className="relative">
<svg viewBox="0 0 440 460" className="w-full" fill="none" aria-label="Illustration of an electrical distribution panel">
<rect x="70" y="30" width="300" height="400" fill="#171C22" stroke="#C5CEDA" strokeOpacity=".5" strokeWidth="2"/>
<rect x="90" y="52" width="260" height="46" fill="#101D2C" stroke="#246BCE"/><circle cx="112" cy="75" r="6" fill="#5B9BF0" className="pulse"/><path d="M132 75h150" stroke="#5B9BF0" strokeOpacity=".6"/>
{[0,1,2].map(r=>[0,1,2,3,4].map(i=><g key={r+"-"+i}><rect x={96+i*50} y={122+r*96} width="38" height="74" fill="#1F2A38" stroke="#C5CEDA" strokeOpacity=".45"/><rect x={105+i*50} y={134+r*96} width="20" height="28" fill={(r+i)%4==0?"#246BCE":"#2C3A4C"}/></g>))}
{[0,1,2].map(r=><path key={r} className="flow" d={`M96 ${208+r*96}H344`} stroke="#5B9BF0" strokeWidth="2"/>)}
<path className="flow" d="M30 75H70M370 75h40v300" stroke="#5B9BF0" strokeWidth="2"/>
</svg></motion.div></div></section>}
