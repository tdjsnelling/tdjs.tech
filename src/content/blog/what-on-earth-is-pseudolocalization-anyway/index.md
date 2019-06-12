---
title: 'What on earth is pseudolocalization, anyway?'
summary: 'A small brief on what pseudolocalization is and how you can use it in your own project.'
date: '2019-06-12'
---

When you're in the early stages of internationalising your website or application, you likely don't want to go through the effort of translating all of your English strings to other languages just yet. It's time consuming, and you may not have even finished the English content yet! How will you know if translated strings are in the correct places if you don't speak the language?

Using translated strings can cause unforeseen problems, such as:

- Your typeface may not support glyphs and diacritic marks used in other languages
- Different sized glyphs may cause issues with your line heights
- Translated strings may be much longer than their English equivalents, meaning that they overflow their bounds in your interface

These are all problems that you want to catch early. In comes pseudolocalization - the practice of transforming English strings into something that resembles English, but isn't quite the same, so that you can catch these issues during the development cycle.

For example, the string

`This is an English string`

becomes

`Tλïƨ ïƨ áñ Éñϱℓïƨλ ƨƭřïñϱ`

You may also wish to enclose strings in opening and closing brackets, so it is easy to spot if they are being clipped or overflowing their bounds

`[!!! Tλïƨ ïƨ áñ Éñϱℓïƨλ ƨƭřïñϱ !!!]`

Below is an example from the Netflix iOS app:

![Netflix iOS app](./netflix.png)

A common way to include translated strings in your project is to have a JSON file containing all of your translations, for example:

```json
{
  "en": {
    "welcomeMessage": "Welcome to my new application!",
    "errorMessage": "Oops, it looks like an error occurred",
    "loremIpsum": "Lorem ipsum dolor sit amet"
  },
  "pseudo": {
    "welcomeMessage": "Wèℓçô₥è ƭô ₥¥ ñèω áƥƥℓïçáƭïôñ!",
    "errorMessage": "Óôƥƨ, ïƭ ℓôôƙƨ ℓïƙè áñ èřřôř ôççúřřèδ",
    "loremIpsum": "£ôřè₥ ïƥƨú₥ δôℓôř ƨïƭ á₥èƭ"
  },
  "fr": { ... },
  "de": { ... },
  ...
}
```

Then, when a user of your application sets their localisation, you can grab the strings in their chosen language to use in your interface. When testing, you can simply grab the "pseudo" strings to make sure you've covered all of your interface.

I wrote an [npm module](https://www.npmjs.com/package/pseudolocalize) to aid in the creation of pseudolocalized strings, as it can be quite tedious to go through and translate them by hand. It can either be used progmatically or run on an existing JSON file to output a pseudolocalized file. Let me know if it helped you in any way!
