#!/bin/sh
# Andrew v1.0

current_template=$1
tsconfig_path="tsconfig.json"
new_path="./src/templates/$current_template/*"
temp_file=$(mktemp)
awk -v new_path="$new_path" '/"paths":/,/}/{if ($0 ~ /"@\/templates\/\*": \[/) {print "      \"@/templates/*\": [\""new_path"\"]"; next} }1' "$tsconfig_path" > "$temp_file"
cp "$temp_file" "$tsconfig_path"
rm "$temp_file"