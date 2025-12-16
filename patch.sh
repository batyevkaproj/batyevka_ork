#!/usr/bin/env bash
set -e

echo "▶ Fixing Next.js lint blocking errors..."

############################################
# 1️⃣ Fix <a href="/"> → <Link href="/">
############################################

FILE_LINK="components/scooter/BatyevkaPageTwo.tsx"

if [ -f "$FILE_LINK" ]; then
  echo "• Fixing Link usage in $FILE_LINK"

  # add Link import if missing
  grep -q "from 'next/link'" "$FILE_LINK" || \
  sed -i "1i\\import Link from 'next/link';" "$FILE_LINK"

  # replace <a href="/">...</a> with <Link href="/">...</Link>
  sed -i "s|<a href=\"/\">|<Link href=\"/\">|g" "$FILE_LINK"
  sed -i "s|</a>|</Link>|g" "$FILE_LINK"
else
  echo "⚠ File not found: $FILE_LINK"
fi

############################################
# 2️⃣ Fix empty interface → type
############################################

FILE_INPUT="components/ui/input.tsx"

if [ -f "$FILE_INPUT" ]; then
  echo "• Fixing empty interface in $FILE_INPUT"

  sed -i \
    "s|interface \\([A-Za-z0-9_]*Props\\) extends \\(.*\\) {}|type \\1 = \\2;|g" \
    "$FILE_INPUT"
else
  echo "⚠ File not found: $FILE_INPUT"
fi

############################################
# DONE
############################################

echo "✅ Patch applied successfully"
echo "▶ Run: npm run lint"
