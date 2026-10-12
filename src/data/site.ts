// Everything that changes with a release lives here.

export const version = '1.0.0';

export type App = 'Messenger' | 'Music';

/** The Android apps' versions, as in each app's pubspec.yaml. */
export const versions: Record<App, string> = { Messenger: '1.5.0', Music: '2.6.0' };

const sizeMb: Record<App, number> = { Messenger: 21, Music: 22 };

export type Platform = 'web' | 'android' | 'ios';

export interface Download {
  app: App;
  platform: Platform;
  detail: string;
  href?: string;
}

// The APKs are files on GitHub Releases, one release per app version,
// tagged like messenger-v1.1.0 and holding similynk-messenger-v1.1.0.apk
// and similynk-messenger-v1.1.0-32bit.apk.
export const RELEASES_PAGE = 'https://github.com/similynk/similynk/releases';

export function apkUrl(app: App, bits: 64 | 32 = 64) {
  const slug = app.toLowerCase();
  const v = versions[app];
  return `${RELEASES_PAGE}/download/${slug}-v${v}/similynk-${slug}-v${v}${bits === 32 ? '-32bit' : ''}.apk`;
}

const apk = (app: App): Download => ({
  app,
  platform: 'android',
  detail: `APK · v${versions[app]} · ${sizeMb[app]} MB`,
  href: apkUrl(app),
});

// The web apps' addresses come from .env (see .env.example); until one is set it shows as coming soon.
const web = (href: string | undefined): Pick<Download, 'detail' | 'href'> =>
  href ? { detail: 'Open in your browser', href } : { detail: 'Coming soon' };

// Messenger first, then Music, in every group.
export const downloads: Download[] = [
  { app: 'Messenger', platform: 'web', ...web(import.meta.env.PUBLIC_MESSENGER_URL) },
  { app: 'Music', platform: 'web', ...web(import.meta.env.PUBLIC_MUSIC_URL) },
  apk('Messenger'),
  apk('Music'),
  { app: 'Messenger', platform: 'ios', detail: 'Planned' },
  { app: 'Music', platform: 'ios', detail: 'Planned' },
];

export const platforms: { id: Platform; label: string }[] = [
  { id: 'web', label: 'Web' },
  { id: 'android', label: 'Android' },
  { id: 'ios', label: 'iOS' },
];

export const latest = {
  badge: 'New: edit your posts, and invite friends to a room with a link',
  href: '/docs/updates/',
};
