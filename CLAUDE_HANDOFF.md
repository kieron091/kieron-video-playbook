# Kieron’s Video Playbook — handoff

## User's requested next work

The Lessons tab must contain actual teaching breakdowns, not just a video index. For each lesson, explain how the teacher breaks down the example, with timestamped, colour-highlighted open loops, held loops, closed loops/payoffs, proof and CTA. Explain why each moment works and how Kieron can apply it. Preserve the 13 existing example breakdowns and browser-local drafts.

## Current state

- Live: https://kieron-video-playbook.ruggedretailers.chatgpt.site
- Buildless HTML/CSS/JavaScript in `dist/`; no dependency installation or build required.
- 13 original recordings are included in `dist/media/` and analysed in `dist/data.js`.
- `dist/planners.js` contains the writing templates; `tracker.js` maps stages and colours; `learn.js` generates flashcards and quizzes.
- `dist/lessons-data.js` indexes 35 accessible links from the user's TikTok collection. TikTok reports 36 entries, but only 35 links were exposed. Most are by @benjamin.j0rdan; one is by @scarmakescontent.
- The shared collection is https://www.tiktok.com/@shoppy028/collection/Hash-7634092627415157526
- The 35 lesson videos have NOT been downloaded, transcribed, or fully analysed. Titles and notices were read from post descriptions. Do not claim that these entries already have teaching breakdowns, or infer detailed teaching from their titles.
- `source-notes/` contains auto-transcripts for two of the original examples, not the new lesson collection.
- `dist/lessons.html`, `lessons.js`, and `lessons.css` implement search, embedded TikTok players, per-lesson notes, and studied status. Embedded playback depends on TikTok; direct links are available as a fallback.
- Notes, drafts and study progress use localStorage. They are NOT server-synced and are NOT included in this repository.

## Run and validate

```sh
python -m http.server 8765 --bind 127.0.0.1 --directory dist
node verify.cjs
```

Open http://127.0.0.1:8765 and `/lessons.html`. The check verifies JavaScript syntax, all original media, planner and stage mappings, quiz variants, and 35 unique lesson URLs.

## Playback detail

The current host did not expose seekable ranges for direct MP4 URLs. `dist/rebuild.js` fetches a selected recording into a browser Blob URL, which was verified to allow timestamp seeking. Preserve or deliberately replace that fix.

## Hosting

`.openai/hosting.json` binds the existing Sites project and serves `dist/`. GitHub upload itself does not deploy changes to Sites. No access tokens or source credentials should be committed. `rebuild.py` is a historical one-time migration script; do not rerun it against already-modified files.
