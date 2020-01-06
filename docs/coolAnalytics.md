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

# coolAnalytics
A cool trend analytics for your websites, without tracking users.

## How to use?
Include the following line at the end of your `<body>` tag:

<br/>

`<script async defer src="https://cdn.coollabs.io/save.js"></script>`  

<br/>

Go to the main page of [coolAnalytics](https://analytics.coollabs.io), add your new site & validate it with DNS or HTTP methods.

<br/>

That's all!

## What we collect?
In addition to the [general data we collect during registration](/docs/#what-we-collect):

### How we measure unique visitors?

Our client side script generates a totally random ID for every visitors and store it in their browser's `localStorage`.

This ID changes every month for every browser. 

<br/>

It does not have any relationship with any user / browser specific information, so we do not know which user has an ID at a given time.

<br/>

**Unfortunately, this means a cookie consent banner needs to be shown on your page.**

### User Agent
We **collect**, but store **anonymized** User Agent in our database.

__Why?__ To measure browser types.

<br/>

__What anonymized storing means?__

We do not store your user agent as it is. Instead we parse it & save only the required parts.

<br/>

**Only the browser's name is stored.**

<hr/>

### Timezone
We **collect** and **store** your Timezone in our database.

__Why?__ To measure the visitor's country.

<hr/>

### Screen Width
We **collect** and **store** your device's screen width in our database.

__Why?__ To measure the visitor's device type.

<hr/>

## Features
- All incoming data are anonymized, so we are unable to track users!
- Add a single file and you are done with the integration!

## For devs
See the [code](https://github.com/coollabsio/analytics.coollabs.io)

## Why we created it?

We would like to see our visitors and we do not want to use Google Analytics.
