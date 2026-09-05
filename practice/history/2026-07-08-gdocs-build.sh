#!/bin/bash
SCRATCH=/private/tmp/claude-501/-Users-alejo-best-work-writing-claude-onramp/0ea9ee14-8d5c-4cf7-8ccf-0fb1e846b081/scratchpad
PRACTICE=/Users/alejo/best/work/writing/claude-onramp/practice

fill_tabs () {  # $1=docId $2=docs subfolder
  local doc=$1 dir=$2
  for f in "$PRACTICE/docs/$dir"/*.md; do
    local name=$(basename "$f" .md)
    [ "$name" = "README" ] && continue
    gog docs add-tab "$doc" --title "$name" >/dev/null 2>&1 || { echo "ADD-FAIL $dir/$name"; continue; }
    gog docs write "$doc" --tab "$name" --file "$f" --markdown --replace --force >/dev/null 2>&1 \
      && echo "OK $dir/$name" || echo "WRITE-FAIL $dir/$name"
  done
}

# --- Claude Code doc: already created, Exercises + overview done ---
CODE_DOC=1UM2kR-gesWVr7AoWtQMSBmo7t6XeCZJQ9jZm9t_aPaI
for f in /Users/alejo/best/work/writing/claude-onramp/practice/docs/claude-code/*.md; do
  name=$(basename "$f" .md)
  [ "$name" = "overview" ] && continue
  gog docs add-tab "$CODE_DOC" --title "$name" >/dev/null 2>&1 || { echo "ADD-FAIL claude-code/$name"; continue; }
  gog docs write "$CODE_DOC" --tab "$name" --file "$f" --markdown --replace --force >/dev/null 2>&1 \
    && echo "OK claude-code/$name" || echo "WRITE-FAIL claude-code/$name"
done

# --- Cowork doc ---
COWORK_DOC=$(gog docs create "Claude Onramp — Cowork" --file "$SCRATCH/gdocs/cowork-exercises.md" --json --results-only | python3 -c "import sys,json;print(json.load(sys.stdin)['id'])")
echo "COWORK_DOC $COWORK_DOC"
gog docs rename-tab "$COWORK_DOC" --tab t.0 --title "Exercises" >/dev/null 2>&1
fill_tabs "$COWORK_DOC" cowork

# --- Tag doc ---
TAG_DOC=$(gog docs create "Claude Onramp — Tag" --file "$SCRATCH/gdocs/tag-exercises.md" --json --results-only | python3 -c "import sys,json;print(json.load(sys.stdin)['id'])")
echo "TAG_DOC $TAG_DOC"
gog docs rename-tab "$TAG_DOC" --tab t.0 --title "Exercises" >/dev/null 2>&1
fill_tabs "$TAG_DOC" claude-tag

echo "DONE"
echo "code:   https://docs.google.com/document/d/$CODE_DOC/edit"
echo "cowork: https://docs.google.com/document/d/$COWORK_DOC/edit"
echo "tag:    https://docs.google.com/document/d/$TAG_DOC/edit"
