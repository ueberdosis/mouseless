/* eslint-disable max-len */
// https://bear.app/faq/Shortcuts%20and%20more/Mac%20shortcuts/
module.exports = {
  id: 'bear',
  title: 'Bear',
  category: 'Productivity',
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Create a new note',
          keys: ['Meta', 'n'],
        },
        {
          title: 'Create a new note in a new window',
          keys: ['Alt', 'Meta', 'n'],
        },
        {
          title: 'Edit the selected note',
          keys: ['Enter'],
        },
      ],
    },
    {
      title: 'Text Styles',
      id: 'textstyles',
      version: 1,
      shortcuts: [
        {
          title: 'Heading 1',
          keys: ['Alt', 'Meta', '1'],
        },
        {
          title: 'Heading 2',
          keys: ['Alt', 'Meta', '2'],
        },
        {
          title: 'Heading 3',
          keys: ['Alt', 'Meta', '3'],
        },
        {
          title: 'Line separator',
          keys: ['Alt', 'Meta', 's'],
        },
        {
          title: 'Bold',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Italic',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Underline',
          keys: ['Meta', 'u'],
        },
        {
          title: 'Strikethrough',
          keys: ['Shift', 'Meta', 'e'],
        },
        {
          title: 'Link',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Unordered list',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Ordered list',
          keys: ['Shift', 'Meta', 'l'],
        },
        {
          title: 'Quote',
          keys: ['Shift', 'Meta', 'u'],
        },
        {
          title: 'Todo',
          keys: ['Meta', 't'],
        },
        {
          title: 'Inline code',
          keys: ['Alt', 'Meta', 'c'],
        },
        {
          title: 'Code block',
          keys: ['Control', 'Meta', 'c'],
        },
        {
          title: 'Marker/Highlighter',
          keys: ['Shift', 'Meta', 'm'],
        },
        {
          title: 'Insert file',
          keys: ['Shift', 'Meta', 'v'],
        },
      ],
    },
    {
      title: 'Todos',
      id: 'todos',
      version: 1,
      shortcuts: [
        {
          title: 'Toggle Todo',
          keys: ['Shift', 'Meta', 't'],
        },
        {
          title: 'Mark Todo as completed',
          keys: ['Alt', 'Meta', 't'],
        },
        {
          title: 'Mark todo as incomplete',
          keys: ['Control', 'Meta', 't'],
        },
      ],
    },
    {
      title: 'Structure',
      id: 'structure',
      version: 1,
      shortcuts: [
        {
          title: 'Shift line right',
          keys: ['Meta', ']'],
        },
        {
          title: 'Shift line left',
          keys: ['Meta', '['],
        },
        {
          title: 'Move line up',
          keys: ['Meta', 'Alt', 'ArrowUp'],
        },
        {
          title: 'Move line down',
          keys: ['Meta', 'Alt', 'ArrowDown'],
        },
      ],
    },
    {
      title: 'Lists',
      id: 'lists',
      version: 1,
      shortcuts: [
        {
          title: 'Shift the list element right',
          keys: ['Tab'],
        },
        {
          title: 'Shift the list element left',
          keys: ['Shift', 'Tab'],
        },
        {
          title: 'End the list',
          keys: ['Shift', 'Enter'],
        },
      ],
    },
    {
      title: 'Dates',
      id: 'dates',
      version: 1,
      shortcuts: [
        {
          title: 'Long Form Date with time',
          description: '11 Jul 2017, 10:43',
          keys: ['Shift', 'Meta', '7'],
        },
        {
          title: 'Long Form Date',
          description: '11 Jul 2017',
          keys: ['Shift', 'Meta', '8'],
        },
        {
          title: 'Short Form Date',
          description: '11/07/2017',
          keys: ['Shift', 'Meta', '9'],
        },
        {
          title: 'Hours',
          description: '11:43',
          keys: ['Shift', 'Meta', '0'],
        },
      ],
    },
    {
      title: 'Layout',
      id: 'layout',
      version: 1,
      shortcuts: [
        {
          title: 'Zoom in',
          keys: [
            ['Meta', '='],
            ['Meta', '+'],
          ],
        },
        {
          title: 'Zoom out',
          keys: ['Meta', '-'],
        },
        {
          title: 'Actual size',
          keys: ['Meta', '0'],
        },
      ],
    },
    {
      title: 'Panels and Search',
      id: 'panels',
      version: 1,
      shortcuts: [
        {
          title: 'Toggle information panel',
          keys: ['Shift', 'Meta', 'i'],
        },
        {
          title: 'Search inside the current note',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Search and replace inside the current note',
          keys: ['Alt', 'Meta', 'f'],
        },
        {
          title: 'Search inside the note list',
          keys: ['Shift', 'Meta', 'f'],
        },
      ],
    },
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        {
          title: 'Search in the current note list',
          keys: ['Alt', 'Meta', 'f'],
        },
        {
          title: 'Delete selected note',
          keys: ['Meta', 'Backspace'],
        },
        {
          title: 'Restore selected note',
          keys: ['Shift', 'Meta', 'r'],
        },
        {
          title: 'Pin/unpin selected note',
          keys: ['Shift', 'Meta', 'p'],
        },
        {
          title: 'Navigate back in visualized notes history',
          keys: ['Alt', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Navigate forward in visualized notes history',
          keys: ['Alt', 'Meta', 'ArrowRight'],
        },
      ],
    },
    {
      title: 'Selections',
      id: 'selections',
      version: 1,
      shortcuts: [
        {
          title: 'Select all the notes in the list',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Select Notes in the sidebar',
          keys: ['Meta', '1'],
        },
        {
          title: 'Select Untagged in the sidebar',
          keys: ['Meta', '2'],
        },
        {
          title: 'Select ToDo in the sidebar',
          keys: ['Meta', '3'],
        },
        {
          title: 'Select Today in the sidebar',
          keys: ['Meta', '4'],
        },
        {
          title: 'Select Archive in the sidebar',
          keys: ['Meta', '5'],
        },
        {
          title: 'Select Trash in the sidebar',
          keys: ['Meta', '6'],
        },
        {
          title: 'Select Locked in the sidebar',
          keys: ['Meta', '7'],
        },
      ],
    },
    {
      title: 'Saving and Importing',
      id: 'saving',
      version: 1,
      shortcuts: [
        {
          title: 'Export selected notes',
          keys: ['Shift', 'Meta', 's'],
        },
        {
          title: 'Import notes',
          keys: ['Shift', 'Meta', 'o'],
        },
      ],
    },
    {
      title: 'Window',
      id: 'window',
      version: 1,
      shortcuts: [
        {
          title: 'Show sidebar, note list and editor',
          keys: ['Control', '1'],
        },
        {
          title: 'Show note list and editor',
          keys: ['Control', '2'],
        },
        {
          title: 'Show editor only',
          keys: ['Control', '3'],
        },
        {
          title: 'Show preferences',
          keys: ['Meta', ','],
        },
        {
          title: 'Enter fullscreen',
          keys: ['Control', 'Meta', 'f'],
        },
        {
          title: 'Open main window',
          keys: ['Meta', '\\'],
        },
      ],
    },
    {
      title: 'Miscellaneous',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Empty Trash',
          keys: ['Shift', 'Meta', 'Backspace'],
        },
        {
          title: 'Select all',
          keys: ['Meta', 'a'],
        },
        {
          title: 'End editing',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Print note',
          keys: ['Meta', 'p'],
        },
        {
          title: 'Lock Bear\'s interface',
          keys: ['Control', 'Meta', 'Shift', 'l'],
        },
        {
          title: 'Lock notes with encryption',
          keys: ['Control', 'Meta', 'l'],
        },
      ],
    },
  ],
}
