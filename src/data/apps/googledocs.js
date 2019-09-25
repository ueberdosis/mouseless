// https://support.google.com/docs/answer/179738?co=GENIE.Platform%3DDesktop&hl=en
export default {
  id: 'googledocs',
  title: 'Google Docs',
  color: '#4285F4',
  shortcuts: [
    // Common actions
    {
      title: 'Copy',
      keys: ['meta', 'c'],
      group: 1,
    },
    {
      title: 'Cut',
      keys: ['meta', 'x'],
      group: 1,
    },
    {
      title: 'Paste',
      keys: ['meta', 'v'],
      group: 1,
    },
    {
      title: 'Paste without formatting',
      keys: ['meta', 'shift', 'v'],
      group: 1,
    },
    {
      title: 'Undo',
      keys: ['meta', 'z'],
      group: 1,
    },
    {
      title: 'Redo',
      keys: ['meta', 'shift', 'z'],
      group: 1,
    },
    {
      title: 'Insert or edit link',
      keys: ['meta', 'k'],
      group: 1,
    },
    {
      title: 'Open link',
      keys: ['alt', 'enter'],
      group: 1,
    },
    {
      title: 'Show common keyboard shortcuts',
      keys: ['meta', '/'],
      group: 1,
    },
    {
      title: 'Save',
      // Every change is automatically saved in Drive,
      keys: ['meta', 's'],
      group: 1,
    },
    {
      title: 'Print',
      keys: ['meta', 'p'],
      group: 1,
    },
    {
      title: 'Open',
      keys: ['meta', 'o'],
      group: 1,
    },
    {
      title: 'Find',
      keys: ['meta', 'f'],
      group: 1,
    },
    {
      title: 'Find and replace',
      keys: ['meta', 'shift', 'h'],
      group: 1,
    },
    {
      title: 'Find again',
      keys: ['meta', 'g'],
      group: 1,
    },
    {
      title: 'Find previous',
      keys: ['meta', 'shift', 'g'],
      group: 1,
    },
    {
      title: 'Hide the menus (compact mode)',
      keys: ['control', 'shift', 'f'],
      group: 1,
    },
    {
      title: 'Insert page break',
      keys: ['meta', 'enter'],
      group: 1,
    },
    // {
    //   title: 'Search the menus',
    //   keys: ['alt', '/'],
    //   // keys: ['control', 'alt', 'z'],
    //   group: 1,
    // },
    {
      title: 'Repeat last action',
      keys: ['meta', 'y'],
      group: 1,
    },
    // Text formatting
    {
      title: 'Bold',
      keys: ['meta', 'b'],
      group: 2,
    },
    {
      title: 'Italicize',
      keys: ['meta', 'i'],
      group: 2,
    },
    {
      title: 'Underline',
      keys: ['meta', 'u'],
      group: 2,
    },
    {
      title: 'Strikethrough',
      keys: ['meta', 'shift', 'x'],
      group: 2,
    },
    {
      title: 'Superscript',
      keys: ['meta', '.'],
      group: 2,
    },
    {
      title: 'Subscript',
      keys: ['meta', ','],
      group: 2,
    },
    {
      title: 'Copy text formatting',
      keys: ['meta', 'alt', 'c'],
      group: 2,
    },
    {
      title: 'Paste text formatting',
      keys: ['meta', 'alt', 'v'],
      group: 2,
    },
    {
      title: 'Clear text formatting',
      keys: ['meta', '\\'],
      group: 2,
    },
    {
      title: 'Increase font size',
      keys: ['meta', 'shift', '>'],
      group: 2,
    },
    {
      title: 'Decrease font size',
      keys: ['meta', 'shift', '<'],
      group: 2,
    },
    {
      // Paragraph formatting
      title: 'Increase paragraph indentation',
      keys: ['meta', ']'],
      group: 2,
    },
    {
      title: 'Decrease paragraph indentation',
      keys: ['meta', '['],
      group: 2,
    },
    {
      title: 'Apply normal text style',
      keys: ['meta', 'alt', '0'],
      group: 2,
    },
    {
      // Apply heading style [1-6]	⌘ + Option + [1-6]
      title: 'Apply heading style 2',
      keys: ['meta', 'alt', '2'],
      group: 2,
    },
    {
      title: 'Left align',
      keys: ['meta', 'shift', 'l'],
      group: 2,
    },
    {
      title: 'Center align',
      keys: ['meta', 'shift', 'e'],
      group: 2,
    },
    {
      title: 'Right align',
      keys: ['meta', 'shift', 'r'],
      group: 2,
    },
    {
      title: 'Justify',
      keys: ['meta', 'shift', 'j'],
      group: 2,
    },
    {
      title: 'Numbered list',
      keys: ['meta', 'shift', '7'],
      group: 2,
    },
    {
      title: 'Bulleted list',
      keys: ['meta', 'shift', '8'],
      group: 2,
    },
    {
      title: 'Move paragraph up',
      keys: ['control', 'shift', 'up'],
      group: 2,
    },
    {
      title: 'Move paragraph down',
      keys: ['control', 'shift', 'down'],
      group: 2,
    },
    // Images and drawings
    {
      title: 'Alt text',
      keys: ['meta', 'alt', 'y'],
      group: 2,
    },
    {
      title: 'Resize larger',
      keys: ['meta', 'control', 'k'],
      group: 2,
    },
    {
      title: 'Resize larger horizontally',
      keys: ['meta', 'control', 'b'],
      group: 2,
    },
    {
      title: 'Resize larger vertically',
      keys: ['meta', 'control', 'i'],
      group: 2,
    },
    {
      title: 'Resize smaller',
      keys: ['meta', 'control', 'j'],
      group: 2,
    },
    {
      title: 'Resize smaller horizontally',
      keys: ['meta', 'control', 'w'],
      group: 2,
    },
    {
      title: 'Resize smaller vertically',
      keys: ['meta', 'control', 'q'],
      group: 2,
    },
    {
      title: 'Rotate clockwise by 15°',
      keys: ['alt', 'right'],
      group: 2,
    },
    {
      title: 'Rotate counterclockwise by 15°',
      keys: ['alt', 'left'],
      group: 2,
    },
    {
      title: 'Rotate counterclockwise by 1°',
      keys: ['alt', 'shift', 'left'],
      group: 2,
    },
    {
      title: 'Rotate clockwise by 1°',
      keys: ['alt', 'shift', 'right'],
      group: 2,
    },
    {
      title: 'Close drawing editor',
      keys: ['meta', 'Esc'],
      // shift', 'Esc
    },
    // Comments and footnotes
    {
      title: 'Insert comment',
      keys: ['meta', 'alt', 'm'],
      group: 2,
    },
    {
      title: 'Open discussion thread',
      keys: ['meta', 'alt', 'shift', 'a'],
      group: 2,
    },
    {
      title: 'Enter current comment',
      keys: ['control', 'enter'],
      group: 2,
    },
    {
      title: 'Insert footnote',
      keys: ['meta', 'alt', 'f'],
      group: 2,
    },
    // {
    //   title: 'Move to current footnote',
    //   keys: ['holding control', 'meta, press e then f'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to next footnote',
    //   keys: ['holding control', 'meta, press n then f'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to previous footnote',
    //   keys: ['holding control', 'meta, press p then f'],
    //   group: 2,
    // },
    {
      // Menus
      title: 'Context (right-click) menu',
      keys: ['meta', 'shift', '\\'],
      group: 2,
    },
    {
      title: 'File menu',
      keys: ['control', 'alt', 'f'],
      group: 2,
    },
    {
      title: 'Edit menu',
      keys: ['control', 'alt', 'e'],
      group: 2,
    },
    {
      title: 'View menu',
      keys: ['control', 'alt', 'v'],
      group: 2,
    },
    {
      title: 'Insert menu',
      keys: ['control', 'alt', 'i'],
      group: 2,
    },
    {
      title: 'Format menu',
      keys: ['control', 'alt', 'o'],
      group: 2,
    },
    {
      title: 'Tools menu',
      keys: ['control', 'alt', 't'],
      group: 2,
    },
    {
      title: 'Help menu',
      keys: ['control', 'alt', 'h'],
      group: 2,
    },
    {
      title: 'Accessibility menu (present when screen reader support is enabled)',
      keys: ['control', 'alt', 'a'],
      group: 2,
    },
    {
      title: 'Input Tools menu (available in documents in non-Latin languages)',
      keys: ['meta', 'alt', 'shift', 'k'],
      group: 2,
    },
    {
      title: 'Toggle input controls (available in documents in non-Latin languages)',
      keys: ['meta', 'shift', 'k'],
      group: 2,
    },
    // {
    //   title: "Show your browser's context menu",
    //   keys: ['shift', 'right-click'],
    //   group: 2,
    // },
    // Text selection with keyboard
    {
      title: 'Select all',
      keys: ['meta', 'a'],
      group: 2,
    },
    // {
    //   title: 'Extend selection one character',
    //   keys: ['shift', 'Left/right arrow'],
    //   group: 2,
    // },
    // {
    //   title: 'Extend selection one line',
    //   keys: ['shift', 'Up/down arrow'],
    //   group: 2,
    // },
    {
      title: 'Extend selection to the beginning of the line',
      keys: ['shift', 'fn', 'left'],
      group: 2,
    },
    // {
    //   title: 'Extend selection one paragraph',
    //   keys: ['alt', 'shift', 'up/down'],
    //   group: 2,
    // },
    {
      title: 'Extend selection to the end of the line',
      keys: ['shift', 'fn', 'right'],
      group: 2,
    },
    {
      title: 'Extend selection to the beginning of the document',
      keys: ['meta', 'shift', 'up'],
      group: 2,
    },
    {
      title: 'Extend selection to the end of the document',
      keys: ['meta', 'shift', 'down'],
      group: 2,
    },
    // {
    //   title: 'Select current list item',
    //   keys: ['holding control', 'meta', 'shift, press e then i'],
    //   group: 2,
    // },
    // {
    //   title: 'Select all list items at current group',
    //   keys: ['holding control', 'meta', 'shift, press e then o'],
    //   group: 2,
    // },
    // Document navigation
    // {
    //   title: 'Move to next heading',
    //   keys: ['holding control', 'meta, press n then h'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to previous heading',
    //   keys: ['holding control', 'meta, press p then h'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to next heading [1-6]',
    //   keys: ['holding control', 'meta, press n then [1-6]'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to previous heading [1-6]',
    //   keys: ['holding control', 'meta, press p then [1-6]'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to next media (image or drawing)',
    //   keys: 'holding control', 'meta, press n then g',
    // },
    // {
    //   title: 'Move to previous media (image or drawing)'
    //   keys: 'holding control', 'meta, press p then g',
    // },
    // {
    //   title: 'Move to next list',
    //   keys: ['holding control', 'meta, press n then o'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to previous list',
    //   keys: ['holding control', 'meta, press p then o'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to next item in the current list',
    //   keys: ['holding control', 'meta, press n then i'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to previous item in the current list',
    //   keys: ['holding control', 'meta, press p then i'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to next link',
    //   keys: ['holding control', 'meta, press n then l'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to previous link',
    //   keys: ['holding control', 'meta, press p then l'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to next bookmark',
    //   keys: ['holding control', 'meta, press n then b'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to previous bookmark',
    //   keys: ['holding control', 'meta, press p then b'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to next formatting change',
    //   keys: ['holding control', 'meta, press n then w'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to previous formatting change',
    //   keys: ['holding control', 'meta, press p then w'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to the next edit (while viewing revision history or new changes)',
    //   keys: ['holding control', 'meta, press n then r'],
    //   group: 2,
    // },
    // {
    //   title: 'Move to the previous edit (while viewing revision history or new changes)',
    //   keys: ['holding control', 'meta, press p then r'],
    //   group: 2,
    // },
    // Other tools and navigation
    {
      title: 'Open revision history',
      keys: ['meta', 'alt', 'shift', 'h'],
      group: 2,
    },
    {
      title: 'Open Explore tool',
      keys: ['meta', 'alt', 'shift', 'i'],
      group: 2,
    },
    {
      title: 'Open spelling/grammar',
      keys: ['meta', 'Alt', 'X'],
      group: 2,
    },
    {
      title: 'Open dictionary',
      keys: ['meta', 'shift', 'y'],
      group: 2,
    },
    {
      title: 'Word count',
      keys: ['meta', 'shift', 'c'],
      group: 2,
    },
    {
      title: 'Start voice typing (available in Chrome browsers)',
      keys: ['meta', 'shift', 's'],
      group: 2,
    },
    {
      title: 'Go to side panel',
      keys: ['meta', 'alt', '.'],
      // meta', 'alt', ',
    },
    {
      title: 'Page up',
      keys: ['fn', 'up'],
      group: 2,
    },
    {
      title: 'Page down',
      keys: ['fn', 'down'],
      group: 2,
    },
    {
      title: 'Move to next misspelling',
      keys: ['meta', '\''],
      group: 2,
    },
    {
      title: 'Move to previous misspelling',
      keys: ['meta', ';'],
      group: 2,
    },
    // {
    //   title: 'Insert or move to header',
    //   keys: ['holding control', 'meta, press o then h'],
    //   group: 2,
    // },
    // {
    //   title: 'Insert or move to footer',
    //   keys: ['holding control', 'meta, press o then f'],
    //   group: 2,
    // },
    // {
    //   title: 'Move focus to popup (for links, bookmarks, and images)',
    //   keys: ['holding control', 'meta, press e then p'],
    //   group: 2,
    // },
    {
      title: 'Move focus out of document text',
      keys: ['meta', 'alt', 'shift', 'm'],
      group: 2,
    },
    {
      title: 'Return focus to document text',
      keys: ['escape'],
      group: 2,
    },
  ],
}
