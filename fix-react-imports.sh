#!/bin/bash

# Script to fix React imports in component files

FILES=$(find . -name "*.tsx" -not -path "./node_modules/*" -not -path "./.next/*" -type f -exec grep -l "React\\.forwardRef\|React\\.Children\|React\\.isValidElement\|React\\.cloneElement" {} \;)

for file in $FILES; do
  echo "Processing: $file"
  
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
done

echo "Done!"
