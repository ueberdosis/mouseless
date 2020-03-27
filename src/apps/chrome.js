// https://support.google.com/chrome/answer/157179?hl=en
module.exports = {
  id: 'chrome',
  title: 'Google Chrome',
  category: 'Utility',
  description: null,
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Save your current webpage as a bookmark',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Open options to print the current page',
          keys: ['Meta', 'p'],
        },
        {
          title: 'Open options to save the current page',
          keys: ['Meta', 's'],
        },
        {
          title: 'Open the Find Bar to search the current page',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Jump to the next match to your Find Bar search',
          keys: ['Meta', 'g'],
        },
        {
          title: 'Reload your current page, ignoring cached content',
          keys: ['Meta', 'Shift', 'r'],
        },
        {
          title: 'Browse clickable items moving forward',
          keys: ['Tab'],
        },
        {
          title: 'Browse clickable items moving backward',
          keys: ['Shift', 'Tab'],
        },
        {
          title: 'Search the web',
          keys: ['Meta', 'Alt', 'f'],
        },
      ],
    },
    {
      title: 'Windows',
      id: 'windows',
      version: 1,
      shortcuts: [
        {
          title: 'Open a new window',
          keys: ['Meta', 'n'],
        },
        {
          title: 'Open a new window in Incognito mode',
          keys: ['Meta', 'Shift', 'n'],
        },
        {
          title: 'Close the current window',
          keys: ['Meta', 'Shift', 'w'],
        },
        {
          title: 'Minimize the window',
          keys: ['Meta', 'm'],
        },
        {
          title: 'Turn full-screen mode on or off',
          keys: ['Meta', 'Control', 'f'],
        },
      ],
    },
    {
      title: 'Tabs',
      id: 'tabs',
      version: 1,
      shortcuts: [
        {
          title: 'Open a new tab, and jump to it',
          keys: ['Meta', 't'],
        },
        {
          title: 'Reopen previously closed tabs in the order they were closed',
          keys: ['Meta', 'Shift', 't'],
        },
        {
          title: 'Jump to the next open tab',
          keys: ['Meta', 'Alt', 'ArrowRight'],
        },
        {
          title: 'Jump to the previous open tab',
          keys: ['Meta', 'Alt', 'ArrowLeft'],
        },
        {
          title: 'Jump to tab #2',
          keys: ['Meta', '2'],
        },
        {
          title: 'Jump to the last tab',
          keys: ['Meta', '9'],
        },
        {
          title: 'Close the current tab or pop-up',
          keys: ['Meta', 'w'],
        },
        {
          title: 'Open the previous page in your browsing history for the current tab',
          keys: ['Meta', 'ArrowLeft'],
        },
        {
          title: 'Open the next page in your browsing history for the current tab',
          keys: ['Meta', 'ArrowRight'],
        },
      ],
    },
    {
      title: 'Layout',
      id: 'layout',
      version: 1,
      shortcuts: [
        {
          title: 'Make everything on the page bigger',
          keys: [
            ['Meta', '='],
            ['Meta', '+'],
          ],
        },
        {
          title: 'Make everything on the page smaller',
          keys: ['Meta', '-'],
        },
        {
          title: 'Return everything on the page to the default size',
          keys: ['Meta', '0'],
        },
        {
          title: 'Show or hide the Bookmarks Bar',
          keys: ['Meta', 'Shift', 'b'],
        },
      ],
    },
    {
      title: 'Text',
      id: 'text',
      version: 1,
      shortcuts: [
        {
          title: 'Move your cursor to the beginning of the previous word in a text field',
          keys: ['Alt', 'ArrowLeft'],
        },
        {
          title: 'Move your cursor to the back of the next word in a text field',
          keys: ['Alt', 'ArrowRight'],
        },
        {
          title: 'Delete the previous word in a text field',
          keys: ['Alt', 'Backspace'],
        },
      ],
    },
    {
      title: 'Features',
      id: 'features',
      version: 1,
      shortcuts: [
        {
          title: 'Open the Bookmark Manager',
          keys: ['Meta', 'Alt', 'b'],
        },
        {
          title: 'Open the Settings page in a new tab',
          keys: ['Meta', ','],
        },
        {
          title: 'Open the History page in a new tab',
          keys: ['Meta', 'y'],
        },
        {
          title: 'Open the Downloads page in a new tab',
          keys: ['Meta', 'Shift', 'j'],
        },
        {
          title: 'Jump to the previous match to your Find Bar search',
          keys: ['Meta', 'Shift', 'g'],
        },
        {
          title: 'When Find Bar is open, search for selected text',
          keys: ['Meta', 'e'],
        },
        {
          title: 'Open the Clear Browsing Data options',
          keys: ['Meta', 'Shift', 'Backspace'],
        },
        {
          title: 'Log in as a different user, browse as a Guest, or access payment and password info',
          keys: ['Meta', 'Shift', 'm'],
        },
      ],
    },
    {
      title: 'Developer Tools',
      id: 'developer-tools',
      version: 1,
      shortcuts: [
        {
          title: 'Open Developer Tools',
          keys: ['Meta', 'Alt', 'i'],
        },
        {
          title: 'Open the JavaScript Console',
          keys: ['Meta', 'Alt', 'j'],
        },
        {
          title: 'Display non-editable HTML source code for the current page',
          keys: ['Meta', 'Alt', 'u'],
        },
      ],
    },
    {
      title: 'Miscellaneous',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Hide Google Chrome',
          keys: ['Meta', 'h'],
        },
        {
          title: 'Quit Google Chrome',
          keys: ['Meta', 'q'],
        },
        {
          title: 'Stop the page loading',
          keys: ['Escape'],
        },
        {
          title: 'Open the Page Setup dialog',
          keys: ['Meta', 'Alt', 'p'],
        },
        {
          title: 'Open a file from your computer in Google Chrome',
          keys: ['Meta', 'o'],
        },
        {
          title: 'Save all open tabs as bookmarks in a new folder',
          keys: ['Meta', 'Shift', 'd'],
        },
        {
          title: 'Scroll down a webpage, a screen at a time',
          keys: ['Space'],
        },
        {
          title: 'Scroll up a webpage, a screen at a time',
          keys: ['Shift', 'Space'],
        },
        {
          title: 'Open your home page in the current tab',
          keys: ['Meta', 'Shift', 'h'],
        },
      ],
    },
  ],
}
