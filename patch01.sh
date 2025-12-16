#!/usr/bin/env bash
set -e

echo "▶ Fixing remaining ESLint blocking errors (safe patch)..."

############################################
# 1️⃣ Fix BatyevkaPageTwo.tsx JSX properly
############################################

FILE_LINK="components/scooter/BatyevkaPageTwo.tsx"

if [ -f "$FILE_LINK" ]; then
  echo "• Rewriting <a> to <Link> safely in $FILE_LINK"

  # ensure Link import exists
  grep -q "from 'next/link'" "$FILE_LINK" || \
    sed -i "1i\\import Link from 'next/link';" "$FILE_LINK"

  # replace ONLY full <a href=\"/\">...</a> blocks
  perl -0777 -i -pe \
    "s|<a\\s+href=[\"']\\/['\"]>(.*?)<\\/a>|<Link href=\"/\">\\1</Link>|gs" \
    "$FILE_LINK"
else
  echo "⚠ File not found: $FILE_LINK"
fi

############################################
# 2️⃣ Fix empty interface in input.tsx (force)
############################################

FILE_INPUT="components/ui/input.tsx"

if [ -f "$FILE_INPUT" ]; then
  echo "• Forcing type instead of empty interface in $FILE_INPUT"

  perl -0777 -i -pe \
    "s|interface\\s+InputProps\\s+extends\\s+([^\\{]+)\\{\\s*\\}|type InputProps = \\1;|g" \
    "$FILE_INPUT"
else
  echo "⚠ File not found: $FILE_INPUT"
fi

############################################
# DONE
############################################

echo "✅ Safe patch applied"
echo "▶ Run: npm run lint"
