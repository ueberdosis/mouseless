// https://library.panic.com/transmit/transmit5/shortcuts/
module.exports = {
  id: 'transmit',
  title: 'Transmit',
  category: 'Utility',
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'New Folder',
          keys: ['Shift', 'Meta', 'n'],
        },
        {
          title: 'New File',
          keys: ['Alt', 'Meta', 'n'],
        },
        {
          title: 'Disconnect',
          keys: ['Meta', 'e'],
        },
        {
          title: 'Open',
          keys: ['Meta', 'o'],
        },
        {
          title: 'Save',
          keys: ['Meta', 's'],
        },
        {
          title: 'Preview in Browser',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Get Info',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Show Inspector',
          keys: ['Alt', 'Meta', 'i'],
        },
        {
          title: 'Duplicate',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Print…',
          keys: ['Meta', 'p'],
        },
        {
          title: 'Preferences',
          keys: ['Meta', ','],
        },
      ],
    },
    {
      title: 'Transfer',
      id: 'transfer',
      version: 1,
      shortcuts: [
        {
          title: 'Transfer Selected Items',
          keys: ['Shift', 'Meta', 'r'],
        },
        {
          title: 'Transfer Selected Items Without Rules',
          keys: ['Alt', 'Shift', 'Meta', 'r'],
        },
        {
          title: 'Cancel',
          keys: ['Meta', '.'],
        },
      ],
    },
    {
      title: 'Servers',
      id: 'servers',
      version: 1,
      shortcuts: [
        {
          title: 'Add New Server',
          keys: ['Shift', 'Meta', 'a'],
        },
        {
          title: 'Show Quick Connect',
          keys: ['Shift', 'Meta', 'f'],
        },
        {
          title: 'Edit “Server”',
          keys: ['Shift', 'Meta', 'i'],
        },
      ],
    },
    {
      title: 'View',
      id: 'view',
      version: 1,
      shortcuts: [
        {
          title: 'Show Transfers',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Show Transfers Window',
          keys: ['Alt', 'Meta', 'l'],
        },
        {
          title: 'View as Thumbnails',
          keys: ['Meta', '1'],
        },
        {
          title: 'View as List',
          keys: ['Meta', '2'],
        },
        {
          title: 'View as Columns',
          keys: ['Meta', '3'],
        },
        {
          title: 'View as Cover Flow',
          keys: ['Meta', '4'],
        },
        {
          title: 'Refresh',
          keys: ['Meta', 'r'],
        },
        {
          title: 'Hide Places Bar',
          keys: ['Shift', 'Meta', 's'],
        },
        {
          title: 'Show View Options',
          keys: ['Shift', 'Meta', 'j'],
        },
        // {
        //   title: 'Enter Full Screen',
        //   keys: ['Control', 'Meta', 'f'],
        // },
      ],
    },
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        {
          title: 'Back',
          keys: ['Meta', '['],
        },
        {
          title: 'Forward',
          keys: ['Meta', ']'],
        },
        {
          title: 'Enclosing Folder',
          keys: ['Meta', 'ArrowUp'],
        },
        {
          title: 'Go to Folder…',
          keys: ['Alt', 'Meta', 'g'],
        },
        {
          title: 'Open in Terminal',
          keys: ['Alt', 'Meta', 't'],
        },
        {
          title: 'Link Folder Navigation',
          keys: ['Shift', 'Meta', 'l'],
        },
        {
          title: 'Connect To > Last Used Protocol',
          keys: ['Meta', 'k'],
        },
      ],
    },
    {
      title: 'Window',
      id: 'window',
      version: 1,
      shortcuts: [
        {
          title: 'New Window',
          keys: ['Meta', 'n'],
        },
        {
          title: 'New Tab',
          keys: ['Meta', 't'],
        },
        {
          title: 'Close Tab',
          keys: ['Meta', 'w'],
        },
        {
          title: 'Close Window',
          keys: ['Shift', 'Meta', 'w'],
        },
        {
          title: 'Close All',
          keys: ['Alt', 'Meta', 'w'],
        },
        {
          title: 'Minimize',
          keys: ['Meta', 'm'],
        },
        {
          title: 'Minimize All',
          keys: ['Alt', 'Meta', 'm'],
        },
        {
          title: 'Select Next Tab',
          keys: ['Control', '⇥'],
        },
        {
          title: 'Select Previous Tab',
          keys: ['Control', 'Shift', '⇤'],
        },
        {
          title: 'Transcript',
          keys: ['Control', 'Meta', 't'],
        },
        {
          title: 'Show Inspector',
          keys: ['Alt', 'Meta', 'i'],
        },
      ],
    },
    {
      title: 'Miscellaneous',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Quick Look “selected-file”',
          keys: ['Meta', 'y'],
        },
        {
          title: 'Show Invisible Files',
          keys: ['Shift', 'Meta', 'b'],
        },
        {
          title: 'Focus on Local',
          keys: ['Alt', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Focus on Remote',
          keys: ['Alt', 'Meta', 'ArrowRight'],
        },
      ],
    },
  ],
}
