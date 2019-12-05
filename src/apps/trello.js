/* eslint-disable max-len */
// https://trello.com/shortcuts
module.exports = {
  id: 'trello',
  title: 'Trello',
  category: 'Productivity',
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Select the card below',
          keys: ['j'],
        },
        {
          title: 'Select the card above',
          keys: ['k'],
        },
        {
          title: 'Open Card',
          keys: ['Enter'],
        },
        {
          title: 'Insert New Card',
          keys: ['n'],
        },
        {
          title: 'Watch',
          keys: ['s'],
        },
        {
          title: 'Vote',
          keys: ['v'],
        },
        // TODO: Hovering a card
        // {
        //   title: 'Copy Card',
        //   keys: ['Meta', 'c'],
        // },
        // {
        //   title: 'Move Card',
        //   keys: ['Meta', 'x'],
        // },
        // {
        //   title: 'Paste Card',
        //   keys: ['Meta', 'v'],
        // },
        {
          title: 'Open Shortcuts Page',
          keys: ['?'],
        },
      ],
    },
    {
      title: 'Cards',
      id: 'cards',
      version: 1,
      shortcuts: [
        {
          title: 'Archive Card',
          keys: ['c'],
        },
        {
          title: 'Due Date',
          keys: ['d'],
        },
        {
          title: 'Quick Edit Mode',
          keys: ['e'],
        },
        {
          title: 'Close Menu / Cancel Editing',
          keys: ['Escape'],
        },
        {
          title: 'Save Text',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Label',
          keys: ['l'],
        },
        {
          title: 'Add / Remove Members',
          keys: ['m'],
        },
        {
          title: 'Assign Self',
          keys: ['Space'],
        },
        {
          title: 'Edit Title',
          keys: ['t'],
        },
      ],
    },
    {
      title: 'View',
      id: 'view',
      version: 1,
      shortcuts: [
        {
          title: 'Open Header Boards Menu',
          keys: ['b'],
        },
        {
          title: 'Open Card Filter Menu',
          keys: ['f'],
        },
        {
          title: 'Toggle Label Names',
          keys: [';'],
        },
        {
          title: 'My Cards Filter',
          keys: ['q'],
        },
        {
          title: 'Clear All Filters',
          keys: ['x'],
        },
        {
          title: 'Toggle Board Menu',
          keys: ['w'],
        },
      ],
    },
  ],
}
