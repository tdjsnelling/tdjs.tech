# Magnetic Media campaign site

## Install

`yarn install`

## Development

`yarn dev:site`

or

`yarn dev:storybook`

## Essays

Essays are stored in `src/essays`.

They are written as markdown files, following this format:

```markdown
---
title: "The main title of the essay"
author: "The author of the essay"
image: "./image-name.jpg"
video: "QILiHiTD3ua"
summary: "A short summary of the essay"
---

The main essay body.

```

The image path `./image-name.jpg` is relative to the markdown file.

The optional `video` field is a YouTube video ID. If provided, the main image in the article header will be replaced by the embedded YouTube video.

`video` and `body` are optional. All other fields are required.

Inline images can be included in an essay body, using standard markdown syntax: `![alt-text for image](image-name.jpg)`.
