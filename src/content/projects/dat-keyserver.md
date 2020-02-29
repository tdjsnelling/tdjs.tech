---
title: 'dat-keyserver'
summary: 'a distributed PGP keyserver project based on the dat protocol'
link: 'https://github.com/tdjsnelling/dat-keyserver'
---

Similar to [sks-keyserver](https://bitbucket.org/skskeyserver/sks-keyserver/wiki/Home), dat-keyserver is a PGP keyserver that provides a distributed, decentralized platform to share and search PGP public keys.

It is built with technology from the [dat project](https://datproject.org), a peer-to-peer web protocol. More specifically, it uses [hyperdb](https://github.com/mafintosh/hyperdb), a distributed database, and [hyperdiscovery](https://github.com/karissa/hyperdiscovery), a peer discovery and replication system.

When browsing sks keyservers I noticed that most were very slow to search and fetch keys, and some just did not work at all... _cough_ MIT _cough_. This inspired me to try and build a new solution, something that used some new and exciting technology. I had experimented with some components of the dat ecosystem before, and saw hyperdb in particular as a perfect fit for this project.

I have a node running [here](https://keys.tdjs.tech), try searching 'tom' to find my public key.

If you want to run a node, follow the instructions in the README, linked below. Feel free to start your own pool or join mine with the key:

```
9ceccb8abeaba2868fe22d14605790b0b84ac58aba3e48606a710f4d33c5a4f7
```

Keys will be replicated to all nodes within a pool, but not between pools. Bear this in mind if you are thinking of starting a new pool, as you will be starting with no data.
