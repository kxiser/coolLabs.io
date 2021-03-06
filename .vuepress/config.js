module.exports = {
  title: 'coolLabs',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: '/css/font.css' }],
    ['script', { src: 'https://cdn.coollabs.io/save.js', async: true, defer: true }]
  ],
  themeConfig: {
    searchPlaceholder: 'Search...',
    lastUpdated: 'Last Updated',
    search: true,
    logo: '/images/logos/coolLabs.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About us', link: '/about/' },
      { text: 'Products', link: '/about/products.html' },
      { text: 'Docs', link: '/docs/' },
      { text: 'Contact', link: '/about/contact.html' },
      { text: 'Blog', link: 'https://dev.to/coollabsio' },
      { text: 'GitHub', link: 'https://github.com/coollabsio/' }
    ],
    sidebar: {
      '/about/': getGuideSidebar('coolLabs', 'Docs'),
      '/docs/': getGuideSidebar('coolLabs', 'Docs'),
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
        '/about/',
        '/about/products',
        '/about/contact',
        '/privacy.html',
        '/terms.html'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        '/docs/',
        '/docs/coolNote',
        '/docs/coolAnalytics'
      ]
    }
  ]
}