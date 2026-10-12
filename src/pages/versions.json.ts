import { apkUrl, versions, type App } from '../data/site';

const entry = (app: App) => ({ version: versions[app], apk: apkUrl(app), apk32: apkUrl(app, 32) });

export const GET = () => Response.json({ messenger: entry('Messenger'), music: entry('Music') });
