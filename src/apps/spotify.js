/* eslint-disable max-len */
// https://support.spotify.com/us/using_spotify/system_settings/keyboard-shortcuts/
module.exports = {
  id: 'spotify',
  title: 'Spotify',
  category: 'Entertainment',
  description: null,
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Create new playlist',
          keys: ['Meta', 'n'],
        },
        {
          title: 'Select all',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Play/pause',
          keys: ['Space'],
        },
        {
          title: 'Repeat',
          keys: ['Meta', 'r'],
        },
        {
          title: 'Shuffle',
          keys: ['Meta', 's'],
        },
        {
          title: 'Filter (in Songs and Playlists)',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Play selected row',
          keys: ['Enter'],
        },
        {
          title: 'Next track',
          keys: ['Control', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Previous track',
          keys: ['Control', 'Meta', 'ArrowLeft'],
        },
      ],
    },
    {
      title: 'Volume',
      id: 'volume',
      version: 1,
      shortcuts: [
        {
          title: 'Volume up',
          keys: ['Meta', 'ArrowUp'],
        },
        {
          title: 'Volume down',
          keys: ['Meta', 'ArrowDown'],
        },
        {
          title: 'Mute',
          keys: ['Meta', 'Shift', 'ArrowDown'],
        },
        {
          title: 'Max volume',
          keys: ['Meta', 'Shift', 'ArrowUp'],
        },
      ],
    },
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        {
          title: 'Go back',
          keys: ['Meta', 'Alt', 'ArrowLeft'],
        },
        {
          title: 'Go forward',
          keys: ['Meta', 'Alt', 'ArrowRight'],
        },
      ],
    },
    {
      title: 'Window',
      id: 'window',
      version: 1,
      shortcuts: [
        {
          title: 'Quit',
          keys: ['Meta', 'q'],
        },
        {
          title: 'Hide window',
          keys: ['Meta', 'h'],
        },
        {
          title: 'Hide other applications’ windows',
          keys: ['Meta', 'Alt', 'h'],
        },
        {
          title: 'Close window',
          keys: ['Meta', 'w'],
        },
        {
          title: 'Minimize window',
          keys: ['Meta', 'm'],
        },
        {
          title: 'Restore from minimized',
          keys: ['Meta', 'Alt', '1'],
        },
      ],
    },
    {
      title: 'Miscellaneous',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Logout active user',
          keys: ['Meta', 'Shift', 'w'],
        },
        {
          title: 'Give focus to search field',
          keys: ['Meta', 'Alt', 'f'],
        },
        {
          title: 'Preferences',
          keys: ['Meta', ','],
        },
        {
          title: 'Show help',
          keys: ['Meta', 'Shift', '?'],
        },
      ],
    },
  ],
}
