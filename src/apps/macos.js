/* eslint-disable max-len */
// https://support.apple.com/en-gb/HT201236
export default {
  id: 'macos',
  title: 'macOS',
  systemTitle: null,
  category: 'Utility',
  sets: [
    {
      title: 'Common actions',
      id: 'common',
      version: 1,
      shortcuts: [
        {
          title: 'Show all windows of the front app',
          keys: ['Control', 'ArrowDown'],
        },
        {
          title: 'Show or hide the Dock',
          keys: ['Alt', 'Meta', 'd'],
        },
        {
          title: 'Cut the selected item and copy it to the Clipboard',
          keys: ['Meta', 'x'],
        },
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
          title: 'Select All items',
          keys: ['Meta', 'a'],
        },
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
        {
          title: 'Hide the windows of the front app',
          keys: ['Meta', 'h'],
        },
        {
          title: 'View the front app but hide all other apps',
          keys: ['Alt', 'Meta', 'h'],
        },
        {
          title: 'Minimize the front window to the Dock',
          keys: ['Meta', 'm'],
        },
        {
          title: 'Minimize all windows of the front app',
          keys: ['Alt', 'Meta', 'm'],
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
          title: 'Save the current document',
          keys: ['Meta', 's'],
        },
        {
          title: 'Open a new tab',
          keys: ['Meta', 't'],
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
          title: 'Force quit an app',
          keys: ['Alt', 'Meta', 'Escape'],
        },
        {
          title: 'Show or hide the Spotlight search field',
          keys: ['Meta', 'Space'],
        },
        {
          title: 'Show the Character Viewer, from which you can choose emoji and other symbols',
          keys: ['Control', 'Meta', 'Space'],
        },
        {
          title: 'Use the app in full screen',
          keys: ['Control', 'Meta', 'f'],
        },
        {
          title: 'Use Quick Look to preview the selected item',
          keys: ['Space'],
        },
        {
          title: 'Take a screenshot or make a screen recording',
          keys: ['Shift', 'Meta', '5'],
        },
        {
          title: 'Open preferences for the front app',
          keys: ['Meta', ','],
        },
      ],
    },
    // {
    //   title: 'Document shortcuts',
    //   id: 'document',
    //   version: 1,
    //   shortcuts: [
    //     {
    //       title: '',
    //       keys: [],
    //     },
    //   ],
    // },
  ],
}
