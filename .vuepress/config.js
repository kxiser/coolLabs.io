module.exports = {
  title: 'coolLabs',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: '/css/font.css' }],
    ['script', { src: 'https://cdn.coollabs.io/save.js', async: true, defer: true }]
  ],
  themeConfig: {
    search: false,
    logo: '/images/icons/android-chrome-192x192.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About us', link: '/about/about.html' },
      { text: 'Products', link: '/products/' },
      { text: 'Contact', link: '/contact' },
      { text: 'Blog', link: 'https://dev.to/coollabsio' },
      { text: 'GitHub', link: 'https://github.com/coollabsio/' }
    ],
    sidebar: {
      '/about/': getGuideSidebar('coolLabs', 'Advanced'),
    }
  },
  plugins: {
    '@silvanite/tailwind': {
      purgecss: { enabled: true }
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "We refreshed our cool site.",
        buttonText: "Load the latest version!"
      }
    }
  }
}

function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        'about',
        'products',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'palinkapp',
      ]
    }
  ]
}