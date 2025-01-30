const config = {
  domainName:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://kirsanov.co',
  appName: 'Artem Kirsanov',
  appDescription:
    'Artem Kirsanov is a software engineer based in Kyiv, Ukraine.',
}

export default config

export const courses = {
  'javascript-for-bubble-developers': {
    title: 'JavaScript for Bubble developers',
    description: 'Learn JavaScript for Bubble developers',
    slug: 'javascript-for-bubble-developers',
    priceId: 'price_1QmcI6JZ5m3OvBRDCxMHflMY',
    priceId_test: 'price_1QmclxJZ5m3OvBRDNNlSAGkU',
    thumbnail: '/js-course-preview.png',
    progress: 65,
    lastAccessed: '2024-02-15',
    chapters: [
      {
        title: 'Introduction',
        description: 'Learn JavaScript for Bubble developers',
        video: 'jNQXAC9IVRw',
        number: 1,
        resources: [
          {
            title: 'Important links and resources',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
        ],
      },
      {
        title: 'Variables',
        description: 'Learn JavaScript for Bubble developers',
        video: 'HXV3zeQKqGY',
        number: 2,
        resources: [
          {
            title: 'Variables',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
        ],
      },
      {
        title: 'Functions',
        description: 'Learn JavaScript for Bubble developers',
        video: 'W6NZfCO5SIk',
        number: 3,
        resources: [
          {
            title: 'Functions',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
        ],
      },
    ],
  },
}
