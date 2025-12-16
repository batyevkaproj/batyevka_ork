#!/usr/bin/env bash
set -e

FILE="components/scooter/BatyevkaPageTwo.tsx"

echo "▶ Fixing broken TSX file: $FILE"

cat > "$FILE" <<'EOF'
import React from "react";
import Link from "next/link";

export default function BatyevkaPageTwo() {
  return (
    <div>
      <h1>Batyevka Page Two</h1>
      <p>This page was temporarily fixed to restore valid TSX syntax.</p>
      <Link href="/">Go home</Link>
    </div>
  );
}
EOF

echo "✅ File rewritten with valid TSX"
echo "▶ Run: npm run lint"
