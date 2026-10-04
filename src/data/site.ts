// Everything that changes with a release lives here.
import { statSync } from 'node:fs';

export const version = '1.0.0';

export type Platform = 'web' | 'android' | 'ios';

export interface Download {
  app: 'Messenger' | 'Music';
  platform: Platform;
  detail: string;
  href?: string;
  /** File name the browser saves it as, for direct downloads. */
  download?: string;
}

// The Android apps are served from public/downloads; their size is read when the site builds.
function apk(app: 'Messenger' | 'Music', file: string): Download {
  let size = '';
  try {
    size = ` · ${Math.round(statSync(`public/downloads/${file}`).size / 1_048_576)} MB`;
  } catch {
    return { app, platform: 'android', detail: 'Coming soon' };
  }
  return {
    app,
    platform: 'android',
    detail: `APK · v${version}${size}`,
    href: `/downloads/${file}`,
    download: file.replace('.apk', `-v${version}.apk`),
  };
}

// The web apps' addresses come from .env (see .env.example); until one is set it shows as coming soon.
const web = (href: string | undefined): Pick<Download, 'detail' | 'href'> =>
  href ? { detail: 'Open in your browser', href } : { detail: 'Coming soon' };

// Messenger first, then Music, in every group.
export const downloads: Download[] = [
  { app: 'Messenger', platform: 'web', ...web(import.meta.env.PUBLIC_MESSENGER_WEB_URL) },
  { app: 'Music', platform: 'web', ...web(import.meta.env.PUBLIC_MUSIC_WEB_URL) },
  apk('Messenger', 'similynk-messenger.apk'),
  apk('Music', 'similynk-music.apk'),
  { app: 'Messenger', platform: 'ios', detail: 'Planned' },
  { app: 'Music', platform: 'ios', detail: 'Planned' },
];

export const platforms: { id: Platform; label: string }[] = [
  { id: 'web', label: 'Web' },
  { id: 'android', label: 'Android' },
  { id: 'ios', label: 'iOS' },
];

export const latest = {
  badge: 'One account across the web and Android',
  href: '/docs/updates/',
};
