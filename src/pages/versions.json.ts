import { apkUrl, versions, type App } from '../data/site';

const entry = (app: App) => ({ version: versions[app], apk: apkUrl(app), apk32: apkUrl(app, 32) });

// Similynk Messenger and Music installs still read the old keys; a version above theirs
// offers them the Ship and Muso downloads.
const legacy = (app: App, version: string) => ({ ...entry(app), version });

export const GET = () =>
  Response.json({
    ship: entry('Ship'),
    muso: entry('Muso'),
    messenger: legacy('Ship', '1.5.1'),
    music: legacy('Muso', '2.6.1'),
  });
