#!/usr/bin/env bash
set -euo pipefail

INPUT_FILE="${1:-assets/video/input.mp4}"
LANGUAGE="${2:-Indonesian}"
OUTPUT_DIR="assets/subtitles"

mkdir -p "$OUTPUT_DIR"

if ! command -v whisper >/dev/null 2>&1; then
  echo "Whisper CLI belum terpasang. Jalankan: pip install -U openai-whisper"
  exit 1
fi

whisper "$INPUT_FILE" \
  --language "$LANGUAGE" \
  --task transcribe \
  --output_format srt \
  --output_dir "$OUTPUT_DIR"

echo "[OK] Subtitle SRT dibuat di $OUTPUT_DIR"
