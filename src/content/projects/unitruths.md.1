---
title: 'unitruths'
summary: 'Post uni gossip anonymously! A micro social app experiment.'
link: 'https://unitruths.xyz'
---

Unitruths came of a challenge I set myself to build a small, dynamic 'social network' type website. For some more insight, you can see my [brain dump](https://www.notion.so/tdjsnelling/unitruths-xyz-29e6df839bf14433bf698f1e3b38ab19) as I was building the site.

![unitruths screenshot](./unitruths.png)

It is built with React and SCSS on the front end, Express for the API and MongoDB for data storage. It is deployed on [Now](https://zeit.co/now), a great service for quickly and painlessly deploying web apps.

It supports making a post to a specific university, as well as commenting on and reacting to existing posts. It has some pretty simple cookie logic to make the UX better - you can 'favourite' universities so you don't have to search the list for them every time, and the site ensures you can only react with one of each emoji per post by saving your reactions as you make them. It also has a secret moderator mode, allowing privileged users to delete posts etc.

I also wrote some useful aggregate queries, such as this one that imlpements a 'hot' sorting algorithm:

```
{
  $project: {
    ...
    score: {
      $divide: [
        {
          $sum: [
            { $size: '$reactions' },
            { $size: '$comments' }
          ]
        },
        {
          $pow: [
            {
              $sum: [
                {
                  $divide: [
                    { $subtract: [+new Date(), '$timestamp'] },
                    1000 * 60 * 60
                  ]
                },
                1
              ]
            },
            1.8
          ]
        }
      ]
    }
  }
}
```

Adapted from the [Hacker News hot algorithm](https://medium.com/hacking-and-gonzo/how-hacker-news-ranking-algorithm-works-1d9b0cf2c08d), it gives each post a score based on the amount of comments and reactions it has, as well as how old it is.

I wasn't planning on publishing it, but the domain was cheap so why not! Who knows it might even get some use.

Take a look at the source [here](https://github.com/tdjsnelling/unitruths).
