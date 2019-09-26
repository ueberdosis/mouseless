// https://support.google.com/docs/answer/179738?co=GENIE.Platform%3DDesktop&hl=en
export default {
  id: 'googledocs',
  title: 'Google Docs',
  groups: [
    {
      title: 'Common actions',
      id: 'common',
      version: 1,
      shortcuts: [
        {
          title: 'Copy',
          keys: ['meta', 'c'],
        },
        {
          title: 'Cut',
          keys: ['meta', 'x'],
        },
        {
          title: 'Paste',
          keys: ['meta', 'v'],
        },
        {
          title: 'Paste without formatting',
          keys: ['meta', 'shift', 'v'],
        },
        {
          title: 'Undo',
          keys: ['meta', 'z'],
        },
        {
          title: 'Redo',
          keys: ['meta', 'shift', 'z'],
        },
        {
          title: 'Insert or edit link',
          keys: ['meta', 'k'],
        },
        {
          title: 'Open link',
          keys: ['alt', 'enter'],
        },
        {
          title: 'Show common keyboard shortcuts',
          keys: ['meta', '/'],
        },
        {
          title: 'Save',
          // Every change is automatically saved in Drive,
          keys: ['meta', 's'],
        },
        {
          title: 'Print',
          keys: ['meta', 'p'],
        },
        {
          title: 'Open',
          keys: ['meta', 'o'],
        },
        {
          title: 'Find',
          keys: ['meta', 'f'],
        },
        {
          title: 'Find and replace',
          keys: ['meta', 'shift', 'h'],
        },
        {
          title: 'Find again',
          keys: ['meta', 'g'],
        },
        {
          title: 'Find previous',
          keys: ['meta', 'shift', 'g'],
        },
        {
          title: 'Hide the menus (compact mode)',
          keys: ['control', 'shift', 'f'],
        },
        {
          title: 'Insert page break',
          keys: ['meta', 'enter'],
        },
        // {
        //   title: 'Search the menus',
        //   keys: ['alt', '/'],
        //   // keys: ['control', 'alt', 'z'],
        // },
        {
          title: 'Repeat last action',
          keys: ['meta', 'y'],
        },
      ],
    },
    {
      title: 'Text formatting',
      id: 'text',
      version: 1,
      shortcuts: [
        {
          title: 'Bold',
          keys: ['meta', 'b'],
        },
        {
          title: 'Italicize',
          keys: ['meta', 'i'],
        },
        {
          title: 'Underline',
          keys: ['meta', 'u'],
        },
        {
          title: 'Strikethrough',
          keys: ['meta', 'shift', 'x'],
        },
        {
          title: 'Superscript',
          keys: ['meta', '.'],
        },
        {
          title: 'Subscript',
          keys: ['meta', ','],
        },
        {
          title: 'Copy text formatting',
          keys: ['meta', 'alt', 'c'],
        },
        {
          title: 'Paste text formatting',
          keys: ['meta', 'alt', 'v'],
        },
        {
          title: 'Clear text formatting',
          keys: ['meta', '\\'],
        },
        {
          title: 'Increase font size',
          keys: ['meta', 'shift', '>'],
        },
        {
          title: 'Decrease font size',
          keys: ['meta', 'shift', '<'],
        },
      ],
    },
    {
      title: 'Paragraph formatting',
      id: 'paragraph',
      version: 1,
      shortcuts: [
        {
          title: 'Increase paragraph indentation',
          keys: ['meta', ']'],
        },
        {
          title: 'Decrease paragraph indentation',
          keys: ['meta', '['],
        },
        {
          title: 'Apply normal text style',
          keys: ['meta', 'alt', '0'],
        },
        // Apply heading style [1-6]: ⌘ + Option + [1-6]
        {
          title: 'Apply heading style 1',
          keys: ['meta', 'alt', '1'],
        },
        {
          title: 'Apply heading style 2',
          keys: ['meta', 'alt', '2'],
        },
        {
          title: 'Left align',
          keys: ['meta', 'shift', 'l'],
        },
        {
          title: 'Center align',
          keys: ['meta', 'shift', 'e'],
        },
        {
          title: 'Right align',
          keys: ['meta', 'shift', 'r'],
        },
        {
          title: 'Justify',
          keys: ['meta', 'shift', 'j'],
        },
        {
          title: 'Numbered list',
          keys: ['meta', 'shift', '7'],
        },
        {
          title: 'Bulleted list',
          keys: ['meta', 'shift', '8'],
        },
        {
          title: 'Move paragraph up',
          keys: ['control', 'shift', 'up'],
        },
        {
          title: 'Move paragraph down',
          keys: ['control', 'shift', 'down'],
        },
      ],
    },
    {
      title: 'Images and drawings',
      id: 'images',
      version: 1,
      shortcuts: [
        {
          title: 'Alt text',
          keys: ['meta', 'alt', 'y'],
        },
        {
          title: 'Resize larger',
          keys: ['meta', 'control', 'k'],
        },
        {
          title: 'Resize larger horizontally',
          keys: ['meta', 'control', 'b'],
        },
        {
          title: 'Resize larger vertically',
          keys: ['meta', 'control', 'i'],
        },
        {
          title: 'Resize smaller',
          keys: ['meta', 'control', 'j'],
        },
        {
          title: 'Resize smaller horizontally',
          keys: ['meta', 'control', 'w'],
        },
        {
          title: 'Resize smaller vertically',
          keys: ['meta', 'control', 'q'],
        },
        {
          title: 'Rotate clockwise by 15°',
          keys: ['alt', 'right'],
        },
        {
          title: 'Rotate counterclockwise by 15°',
          keys: ['alt', 'left'],
        },
        {
          title: 'Rotate counterclockwise by 1°',
          keys: ['alt', 'shift', 'left'],
        },
        {
          title: 'Rotate clockwise by 1°',
          keys: ['alt', 'shift', 'right'],
        },
        // TODO: Two bindings
        // {
        //   title: 'Close drawing editor',
        //   keys: ['meta', 'esc'],
        //   keys: ['shift', 'esc'],
        // },
      ],
    },
    {
      title: 'Comments and footnotes',
      id: 'comments',
      version: 1,
      shortcuts: [
        {
          title: 'Insert comment',
          keys: ['meta', 'alt', 'm'],
        },
        {
          title: 'Open discussion thread',
          keys: ['meta', 'alt', 'shift', 'a'],
        },
        {
          title: 'Enter current comment',
          keys: ['control', 'enter'],
        },
        {
          title: 'Insert footnote',
          keys: ['meta', 'alt', 'f'],
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
          keys: ['meta', 'shift', '\\'],
        },
        {
          title: 'File menu',
          keys: ['control', 'alt', 'f'],
        },
        {
          title: 'Edit menu',
          keys: ['control', 'alt', 'e'],
        },
        {
          title: 'View menu',
          keys: ['control', 'alt', 'v'],
        },
        {
          title: 'Insert menu',
          keys: ['control', 'alt', 'i'],
        },
        {
          title: 'Format menu',
          keys: ['control', 'alt', 'o'],
        },
        {
          title: 'Tools menu',
          keys: ['control', 'alt', 't'],
        },
        {
          title: 'Help menu',
          keys: ['control', 'alt', 'h'],
        },
        {
          title: 'Accessibility menu (present when screen reader support is enabled)',
          keys: ['control', 'alt', 'a'],
        },
        {
          title: 'Input Tools menu (available in documents in non-Latin languages)',
          keys: ['meta', 'alt', 'shift', 'k'],
        },
        {
          title: 'Toggle input controls (available in documents in non-Latin languages)',
          keys: ['meta', 'shift', 'k'],
        },
      ],
    },
    {
      title: 'Text selection',
      id: 'selection',
      version: 1,
      shortcuts: [
        {
          title: 'Select all',
          keys: ['meta', 'a'],
        },
        // TODO: Two directions
        // {
        //   title: 'Extend selection one character',
        //   keys: ['shift', 'Left/right arrow'],
        // },
        // TODO: Two directions
        // {
        //   title: 'Extend selection one line',
        //   keys: ['shift', 'Up/down arrow'],
        // },
        {
          title: 'Extend selection to the beginning of the line',
          keys: ['shift', 'fn', 'left'],
        },
        // TODO: Two directions
        // {
        //   title: 'Extend selection one paragraph',
        //   keys: ['alt', 'shift', 'up/down'],
        // },
        {
          title: 'Extend selection to the end of the line',
          keys: ['shift', 'fn', 'right'],
        },
        {
          title: 'Extend selection to the beginning of the document',
          keys: ['meta', 'shift', 'up'],
        },
        {
          title: 'Extend selection to the end of the document',
          keys: ['meta', 'shift', 'down'],
        },
      ],
    },
    {
      title: 'Other tools and navigation',
      id: 'other',
      version: 1,
      shortcuts: [
        {
          title: 'Open revision history',
          keys: ['meta', 'alt', 'shift', 'h'],
        },
        {
          title: 'Open Explore tool',
          keys: ['meta', 'alt', 'shift', 'i'],
        },
        {
          title: 'Open spelling/grammar',
          keys: ['meta', 'Alt', 'X'],
        },
        {
          title: 'Open dictionary',
          keys: ['meta', 'shift', 'y'],
        },
        {
          title: 'Word count',
          keys: ['meta', 'shift', 'c'],
        },
        {
          title: 'Start voice typing (available in Chrome browsers)',
          keys: ['meta', 'shift', 's'],
        },
        // TODO: Two bindings
        // {
        //   title: 'Go to side panel',
        //   keys: ['meta', 'alt', '.'],
        //   keys: ['meta', 'alt', ','],
        // },
        {
          title: 'Page up',
          keys: ['fn', 'up'],
        },
        {
          title: 'Page down',
          keys: ['fn', 'down'],
        },
        {
          title: 'Move to next misspelling',
          keys: ['meta', '\''],
        },
        {
          title: 'Move to previous misspelling',
          keys: ['meta', ';'],
        },
        {
          title: 'Move focus out of document text',
          keys: ['meta', 'alt', 'shift', 'm'],
        },
        {
          title: 'Return focus to document text',
          keys: ['escape'],
        },
      ],
    },
  ],
}
