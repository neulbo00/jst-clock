(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const el = { hours:$('hours'), minutes:$('minutes'), seconds:$('seconds'), milliseconds:$('milliseconds'), date:$('date'), weekday:$('weekday'), fullscreen:$('fullscreen') };
  const formatter = new Intl.DateTimeFormat('ja-JP', { timeZone:'Asia/Tokyo', year:'numeric', month:'2-digit', day:'2-digit' });
  const weekdayFormatter = new Intl.DateTimeFormat('en-US', { timeZone:'Asia/Tokyo', weekday:'long' });
  function render() {
    // v1.0 displays the device clock in JST; it is intentionally NOT labelled NICT synchronized.
    const now = new Date();
    const parts = new Intl.DateTimeFormat('en-GB', { timeZone:'Asia/Tokyo', hour:'2-digit', minute:'2-digit', second:'2-digit', hourCycle:'h23' }).formatToParts(now);
    const p = Object.fromEntries(parts.map(x => [x.type, x.value]));
    el.hours.textContent = p.hour;
    el.minutes.textContent = p.minute;
    el.seconds.textContent = p.second;
    el.milliseconds.textContent = '.' + String(Math.floor(now.getMilliseconds() / 100));
    el.date.textContent = formatter.format(now).replaceAll('/', '.');
    el.weekday.textContent = weekdayFormatter.format(now).toUpperCase();
    requestAnimationFrame(render);
  }
  el.fullscreen.addEventListener('click', async () => {
    try {
      if (!document.fullscreenElement) await document.documentElement.requestFullscreen?.();
      else await document.exitFullscreen?.();
    } catch (_) { /* Fullscreen may be unavailable in some iOS Safari contexts. */ }
  });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) render(); });
  render();
})();
