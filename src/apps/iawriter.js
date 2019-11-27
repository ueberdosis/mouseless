/* eslint-disable max-len */
// https://ia.net/writer/support/general/keyboard
export default {
  id: 'iawriter',
  title: 'iA Writer',
  systemTitle: 'iA Writer',
  category: 'Productivity',
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'New',
          keys: ['Meta', 'n'],
        },
        {
          title: 'Close',
          keys: ['Meta', 'w'],
        },
        {
          title: 'Save',
          keys: ['Meta', 's'],
        },
        {
          title: 'Undo',
          keys: ['Meta', 'z'],
        },
        {
          title: 'Redo',
          keys: ['Shift', 'Meta', 'z'],
        },
        {
          title: 'Copy',
          keys: ['Meta', 'c'],
        },
        {
          title: 'Cut',
          keys: ['Meta', 'x'],
        },
        {
          title: 'Paste',
          keys: ['Meta', 'v'],
        },
        {
          title: 'Select All',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Find',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Increase Text Size',
          keys: ['Meta', '-'],
        },
        {
          title: 'Decrease Text Size',
          keys: ['Meta', '-'],
        },
        {
          title: 'Show Library',
          keys: ['Meta', 'e'],
        },
        {
          title: 'Show Preview',
          keys: ['Meta', 'r'],
        },
        {
          title: 'Night Mode',
          keys: ['⌃', 'Meta', 'n'],
        },
      ],
    },
    {
      title: 'Format',
      id: 'format',
      version: 1,
      shortcuts: [
        {
          title: 'Heading 1',
          keys: ['Meta', '1'],
        },
        {
          title: 'Heading 2',
          keys: ['Meta', '2'],
        },
        // {
        //   title: 'Heading 3',
        //   keys: ['Meta', '3'],
        // },
        // {
        //   title: 'Heading 4',
        //   keys: ['Meta', '4'],
        // },
        // {
        //   title: 'Heading 5',
        //   keys: ['Meta', '5'],
        // },
        {
          title: 'Heading 6',
          keys: ['Meta', '6'],
        },
        {
          title: 'Unordered List',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Ordered List',
          keys: ['Shift', 'Meta', 'l'],
        },
        {
          title: 'Task List',
          keys: ['Alt', 'Meta', 'l'],
        },
        {
          title: 'Mark Task Complete',
          keys: ['Meta', '.'],
        },
        {
          title: 'Emphasis (Italic)',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Importance (Bold)',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Add Link',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Add Footnote',
          keys: ['⌃', 'Meta', 'k'],
        },
        {
          title: 'Clear Styles',
          keys: ['Alt', 'Meta', 'Delete'],
        },
      ],
    },
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        {
          title: 'Previous',
          keys: ['Alt', 'ArrowLeft'],
        },
        {
          title: 'Next word',
          keys: ['Alt', 'ArrowRight'],
        },
        {
          title: 'Start of the line',
          keys: ['Meta', 'ArrowLeft'],
        },
        {
          title: 'End of the line',
          keys: ['Meta', 'ArrowRight'],
        },
        {
          title: 'Start of the document',
          keys: ['Meta', 'ArrowUp'],
        },
        {
          title: 'End of the document',
          keys: ['Meta', 'ArrowDown'],
        },
      ],
    },
  ],
}
