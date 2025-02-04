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
        description: 'Introduction to the course',
        video: 'KlodYPk5lRg',
        number: 1,
        minutes: 3,
        resources: [],
      },
      {
        title: 'Tools we will need',
        description: 'Tools we will need to succeed',
        video: 'w4iCxXJ-_zU',
        number: 2,
        minutes: 1,
        resources: [
          {
            title: 'Resources mentioned in the chapter',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
        ],
      },
      {
        title: 'JavaScript in Bubble basics',
        description: 'Get familiar with JavaScript in Bubble',
        video: 'CSVwMb5APS0',
        number: 3,
        minutes: 10,
        resources: [],
      },
      // {
      //   title: 'JavaScript in Bubble part 2',
      //   description: 'More advanced JavaScript in Bubble',
      //   video: 'W6NZfCO5SIk',
      //   number: 4,
      //   minutes: 10,
      //   resources: [
      //     {
      //       title: 'Functions',
      //       url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      //     },
      //   ],
      // },
    ],
  },
}
