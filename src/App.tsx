import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Ic, Logo } from './ui'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Categories } from './components/Categories'
import { Products } from './components/Products'
import { Value } from './components/Value'
import { Why } from './components/Why'
import { Industries } from './components/Industries'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { Drawer } from './components/Drawer'
import { Detail } from './components/Detail'

export default function App(){const [quote,setQuote]=useState({1:20,3:100});const [drawer,setDrawer]=useState(false);const [menu,setMenu]=useState(false);const [cat,setCat]=useState("All");const [q,setQ]=useState("");const [sel,setSel]=useState(null);
const setQty=(id,n)=>setQuote(o=>{const x={...o};if(n<=0)delete x[id];else x[id]=n;return x});
const add=id=>{setQuote(o=>({...o,[id]:(o[id]||0)+(o[id]?0:10)}));};
const items=Object.entries(quote).map(([i,n])=>[+i,n]);const count=items.length;
const pick=n=>{setCat(n);setQ("");setTimeout(()=>document.getElementById("products").scrollIntoView({behavior:"smooth"}),30)};
const nav=[["Home","#top"],["Products","#products"],["Categories","#categories"],["About Us","#about"],["Contact","#contact"]];
const go=()=>{setMenu(false);setDrawer(true)};
return <>
<div className="bg-char px-4 py-2 text-center text-[11px] font-semibold tracking-wider text-slate-300 sm:text-xs">POWERING BUSINESSES WITH QUALITY ELECTRICAL SUPPLIES | WHOLESALE PRICES AVAILABLE</div>
<header className="sticky top-0 z-40 border-b border-mist bg-warm/95 backdrop-blur"><div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5"><Logo/>
<nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">{nav.map(([n,h])=><a key={n} href={h} className="text-slate-600 hover:text-blue">{n}</a>)}</nav>
<div className="flex items-center gap-1 sm:gap-3"><a href="#products" aria-label="Search products" className="p-2 text-navy"><Ic n="search"/></a><button onClick={()=>setDrawer(true)} aria-label="Open quote basket" className="relative p-2 text-navy"><Ic n="bag"/>{count>0&&<span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center bg-blue px-1 text-[10px] font-bold text-white">{count}</span>}</button>
<button onClick={go} className="hidden bg-blue px-5 py-3 text-sm font-bold text-white hover:bg-[#1d5cb4] sm:block rounded-lg">Request a Quote</button>
<button onClick={()=>setMenu(!menu)} aria-label="Menu" className="p-2 text-navy lg:hidden"><Ic n={menu?"x":"menu"}/></button></div></div>
{menu&&<div className="rise border-t border-mist bg-white px-5 pb-5 lg:hidden">{nav.map(([n,h])=><a key={n} href={h} onClick={()=>setMenu(false)} className="block border-b border-mist py-4 font-semibold text-navy">{n}</a>)}<button onClick={go} className="mt-5 w-full bg-blue py-4 font-bold text-white">Request a Quote</button></div>}</header>
<main><Hero go={go}/><Stats/><Categories pick={pick}/><Products cat={cat} setCat={setCat} q={q} setQ={setQ} add={add} inQuote={id=>!!quote[id]} view={setSel}/><Value go={go}/><Why/><Industries/><Testimonials/><CTA go={go}/></main><Footer/>
<AnimatePresence>{drawer&&<Drawer items={items} setQty={setQty} close={()=>setDrawer(false)}/>}</AnimatePresence>{sel&&<Detail p={sel} add={add} close={()=>setSel(null)}/>}</>}
