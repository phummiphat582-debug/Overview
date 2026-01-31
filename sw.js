const CACHE = "atv-cache-v999"; // เปลี่ยนเลขทุกครั้งที่อัปเดต

self.addEventListener("install", e => {
  self.skipWaiting(); // activate ทันที
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    )
  );
  self.clients.claim(); // คุมทุกแท็บทันที
});

self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request)); // ไม่เสิร์ฟ cache เก่า
});
