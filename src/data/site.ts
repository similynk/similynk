// Everything that changes with a release lives here.

export const version = '1.0.0';

export const github = 'https://github.com/similynk';

export type Platform = 'web' | 'android' | 'ios';

export interface Download {
  app: 'Messenger' | 'Music';
  platform: Platform;
  detail: string;
  href?: string;
}

// Messenger first, then Music, in every group.
export const downloads: Download[] = [
  { app: 'Messenger', platform: 'web', detail: 'Coming soon' },
  { app: 'Music', platform: 'web', detail: 'Open in your browser', href: '#get' },
  {
    app: 'Messenger',
    platform: 'android',
    detail: `APK · v${version} · 53 MB`,
    href: `${github}/messenger-app/releases/latest`,
  },
  {
    app: 'Music',
    platform: 'android',
    detail: `APK · v${version} · 60 MB`,
    href: `${github}/music-app/releases/latest`,
  },
  { app: 'Messenger', platform: 'ios', detail: 'Planned' },
  { app: 'Music', platform: 'ios', detail: 'Planned' },
];

export const platforms: { id: Platform; label: string }[] = [
  { id: 'web', label: 'Web' },
  { id: 'android', label: 'Android' },
  { id: 'ios', label: 'iOS' },
];

export const latest = {
  badge: 'Family, circles and a private feed',
  href: '/docs/updates/',
};
