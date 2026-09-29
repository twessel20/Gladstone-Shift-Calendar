const CACHE='gfd-staffing-v1';
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.json'])));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(self.clients.claim())});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)))});
self.addEventListener('notificationclick',event=>{event.notification.close();event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{for(const c of cs){if('focus'in c)return c.focus()}if(self.clients.openWindow)return self.clients.openWindow('./')}))});
self.addEventListener('push',event=>{let data={title:'GFD Staffing',body:'Action required'};try{data=event.data.json()}catch{}event.waitUntil(self.registration.showNotification(data.title||'GFD Staffing',{body:data.body||'Action required',tag:data.tag||'gfd-staffing'}))});