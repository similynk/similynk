// Everything that changes with a release lives here.

export const version = '1.0.0';

export type App = 'Ship' | 'Muso';

/** The Android apps' versions, as in each app's pubspec.yaml. */
export const versions: Record<App, string> = { Ship: '1.3.1', Muso: '1.3.1' };

const sizeMb: Record<App, number> = { Ship: 22, Muso: 24 };

export type Platform = 'web' | 'android' | 'ios';

export interface Download {
  app: App;
  platform: Platform;
  detail: string;
  href?: string;
}

// The APKs are files on GitHub Releases, named like similynk-ship-v1.3.1.apk and
// similynk-ship-v1.3.1-32bit.apk. When both apps update together they share one
// release; an app that updates on its own gets its own tag here.
/** The GitHub release tag that holds each app's current APKs. */
export const releaseTags: Record<App, string> = { Ship: 'similynk-v1.3.1', Muso: 'similynk-v1.3.1' };

export const RELEASES_PAGE = 'https://github.com/similynk/similynk/releases';

export function apkUrl(app: App, bits: 64 | 32 = 64) {
  const slug = app.toLowerCase();
  const v = versions[app];
  return `${RELEASES_PAGE}/download/${releaseTags[app]}/similynk-${slug}-v${v}${bits === 32 ? '-32bit' : ''}.apk`;
}

const apk = (app: App): Download => ({
  app,
  platform: 'android',
  detail: `APK · v${versions[app]} · ${sizeMb[app]} MB`,
  href: apkUrl(app),
});

// Ship first, then Muso, in every group.
export const downloads: Download[] = [
  { app: 'Ship', platform: 'web', detail: 'Open in your browser', href: 'https://ship.similynk.com' },
  { app: 'Muso', platform: 'web', detail: 'Open in your browser', href: 'https://muso.similynk.com' },
  apk('Ship'),
  apk('Muso'),
  { app: 'Ship', platform: 'ios', detail: 'Planned' },
  { app: 'Muso', platform: 'ios', detail: 'Planned' },
];

export const platforms: { id: Platform; label: string }[] = [
  { id: 'web', label: 'Web' },
  { id: 'android', label: 'Android' },
  { id: 'ios', label: 'iOS' },
];

export const latest = {
  badge: 'New: usernames, chat looks and posts for family and circles at once',
  href: '/docs/updates/',
};
