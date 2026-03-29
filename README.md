# Remotion Local Starter

Starter pack 100% lokal/open-source untuk workflow video pendek dengan:
- Remotion
- Whisper
- FFmpeg

## Isi paket

- `assets/video/` -> taruh video mentah di sini dengan nama `input.mp4`
- `assets/subtitles/` -> hasil subtitle Whisper
- `public/` -> file yang dibaca Remotion saat preview/render
- `src/CaptionedShort.tsx` -> komponen video Shorts dengan caption besar
- `scripts/transcribe.sh` -> transkrip lokal pakai Whisper
- `scripts/prepare-assets.sh` -> salin video ke folder `public`

## Kebutuhan

- Node.js 18+
- Python 3.10+
- FFmpeg di PATH
- Whisper CLI

## Install

```bash
npm install
pip install -U openai-whisper
```

## Pakai cepat

1. Taruh video di `assets/video/input.mp4`
2. Salin ke public:

```bash
npm run prep
```

3. Buka studio:

```bash
npm start
```

4. Render final:

```bash
npm run render
```

## Transkrip lokal

```bash
npm run transcribe
```

Hasil `.srt` akan masuk ke `assets/subtitles/`.

## Catatan penting

Starter ini memakai `src/sample-subtitles.json` sebagai contoh caption agar proyek bisa langsung dibuka.
Kalau kamu ingin caption dari Whisper benar-benar dipakai di video, langkah berikutnya adalah mengubah file `.srt` menjadi JSON timestamp lalu mengganti sumber caption di `CaptionedShort.tsx`.

## Upgrade yang paling berguna

- parser SRT ke JSON kata/per-kalimat
- crop 9:16 otomatis dengan FFmpeg
- normalisasi audio `loudnorm`
- intro/outro template
- batch render banyak video
