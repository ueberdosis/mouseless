export default {
  id: 'test',
  title: 'Test',
  debug: true,
  groups: [
    {
      title: 'Test',
      id: 'test',
      version: 1,
      shortcuts: [
        // {
        //   title: 'Test',
        //   keys: ['Meta', '/'],
        // },
        {
          title: 'Should not be possible on German layout',
          keys: ['Alt', '/'],
        },
      ],
    },
  ],
}
