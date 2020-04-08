module.exports = {
  id: 'superhuman',
  title: 'Superhuman',
  category: 'Communication',
  description: null,
  sets: [
    {
      title: 'Actions',
      id: 'actions',
      version: 1,
      shortcuts: [
        {
          title: 'Superhuman Command',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Search',
          keys: ['/'],
        },
        {
          title: 'Undo',
          keys: ['z'],
        },
        {
          title: 'Shortcuts',
          keys: ['?'],
        },
        {
          title: 'Select Conversation',
          keys: ['x'],
        },
        {
          title: 'Add Selection Left',
          keys: ['Shift', 'j'],
        },
        {
          title: 'Add Selection Right',
          keys: ['Shift', 'k'],
        },
      ],
    },
    {
      title: 'Filters',
      id: 'filters',
      version: 1,
      shortcuts: [
        {
          title: 'Unread',
          keys: ['Shift', 'u'],
        },
        {
          title: 'Starred',
          keys: ['Shift', 's'],
        },
        {
          title: 'Important',
          keys: ['Shift', 'i'],
        },
        {
          title: 'No Reply',
          keys: ['Shift', 'r'],
        },
      ],
    },
    {
      title: 'Messages',
      id: 'messages',
      version: 1,
      shortcuts: [
        {
          title: 'Compose',
          keys: ['c'],
        },
        {
          title: 'Reply All',
          keys: ['Enter'],
        },
        {
          title: 'Reply',
          keys: ['r'],
        },
        {
          title: 'Forward',
          keys: ['f'],
        },
        {
          title: 'Open Links & Attachments',
          keys: ['Meta', 'o'],
        },
        {
          title: 'Cycle through Links & Dates',
          keys: ['Tab'],
        },
        {
          title: 'Expand Message',
          keys: ['o'],
        },
        {
          title: 'Expand All Messages',
          keys: ['Shift', 'o'],
        },
      ],
    },
    {
      title: 'Conversations',
      id: 'conversations',
      version: 1,
      shortcuts: [
        {
          title: 'Open Conversation',
          keys: ['Enter'],
        },
        {
          title: 'Next Conversation',
          keys: ['j'],
        },
        {
          title: 'Previous Conversation',
          keys: ['k'],
        },
        {
          title: 'Mark Done (Archive)',
          keys: ['e'],
        },
        {
          title: 'Mark Not Done',
          keys: ['Shift', 'e'],
        },
        {
          title: 'Remind Me (Snooze)',
          keys: ['h'],
        },
        {
          title: 'Star',
          keys: ['s'],
        },
        {
          title: 'Mark Read or Unread',
          keys: ['u'],
        },
        {
          title: 'Trash',
          keys: ['#'],
        },
        {
          title: 'Mark Spam',
          keys: ['!'],
        },
        {
          title: 'Mute',
          keys: ['Shift', 'm'],
        },
        {
          title: 'Unsubscribe',
          keys: ['Meta', 'u'],
        },
      ],
    },
    {
      title: 'Format',
      id: 'format',
      version: 1,
      shortcuts: [
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
          title: 'Hyperlink',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Color',
          keys: ['Meta', 'o'],
        },
        {
          title: 'Strikethrough',
          keys: ['Meta', 'Shift', 'x'],
        },
        {
          title: 'Numbers',
          keys: ['Meta', 'Shift', '7'],
        },
        {
          title: 'Bullets',
          keys: ['Meta', 'Shift', '8'],
        },
        {
          title: 'Quote',
          keys: ['Meta', 'Shift', '9'],
        },
        {
          title: 'Indent List',
          keys: ['Tab'],
        },
        {
          title: 'Outdent List',
          keys: ['Shift', 'Tab'],
        },
        {
          title: 'Increase Indent',
          keys: ['Meta', ']'],
        },
        {
          title: 'Decrease Indent',
          keys: ['Meta', '['],
        },
      ],
    },
    {
      title: 'Labels',
      id: 'labels',
      version: 1,
      shortcuts: [
        {
          title: 'Add or Remove Label',
          keys: ['l'],
        },
        {
          title: 'Remove Label',
          keys: ['y'],
        },
        {
          title: 'Remove Label, Next',
          keys: ['['],
        },
        {
          title: 'Remove Label, Previous',
          keys: [']'],
        },
        {
          title: 'Remove All Labels',
          keys: ['Shift', 'y'],
        },
        {
          title: 'Move',
          keys: ['v'],
        },
      ],
    },
    {
      title: 'Calendar',
      id: 'calendar',
      version: 1,
      shortcuts: [
        {
          title: 'Toggle Calendar',
          keys: ['0'],
        },
        {
          title: 'Previous Day',
          keys: ['-'],
        },
        {
          title: 'Next Day',
          keys: ['='],
        },
      ],
    },
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        {
          title: 'Move Focus Left',
          keys: ['ArrowLeft'],
        },
        {
          title: 'Move Focus Right',
          keys: ['ArrowRight'],
        },
        {
          title: 'Move Focus Up',
          keys: ['ArrowUp'],
        },
        {
          title: 'Move Focus Down',
          keys: ['ArrowDown'],
        },
        {
          title: 'Next Split',
          keys: ['Tab'],
        },
        {
          title: 'Previous Split',
          keys: ['Shift', 'Tab'],
        },
        {
          title: 'Next Message',
          keys: ['n'],
        },
        {
          title: 'Previous Message',
          keys: ['p'],
        },
        {
          title: 'Scroll Down',
          keys: ['Space'],
        },
        {
          title: 'Scroll Up',
          keys: ['Shift', 'Space'],
        },
        {
          title: 'Jump to Top',
          keys: ['Meta', 'ArrowUp'],
        },
        {
          title: 'Jump to Bottom',
          keys: ['Meta', 'ArrowDown'],
        },
        {
          title: 'New Window',
          keys: ['Meta', 'n'],
        },
        {
          title: 'Switch to Account 1',
          keys: ['Control', '1'],
        },
        {
          title: 'Switch Account 3',
          keys: ['Control', '3'],
        },
        {
          title: 'Copy Page Link',
          keys: ['Control', '/'],
        },
        {
          title: 'Back',
          keys: ['Escape'],
        },
      ],
    },
    {
      title: 'Tabs',
      id: 'tabs',
      version: 1,
      shortcuts: [
        {
          title: 'New Tab',
          keys: ['Meta', 't'],
        },
        {
          title: 'Next Tab',
          keys: ['Meta', 'Shift', ']'],
        },
        {
          title: 'Previous Tab',
          keys: ['Meta', 'Shift', '['],
        },
        {
          title: 'Switch to Tab 1',
          keys: ['Meta', '1'],
        },
        {
          title: 'Switch to Tab 3',
          keys: ['Meta', '3'],
        },
        {
          title: 'Close Tab',
          keys: ['Meta', 'w'],
        },
      ],
    },
    {
      title: 'Zoom',
      id: 'zoom',
      version: 1,
      shortcuts: [
        {
          title: 'Increase Font Size',
          keys: [
            ['Meta', '='],
            ['Meta', '+'],
          ],
        },
        {
          title: 'Decrease Font Size',
          keys: ['Meta', '-'],
        },
        {
          title: 'Reset Font Size',
          keys: ['Meta', '0'],
        },
      ],
    },
    {
      title: 'Compose',
      id: 'compose',
      version: 1,
      shortcuts: [
        {
          title: 'To',
          keys: ['Meta', 'Shift', 'o'],
        },
        {
          title: 'Cc',
          keys: ['Meta', 'Shift', 'c'],
        },
        {
          title: 'Bcc',
          keys: ['Meta', 'Shift', 'b'],
        },
        {
          title: 'From',
          keys: ['Meta', 'Shift', 'f'],
        },
        {
          title: 'Edit Subject',
          keys: ['Meta', 'Shift', 's'],
        },
        {
          title: 'Edit Message',
          keys: ['Meta', 'Shift', 'm'],
        },
        {
          title: 'Attach',
          keys: ['Meta', 'Shift', 'a'],
        },
        {
          title: 'Discard Draft',
          keys: ['Meta', 'Shift', ','],
        },
        {
          title: 'Move Contacts to Bcc',
          keys: ['Meta', 'Shift', 'i'],
        },
        {
          title: 'Remind Me',
          keys: ['Meta', 'Shift', 'h'],
        },
        {
          title: 'Send Later',
          keys: ['Meta', 'Shift', 'l'],
        },
        {
          title: 'Use Snippet',
          keys: ['Meta', ';'],
        },
        {
          title: 'Send',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Send & Mark Done',
          keys: ['Meta', 'Shift', 'Enter'],
        },
        {
          title: 'Instant Send',
          keys: ['Meta', 'Shift', 'z'],
        },
      ],
    },
    {
      title: 'Pop Out Compose',
      id: 'pop_out_compose',
      version: 1,
      shortcuts: [
        {
          title: 'Pop Draft In or Out',
          keys: ['Meta', 'Shift', 'p'],
        },
        {
          title: 'Pop Out Reply',
          keys: ['Shift', 'r'],
        },
        {
          title: 'Pop Out Reply-all',
          keys: ['Shift', 'Enter'],
        },
        {
          title: 'Pop Out New Message',
          keys: ['Shift', 'c'],
        },
        {
          title: 'Pop Out Forward',
          keys: ['Shift', 'f'],
        },
        {
          title: 'Pop Out a Draft & Search',
          keys: ['Meta', '/'],
        },
        {
          title: 'Switch to or from a Draft',
          keys: ['Meta', 'd'],
        },
      ],
    },
  ],
}
