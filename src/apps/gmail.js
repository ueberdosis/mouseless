/* eslint-disable max-len */
// https://support.google.com/mail/answer/6594?co=GENIE.Platform%3DDesktop&hl=en
export default {
  id: 'gmail',
  title: 'Gmail',
  category: 'Communication',
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Send',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Archive',
          keys: ['e'],
        },
        {
          title: 'Mute conversation',
          keys: ['m'],
        },
        {
          title: 'Report as spam',
          keys: ['!'],
        },
        {
          title: 'Delete',
          keys: ['#'],
        },
        {
          title: 'Forward',
          keys: ['f'],
        },
        {
          title: 'Undo last action',
          keys: ['z'],
        },
      ],
    },
    {
      title: 'Compose & Chat',
      id: 'compose',
      version: 1,
      shortcuts: [
        {
          title: 'Previous message in an open conversation',
          keys: ['p'],
        },
        {
          title: 'Next message in an open conversation',
          keys: ['n'],
        },
        {
          title: 'Focus main window',
          keys: ['Shift', 'Escape'],
        },
        {
          title: 'Focus latest chat or compose',
          keys: ['Escape'],
        },
        {
          title: 'Advance to the next chat or compose',
          keys: ['Control', '.'],
        },
        {
          title: 'Advance to previous chat or compose',
          keys: ['Control', ','],
        },
        {
          title: 'Add cc recipients',
          keys: ['Meta', 'Shift', 'c'],
        },
        {
          title: 'Add bcc recipients',
          keys: ['Meta', 'Shift', 'b'],
        },
        {
          title: 'Access custom from',
          keys: ['Meta', 'Shift', 'f'],
        },
        {
          title: 'Insert a link',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Go to next misspelled word',
          keys: ['Meta', ';'],
        },
        {
          title: 'Open spelling suggestions',
          keys: ['Meta', 'm'],
        },
      ],
    },
    {
      title: 'Formatting Text',
      id: 'formatting',
      version: 1,
      shortcuts: [
        {
          title: 'Previous font',
          keys: ['Meta', 'Shift', '5'],
        },
        {
          title: 'Next font',
          keys: ['Meta', 'Shift', '6'],
        },
        {
          title: 'Decrease text size',
          keys: ['Meta', 'Shift', '-'],
        },
        {
          title: 'Increase text size',
          keys: [
            ['Meta', 'Shift', '='],
            ['Meta', 'Shift', '+'],
          ],
        },
        {
          title: 'Bold',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Italics',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Underline',
          keys: ['Meta', 'u'],
        },
        {
          title: 'Numbered list',
          keys: ['Meta', 'Shift', '7'],
        },
        {
          title: 'Bulleted list',
          keys: ['Meta', 'Shift', '8'],
        },
        {
          title: 'Quote',
          keys: ['Meta', 'Shift', '9'],
        },
        {
          title: 'Indent less',
          keys: ['Meta', '['],
        },
        {
          title: 'Indent more',
          keys: ['Meta', ']'],
        },
        {
          title: 'Align left',
          keys: ['Meta', 'Shift', 'l'],
        },
        {
          title: 'Align center',
          keys: ['Meta', 'Shift', 'e'],
        },
        {
          title: 'Align right',
          keys: ['Meta', 'Shift', 'r'],
        },
        {
          title: 'Remove formatting',
          keys: ['Meta', '\\'],
        },
      ],
    },
    {
      title: 'Reply',
      id: 'reply',
      version: 1,
      shortcuts: [
        {
          title: 'Reply',
          keys: ['r'],
        },
        {
          title: 'Reply in a new window',
          keys: ['Shift', 'r'],
        },
        {
          title: 'Reply all',
          keys: ['a'],
        },
        {
          title: 'Reply all in a new window',
          keys: ['Shift', 'a'],
        },
      ],
    },
    {
      title: 'Mark As',
      id: 'mark-as',
      version: 1,
      shortcuts: [
        {
          title: 'Mark as read',
          keys: ['Shift', 'i'],
        },
        {
          title: 'Mark as unread',
          keys: ['Shift', 'u'],
        },
        {
          title: 'Mark unread from the selected message',
          keys: ['_'],
        },
        {
          title: 'Mark as important',
          keys: [
            ['+'],
            ['='],
          ],
        },
        {
          title: 'Mark as not important',
          keys: ['-'],
        },
      ],
    },
    {
      title: 'Actions',
      id: 'actions',
      version: 1,
      shortcuts: [
        {
          title: 'Move focus to toolbar',
          keys: [','],
        },
        {
          title: 'Select conversation',
          keys: ['x'],
        },
        {
          title: 'Toggle star/rotate among superstars',
          keys: ['s'],
        },
        {
          title: 'Forward in a new window',
          keys: ['Shift', 'f'],
        },
        {
          title: 'Update conversation',
          keys: ['Shift', 'n'],
        },
        {
          title: 'Archive conversation and go previous',
          keys: ['['],
        },
        {
          title: 'Archive conversation and go next',
          keys: [']'],
        },
        {
          title: 'Snooze',
          keys: ['b'],
        },
        {
          title: 'Expand entire conversation',
          keys: [';'],
        },
        {
          title: 'Collapse entire conversation',
          keys: [':'],
        },
        {
          title: 'Add conversation to Tasks',
          keys: ['Shift', 't'],
        },
      ],
    },
    // TODO: Sequences
    // {
    //   title: 'Hangouts',
    //   id: 'hangouts',
    //   version: 1,
    //   shortcuts: [
    //     {
    //       title: '',
    //       keys: [''],
    //     },
    //   ],
    // },
    // TODO: Sequences
    // {
    //   title: 'Jumping',
    //   id: 'jumping',
    //   version: 1,
    //   shortcuts: [
    //     {
    //       title: '',
    //       keys: [''],
    //     },
    //   ],
    // },
    // TODO: Sequences
    // {
    //   title: 'Threadlist Selection',
    //   id: 'threadlist',
    //   version: 1,
    //   shortcuts: [
    //     {
    //       title: '',
    //       keys: [''],
    //     },
    //   ],
    // },
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        // TODO: Sequence?
        // {
        //   title: 'Go to next page',
        //   keys: ['g', 'n'],
        // },
        // {
        //   title: 'Go to previous page',
        //   keys: ['g', 'p'],
        // },
        {
          title: 'Back to threadlist',
          keys: ['u'],
        },
        {
          title: 'Newer conversation',
          keys: ['k'],
        },
        {
          title: 'Older conversation',
          keys: ['j'],
        },
        // TODO: Two variants
        // {
        //   title: 'Open conversation',
        //   keys: ['o or Enter'],
        // },
        {
          title: 'Go to next Inbox section',
          keys: ['`'],
        },
        {
          title: 'Go to previous Inbox section',
          keys: ['~'],
        },
      ],
    },
    {
      title: 'Application',
      id: 'application',
      version: 1,
      shortcuts: [
        {
          title: 'Compose',
          keys: ['c'],
        },
        {
          title: 'Compose in a new tab',
          keys: ['d'],
        },
        {
          title: 'Search mail',
          keys: ['/'],
        },
        {
          title: 'Search chat contacts',
          keys: ['g'],
        },
        {
          title: 'Open "more actions" menu',
          keys: ['.'],
        },
        {
          title: 'Open "move to" menu',
          keys: ['v'],
        },
        {
          title: 'Open "label as" menu',
          keys: ['l'],
        },
        {
          title: 'Open keyboard shortcut help',
          keys: ['?'],
        },
      ],
    },
  ],
}
