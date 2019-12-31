---
prev: ./
meta:
  - name: twitter:site
    content: '@coollabsio'
  - name: twitter:title
    content: coolLabs
  - name: twitter:description
    content: Fabricating cool applications with your coolLaboration!
  - property: og:type
    content: website
  - property: og:url
    content: https://coollabs.io/
  - property: og:title
    content: coolLabs
  - property: og:description
    content: Fabricating cool applications with your coolLaboration!
  - property: og:site_name
    content: coolLabs
---

#  coolAnalytics
A cool trend analytics for your websites, without tracking users.

## What we collect?
In addition to the [general data we collect during registration](/docs/#what-we-collect):

### How we measure unique visitors?

Our client side script generates a totally random ID for every visitors and store it in their browser's `localStorage`.

This ID changes every month for every browser. 

<br/>

It does not have any relationship with any user / browser specific information, so we do not know which user has an ID at a given time.


### User Agent
We **collect**, but store **anonymized** User Agent in our database.

__Why?__ To measure browser & os types.

<br/>

__What anonymized storing means?__

We do not store your user agent as it is. Instead we parse it & save only the important parts.

<br/>

- **Browser Name**, for visitor's browser analytics.
- **Browser Version**, for future trend analytics - not used yet.
- **OS Name**, for future trend analytics - not used yet.
- **OS Version**, for future trend analytics - not used yet.

<hr/>

### Timezone
We **collect** and **store** your Timezone in our database.

__Why?__ To measure the visitor's country.

<hr/>

### Screen Width
We **collect** and **store** your device's screen width in our database.

__Why?__ To measure the visitor's device type.

<hr/>

## Features - WIP

## For devs - WIP

## Why we created it? - WIP
