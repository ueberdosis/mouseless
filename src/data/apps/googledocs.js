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
      level: 1,
    },
    {
      title: 'Cut',
      keys: ['meta', 'x'],
      level: 1,
    },
    {
      title: 'Paste',
      keys: ['meta', 'v'],
      level: 1,
    },
    {
      title: 'Paste without formatting',
      keys: ['meta', 'shift', 'v'],
      level: 1,
    },
    {
      title: 'Undo',
      keys: ['meta', 'z'],
      level: 1,
    },
    {
      title: 'Redo',
      keys: ['meta', 'shift', 'z'],
      level: 1,
    },
    {
      title: 'Insert or edit link',
      keys: ['meta', 'k'],
      level: 1,
    },
    {
      title: 'Open link',
      keys: ['alt', 'enter'],
      level: 1,
    },
    {
      title: 'Show common keyboard shortcuts',
      keys: ['meta', '/'],
      level: 1,
    },
    {
      title: 'Save',
      // Every change is automatically saved in Drive,
      keys: ['meta', 's'],
      level: 1,
    },
    {
      title: 'Print',
      keys: ['meta', 'p'],
      level: 1,
    },
    {
      title: 'Open',
      keys: ['meta', 'o'],
      level: 1,
    },
    {
      title: 'Find',
      keys: ['meta', 'f'],
      level: 1,
    },
    {
      title: 'Find and replace',
      keys: ['meta', 'shift', 'h'],
      level: 1,
    },
    {
      title: 'Find again',
      keys: ['meta', 'g'],
      level: 1,
    },
    {
      title: 'Find previous',
      keys: ['meta', 'shift', 'g'],
      level: 1,
    },
    {
      title: 'Hide the menus (compact mode)',
      keys: ['control', 'shift', 'f'],
      level: 1,
    },
    {
      title: 'Insert page break',
      keys: ['meta', 'enter'],
      level: 1,
    },
    // {
    //   title: 'Search the menus',
    //   keys: ['alt', '/'],
    //   // keys: ['control', 'alt', 'z'],
    //   level: 1,
    // },
    {
      title: 'Repeat last action',
      keys: ['meta', 'y'],
      level: 1,
    },
    // Text formatting
    {
      title: 'Bold',
      keys: ['meta', 'b'],
      level: 2,
    },
    {
      title: 'Italicize',
      keys: ['meta', 'i'],
      level: 2,
    },
    {
      title: 'Underline',
      keys: ['meta', 'u'],
      level: 2,
    },
    {
      title: 'Strikethrough',
      keys: ['meta', 'shift', 'x'],
      level: 2,
    },
    {
      title: 'Superscript',
      keys: ['meta', '.'],
      level: 2,
    },
    {
      title: 'Subscript',
      keys: ['meta', ','],
      level: 2,
    },
    {
      title: 'Copy text formatting',
      keys: ['meta', 'alt', 'c'],
      level: 2,
    },
    {
      title: 'Paste text formatting',
      keys: ['meta', 'alt', 'v'],
      level: 2,
    },
    {
      title: 'Clear text formatting',
      keys: ['meta', '\\'],
      level: 2,
    },
    {
      title: 'Increase font size',
      keys: ['meta', 'shift', '>'],
      level: 2,
    },
    {
      title: 'Decrease font size',
      keys: ['meta', 'shift', '<'],
      level: 2,
    },
    {
      // Paragraph formatting
      title: 'Increase paragraph indentation',
      keys: ['meta', ']'],
      level: 2,
    },
    {
      title: 'Decrease paragraph indentation',
      keys: ['meta', '['],
      level: 2,
    },
    {
      title: 'Apply normal text style',
      keys: ['meta', 'alt', '0'],
      level: 2,
    },
    {
      // Apply heading style [1-6]	⌘ + Option + [1-6]
      title: 'Apply heading style 2',
      keys: ['meta', 'alt', '2'],
      level: 2,
    },
    {
      title: 'Left align',
      keys: ['meta', 'shift', 'l'],
      level: 2,
    },
    {
      title: 'Center align',
      keys: ['meta', 'shift', 'e'],
      level: 2,
    },
    {
      title: 'Right align',
      keys: ['meta', 'shift', 'r'],
      level: 2,
    },
    {
      title: 'Justify',
      keys: ['meta', 'shift', 'j'],
      level: 2,
    },
    {
      title: 'Numbered list',
      keys: ['meta', 'shift', '7'],
      level: 2,
    },
    {
      title: 'Bulleted list',
      keys: ['meta', 'shift', '8'],
      level: 2,
    },
    {
      title: 'Move paragraph up',
      keys: ['control', 'shift', 'up'],
      level: 2,
    },
    {
      title: 'Move paragraph down',
      keys: ['control', 'shift', 'down'],
      level: 2,
    },
    // Images and drawings
    {
      title: 'Alt text',
      keys: ['meta', 'alt', 'y'],
      level: 2,
    },
    {
      title: 'Resize larger',
      keys: ['meta', 'control', 'k'],
      level: 2,
    },
    {
      title: 'Resize larger horizontally',
      keys: ['meta', 'control', 'b'],
      level: 2,
    },
    {
      title: 'Resize larger vertically',
      keys: ['meta', 'control', 'i'],
      level: 2,
    },
    {
      title: 'Resize smaller',
      keys: ['meta', 'control', 'j'],
      level: 2,
    },
    {
      title: 'Resize smaller horizontally',
      keys: ['meta', 'control', 'w'],
      level: 2,
    },
    {
      title: 'Resize smaller vertically',
      keys: ['meta', 'control', 'q'],
      level: 2,
    },
    {
      title: 'Rotate clockwise by 15°',
      keys: ['alt', 'right'],
      level: 2,
    },
    {
      title: 'Rotate counterclockwise by 15°',
      keys: ['alt', 'left'],
      level: 2,
    },
    {
      title: 'Rotate counterclockwise by 1°',
      keys: ['alt', 'shift', 'left'],
      level: 2,
    },
    {
      title: 'Rotate clockwise by 1°',
      keys: ['alt', 'shift', 'right'],
      level: 2,
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
      level: 2,
    },
    {
      title: 'Open discussion thread',
      keys: ['meta', 'alt', 'shift', 'a'],
      level: 2,
    },
    {
      title: 'Enter current comment',
      keys: ['control', 'enter'],
      level: 2,
    },
    {
      title: 'Insert footnote',
      keys: ['meta', 'alt', 'f'],
      level: 2,
    },
    // {
    //   title: 'Move to current footnote',
    //   keys: ['holding control', 'meta, press e then f'],
    //   level: 2,
    // },
    // {
    //   title: 'Move to next footnote',
    //   keys: ['holding control', 'meta, press n then f'],
    //   level: 2,
    // },
    // {
    //   title: 'Move to previous footnote',
    //   keys: ['holding control', 'meta, press p then f'],
    //   level: 2,
    // },
    {
      // Menus
      title: 'Context (right-click) menu',
      keys: ['meta', 'shift', '\\'],
      level: 2,
    },
    {
      title: 'File menu',
      keys: ['control', 'alt', 'f'],
      level: 2,
    },
    {
      title: 'Edit menu',
      keys: ['control', 'alt', 'e'],
      level: 2,
    },
    {
      title: 'View menu',
      keys: ['control', 'alt', 'v'],
      level: 2,
    },
    {
      title: 'Insert menu',
      keys: ['control', 'alt', 'i'],
      level: 2,
    },
    {
      title: 'Format menu',
      keys: ['control', 'alt', 'o'],
      level: 2,
    },
    {
      title: 'Tools menu',
      keys: ['control', 'alt', 't'],
      level: 2,
    },
    {
      title: 'Help menu',
      keys: ['control', 'alt', 'h'],
      level: 2,
    },
    {
      title: 'Accessibility menu (present when screen reader support is enabled)',
      keys: ['control', 'alt', 'a'],
      level: 2,
    },
    {
      title: 'Input Tools menu (available in documents in non-Latin languages)',
      keys: ['meta', 'alt', 'shift', 'k'],
      level: 2,
    },
    {
      title: 'Toggle input controls (available in documents in non-Latin languages)',
      keys: ['meta', 'shift', 'k'],
      level: 2,
    },
    // {
    //   title: "Show your browser's context menu",
    //   keys: ['shift', 'right-click'],
    //   level: 2,
    // },
    // Text selection with keyboard
    {
      title: 'Select all',
      keys: ['meta', 'a'],
      level: 2,
    },
    // {
    //   title: 'Extend selection one character',
    //   keys: ['shift', 'Left/right arrow'],
    //   level: 2,
    // },
    // {
    //   title: 'Extend selection one line',
    //   keys: ['shift', 'Up/down arrow'],
    //   level: 2,
    // },
    {
      title: 'Extend selection to the beginning of the line',
      keys: ['shift', 'fn', 'left'],
      level: 2,
    },
    // {
    //   title: 'Extend selection one paragraph',
    //   keys: ['alt', 'shift', 'up/down'],
    //   level: 2,
    // },
    {
      title: 'Extend selection to the end of the line',
      keys: ['shift', 'fn', 'right'],
      level: 2,
    },
    {
      title: 'Extend selection to the beginning of the document',
      keys: ['meta', 'shift', 'up'],
      level: 2,
    },
    {
      title: 'Extend selection to the end of the document',
      keys: ['meta', 'shift', 'down'],
      level: 2,
    },
    // {
    //   title: 'Select current list item',
    //   keys: ['holding control', 'meta', 'shift, press e then i'],
    //   level: 2,
    // },
    // {
    //   title: 'Select all list items at current level',
    //   keys: ['holding control', 'meta', 'shift, press e then o'],
    //   level: 2,
    // },
    // Document navigation
    // {
    //   title: 'Move to next heading',
    //   keys: ['holding control', 'meta, press n then h'],
    //   level: 2,
    // },
    // {
    //   title: 'Move to previous heading',
    //   keys: ['holding control', 'meta, press p then h'],
    //   level: 2,
    // },
    // {
    //   title: 'Move to next heading [1-6]',
    //   keys: ['holding control', 'meta, press n then [1-6]'],
    //   level: 2,
    // },
    // {
    //   title: 'Move to previous heading [1-6]',
    //   keys: ['holding control', 'meta, press p then [1-6]'],
    //   level: 2,
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
    //   level: 2,
    // },
    // {
    //   title: 'Move to previous list',
    //   keys: ['holding control', 'meta, press p then o'],
    //   level: 2,
    // },
    // {
    //   title: 'Move to next item in the current list',
    //   keys: ['holding control', 'meta, press n then i'],
    //   level: 2,
    // },
    // {
    //   title: 'Move to previous item in the current list',
    //   keys: ['holding control', 'meta, press p then i'],
    //   level: 2,
    // },
    // {
    //   title: 'Move to next link',
    //   keys: ['holding control', 'meta, press n then l'],
    //   level: 2,
    // },
    // {
    //   title: 'Move to previous link',
    //   keys: ['holding control', 'meta, press p then l'],
    //   level: 2,
    // },
    // {
    //   title: 'Move to next bookmark',
    //   keys: ['holding control', 'meta, press n then b'],
    //   level: 2,
    // },
    // {
    //   title: 'Move to previous bookmark',
    //   keys: ['holding control', 'meta, press p then b'],
    //   level: 2,
    // },
    // {
    //   title: 'Move to next formatting change',
    //   keys: ['holding control', 'meta, press n then w'],
    //   level: 2,
    // },
    // {
    //   title: 'Move to previous formatting change',
    //   keys: ['holding control', 'meta, press p then w'],
    //   level: 2,
    // },
    // {
    //   title: 'Move to the next edit (while viewing revision history or new changes)',
    //   keys: ['holding control', 'meta, press n then r'],
    //   level: 2,
    // },
    // {
    //   title: 'Move to the previous edit (while viewing revision history or new changes)',
    //   keys: ['holding control', 'meta, press p then r'],
    //   level: 2,
    // },
    // Other tools and navigation
    {
      title: 'Open revision history',
      keys: ['meta', 'alt', 'shift', 'h'],
      level: 2,
    },
    {
      title: 'Open Explore tool',
      keys: ['meta', 'alt', 'shift', 'i'],
      level: 2,
    },
    {
      title: 'Open spelling/grammar',
      keys: ['meta', 'Alt', 'X'],
      level: 2,
    },
    {
      title: 'Open dictionary',
      keys: ['meta', 'shift', 'y'],
      level: 2,
    },
    {
      title: 'Word count',
      keys: ['meta', 'shift', 'c'],
      level: 2,
    },
    {
      title: 'Start voice typing (available in Chrome browsers)',
      keys: ['meta', 'shift', 's'],
      level: 2,
    },
    {
      title: 'Go to side panel',
      keys: ['meta', 'alt', '.'],
      // meta', 'alt', ',
    },
    {
      title: 'Page up',
      keys: ['fn', 'up'],
      level: 2,
    },
    {
      title: 'Page down',
      keys: ['fn', 'down'],
      level: 2,
    },
    {
      title: 'Move to next misspelling',
      keys: ['meta', '\''],
      level: 2,
    },
    {
      title: 'Move to previous misspelling',
      keys: ['meta', ';'],
      level: 2,
    },
    // {
    //   title: 'Insert or move to header',
    //   keys: ['holding control', 'meta, press o then h'],
    //   level: 2,
    // },
    // {
    //   title: 'Insert or move to footer',
    //   keys: ['holding control', 'meta, press o then f'],
    //   level: 2,
    // },
    // {
    //   title: 'Move focus to popup (for links, bookmarks, and images)',
    //   keys: ['holding control', 'meta, press e then p'],
    //   level: 2,
    // },
    {
      title: 'Move focus out of document text',
      keys: ['meta', 'alt', 'shift', 'm'],
      level: 2,
    },
    {
      title: 'Return focus to document text',
      keys: ['escape'],
      level: 2,
    },
  ],
}
