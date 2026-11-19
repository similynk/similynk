// Everything that changes with a release lives here.

export type App = 'Ship' | 'Muso';

/** The Android apps' versions, as in each app's pubspec.yaml. */
export const versions: Record<App, string> = { Ship: '1.3.2', Muso: '1.3.2' };

/** Shown in the header: both apps' current versions. */
export const versionLabel = `Ship ${versions.Ship} · Muso ${versions.Muso}`;

/** The 64-bit APKs' sizes, rounded to the nearest MB. */
export const sizeMb: Record<App, number> = { Ship: 27, Muso: 25 };

// The APKs are files on GitHub Releases, named like similynk-ship-v1.3.1.apk and
// similynk-ship-v1.3.1-32bit.apk. When both apps update together they share one
// release; an app that updates on its own gets its own tag here.
/** The GitHub release tag that holds each app's current APKs. */
export const releaseTags: Record<App, string> = { Ship: 'similynk-v1.3.2', Muso: 'similynk-v1.3.2' };

export const RELEASES_PAGE = 'https://github.com/similynk/similynk/releases';

export function apkUrl(app: App, bits: 64 | 32 = 64) {
  const slug = app.toLowerCase();
  const v = versions[app];
  return `${RELEASES_PAGE}/download/${releaseTags[app]}/similynk-${slug}-v${v}${bits === 32 ? '-32bit' : ''}.apk`;
}

export const webApps: Record<App, string> = {
  Ship: 'https://ship.similynk.com',
  Muso: 'https://muso.similynk.com',
};

export const latest = {
  badge: 'Stories, offline chats, downloads and playlist import',
  href: '/docs/updates/',
};

/** The strip under the hero: the newest release's highlights. */
export const whatsNew = {
  version: versions.Ship,
  items: [
    { bold: 'Stories', rest: 'for 24 hours', href: '#ship' },
    { bold: 'Chats that work offline', rest: '', href: '#ship' },
    { bold: 'Downloads', rest: 'in any folder', href: '#muso' },
    { bold: 'Import playlists', rest: 'from Spotify and JioSaavn', href: '#muso' },
  ],
};
