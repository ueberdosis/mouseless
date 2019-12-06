/* eslint-disable max-len */
// https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly#w_media-shortcuts
// https://developer.mozilla.org/en-US/docs/Tools/Keyboard_shortcuts
module.exports = {
  id: 'firefox',
  title: 'Firefox',
  category: 'Utility',
  description: null,
  sets: [
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        {
          title: 'Back',
          keys: ['Meta', 'ArrowLeft'],
        },
        {
          title: 'Forward',
          keys: ['Meta', 'ArrowRight'],
        },
        {
          title: 'Open File',
          keys: ['Meta', 'o'],
        },
        {
          title: 'Reload',
          keys: ['Meta', 'r'],
        },
        {
          title: 'Reload (override cache)',
          keys: ['Meta', 'Shift', 'r'],
        },
        {
          title: 'Stop',
          keys: ['Escape'],
        },
      ],
    },
    {
      title: 'Current Page',
      id: 'current',
      version: 1,
      shortcuts: [
        {
          title: 'Focus Next Link or Input Field',
          keys: ['Tab'],
        },
        {
          title: 'Focus Previous Link or Input Field',
          keys: ['Shift', 'Tab'],
        },
        {
          title: 'Go Down a Screen',
          keys: ['Space'],
        },
        {
          title: 'Go Up a Screen',
          keys: ['Shift', 'Space'],
        },
        {
          title: 'Go to Bottom of Page',
          keys: ['Meta', 'ArrowDown'],
        },
        {
          title: 'Go to Top of Page',
          keys: ['Meta', 'ArrowUp'],
        },
        {
          title: 'Move to Next Frame',
          keys: ['F6'],
        },
        {
          title: 'Move to Previous Frame',
          keys: ['Shift', 'F6'],
        },
        {
          title: 'Print',
          keys: ['Meta', 'p'],
        },
        {
          title: 'Save Page As',
          keys: ['Meta', 's'],
        },
      ],
    },
    {
      title: 'Editing',
      id: 'editing',
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
          title: 'Delete',
          keys: ['Delete'],
        },
        {
          title: 'Go to End of Line',
          keys: ['End'],
        },
        {
          title: 'Paste',
          keys: ['Meta', 'v'],
        },
        {
          title: 'Paste as plain text',
          keys: ['Meta', 'Shift', 'v'],
        },
        {
          title: 'Redo',
          keys: ['Meta', 'Shift', 'z'],
        },
        {
          title: 'Select All',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Undo',
          keys: ['Meta', 'z'],
        },
      ],
    },
    {
      title: 'Search',
      id: 'search',
      version: 1,
      shortcuts: [
        {
          title: 'Find',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Find Again',
          keys: ['Meta', 'g'],
        },
        {
          title: 'Find Previous',
          keys: ['Meta', 'Shift', 'g'],
        },
        {
          title: 'Quick Find within link-text only',
          keys: ['\''],
        },
        {
          title: 'Quick Find',
          keys: ['/'],
        },
        {
          title: 'Close the Find or Quick Find bar',
          keys: ['Escape'],
        },
        {
          title: 'Focus Search bar',
          keys: ['Meta', 'k'],
        },
      ],
    },
    {
      title: 'Tabs',
      id: 'tabs',
      version: 1,
      shortcuts: [
        {
          title: 'Close Tab',
          keys: ['Meta', 'w'],
        },
        {
          title: 'Cycle through Tabs in Recently Used Order',
          keys: ['Control', 'Tab'],
        },
        {
          title: 'Go one Tab to the Left',
          keys: ['Meta', 'Alt', 'ArrowLeft'],
        },
        {
          title: 'Go one Tab to the Right',
          keys: ['Meta', 'Alt', 'ArrowRight'],
        },
        {
          title: 'Move Tab Left',
          keys: ['Control', 'Shift', 'PageUp'],
        },
        {
          title: 'Move Tab Right',
          keys: ['Control', 'Shift', 'PageDown'],
        },
        // {
        //   title: 'Move Tab in focus to start',
        //   keys: ['Meta', 'Shift', 'Home'],
        // },
        {
          title: 'Move Tab in focus to end',
          keys: ['Meta', 'Shift', 'End'],
        },
        {
          title: 'Mute/Unmute Audio',
          keys: ['Control', 'm'],
        },
        {
          title: 'New Tab',
          keys: ['Meta', 't'],
        },
        {
          title: 'Open Address or Search in New Foreground Tab',
          keys: ['Alt', 'Enter'],
        },
        {
          title: 'Select Tab 1',
          keys: ['Meta', '1'],
        },
        {
          title: 'Select Tab 8',
          keys: ['Meta', '8'],
        },
        {
          title: 'Select Last Tab',
          keys: ['Meta', '9'],
        },
        {
          title: 'Undo Close Tab',
          keys: ['Meta', 'Shift', 't'],
        },
        // Unrelevant
        // {
        //   title: 'Open Search in New Background Tab',
        //   keys: ['Meta', 'Shift', 'Enter'],
        // },
        // {
        //   title: 'Open Search in New Foreground Tab',
        //   keys: ['Meta', 'Enter'],
        // },
        // {
        //   title: 'Open Focused Bookmark or Link in Current Tab',
        //   keys: ['Enter'],
        // },
        // {
        //   title: 'Open Focused Bookmark in New Foreground Tab',
        //   keys: ['Meta', 'Enter'],
        // },
        // {
        //   title: 'Open Focused Bookmark in New Background Tab',
        //   keys: ['Meta', 'Shift', 'Enter'],
        // },
        // {
        //   title: 'Open Focused Link in New Background Tab',
        //   keys: ['Meta', 'Enter'],
        // },
        // {
        //   title: 'Open Focused Link in New Foreground Tab',
        //   keys: ['Meta', 'Shift', 'Enter'],
        // },
      ],
    },
    {
      title: 'Windows',
      id: 'windows',
      version: 1,
      shortcuts: [
        {
          title: 'Close Window',
          keys: ['Meta', 'Shift', 'w'],
        },
        {
          title: 'New Window',
          keys: ['Meta', 'n'],
        },
        {
          title: 'New Private Window',
          keys: ['Meta', 'Shift', 'p'],
        },
        {
          title: 'Open Address or Search in New Window',
          keys: ['Shift', 'Enter'],
        },
        // Unrelevant
        // {
        //   title: 'Open Focused Bookmark or Link in New Window',
        //   keys: ['Shift', 'Enter'],
        // },
        {
          title: 'Undo Close Window',
          keys: ['Meta', 'Shift', 'n'],
        },
        {
          title: 'Moves the URL left or right',
          keys: ['Meta', 'Shift', 'x'],
        },
      ],
    },
    {
      title: 'Layout',
      id: 'layout',
      version: 1,
      shortcuts: [
        {
          title: 'Zoom In',
          keys: [
            ['Meta', '='],
            ['Meta', '+'],
          ],
        },
        {
          title: 'Zoom Out',
          keys: ['Meta', '-'],
        },
        {
          title: 'Zoom Reset',
          keys: ['Meta', '0'],
        },
      ],
    },
    {
      title: 'History',
      id: 'history',
      version: 1,
      shortcuts: [
        {
          title: 'History sidebar',
          keys: ['Meta', 'Shift', 'h'],
        },
        {
          title: 'Clear Recent History',
          keys: ['Meta', 'Shift', 'Delete'],
        },
      ],
    },
    {
      title: 'Bookmarks',
      id: 'bookmarks',
      version: 1,
      shortcuts: [
        {
          title: 'Bookmark All Tabs',
          keys: ['Meta', 'Shift', 'd'],
        },
        {
          title: 'Bookmark This Page',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Bookmarks sidebar',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Bookmarks',
          keys: ['Meta', 'Shift', 'b'],
        },
        {
          title: 'Show List of All Bookmarks',
          keys: ['Space'],
        },
      ],
    },
    {
      title: 'Tools',
      id: 'tools',
      version: 1,
      shortcuts: [
        {
          title: 'Downloads',
          keys: ['Meta', 'j'],
        },
        {
          title: 'Add-ons',
          keys: ['Meta', 'Shift', 'a'],
        },
        {
          title: 'Scratchpad',
          keys: ['Shift', 'F4'],
        },
        {
          title: 'PageSource',
          keys: ['Meta', 'u'],
        },
        {
          title: 'PageInfo',
          keys: ['Meta', 'i'],
        },
      ],
    },
    {
      title: 'PDF viewer',
      id: 'pdf',
      version: 1,
      shortcuts: [
        {
          title: 'Next page',
          keys: ['ArrowRight'],
        },
        {
          title: 'Previous page',
          keys: ['ArrowLeft'],
        },
        {
          title: 'Zoom in',
          keys: ['Meta', '+'],
        },
        {
          title: 'Zoom out',
          keys: ['Meta', '-'],
        },
        {
          title: 'Automatic Zoom',
          keys: ['Meta', '0'],
        },
        {
          title: 'Rotate the document clockwise',
          keys: ['r'],
        },
        {
          title: 'Rotate counterclockwise',
          keys: ['Shift', 'r'],
        },
        {
          title: 'Switch to Presentation Mode',
          keys: ['Meta', 'Alt', 'p'],
        },
        {
          title: 'Choose Text Selection Tool',
          keys: ['s'],
        },
        {
          title: 'Choose Hand Tool',
          keys: ['h'],
        },
        {
          title: 'Focus the Page Number input box',
          keys: ['Meta', 'Alt', 'g'],
        },
      ],
    },
    {
      title: 'Miscellaneous',
      id: 'misc',
      version: 1,
      shortcuts: [
        {
          title: 'Complete .com Address',
          keys: ['Control', 'Enter'],
        },
        {
          title: 'Delete Selected Autocomplete Entry',
          keys: ['Shift', 'Delete'],
        },
        {
          title: 'Toggle Full Screen',
          keys: ['Meta', 'Shift', 'F'],
        },
        {
          title: 'Toggle Reader Mode',
          keys: ['Meta', 'Alt', 'r'],
        },
        {
          title: 'Caret Browsing',
          keys: ['F7'],
        },
        {
          title: 'Select Location Bar',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Go to Search Field in Library',
          keys: ['Meta', 'f'],
        },
        // duplicates
        // {
        //   title: 'Stop Autoscroll Mode',
        //   keys: ['Escape'],
        // },
        // {
        //   title: 'Cancel Drag-and-Drop Operation',
        //   keys: ['Escape'],
        // },
        // {
        //   title: 'Clear Search Field in Library or Sidebar',
        //   keys: ['Escape'],
        // },
        // {
        //   title: 'Close a Menu',
        //   keys: ['Escape'],
        // },
      ],
    },
    {
      title: 'Media shortcuts',
      id: 'media',
      version: 1,
      shortcuts: [
        {
          title: 'Toggle Play / Pause',
          keys: ['Space'],
        },
        {
          title: 'Decrease volume',
          keys: ['ArrowDown'],
        },
        {
          title: 'Increase volume',
          keys: ['ArrowUp'],
        },
        {
          title: 'Mute audio',
          keys: ['Meta', 'ArrowDown'],
        },
        {
          title: 'Unmute audio',
          keys: ['Meta', 'ArrowUp'],
        },
        {
          title: 'Seek back 15 seconds',
          keys: ['ArrowLeft'],
        },
        {
          title: 'Seek back 10 %',
          keys: ['Meta', 'ArrowLeft'],
        },
        {
          title: 'Seek forward 15 seconds',
          keys: ['ArrowRight'],
        },
        {
          title: 'Seek forward 10 %',
          keys: ['Meta', 'ArrowRight'],
        },
        // {
        //   title: 'Seek to the beginning',
        //   keys: ['Home'],
        // },
        {
          title: 'Seek to the end',
          keys: ['End'],
        },
      ],
    },
    {
      title: 'Developer shortcuts',
      id: 'developer',
      version: 1,
      shortcuts: [
        {
          title: 'Toggle Developer Tools',
          keys: ['Meta', 'Alt', 'i'],
        },
        // {
        //   title: 'Bring Toolbox to foreground (if the Toolbox is in a separate window and not in foreground)',
        //   keys: ['Meta', 'Alt', 'i'],
        // },
        // {
        //   title: 'Close Toolbox (if the Toolbox is in a separate window and in foreground)',
        //   keys: ['Meta', 'Alt', 'i'],
        // },
        {
          title: 'Open Web Console 1',
          keys: ['Meta', 'Alt', 'k'],
        },
        {
          title: 'Toggle “Pick an element from the page”',
          keys: ['Meta', 'Alt', 'c'],
        },
        {
          title: 'Open Style Editor',
          keys: ['Shift', 'F7'],
        },
        {
          title: 'Open Profiler',
          keys: ['Shift', 'F5'],
        },
        {
          title: 'Open Network Monitor',
          keys: ['Meta', 'Alt', 'e'],
        },
        {
          title: 'Toggle Responsive Design Mode',
          keys: ['Meta', 'Alt', 'm'],
        },
        {
          title: 'Open Browser Console',
          keys: ['Meta', 'Shift', 'j'],
        },
        {
          title: 'Open Browser Toolbox',
          keys: ['Meta', 'Alt', 'Shift', 'i'],
        },
        {
          title: 'Open Scratchpad',
          keys: ['Shift', 'F4'],
        },
        {
          title: 'Open WebIDE',
          keys: ['Shift', 'F8'],
        },
        {
          title: 'Storage Inspector',
          keys: ['Shift', 'F9'],
        },
        {
          title: 'Open Debugger 3',
          keys: ['Meta', 'Alt', 'z'],
        },
      ],
    },
  ],
}
