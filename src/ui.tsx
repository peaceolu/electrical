import { useState, useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import { Search, ShoppingBag, Menu, X, Check, Plus, Minus, ArrowRight, Tag, Package, Network, Headset, Clock, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const M:Record<string,LucideIcon>={search:Search,bag:ShoppingBag,menu:Menu,x:X,check:Check,plus:Plus,minus:Minus,arrow:ArrowRight,tag:Tag,box:Package,net:Network,help:Headset,clock:Clock,users:Users};
export const Ic=({n,s=20,c=""}:{n:string;s?:number;c?:string})=>{const C=M[n];return <C size={s} strokeWidth={1.6} className={c} aria-hidden="true"/>};

export const Logo=({dark=false}:{dark?:boolean})=><a href="#top" className="flex items-center gap-2.5"><svg width="34" height="34" viewBox="0 0 34 34"><rect width="34" height="34" fill="#246BCE"/><path d="M19 5L9 19h7l-2 10 11-15h-7z" fill="#fff"/></svg><span className={"leading-none "+(dark?"text-white":"text-navy")}><b className="block text-lg font-extrabold tracking-tight">Voltara</b><span className="text-[11px] font-medium opacity-70">Electrical Distribution</span></span></a>;

const K={
cable:<><ellipse cx="100" cy="70" rx="62" ry="44"/><ellipse cx="100" cy="70" rx="46" ry="31"/><ellipse cx="100" cy="70" rx="30" ry="18" stroke="var(--a)"/><path d="M150 100c16 8 24 14 40 14"/></>,
panel:<><rect x="38" y="28" width="124" height="84"/><rect x="50" y="40" width="100" height="60" stroke="var(--a)"/><path d="M62 52h76M62 70h76M62 88h76" opacity=".4"/></>,
breaker:<><rect x="68" y="16" width="64" height="108"/><rect x="86" y="34" width="28" height="42" stroke="var(--a)"/><path d="M86 55h28M80 96h40M80 106h40"/></>,
board:<><rect x="40" y="16" width="120" height="108"/><path d="M52 40h96M52 78h96"/>{[0,1,2,3,4].map(i=><rect key={i} x={54+i*18} y="48" width="12" height="24" stroke={i==2?"var(--a)":"currentColor"}/>)}{[0,1,2,3,4].map(i=><rect key={i} x={54+i*18} y="86" width="12" height="24"/>)}</>,
socket:<><rect x="50" y="20" width="100" height="100" rx="6"/><circle cx="100" cy="70" r="34" stroke="var(--a)"/><path d="M88 62v14M112 62v14M100 84v6"/></>,
conduit:<><rect x="20" y="40" width="160" height="22" rx="11"/><rect x="20" y="78" width="160" height="22" rx="11"/><path d="M62 36v30M62 74v30M138 36v30M138 74v30" stroke="var(--a)"/></>,
flood:<><rect x="52" y="30" width="96" height="64" rx="4"/><circle cx="100" cy="62" r="20" stroke="var(--a)"/><path d="M100 94v22M76 118h48M64 42h72" /></>,
switch:<><rect x="56" y="18" width="88" height="104" rx="5"/><rect x="86" y="42" width="28" height="56" rx="3"/><rect x="90" y="46" width="20" height="22" stroke="var(--a)"/></>};

export const Art=({k,dark,c=""})=><svg viewBox="0 0 200 140" fill="none" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" className={c} style={{"--a":dark?"#5B9BF0":"#246BCE",color:dark?"#C5CEDA":"#3A4A5E"} as CSSProperties} aria-hidden="true">{K[k]}</svg>;

export const Pic=({src,k,dark=false,c,fc}:{src:string;k:string;dark?:boolean;c:string;fc?:string})=>{const [bad,setBad]=useState(false);
if(bad)return fc==="none"?null:<Art k={k} dark={dark} c={fc||c+" p-5"}/>;
return <img src={src} alt="" loading="lazy" onError={()=>setBad(true)} className={c+" object-cover"}/>};

export function Count({to,suf=""}){const [v,setV]=useState(0);const r=useRef<HTMLSpanElement>(null);
useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect();const t0=performance.now();const f=t=>{const p=Math.min(1,(t-t0)/1400);setV(Math.round(to*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)});io.observe(r.current);return()=>io.disconnect()},[to]);
return <span ref={r}>{v.toLocaleString()}{suf}</span>}
