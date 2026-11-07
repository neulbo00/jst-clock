# JST CLOCK v1.0

Minimal Japan Standard Time display for iPhone and iPad mini, portrait and landscape.

## Included
- Large HH:MM:SS + millisecond display
- JST timezone formatting (Asia/Tokyo)
- Responsive portrait / landscape layout
- Fullscreen button (browser support dependent)
- Direct link to the official NICT JST clock

## Important accuracy note
This first build displays the device's system clock formatted as JST. It is **not synchronized directly with NICT** and must not be treated as an NICT-verified time source.

NICT's public time server is ntp.nict.jp, but NTP is not directly accessible from browser JavaScript on a static GitHub Pages site. NICT's former HTTP/HTTPS time dissemination service ended on 2022-03-31. The official NICT JST5 page remains available, but embedding it does not expose its cross-origin time data to this page.

For genuine NICT synchronization, a separate trusted NTP-to-HTTPS relay/service or a native app is needed. That should be implemented and accuracy-tested before using this clock as an operational reference on a live production floor.

## Deploy to GitHub Pages
1. Upload index.html, css/, js/, and README.md to the repository root.
2. Open Settings → Pages.
3. Under Build and deployment, choose Deploy from a branch.
4. Select main and / (root), then Save.
5. Open the published URL on iPhone/iPad and use Safari's Add to Home Screen if desired.

## Planned v1.1
- NICT-backed time synchronization via a separately hosted, verified relay
- Display sync source, last sync time, estimated offset and uncertainty
- Re-sync interval and stale-sync warning
- Optional screen-awake support where iOS permits it
