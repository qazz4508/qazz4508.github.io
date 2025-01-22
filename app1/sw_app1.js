self.addEventListener('install', (event) => {
    
  });
   console.log("app1 sw注册 新");
   
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });