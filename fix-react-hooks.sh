#!/bin/bash

# Script to fix ALL React.X references by adding React import where needed

FILES=$(find . -name "*.tsx" -not -path "./node_modules/*" -not -path "./.next/*" -type f)

for file in $FILES; do
  # Check if file uses any React.X patterns
  if grep -q "React\\.useState\|React\\.useEffect\|React\\.useCallback\|React\\.useMemo\|React\\.useRef\|React\\.useContext" "$file"; then
    echo "Processing hooks in: $file"
    
    # Check if file already has React import
    if ! grep -q "^import React" "$file"; then
      # Check what the first import line imports from 'react'
      first_react_import=$(grep -n "from 'react'" "$file" | head -1)
      
      if [ -n "$first_react_import" ]; then
        # Get line number
        line_num=$(echo "$first_react_import" | cut -d: -f1)
        # Add React to existing import
        sed -i '' "${line_num}s/import {/import React, {/" "$file"
      fi
    fi
  fi
done

echo "React imports fixed!"
