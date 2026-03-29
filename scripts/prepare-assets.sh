#!/usr/bin/env bash
set -euo pipefail

mkdir -p public out

if [ -f assets/video/input.mp4 ]; then
  cp assets/video/input.mp4 public/input.mp4
  echo "[OK] assets/video/input.mp4 disalin ke public/input.mp4"
else
  echo "[WARN] assets/video/input.mp4 belum ada. Taruh videomu di sana lalu jalankan lagi."
fi
