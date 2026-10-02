'use strict';
// Cache only the public app shell. Inputs and feedback never reach this worker.
const CACHE='aqdlens-app-20261002-v6';
const CORE=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
const base=new URL('./',self.registration.scope);
const allowed=new Set(CORE.map(path=>new URL(path,base).pathname));
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)));
 // A later version waits until the visitor requests an update.
});
self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('aqdlens-app-')&&key!==CACHE)await caches.delete(key);await self.clients.claim();})());
});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==base.origin||url.search||!allowed.has(url.pathname))return;
 if(request.mode==='navigate'){
  event.respondWith((async()=>{
   const cache=await caches.open(CACHE),controller=new AbortController();
   const timer=setTimeout(()=>controller.abort(),3000);
   try{const response=await fetch(request,{signal:controller.signal});if(response.ok){await cache.put(url.pathname,response.clone());return response;}const old=await cache.match(url.pathname);return old||response;}
   catch(_){return await cache.match(url.pathname)||await cache.match(new URL('./index.html',base).href)||Response.error();}
   finally{clearTimeout(timer);}
  })());return;
 }
 event.respondWith((async()=>{const cache=await caches.open(CACHE),old=await cache.match(request);if(old)return old;const response=await fetch(request);if(response.ok)await cache.put(request,response.clone());return response;})());
});
