import { Component, Suspense, lazy, useCallback, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
const WorldCanvas=lazy(()=>import('./WorldCanvas'));
class RendererBoundary extends Component<{children:ReactNode;onFailure:()=>void},{failed:boolean}>{
 state={failed:false};
 static getDerivedStateFromError(){return {failed:true};}
 componentDidCatch(){this.props.onFailure();}
 render(){return this.state.failed?null:this.props.children;}
}
export default function WorldEnhancement({night,enabled,onStatus}:{night:boolean;enabled:boolean;onStatus:(ready:boolean)=>void}){
 const [failed,setFailed]=useState(false);
 const ready=useCallback(()=>onStatus(true),[onStatus]);
 const failure=useCallback(()=>{setFailed(true);onStatus(false);},[onStatus]);
 useEffect(()=>{if(!enabled){onStatus(false);setFailed(false);}},[enabled,onStatus]);
 if(!enabled||failed)return null;
 return <RendererBoundary onFailure={failure}><Suspense fallback={null}><WorldCanvas night={night} onReady={ready} onFailure={failure}/></Suspense></RendererBoundary>;
}
