# Giggles

A personal, unofficial Shorts-style video viewer that runs in your browser.

> **Not affiliated with Google or YouTube.** This is an independent hobby project. It is not made, endorsed, sponsored, or approved by Google LLC, YouTube, or Alphabet Inc. "Google" and "YouTube" are trademarks of Google LLC and are used here only to describe what the app connects to.

## What it is

A single-page web app that shows YouTube Shorts in a vertical, swipe-through feed with a different look. All videos are played through YouTube's official embedded player, and all data comes from the official YouTube Data API. Nothing is downloaded, copied, or re-hosted, and ads, view counts, and channel credit stay as YouTube provides them.

## How it works

- You provide your **own** YouTube Data API v3 key. Nothing works without one.
- Your key, chosen channels, hashtags, and settings are stored **only in your browser** (localStorage). There is no server, account system, analytics, or tracking.
- The app talks only to YouTube and Google (`googleapis.com` and `youtube.com`).
- The API is free within Google's daily quota. Nothing here can charge you unless you separately link a billing account to your Google Cloud project.

## Setup

1. Create a YouTube Data API v3 key in [Google Cloud Console](https://console.cloud.google.com/) (APIs & Services, then Credentials). Restricting the key to the YouTube Data API and to your site's URL is recommended.
2. Host the files with any static host, such as GitHub Pages. Use `index.html` as the page name.
3. Open the site, paste your key when asked, and start scrolling.

Optional: use your browser's "Install app" or "Add to Home Screen" option to run it fullscreen like an app.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app |
| `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png` | Make it installable |

## Legal

By using this app you also agree to the [YouTube Terms of Service](https://www.youtube.com/t/terms) and the [Google Privacy Policy](https://policies.google.com/privacy), since it uses YouTube API Services. All video content belongs to its respective creators and is owned and hosted by YouTube.

This project is provided as is, with no warranty, for personal and educational use.
