/* eslint-disable max-len */
// https://support.google.com/docs/answer/179738?co=GENIE.Platform%3DDesktop&hl=en
export default {
  id: 'googledocs',
  title: 'Google Docs',
  category: 'Productivity',
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
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
          title: 'Paste without formatting',
          keys: ['Meta', 'Shift', 'v'],
        },
        {
          title: 'Undo',
          keys: ['Meta', 'z'],
        },
        {
          title: 'Redo',
          keys: ['Meta', 'Shift', 'z'],
        },
        {
          title: 'Insert or edit link',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Open link',
          keys: ['Alt', 'Enter'],
        },
        {
          title: 'Print',
          keys: ['Meta', 'p'],
        },
        {
          title: 'Open',
          keys: ['Meta', 'o'],
        },
        {
          title: 'Find',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Find and replace',
          keys: ['Meta', 'Shift', 'h'],
        },
        {
          title: 'Find again',
          keys: ['Meta', 'g'],
        },
        {
          title: 'Find previous',
          keys: ['Meta', 'Shift', 'g'],
        },
        {
          title: 'Insert page break',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Repeat last action',
          keys: ['Meta', 'y'],
        },
      ],
    },
    {
      title: 'Text Formatting',
      id: 'text',
      version: 1,
      shortcuts: [
        {
          title: 'Bold',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Italicize',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Underline',
          keys: ['Meta', 'u'],
        },
        {
          title: 'Strikethrough',
          keys: ['Meta', 'Shift', 'x'],
        },
        {
          title: 'Superscript',
          keys: ['Meta', '.'],
        },
        {
          title: 'Subscript',
          keys: ['Meta', ','],
        },
        {
          title: 'Copy text formatting',
          keys: ['Meta', 'Alt', 'c'],
        },
        {
          title: 'Paste text formatting',
          keys: ['Meta', 'Alt', 'v'],
        },
        {
          title: 'Clear text formatting',
          keys: ['Meta', '\\'],
        },
        {
          title: 'Increase font size',
          keys: ['Meta', 'Shift', '>'],
        },
        {
          title: 'Decrease font size',
          keys: ['Meta', 'Shift', '<'],
        },
      ],
    },
    {
      title: 'Paragraph Formatting',
      id: 'paragraph',
      version: 1,
      shortcuts: [
        {
          title: 'Increase paragraph indentation',
          keys: ['Meta', ']'],
        },
        {
          title: 'Decrease paragraph indentation',
          keys: ['Meta', '['],
        },
        {
          title: 'Apply normal text style',
          keys: ['Meta', 'Alt', '0'],
        },
        // Apply heading style [1-6]: ⌘ + Option + [1-6]
        {
          title: 'Apply heading style 1',
          keys: ['Meta', 'Alt', '1'],
        },
        {
          title: 'Apply heading style 2',
          keys: ['Meta', 'Alt', '2'],
        },
        {
          title: 'Left align',
          keys: ['Meta', 'Shift', 'l'],
        },
        {
          title: 'Center align',
          keys: ['Meta', 'Shift', 'e'],
        },
        {
          title: 'Right align',
          keys: ['Meta', 'Shift', 'r'],
        },
        {
          title: 'Justify',
          keys: ['Meta', 'Shift', 'j'],
        },
        {
          title: 'Numbered list',
          keys: ['Meta', 'Shift', '7'],
        },
        {
          title: 'Bulleted list',
          keys: ['Meta', 'Shift', '8'],
        },
        {
          title: 'Move paragraph up',
          keys: ['Control', 'Shift', 'ArrowUp'],
        },
        {
          title: 'Move paragraph down',
          keys: ['Control', 'Shift', 'ArrowDown'],
        },
      ],
    },
    {
      title: 'Images and Drawings',
      id: 'images',
      version: 1,
      shortcuts: [
        {
          title: 'Alt text',
          keys: ['Meta', 'Alt', 'y'],
        },
        {
          title: 'Resize larger',
          keys: ['Meta', 'Control', 'k'],
        },
        {
          title: 'Resize larger horizontally',
          keys: ['Meta', 'Control', 'b'],
        },
        {
          title: 'Resize larger vertically',
          keys: ['Meta', 'Control', 'i'],
        },
        {
          title: 'Resize smaller',
          keys: ['Meta', 'Control', 'j'],
        },
        {
          title: 'Resize smaller horizontally',
          keys: ['Meta', 'Control', 'w'],
        },
        {
          title: 'Resize smaller vertically',
          keys: ['Meta', 'Control', 'q'],
        },
        {
          title: 'Rotate clockwise by 15°',
          keys: ['Alt', 'ArrowRight'],
        },
        {
          title: 'Rotate counterclockwise by 15°',
          keys: ['Alt', 'ArrowLeft'],
        },
        {
          title: 'Rotate counterclockwise by 1°',
          keys: ['Alt', 'Shift', 'ArrowLeft'],
        },
        {
          title: 'Rotate clockwise by 1°',
          keys: ['Alt', 'Shift', 'ArrowRight'],
        },
        // TODO: Two bindings
        // {
        //   title: 'Close drawing editor',
        //   keys: ['Meta', 'Escape'],
        //   keys: ['Shift', 'Escape'],
        // },
      ],
    },
    {
      title: 'Comments and Footnotes',
      id: 'comments',
      version: 1,
      shortcuts: [
        {
          title: 'Insert comment',
          keys: ['Meta', 'Alt', 'm'],
        },
        {
          title: 'Open discussion thread',
          keys: ['Meta', 'Alt', 'Shift', 'a'],
        },
        {
          title: 'Enter current comment',
          keys: ['Control', 'Enter'],
        },
        {
          title: 'Insert footnote',
          keys: ['Meta', 'Alt', 'f'],
        },
      ],
    },
    {
      title: 'Menus',
      id: 'menus',
      version: 1,
      shortcuts: [
        {
          title: 'Context (right-click) menu',
          keys: ['Meta', 'Shift', '\\'],
        },
        {
          title: 'File menu',
          keys: ['Control', 'Alt', 'f'],
        },
        {
          title: 'Edit menu',
          keys: ['Control', 'Alt', 'e'],
        },
        {
          title: 'View menu',
          keys: ['Control', 'Alt', 'v'],
        },
        {
          title: 'Insert menu',
          keys: ['Control', 'Alt', 'i'],
        },
        {
          title: 'Format menu',
          keys: ['Control', 'Alt', 'o'],
        },
        {
          title: 'Tools menu',
          keys: ['Control', 'Alt', 't'],
        },
        {
          title: 'Help menu',
          keys: ['Control', 'Alt', 'h'],
        },
        {
          title: 'Accessibility menu',
          description: 'Present when screen reader support is enabled',
          keys: ['Control', 'Alt', 'a'],
        },
        {
          title: 'Input Tools menu',
          description: 'Available in documents in non-Latin languages',
          keys: ['Meta', 'Alt', 'Shift', 'k'],
        },
        {
          title: 'Toggle input controls',
          description: 'Available in documents in non-Latin languages',
          keys: ['Meta', 'Shift', 'k'],
        },
      ],
    },
    {
      title: 'Text Selection',
      id: 'selection',
      version: 1,
      shortcuts: [
        {
          title: 'Select all',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Extend selection one character to left',
          keys: ['Shift', 'ArrowLeft'],
        },
        {
          title: 'Extend selection one character to right',
          keys: ['Shift', 'ArrowRight'],
        },
        {
          title: 'Extend selection one line up',
          keys: ['Shift', 'ArrowUp'],
        },
        {
          title: 'Extend selection one line down',
          keys: ['Shift', 'ArrowDown'],
        },
        // {
        //   title: 'Extend selection to the beginning of the line',
        //   keys: ['Shift', 'Fn', 'ArrowLeft'],
        // },
        {
          title: 'Extend selection one paragraph up',
          keys: ['Alt', 'Shift', 'ArrowUp'],
        },
        {
          title: 'Extend selection one paragraph down',
          keys: ['Alt', 'Shift', 'ArrowDown'],
        },
        // {
        //   title: 'Extend selection to the end of the line',
        //   keys: ['Shift', 'Fn', 'ArrowRight'],
        // },
        {
          title: 'Extend selection to the beginning of the document',
          keys: ['Meta', 'Shift', 'ArrowUp'],
        },
        {
          title: 'Extend selection to the end of the document',
          keys: ['Meta', 'Shift', 'ArrowDown'],
        },
      ],
    },
    {
      title: 'Other Tools',
      id: 'other',
      version: 1,
      shortcuts: [
        {
          title: 'Open revision history',
          keys: ['Meta', 'Alt', 'Shift', 'h'],
        },
        {
          title: 'Open Explore tool',
          keys: ['Meta', 'Alt', 'Shift', 'i'],
        },
        {
          title: 'Open spelling/grammar',
          keys: ['Meta', 'Alt', 'x'],
        },
        {
          title: 'Open dictionary',
          keys: ['Meta', 'Shift', 'y'],
        },
        {
          title: 'Word count',
          keys: ['Meta', 'Shift', 'c'],
        },
        {
          title: 'Start voice typing (available in Chrome browsers)',
          keys: ['Meta', 'Shift', 's'],
        },
        // TODO: Two bindings
        // {
        //   title: 'Go to side panel',
        //   keys: ['Meta', 'Alt', '.'],
        //   keys: ['Meta', 'Alt', ','],
        // },
        // {
        //   title: 'Page up',
        //   keys: ['Fn', 'ArrowUp'],
        // },
        // {
        //   title: 'Page down',
        //   keys: ['Fn', 'ArrowDown'],
        // },
        {
          title: 'Move to next misspelling',
          keys: ['Meta', '\''],
        },
        {
          title: 'Move to previous misspelling',
          keys: ['Meta', ';'],
        },
        {
          title: 'Move focus out of document text',
          keys: ['Meta', 'Alt', 'Shift', 'm'],
        },
        {
          title: 'Return focus to document text',
          keys: ['Escape'],
        },
      ],
    },
    {
      title: 'Miscellaneous',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Show common keyboard shortcuts',
          keys: ['Meta', '/'],
        },
        {
          title: 'Hide the menus (compact mode)',
          keys: ['Control', 'Shift', 'f'],
        },
      ],
    },
  ],
}
