/* eslint-disable max-len */
// https://support.apple.com/en-gb/HT201236
export default {
  id: 'macos',
  title: 'macOS',
  systemTitle: null,
  category: 'Utility',
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Copy the selected item to the Clipboard',
          keys: ['Meta', 'c'],
        },
        {
          title: 'Paste the contents of the Clipboard',
          keys: ['Meta', 'v'],
        },
        {
          title: 'Undo the previous command',
          keys: ['Meta', 'z'],
        },
        {
          title: 'Redo',
          keys: ['Shift', 'Meta', 'z'],
        },
        {
          title: 'Cut the selected item and copy it to the Clipboard',
          keys: ['Meta', 'x'],
        },
        {
          title: 'Select All items',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Save the current document',
          keys: ['Meta', 's'],
        },
        {
          title: 'Open a new tab',
          keys: ['Meta', 't'],
        },
        {
          title: 'Show the Character Viewer, from which you can choose emoji and other symbols',
          keys: ['Control', 'Meta', 'Space'],
        },
      ],
    },
    {
      title: 'Windows',
      id: 'windows',
      version: 1,
      shortcuts: [
        {
          title: 'Show all windows of the front app',
          keys: ['Control', 'ArrowDown'],
        },
        {
          title: 'Hide the windows of the front app',
          keys: ['Meta', 'h'],
        },
        {
          title: 'Minimize all windows of the front app',
          keys: ['Alt', 'Meta', 'm'],
        },
        {
          title: 'Close the front window',
          keys: ['Meta', 'w'],
        },
        {
          title: 'Close all windows of the app',
          keys: ['Alt', 'Meta', 'w'],
        },
        {
          title: 'Use the app in full screen',
          keys: ['Control', 'Meta', 'f'],
        },
        {
          title: 'View the front app but hide all other apps',
          keys: ['Alt', 'Meta', 'h'],
        },
        {
          title: 'Minimize the front window to the Dock',
          keys: ['Meta', 'm'],
        },
      ],
    },
    {
      title: 'Search',
      id: 'search',
      version: 1,
      shortcuts: [
        {
          title: 'Find items in a document or open a Find window',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Find again',
          description: 'Find the next occurrence of the item previously found',
          keys: ['Meta', 'g'],
        },
        {
          title: 'Find the previous occurrence',
          keys: ['Shift', 'Meta', 'g'],
        },
      ],
    },
    // blocked shortcuts
    // {
    //   title: 'Screen Capturing',
    //   id: 'screen-capturing',
    //   version: 1,
    //   shortcuts: [
    //     {
    //       title: 'Capture a selected portion of the screen',
    //       keys: ['Shift', 'Meta', '5'],
    //     },
    //   ],
    // },
    {
      title: 'Miscellaneous',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Show or hide the Dock',
          keys: ['Alt', 'Meta', 'd'],
        },
        {
          title: 'Open the selected item, or open a dialog to select a file to open',
          keys: ['Meta', 'o'],
        },
        {
          title: 'Print the current document',
          keys: ['Meta', 'p'],
        },
        {
          title: 'Show or hide the Spotlight search field',
          keys: ['Meta', 'Space'],
        },
        {
          title: 'Open preferences for the front app',
          keys: ['Meta', ','],
        },
      ],
    },
  ],
}
