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
  ],
}
