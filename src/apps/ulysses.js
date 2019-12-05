/* eslint-disable max-len */
// https://ulysses.app/tutorials/shortcuts
export default {
  id: 'ulysses',
  title: 'Ulysses',
  category: 'Productivity',
  sets: [
    {
      title: 'Sheet and Group Handling',
      id: 'sheet',
      version: 1,
      shortcuts: [
        {
          title: 'New Sheet',
          keys: ['Meta', 'n'],
        },
        {
          title: 'New Group',
          keys: ['Shift', 'Meta', 'n'],
        },
        {
          title: 'New Filter',
          keys: ['Control', 'Meta', 'n'],
        },
        {
          title: 'New Window',
          keys: ['Alt', 'Meta', 'n'],
        },
        {
          title: 'Open from Library',
          keys: ['Meta', 'o'],
        },
        {
          title: 'Open from Current Section',
          keys: ['Shift', 'Meta', 'o'],
        },
        {
          title: 'Open from Current Group',
          keys: ['Alt', 'Meta', 'o'],
        },
        {
          title: 'Select Previous Sheet',
          keys: ['Alt', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Select Next Sheet',
          keys: ['Alt', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Reveal Sheet in Group',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Add to Favorites',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Save Version',
          keys: ['Meta', 's'],
        },
        {
          title: 'Move Sheet/Group to Trash',
          keys: ['Meta', 'Backspace'],
        },
        {
          title: 'Erase Sheet/Group',
          keys: ['Alt', 'Meta', 'Backspace'],
        },
        {
          title: 'Glue Sheets',
          keys: ['Meta', 'j'],
        },
        {
          title: 'Copy Callback URL',
          keys: ['Control', 'Alt', 'Meta', 'c'],
        },
      ],
    },
    {
      title: 'Editor',
      id: 'editor',
      version: 1,
      shortcuts: [
        {
          title: 'Smart Paste',
          keys: ['Shift', 'Meta', 'v'],
        },
        {
          title: 'Copy as Markdown',
          keys: ['Alt', 'Meta', 'c'],
        },
        {
          title: 'Paste as Plain Text',
          keys: ['Alt', 'Shift', 'Meta', 'v'],
        },
        {
          title: 'Paste from Markdown',
          keys: ['Alt', 'Meta', 'v'],
        },
        {
          title: 'Move Line Up',
          keys: ['Control', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Move Line Down',
          keys: ['Control', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Split at Selection',
          keys: ['Shift', 'Meta', 'b'],
        },
        {
          title: 'Export Preview',
          keys: ['Shift', 'Meta', 'p'],
        },
        {
          title: 'Refresh Export Preview',
          keys: ['Meta', 'r'],
        },
        {
          title: 'Print Editor',
          keys: ['Meta', 'p'],
        },
        {
          title: 'Search in Sheet List',
          keys: ['Shift', 'Meta', 'f'],
        },
        {
          title: 'Show Find Panel',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Show Find and Replace',
          keys: ['Alt', 'Meta', 'f'],
        },
        {
          title: 'Show Spelling and Grammar',
          keys: ['Meta', ':'],
        },
        {
          title: 'Special Characters',
          keys: ['Control', 'Meta', 'Space'],
        },
        {
          title: 'Insert Line Break',
          keys: ['Shift', 'Enter'],
        },
        {
          title: 'Syntax Selection in Code Block',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'End Smart List/Code Block',
          keys: ['Alt', 'Enter'],
        },
        {
          title: 'Move Focus to Sheet',
          keys: ['Meta', 'ArrowLeft'],
        },
      ],
    },
    {
      title: 'Markup',
      id: 'markup',
      version: 1,
      shortcuts: [
        {
          title: 'Increase Heading Level',
          keys: ['Meta', '#'],
        },
        {
          title: 'Decrease Heading Level',
          keys: ['Shift', 'Meta', '#'],
        },
        {
          title: 'Mark as Strong',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Mark as Emphasis',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Mark as Link',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Clear Markup in Selection',
          keys: ['Meta', 'l'],
        },
      ],
    },
    {
      title: 'View',
      id: 'view',
      version: 1,
      shortcuts: [
        {
          title: 'Enable Typewriter Mode',
          keys: ['Alt', 'Meta', 't'],
        },
        {
          title: 'Library',
          keys: ['Meta', '1'],
        },
        {
          title: 'Sheet List',
          keys: ['Meta', '2'],
        },
        {
          title: 'Editor',
          keys: ['Meta', '3'],
        },
        {
          title: 'Attachments',
          keys: ['Meta', '4'],
        },
        {
          title: 'Favorites',
          keys: ['Meta', '5'],
        },
        {
          title: 'Quick Export',
          keys: ['Meta', '6'],
        },
        {
          title: 'Statistics',
          keys: ['Meta', '7'],
        },
        {
          title: 'Navigation',
          keys: ['Meta', '8'],
        },
        {
          title: 'Markup',
          keys: ['Meta', '9'],
        },
        {
          title: 'Keywords',
          keys: ['Shift', 'Meta', 'k'],
        },
        {
          title: 'Default Zoom',
          keys: ['Meta', '0'],
        },
        {
          title: 'Increase Zoom',
          keys: ['Meta', '+'],
        },
        {
          title: 'Decrease Zoom',
          keys: ['Meta', '-'],
        },
        {
          title: 'Light/Dark Mode',
          keys: ['Alt', 'Meta', 'l'],
        },
        {
          title: 'Light/Dark Theme',
          keys: ['Alt', 'Meta', 'x'],
        },
      ],
    },
    {
      title: 'Window Management',
      id: 'window',
      version: 1,
      shortcuts: [
        {
          title: 'Minimize Window',
          keys: ['Meta', 'm'],
        },
        {
          title: 'Enter Full Screen',
          keys: ['Control', 'Meta', 'f'],
        },
        {
          title: 'Zoom Window',
          keys: ['Control', 'Meta', 'z'],
        },
      ],
    },
    {
      title: 'One Shortcut to Find Them All',
      id: 'search',
      version: 1,
      shortcuts: [
        {
          title: 'Search for Menu Actions',
          keys: ['Shift', 'Meta', '/'],
        },
      ],
    },
  ],
}
