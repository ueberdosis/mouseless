/* eslint-disable max-len */
// https://gist.github.com/faizshukri/7867631
module.exports = {
  id: 'sublime',
  title: 'Sublime',
  systemTitle: 'Sublime',
  category: 'Development',
  sets: [
    {
      title: 'Editing',
      id: 'editing',
      version: 1,
      shortcuts: [
        {
          title: 'Delete line',
          keys: ['Meta', 'x'],
        },
        {
          title: 'Insert line after',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Insert line before',
          keys: ['Meta', 'Shift', 'Enter'],
        },
        {
          title: 'Move line/selection up',
          keys: ['Meta', 'Control', 'ArrowUp'],
        },
        {
          title: 'Move line/selection down',
          keys: ['Meta', 'Control', 'ArrowDown'],
        },
        {
          title: 'elect line – Repeat to select next lines',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Select word – Repeat select others occurrences',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Jump to closing parentheses Repeat to jump to opening parentheses',
          keys: ['Control', 'm'],
        },
        {
          title: 'Select all contents of the current parentheses',
          keys: ['Control', 'Shift', 'm'],
        },
        {
          title: 'Delete from cursor to start of line',
          keys: ['Meta', 'K', '⌫'],
        },
        {
          title: 'Indent current line(s)',
          keys: ['Meta', ']'],
        },
        {
          title: 'Un-indent current line(s)',
          keys: ['Meta', '['],
        },
        {
          title: 'Duplicate line(s)',
          keys: ['Meta', 'Shift', 'd'],
        },
        {
          title: 'Join line below to the end of the current line',
          keys: ['Meta', 'j'],
        },
        {
          title: 'Comment/un-comment current line',
          keys: ['Meta', '/'],
        },
        {
          title: 'Block comment current selection',
          keys: ['Meta', 'Alt', '/'],
        },
        {
          title: 'Redo, or repeat last keyboard shortcut command',
          keys: ['Meta', 'y'],
        },
        {
          title: 'Paste and indent correctly',
          keys: ['Meta', 'Shift', 'v'],
        },
        {
          title: 'Select next auto-complete suggestion',
          keys: ['Control', 'Space'],
        },
        {
          title: 'Soft undo; jumps to your last change before undoing change when repeated',
          keys: ['Control', 'u'],
        },
        {
          title: 'Column selection up',
          keys: ['Control', 'Shift', 'ArrowUp'],
        },
        {
          title: 'Column selection down',
          keys: ['Control', 'Shift', 'ArrowDown'],
        },
      ],
    },
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        {
          title: 'Quick-open files by name',
          keys: ['Meta', 'p'],
        },
        {
          title: 'Goto symbol',
          keys: ['Meta', 'r'],
        },
        {
          title: 'Goto line in current file',
          keys: ['Control', 'g'],
        },
      ],
    },
    {
      title: 'View',
      id: 'view',
      version: 1,
      shortcuts: [
        {
          title: 'Command prompt',
          keys: ['Meta', 'Shift', 'p'],
        },
        {
          title: 'Toggle side bar',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Show scope in status bar',
          keys: ['Control', 'Shift', 'p'],
        },
      ],
    },
    {
      title: 'Find/Replace',
      id: 'find',
      version: 1,
      shortcuts: [
        {
          title: 'Find',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Replace',
          keys: ['Meta', 'Alt', 'f'],
        },
        {
          title: 'Find in files',
          keys: ['Meta', 'Shift', 'f'],
        },
      ],
    },
    {
      title: 'Tabs',
      id: 'tabs',
      version: 1,
      shortcuts: [
        {
          title: 'Open last closed tab',
          keys: ['Meta', 'Shift', 't'],
        },
        {
          title: 'Cycle up through tabs',
          keys: ['Control', 'Tab'],
        },
        {
          title: 'Cycle down through tabs',
          keys: ['Shift', 'Control', 'Tab'],
        },
      ],
    },
    {
      title: 'Split Window',
      id: 'window',
      version: 1,
      shortcuts: [
        {
          title: 'Split view into two columns',
          keys: ['Meta', 'Alt', '2'],
        },
        {
          title: 'Revert view to single column',
          keys: ['Meta', 'Alt', '1'],
        },
        {
          title: 'Set view to grid (4 groups)',
          keys: ['Meta', 'Alt', '5'],
        },
        {
          title: 'Jump to group 1',
          keys: ['Control', '1'],
        },
        {
          title: 'Move file to group 2',
          keys: ['Control', 'Shift', '2'],
        },
      ],
    },
    {
      title: 'Bookmarks',
      id: 'bookmarks',
      version: 1,
      shortcuts: [
        {
          title: 'Toggle bookmark',
          keys: ['Meta', 'F2'],
        },
        {
          title: 'Next bookmark',
          keys: ['F2'],
        },
        {
          title: 'Previous bookmark',
          keys: ['Shift', 'F2'],
        },
        {
          title: 'Clear bookmarks',
          keys: ['Shift', 'Meta', 'F2'],
        },
      ],
    },
  ],
}
