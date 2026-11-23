import { Ic, Count } from '../ui'

export function Stats(){const S:[string,number,string,string][]=[["box",5000,"+","Products available"],["users",1200,"+","Business customers"],["clock",15,"+","Years in the industry"],["check",98,"%","Customer satisfaction"]];
return <section className="border-b border-mist bg-white"><div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">{S.map(([i,n,s,l],x)=><div key={l} className={"flex items-center gap-4 px-6 py-8 "+(x?"lg:border-l border-mist":"")}><Ic n={i} s={26} c="text-blue shrink-0"/><div><div className="text-3xl font-extrabold tracking-tight text-navy"><Count to={n} suf={s}/></div><div className="text-sm text-slate-500">{l}</div></div></div>)}</div></section>}
