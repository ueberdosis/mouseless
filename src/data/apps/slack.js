// https://slack.com/intl/en-Gb/help/articles/201374536#
export default {
  id: 'slack',
  title: 'Slack',
  groups: [
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        {
          title: 'Quick Switcher',
          keys: ['meta', 'k'],
        },
        {
          title: 'Navigate by section',
          keys: ['f6'],
        },
        {
          title: 'Open Direct messages menu',
          keys: ['meta', 'shift', 'k'],
        },
        {
          title: 'Browse all channels',
          keys: ['meta', 'shift', 'l'],
        },
        {
          title: 'Open the Threads view',
          keys: ['meta', 'shift', 't'],
        },
        {
          title: 'Previous unread channel or DM',
          keys: ['alt', 'shift', 'up'],
        },
        {
          title: 'Next unread channel or DM',
          keys: ['alt', 'shift', 'down'],
        },
        {
          title: 'Previous channel or DM visited',
          keys: ['meta', '['],
        },
        {
          title: 'Next channel or DM visited',
          keys: ['meta', ']'],
        },
        {
          title: 'Preferences',
          keys: ['meta', ','],
        },
        {
          title: 'Open or close right pane',
          keys: ['meta', '.'],
        },
        {
          title: 'Channel info pane',
          keys: ['meta', 'shift', 'i'],
        },
        {
          title: 'Activity',
          keys: ['meta', 'shift', 'm'],
        },
        {
          title: 'Directory',
          keys: ['meta', 'shift', 'e'],
        },
        {
          title: 'Starred items',
          keys: ['meta', 'shift', 's'],
        },
        {
          title: 'Search current channel or conversation',
          keys: ['meta', 'f'],
        },
        {
          title: 'Open previous search',
          keys: ['meta', 'g'],
        },
        {
          title: 'Toggle full screen view',
          keys: ['control', 'meta', 'f'],
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
          keys: ['meta', 'shift', 'a'],
        },
        {
          title: 'Previous channel',
          keys: ['up'],
        },
        {
          title: 'Next channel',
          keys: ['down'],
        },
        {
          title: 'Open channel sections',
          keys: ['right'],
        },
        {
          title: 'Collapse channel sections',
          keys: ['left'],
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
          keys: ['meta', 'shift', '['],
        },
        {
          title: 'Switch to next workspace',
          keys: ['meta', 'shift', ']'],
        },
        // {
        //   title: 'Switch to a specific workspace (see assigned number under the workspace icon in your Slack app)',
        //   keys: ['meta', [number]],
        // },
        {
          title: 'Switch to workspace #1',
          keys: ['meta', '1'],
        },
        {
          title: 'Switch to workspace #2',
          keys: ['meta', '2'],
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
          keys: ['escape'],
        },
        {
          title: 'Mark all messages as read',
          keys: ['shift', 'escape'],
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
          // in empty message field
          keys: ['up'],
        },
        {
          title: 'Select text to beginning of current line',
          keys: ['shift', 'up'],
        },
        {
          title: 'Select text to end of current line',
          keys: ['shift', 'down'],
        },
        {
          title: 'Create a new line in your message',
          keys: ['shift', 'enter'],
        },
        {
          title: 'Add emoji reactions to a message',
          keys: ['meta', 'shift', '\\'],
        },
        {
          title: 'Bold selected text',
          keys: ['meta', 'b'],
        },
        {
          title: 'Italicise selected text',
          keys: ['meta', 'i'],
        },
        {
          title: 'Cross out selected text',
          keys: ['meta', 'shift', 'x'],
        },
        {
          title: 'Quote selected text',
          keys: ['meta', 'shift', '>'],
        },
        {
          title: 'Codeblock selected text',
          keys: ['meta', 'shift', 'c'],
        },
        {
          title: 'Turn selected text into a numbered list',
          keys: ['meta', 'shift', '7'],
        },
        {
          title: 'Turn selected text into a bullet-point list',
          keys: ['meta', 'shift', '8'],
        },
        {
          title: 'Set or edit your status',
          keys: ['meta', 'shift', 'y'],
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
          keys: ['meta', 'u'],
        },
        {
          title: 'Create new snippet',
          keys: ['meta', 'shift', 'enter'],
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
        // TODO: Two bindings
        // {
        //   title: 'Show invitation list',
        //   keys: ['+'],
        //   keys: ['a'],
        // },
        // TODO: Multiple directions
        // {
        //   title: 'View and select an emoji reaction',
        //   keys: ['E' then 1-9],
        // },
      ],
    },
  ],
  shortcuts: [
  ],
}
