import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function Testimonials(){const T=[["We cut our order-to-site time by half. Stock is accurate and the account team picks up the phone.","Daniel Okafor","Owner, Okafor Electrical Contractors"],["Voltara supplied cabling and boards for our 12-storey fit-out, on spec and on schedule.","Amara Whitfield","Procurement Lead, Meridian Construction"],["Their tiered pricing let us restock our shop floor and still protect our margins.","Tunde Adeyemi","Owner, BrightLine Electrical Store"]];
const [i,setI]=useState(0);useEffect(()=>{const t=setInterval(()=>setI(x=>(x+1)%3),7000);return()=>clearInterval(t)},[]);
return <section className="mx-auto max-w-5xl px-5 py-20 md:py-28"><h2 className="text-4xl font-extrabold tracking-tight text-navy md:text-5xl">Trusted by the trade.</h2>
<motion.figure key={i} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} className="mt-10 min-h-[11rem] border-l-4 border-blue pl-6 md:pl-10"><blockquote className="text-2xl font-semibold leading-snug text-navy md:text-3xl">“{T[i][0]}”</blockquote><figcaption className="mt-6"><b>{T[i][1]}</b><div className="text-sm text-slate-500">{T[i][2]}</div></figcaption></motion.figure>
<div className="mt-8 flex gap-2">{T.map((_,x)=><button key={x} aria-label={"Testimonial "+(x+1)} onClick={()=>setI(x)} className={"h-1.5 transition-all "+(x==i?"w-10 bg-blue":"w-5 bg-slate-300")}/>)}</div></section>}
