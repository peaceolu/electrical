export interface Product { id: number; n: string; sku: string; c: string; p: string | null; s: string; k: string; d: string }

export const CATS=[["Cables & Wires","Copper and aluminium cable, flex and armoured runs.","cable"],["Lighting & Fixtures","LED panels, floodlights and commercial fittings.","panel"],["Breakers & Protection","MCBs, RCDs and surge protection to standard.","breaker"],["Switches & Sockets","Wiring accessories for homes and large fit-outs.","socket"],["Industrial Equipment","Distribution boards, starters and control gear.","board"],["Conduits & Accessories","PVC and steel conduit, trunking and fixings.","conduit"]];

export const PRODS:Product[]=[
{id:1,n:"Industrial Copper Cable",sku:"VT-CB-4120",c:"Cables & Wires",p:"$148 / 100 m roll",s:"In stock",k:"cable",d:"4-core 2.5 mm² PVC-insulated copper cable, 100 m rolls."},
{id:2,n:"LED Panel Light",sku:"VT-LT-6060",c:"Lighting & Fixtures",p:"$21 / unit from 50",s:"In stock",k:"panel",d:"600 × 600 mm, 40 W, 4000 K recessed panel with driver."},
{id:3,n:"Schneider Circuit Breaker",sku:"VT-PR-C32",c:"Breakers & Protection",p:"$9.80 / unit from 100",s:"In stock",k:"breaker",d:"C-curve 32 A single-pole MCB, 6 kA breaking capacity."},
{id:4,n:"Heavy-Duty Distribution Board",sku:"VT-IN-DB24",c:"Industrial Equipment",p:null,s:"Low stock",k:"board",d:"24-way IP65 steel distribution board with DIN rail."},
{id:5,n:"Industrial Power Socket",sku:"VT-SS-IP67",c:"Switches & Sockets",p:"$14 / unit from 25",s:"In stock",k:"socket",d:"16 A IP67 three-pin industrial socket, splash-proof."},
{id:6,n:"PVC Electrical Conduit",sku:"VT-CD-25",c:"Conduits & Accessories",p:"$62 / 50-length bundle",s:"In stock",k:"conduit",d:"25 mm rigid PVC conduit, 3 m lengths, UV stabilised."},
{id:7,n:"Outdoor Floodlight",sku:"VT-LT-F100",c:"Lighting & Fixtures",p:null,s:"Made to order",k:"flood",d:"100 W IP65 LED floodlight with adjustable bracket."},
{id:8,n:"Electrical Control Switch",sku:"VT-SS-CTL2",c:"Switches & Sockets",p:"$6.40 / unit from 100",s:"In stock",k:"switch",d:"2-gang 10 A control switch with metal-clad plate."}];

export const STOCK={"In stock":"bg-emerald-500","Low stock":"bg-amber-500","Made to order":"bg-slate-400"};
