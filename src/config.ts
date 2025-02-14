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
        resources: [],
      },
      {
        title: 'JavaScript in Bubble basics',
        description: 'Get familiar with JavaScript in Bubble',
        video: 'CSVwMb5APS0',
        number: 3,
        minutes: 10,
        resources: [],
      },
      {
        title: 'JavaScript in Bubble Part 2',
        description: 'More advanced JavaScript in Bubble',
        video: '0cuOHK8qZWU',
        number: 4,
        minutes: 15,
        resources: [],
      },
      {
        title: 'JavaScript in Bubble Practical Project',
        description: 'Practical project to apply your knowledge',
        video: 'kPw8WdtXvow',
        number: 5,
        minutes: 11,
        resources: [],
      },
      {
        title: 'Cursor IDE Fundamentals',
        description: 'Introduction to Cursor, an AI powered IDE',
        video: 'WJ8JFMrLhn4',
        number: 6,
        minutes: 6,
        resources: [],
      },
      {
        title: 'Building Plugins for Bubble Introduction',
        description: 'Introduction to building plugins for Bubble',
        video: 'wwePl0snVVA',
        number: 7,
        minutes: 1,
        resources: [],
      },
      {
        title: 'Building Plugins for Bubble Part 1',
        description: 'Theoretical part of building plugins for Bubble',
        video: 'hQxJ53_UL1g',
        number: 8,
        minutes: 10,
        resources: [],
      },
      {
        title: 'Building Plugins for Bubble Part 2',
        description: 'Finalizing the theoretical part of building plugins',
        video: 'byDbU1vOtUg',
        number: 9,
        minutes: 3,
        resources: [],
      },
    ],
  },
}
