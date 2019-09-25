// https://slack.com/intl/en-Gb/help/articles/201374536#
export default {
  id: 'slack',
  title: 'Slack',
  color: '#611f69',
  shortcuts: [
    // Navigation
    {
      title: 'Quick Switcher',
      keys: ['meta', 'k'],
      group: 1,
    },
    {
      title: 'Navigate by section',
      keys: ['f6'],
      group: 1,
    },
    {
      title: 'Open Direct messages menu',
      keys: ['meta', 'shift', 'k'],
      group: 1,
    },
    {
      title: 'Browse all channels',
      keys: ['meta', 'shift', 'l'],
      group: 1,
    },
    {
      title: 'Open the Threads view',
      keys: ['meta', 'shift', 't'],
      group: 1,
    },
    {
      title: 'Previous unread channel or DM',
      keys: ['alt', 'shift', 'up'],
      group: 1,
    },
    {
      title: 'Next unread channel or DM',
      keys: ['alt', 'shift', 'down'],
      group: 1,
    },
    {
      title: 'Previous channel or DM visited',
      keys: ['meta', '['],
      group: 1,
    },
    {
      title: 'Next channel or DM visited',
      keys: ['meta', ']'],
      group: 1,
    },
    {
      title: 'Preferences',
      keys: ['meta', ','],
      group: 1,
    },
    {
      title: 'Open or close right pane',
      keys: ['meta', '.'],
      group: 1,
    },
    {
      title: 'Channel info pane',
      keys: ['meta', 'shift', 'i'],
      group: 1,
    },
    {
      title: 'Activity',
      keys: ['meta', 'shift', 'm'],
      group: 1,
    },
    {
      title: 'Directory',
      keys: ['meta', 'shift', 'e'],
      group: 1,
    },
    {
      title: 'Starred items',
      keys: ['meta', 'shift', 's'],
      group: 1,
    },
    {
      title: 'Search current channel or conversation',
      keys: ['meta', 'f'],
      group: 1,
    },
    {
      title: 'Open previous search',
      keys: ['meta', 'g'],
      group: 1,
    },
    {
      title: 'Toggle full screen view',
      keys: ['control', 'meta', 'f'],
      group: 1,
    },
    // All unread navigation
    {
      title: 'Open All unread view',
      keys: ['meta', 'shift', 'a'],
      group: 1,
    },
    // {
    //   title: 'Mark messages as unread',
    //   keys: ['alt', click a message],
    //   group: 1,
    // },
    // {
    //   title: 'Move between channels',
    //   keys: ['up' or 'down'],
    //   group: 1,
    // },
    // {
    //   title: 'Open and collapse channel sections',
    //   keys: ['left' or 'right'],
    //   group: 1,
    // },
    {
      title: 'Toggle current channel read or unread',
      keys: ['R'],
      group: 1,
    },
    // Switch workspaces
    {
      title: 'Switch to previous workspace',
      keys: ['meta', 'shift', '['],
      group: 1,
    },
    {
      title: 'Switch to next workspace',
      keys: ['meta', 'shift', ']'],
      group: 1,
    },
    // {
    //   title: 'Switch to a specific workspace (see assigned number under the workspace icon in your Slack app)',
    //   keys: ['meta', [number]],
    //   group: 1,
    // },
    {
      title: 'Switch to workspace #2',
      keys: ['meta', '2'],
      group: 1,
    },
    // Mark messages read or unread
    {
      title: 'Mark all messages in current channel or DM as read',
      keys: ['escape'],
      group: 1,
    },
    {
      title: 'Mark all messages as read',
      keys: ['shift', 'escape'],
      group: 1,
    },
    // {
    //   title: 'Set a message as your oldest unread message',
    //   keys: ['alt' click a message],
    //   group: 1,
    // }
    // Message shortcuts
    {
      title: 'Edit your last message',
      // in empty message field
      keys: ['up'],
      group: 1,
    },
    {
      title: 'Select text to beginning of current line',
      keys: ['shift', 'up'],
      group: 1,
    },
    {
      title: 'Select text to end of current line',
      keys: ['shift', 'down'],
      group: 1,
    },
    {
      title: 'Create a new line in your message',
      keys: ['shift', 'enter'],
      group: 1,
    },
    {
      title: 'Add emoji reactions to a message',
      keys: ['meta', 'shift', '\\'],
      group: 1,
    },
    {
      title: 'Bold selected text',
      keys: ['meta', 'b'],
      group: 1,
    },
    {
      title: 'Italicise selected text',
      keys: ['meta', 'i'],
      group: 1,
    },
    {
      title: 'Cross out selected text',
      keys: ['meta', 'shift', 'x'],
      group: 1,
    },
    {
      title: 'Quote selected text',
      keys: ['meta', 'shift', '>'],
      group: 1,
    },
    {
      title: 'Codeblock selected text',
      keys: ['meta', 'shift', 'c'],
      group: 1,
    },
    {
      title: 'Turn selected text into a numbered list',
      keys: ['meta', 'shift', '7'],
      group: 1,
    },
    {
      title: 'Turn selected text into a bullet-point list',
      keys: ['meta', 'shift', '8'],
      group: 1,
    },
    {
      title: 'Set or edit your status',
      keys: ['meta', 'shift', 'y'],
      group: 1,
    },
    // Files and snippets
    {
      title: 'Upload file',
      keys: ['meta', 'u'],
      group: 1,
    },
    {
      title: 'Create new snippet',
      keys: ['meta', 'shift', 'enter'],
      group: 1,
    },
    // Call actions
    {
      title: 'Toggle mute on and off',
      // (Hold down to talk when muted),
      keys: ['m'],
      group: 1,
    },
    {
      title: 'Toggle video on and off',
      keys: ['v'],
      group: 1,
    },
    {
      title: 'Show invitation list',
      keys: ['+'],
      // or a
      group: 1,
    },
    // {
    //   title: 'View and select an emoji reaction',
    //   keys: ['E' then 1-9],
    //   // or a
    //   group: 1,
    // },
  ],
}
