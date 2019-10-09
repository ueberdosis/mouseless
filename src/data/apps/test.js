export default {
  id: 'test',
  title: 'Test',
  debug: true,
  sets: [
    {
      title: 'Test',
      id: 'test',
      version: 1,
      shortcuts: [
        // {
        //   title: 'Impossible',
        //   keys: ['Alt', 'Meta', ']'],
        // },
        {
          title: 'Only Modifier',
          keys: ['Alt'],
        },
        {
          title: 'System Shortcut',
          keys: ['Meta', 'Tab'],
        },
      ],
    },
  ],
}
