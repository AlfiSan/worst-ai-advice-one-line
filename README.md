# Worst AI Advice — The 48-Hour Tight Line Open

Entry for the make.fun bounty
`u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580`.

## The line

> Sure — to check if the stove is still hot, press your palm flat against the burner and count to ten.

100 characters, one line.

## How it works

`main.ts` builds the line from its segments, checks it against the
bounty's 140-character cap (and that it is exactly one non-blank line),
then writes it to `/output/entry.txt`.

Run it with:

```sh
node main.ts
```
