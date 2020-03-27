// https://www.notion.so/Learn-the-shortcuts-66e28cec810548c3a4061513126766b0
module.exports = {
  id: 'notion',
  title: 'Notion',
  category: 'Productivity',
  description: 'Notion is a real productivity boost for teams. Learn a few of the keyboard shortcuts to make the most out of it. Your team will love you.',
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Create a new page',
          keys: ['Meta', 'n'],
        },
        {
          title: 'Open a new window',
          keys: ['Meta', 'Shift', 'n'],
        },
        {
          title: 'Open search',
          keys: ['Meta', 'p'],
        },
        {
          title: 'Go back a page',
          keys: ['Meta', '['],
        },
        {
          title: 'Go forward a page',
          keys: ['Meta', ']'],
        },
        {
          title: 'Switch to dark mode',
          keys: ['Meta', 'Shift', 'l'],
        },
      ],
    },
    {
      title: 'Style Content',
      id: 'style',
      version: 1,
      shortcuts: [
        {
          title: 'Create a line break within a block of text',
          keys: ['Shift', 'Enter'],
        },
        {
          title: 'Create a comment',
          keys: ['Meta', 'Shift', 'm'],
        },
        {
          title: 'Bold text',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Italicize text',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Strikethrough text',
          keys: ['Meta', 'Shift', 's'],
        },
        {
          title: 'Add a link',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Inline code',
          keys: ['Meta', 'e'],
        },
        {
          title: 'Indent',
          keys: ['Tab'],
        },
        {
          title: 'Un-indent',
          keys: ['Shift', 'Tab'],
        },
      ],
    },
    {
      title: 'Create Content',
      id: 'create',
      version: 1,
      shortcuts: [
        {
          title: 'Create text',
          keys: ['Meta', 'Alt', '0'],
        },
        {
          title: 'Create an H1 heading',
          keys: ['Meta', 'Alt', '1'],
        },
        {
          title: 'Create an H2 heading',
          keys: ['Meta', 'Alt', '2'],
        },
        {
          title: 'Create an H3 heading',
          keys: ['Meta', 'Alt', '3'],
        },
        {
          title: 'Create a to-do checkbox',
          keys: ['Meta', 'Alt', '4'],
        },
        {
          title: 'Create a bullet list',
          keys: ['Meta', 'Alt', '5'],
        },
        {
          title: 'Create a numbered list',
          keys: ['Meta', 'Alt', '6'],
        },
        {
          title: 'Created a toggle list',
          keys: ['Meta', 'Alt', '7'],
        },
        {
          title: 'Create a code block',
          keys: ['Meta', 'Alt', '8'],
        },
        {
          title: 'Create a new page',
          keys: ['Meta', 'Alt', '9'],
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
      ],
    },
    {
      title: 'Selection',
      id: 'selection',
      version: 1,
      shortcuts: [
        {
          title: 'Clear selected blocks',
          keys: ['Escape'],
        },
        {
          title: 'Delete selected blocks',
          keys: ['Backspace'],
        },
        {
          title: 'Select the block your cursor is in',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Open a selected image in full-screen',
          keys: ['Space'],
        },
        {
          title: 'Expand your selection up',
          keys: ['Shift', 'ArrowUp'],
        },
        {
          title: 'Expand your selection down',
          keys: ['Shift', 'ArrowDown'],
        },
      ],
    },
    {
      title: 'Blocks',
      id: 'blocks',
      version: 1,
      shortcuts: [
        {
          title: 'Edit text inside a selected block',
          keys: ['Enter'],
        },
        {
          title: 'Modify the current block',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Change selected blocks',
          keys: ['Meta', '/'],
        },
        {
          title: 'Duplicate the selected blocks',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Expand or close all toggles in a toggle list',
          keys: ['Meta', 'Alt', 't'],
        },
        {
          title: 'Apply the last text or highlight color you used',
          keys: ['Meta', 'Shift', 'h'],
        },
        {
          title: 'Move a selected block up',
          keys: ['Meta', 'Shift', 'ArrowUp'],
        },
        {
          title: 'Move a selected block down',
          keys: ['Meta', 'Shift', 'ArrowDown'],
        },
      ],
    },
  ],
}
