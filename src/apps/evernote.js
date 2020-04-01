// https://help.evernote.com/hc/en-us/articles/208313358
module.exports = {
  id: 'evernote',
  title: 'Evernote',
  category: 'Productivity',
  sets: [
    {
      title: 'Global',
      id: 'global',
      version: 1,
      shortcuts: [
        {
          title: 'Quick Note',
          keys: ['Control', 'Meta', 'n'],
        },
        {
          title: 'New Note Window',
          keys: ['Control', 'Alt', 'Meta', 'n'],
        },
        {
          title: 'Paste to Evernote',
          keys: ['Control', 'Meta', 'v'],
        },
        {
          title: 'Clip Rectangle or Window',
          keys: ['Control', 'Meta', 'c'],
        },
        {
          title: 'Search in Evernote',
          keys: ['Control', 'Meta', 'e'],
        },
      ],
    },
    {
      title: 'Application-wide',
      id: 'application',
      version: 1,
      shortcuts: [
        {
          title: 'New Note',
          keys: ['Meta', 'n'],
        },
        {
          title: 'New Chat',
          keys: ['Alt', 'Shift', 'Meta', 'n'],
        },
        {
          title: 'New Notebook',
          keys: ['Shift', 'Meta', 'n'],
        },
        {
          title: 'New Tag',
          keys: ['Control', 'Meta', 't'],
        },
        {
          title: 'New Window',
          keys: ['Alt', 'Meta', 'n'],
        },
        {
          title: 'New Tab',
          keys: ['Meta', 't'],
        },
        {
          title: 'Sync',
          keys: ['Control', 'Meta', 's'],
        },
        {
          title: 'Close',
          keys: ['Meta', 'w'],
        },
        {
          title: 'Save',
          keys: ['Meta', 's'],
        },
        {
          title: 'Quick Look Attachments',
          keys: ['Meta', 'y'],
        },
        {
          title: 'Print',
          keys: ['Meta', 'p'],
        },
        {
          title: 'Show/Hide Toolbar',
          keys: ['Alt', 'Meta', 't'],
        },
        {
          title: 'Show/Hide Sidebar',
          keys: ['Alt', 'Meta', 's'],
        },
        {
          title: 'Work Chat',
          keys: ['Alt', 'Meta', '0'],
        },
        {
          title: 'Notes',
          keys: ['Alt', 'Meta', '1'],
        },
        {
          title: 'Notebooks',
          keys: ['Alt', 'Meta', '2'],
        },
        {
          title: 'Tags',
          keys: ['Alt', 'Meta', '3'],
        },
        {
          title: 'Atlas / Business Home',
          description: 'Evernote Business only',
          keys: ['Alt', 'Meta', '4'],
        },
        {
          title: 'Atlas',
          description: 'Evernote Business only',
          keys: ['Alt', 'Meta', '5'],
        },
        {
          title: 'Announcements',
          description: 'Evernote Business only',
          keys: ['Alt', 'Meta', '6'],
        },
        {
          title: 'Announcements',
          description: 'Evernote Business only',
          keys: ['Alt', 'Meta', '7'],
        },
        {
          title: 'Show All Notes',
          keys: ['Shift', 'Meta', 'a'],
        },
        {
          title: 'Jump to Notebook',
          keys: ['Meta', 'j'],
        },
        {
          title: 'Jump to Tag',
          keys: ['Shift', 'Meta', 'j'],
        },
        {
          title: 'Select Note List',
          keys: ['Meta', '|'],
        },
        {
          title: 'Back',
          keys: ['Meta', '['],
        },
        {
          title: 'Forward',
          keys: ['Meta', ']'],
        },
        {
          title: 'Enter Full Screen',
          keys: ['Control', 'Meta', 'f'],
        },
        {
          title: 'Go to Shortcut 3',
          keys: ['Meta', '3'],
        },
        {
          title: 'Preferences',
          keys: ['Meta', ','],
        },
        {
          title: 'Switch User',
          keys: ['Control', 'Meta', 'a'],
        },
        {
          title: 'Hide Evernote',
          keys: ['Meta', 'h'],
        },
        {
          title: 'Hide Others',
          keys: ['Alt', 'Meta', 'h'],
        },
        {
          title: 'Quit Evernote',
          keys: ['Meta', 'q'],
        },
        {
          title: 'Minimize',
          keys: ['Meta', 'm'],
        },
        {
          title: 'Zoom',
          keys: ['/'],
        },
      ],
    },
    {
      title: 'Note Editor',
      id: 'note',
      version: 1,
      shortcuts: [
        {
          title: 'Undo',
          keys: ['Meta', 'z'],
        },
        {
          title: 'Redo',
          keys: ['Shift', 'Meta', 'z'],
        },
        {
          title: 'Cut',
          keys: ['Meta', 'x'],
        },
        {
          title: 'Copy',
          keys: ['Meta', 'c'],
        },
        {
          title: 'Paste',
          keys: ['Meta', 'v'],
        },
        {
          title: 'Paste and Match Style',
          keys: ['Shift', 'Meta', 'v'],
        },
        {
          title: 'Select All',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Encrypt Selected Text',
          keys: ['Shift', 'Meta', 'x'],
        },
        {
          title: 'Search Notes',
          keys: ['Alt', 'Meta', 'f'],
        },
        {
          title: 'Reset Search',
          keys: ['Meta', 'r'],
        },
        {
          title: 'Find Within Note',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Find Next',
          keys: ['Meta', 'g'],
        },
        {
          title: 'Find Previous',
          keys: ['Shift', 'Meta', 'g'],
        },
        {
          title: 'Show Spelling and Grammar',
          keys: ['Meta', ':'],
        },
        {
          title: 'Check Document Now',
          keys: ['Meta', ';'],
        },
        {
          title: 'Emoji & Symbols',
          keys: ['Control', 'Meta', 'Space'],
        },
        {
          title: 'Copy Public Link',
          keys: ['Meta', '/'],
        },
        {
          title: 'Present',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Present on Another Screen',
          keys: ['Alt', 'Meta', 'Enter'],
        },
        {
          title: 'Edit Note Title',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Edit Tags',
          keys: ['Meta', '\''],
        },
        {
          title: 'Show/Hide Note Info',
          keys: ['Shift', 'Meta', 'i'],
        },
        {
          title: 'Copy Note Link',
          keys: ['Control', 'Alt', 'Meta', 'c'],
        },
        {
          title: 'Move To Notebook',
          keys: ['Control', 'Meta', 'm'],
        },
        {
          title: 'Merge Notes',
          keys: ['Shift', 'Meta', 'm'],
        },
        {
          title: 'Show Colors',
          keys: ['Shift', 'Meta', 'c'],
        },
        {
          title: 'Align Left',
          keys: ['Alt', 'Meta', '{'],
        },
        {
          title: 'Center',
          keys: ['Alt', 'Meta', '|'],
        },
        {
          title: 'Align Right',
          keys: ['Alt', 'Meta', '}'],
        },
        {
          title: 'Increase Indent Level',
          keys: ['Shift', 'Meta', ']'],
        },
        {
          title: 'Decrease Indent Level',
          keys: ['Shift', 'Meta', '['],
        },
        {
          title: 'Toggle Bulleted List',
          keys: ['Shift', 'Meta', 'u'],
        },
        {
          title: 'Toggle Numbered List',
          keys: ['Shift', 'Meta', 'o'],
        },
        {
          title: 'Increase List Level',
          keys: ['Tab'],
        },
        {
          title: 'Decrease List Level',
          keys: ['Shift', 'Tab'],
        },
        {
          title: 'Insert Table',
          keys: ['Shift', 'Meta', 'l'],
        },
        {
          title: 'Add Link',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Remove Link',
          keys: ['Shift', 'Meta', 'k'],
        },
        {
          title: 'Bold',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Italic',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Underline',
          keys: ['Meta', 'u'],
        },
        {
          title: 'Strikethrough',
          keys: ['Control', 'Meta', 'k'],
        },
        {
          title: 'Highlight',
          keys: ['Control', 'Meta', 'h'],
        },
        {
          title: 'Superscript',
          keys: ['Control', 'Meta', '+'],
        },
        {
          title: 'Subscript',
          keys: ['Control', 'Meta', '-'],
        },
        {
          title: 'Bigger',
          keys: ['Meta', '+'],
        },
        {
          title: 'Smaller',
          keys: ['Meta', '-'],
        },
        {
          title: 'Insert To-do',
          keys: ['Shift', 'Meta', 't'],
        },
        {
          title: 'Insert Horizontal Rule',
          keys: ['Shift', 'Meta', 'h'],
        },
        {
          title: 'Insert Date',
          keys: ['Shift', 'Meta', 'd'],
        },
        {
          title: 'Insert Time',
          keys: ['Alt', 'Shift', 'Meta', 'd'],
        },
        {
          title: 'Simplify Formatting',
          keys: ['Shift', 'Meta', 'f'],
        },
      ],
    },
  ],
}
