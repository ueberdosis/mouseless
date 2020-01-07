/* eslint-disable max-len */
// https://slack.com/intl/en-Gb/help/articles/201374536#
module.exports = {
  id: 'slack',
  title: 'Slack',
  category: 'Communication',
  description: 'Slack replaced emails in so many companies. It’s open all the time, you are probably checking it every few minutes. Some say the ultimative productivity boost is to stop using Slack. In case you keep using it anyway (like us) learn a few keyboard shortcuts to handle things faster.',
  sets: [
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        {
          title: 'Quick Switcher',
          keys: [
            ['Meta', 'k'],
            ['Meta', 't'],
          ],
        },
        {
          title: 'Navigate by section',
          keys: ['F6'],
        },
        {
          title: 'Open Direct messages menu',
          keys: ['Meta', 'Shift', 'k'],
        },
        {
          title: 'Open the Threads view',
          keys: ['Meta', 'Shift', 't'],
        },
        {
          title: 'Open or close right pane',
          keys: ['Meta', '.'],
        },
        {
          title: 'Activity',
          keys: ['Meta', 'Shift', 'm'],
        },
        {
          title: 'Directory',
          keys: ['Meta', 'Shift', 'e'],
        },
        {
          title: 'Starred items',
          keys: ['Meta', 'Shift', 's'],
        },
        {
          title: 'Open previous search',
          keys: ['Meta', 'g'],
        },
      ],
    },
    {
      title: 'Channels',
      id: 'channels',
      version: 1,
      shortcuts: [
        {
          title: 'Browse all channels',
          keys: ['Meta', 'Shift', 'l'],
        },
        {
          title: 'Channel info pane',
          keys: ['Meta', 'Shift', 'i'],
        },
        {
          title: 'Previous unread channel or DM',
          keys: ['Alt', 'Shift', 'ArrowUp'],
        },
        {
          title: 'Next unread channel or DM',
          keys: ['Alt', 'Shift', 'ArrowDown'],
        },
        {
          title: 'Previous channel or DM visited',
          keys: ['Meta', '['],
        },
        {
          title: 'Next channel or DM visited',
          keys: ['Meta', ']'],
        },
        {
          title: 'Search current channel or conversation',
          keys: ['Meta', 'f'],
        },
      ],
    },
    {
      title: 'All unread navigation',
      id: 'unread',
      version: 1,
      shortcuts: [
        {
          title: 'Open All unread view',
          keys: ['Meta', 'Shift', 'a'],
        },
        {
          title: 'Previous channel',
          keys: ['ArrowUp'],
        },
        {
          title: 'Next channel',
          keys: ['ArrowDown'],
        },
        {
          title: 'Open channel sections',
          keys: ['ArrowRight'],
        },
        {
          title: 'Collapse channel sections',
          keys: ['ArrowLeft'],
        },
        {
          title: 'Toggle current channel read or unread',
          keys: ['r'],
        },
      ],
    },
    {
      title: 'Switch workspaces',
      id: 'workspaces',
      version: 1,
      shortcuts: [
        {
          title: 'Switch to previous workspace',
          keys: ['Meta', 'Shift', '['],
        },
        {
          title: 'Switch to next workspace',
          keys: ['Meta', 'Shift', ']'],
        },
        {
          title: 'Switch to workspace #1',
          keys: ['Meta', '1'],
        },
        {
          title: 'Switch to workspace #2',
          keys: ['Meta', '2'],
        },
      ],
    },
    {
      title: 'Mark messages read or unread',
      id: 'markmessages',
      version: 1,
      shortcuts: [
        {
          title: 'Mark all messages in current channel or DM as read',
          keys: ['Escape'],
        },
        {
          title: 'Mark all messages as read',
          keys: ['Shift', 'Escape'],
        },
      ],
    },
    {
      title: 'Message shortcuts',
      id: 'message',
      version: 1,
      shortcuts: [
        {
          title: 'Edit your last message',
          description: 'In empty message field',
          keys: ['ArrowUp'],
        },
        {
          title: 'Select text to beginning of current line',
          keys: ['Shift', 'ArrowUp'],
        },
        {
          title: 'Select text to end of current line',
          keys: ['Shift', 'ArrowDown'],
        },
        {
          title: 'Create a new line in your message',
          keys: ['Shift', 'Enter'],
        },
        {
          title: 'Add emoji reactions to a message',
          keys: ['Meta', 'Shift', '\\'],
        },
        {
          title: 'Bold selected text',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Italicise selected text',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Cross out selected text',
          keys: ['Meta', 'Shift', 'x'],
        },
        {
          title: 'Quote selected text',
          keys: ['Meta', 'Shift', '>'],
        },
        {
          title: 'Codeblock selected text',
          keys: ['Meta', 'Shift', 'c'],
        },
        {
          title: 'Turn selected text into a numbered list',
          keys: ['Meta', 'Shift', '7'],
        },
        {
          title: 'Turn selected text into a bullet-point list',
          keys: ['Meta', 'Shift', '8'],
        },
        {
          title: 'Set or edit your status',
          keys: ['Meta', 'Shift', 'y'],
        },
      ],
    },
    {
      title: 'Files and snippets',
      id: 'files',
      version: 1,
      shortcuts: [
        {
          title: 'Upload file',
          keys: ['Meta', 'u'],
        },
        {
          title: 'Create new snippet',
          keys: ['Meta', 'Shift', 'Enter'],
        },
      ],
    },
    {
      title: 'Call actions',
      id: 'call',
      version: 1,
      shortcuts: [
        {
          title: 'Toggle mute on and off',
          description: 'Hold down to talk when muted',
          keys: ['m'],
        },
        {
          title: 'Toggle video on and off',
          keys: ['v'],
        },
        {
          title: 'Show invitation list',
          keys: [
            ['+'],
            ['a'],
          ],
        },
        // TODO: Multiple directions
        // {
        //   title: 'View and select an emoji reaction',
        //   keys: ['e' then 1-9],
        // },
      ],
    },
    {
      title: 'Miscellaneous',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Preferences',
          keys: ['Meta', ','],
        },
        {
          title: 'Toggle full screen view',
          keys: ['Control', 'Meta', 'f'],
        },
      ],
    },
  ],
}
