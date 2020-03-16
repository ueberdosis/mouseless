/* eslint-disable max-len */
// https://developer.apple.com/library/archive/documentation/IDEs/Conceptual/xcode_help-command_shortcuts/MenuMetas/MenuMetas014.html#//apple_ref/doc/uid/TP40010560-CH2-SW1
module.exports = {
  id: 'xcode',
  title: 'Xcode',
  category: 'Development',
  description: null,
  sets: [
    {
      title: 'General',
      id: 'general',
      version: 1,
      shortcuts: [
        {
          title: 'Preferences…',
          keys: ['Meta', ','],
        },
        {
          title: 'Commit…',
          keys: ['Alt', 'Meta', 'c'],
        },
        {
          title: 'Update…',
          keys: ['Alt', 'Meta', 'x'],
        },
        {
          title: 'Update All',
          keys: ['Control', 'Alt', 'Meta', 'x'],
        },
        {
          title: 'Create Snapshot…',
          keys: ['Control', 'Meta', 's'],
        },
        {
          title: 'Page Setup…',
          keys: ['Shift', 'Meta', 'p'],
        },
        {
          title: 'Print…',
          keys: ['Meta', 'p'],
        },
      ],
    },
    {
      title: 'New/Open',
      id: 'new',
      version: 1,
      shortcuts: [
        {
          title: 'New Tab',
          keys: ['Meta', 't'],
        },
        {
          title: 'New Window',
          keys: ['Shift', 'Meta', 't'],
        },
        {
          title: 'New File…',
          keys: ['Meta', 'n'],
        },
        {
          title: 'New Project…',
          keys: ['Shift', 'Meta', 'n'],
        },
        {
          title: 'New Workspace',
          keys: ['Control', 'Meta', 'n'],
        },
        {
          title: 'New Group',
          keys: ['Alt', 'Meta', 'n'],
        },
        {
          title: 'Add Files…',
          keys: ['Alt', 'Meta', 'a'],
        },
        {
          title: 'Open…',
          keys: ['Meta', 'o'],
        },
        {
          title: 'Open Quickly…',
          keys: ['Shift', 'Meta', 'o'],
        },
      ],
    },
    {
      title: 'Close & Save',
      id: 'close',
      version: 1,
      shortcuts: [
        {
          title: 'Close Window',
          keys: ['Meta', 'w'],
        },
        {
          title: 'Close All Windows',
          keys: ['Alt', 'Meta', 'w'],
        },
        {
          title: 'Close Tab',
          keys: ['Shift', 'Meta', 'w'],
        },
        {
          title: 'Close Other Tabs',
          keys: ['Alt', 'Shift', 'Meta', 'w'],
        },
        {
          title: 'Close Document',
          keys: ['Control', 'Meta', 'w'],
        },
        {
          title: 'Save',
          keys: ['Meta', 's'],
        },
        {
          title: 'Save All',
          keys: ['Alt', 'Meta', 's'],
        },
        {
          title: 'Save Multiple…',
          keys: ['Alt', 'Shift', 'Meta', 's'],
        },
        {
          title: 'Save As…',
          keys: ['Shift', 'Meta', 's'],
        },
      ],
    },
    {
      title: 'Edit',
      id: 'edit',
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
          title: 'Paste Special',
          keys: ['Alt', 'Meta', 'v'],
        },
        {
          title: 'Paste and Match Style',
          keys: ['Alt', 'Shift', 'Meta', 'v'],
        },
        {
          title: 'Duplicate',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Select All',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Filter in Navigator',
          keys: ['Alt', 'Meta', 'j'],
        },
        {
          title: 'Filter in Library',
          keys: ['Alt', 'Meta', 'l'],
        },
        {
          title: 'Show Fonts',
          keys: ['Control', 'Shift', 'Meta', 't'],
        },
        {
          title: 'Show Spelling and Grammar',
          keys: ['Meta', 'Shift', ':'],
        },
      ],
    },
    {
      title: 'Find & Replace',
      id: 'find',
      version: 1,
      shortcuts: [
        {
          title: 'Find in Workspace…',
          keys: ['Shift', 'Meta', 'f'],
        },
        {
          title: 'Find and Replace in Workspace…',
          keys: ['Alt', 'Shift', 'Meta', 'f'],
        },
        {
          title: 'Find…',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Find and Replace…',
          keys: ['Alt', 'Meta', 'f'],
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
          title: 'Use Selection for Find',
          keys: ['Meta', 'e'],
        },
        {
          title: 'Use Selection for Replace',
          keys: ['Shift', 'Meta', 'e'],
        },
      ],
    },
    {
      title: 'View',
      id: 'view',
      version: 1,
      shortcuts: [
        {
          title: 'Project',
          keys: ['Meta', '1'],
        },
        {
          title: 'Symbol',
          keys: ['Meta', '2'],
        },
        {
          title: 'Search',
          keys: ['Meta', '3'],
        },
        {
          title: 'Issue',
          keys: ['Meta', '4'],
        },
        {
          title: 'Debug',
          keys: ['Meta', '5'],
        },
        {
          title: 'Breakpoint',
          keys: ['Meta', '6'],
        },
        {
          title: 'Log',
          keys: ['Meta', '7'],
        },
        {
          title: 'Show Navigator',
          keys: ['Meta', '0'],
        },
        {
          title: 'Standard',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Alt', 'Meta', 'Enter'],
        },
        {
          title: 'Version',
          keys: ['Alt', 'Shift', 'Meta', 'Enter'],
        },
        {
          title: 'Show Related Items',
          keys: ['Control', '1'],
        },
        {
          title: 'Show Previous History',
          keys: ['Control', '2'],
        },
        {
          title: 'Show Previous Files History',
          keys: ['Control', 'Meta', '2'],
        },
        {
          title: 'Show Next History',
          keys: ['Control', '3'],
        },
        {
          title: 'Show Next Files History',
          keys: ['Control', 'Meta', '3'],
        },
        {
          title: 'Show Top Level Items',
          keys: ['Control', '4'],
        },
        {
          title: 'Show Group Files',
          keys: ['Control', '5'],
        },
        {
          title: 'Show Document Items',
          keys: ['Control', '6'],
        },
        {
          title: 'Show Issues',
          keys: ['Control', '7'],
        },
        {
          title: 'Remove Assistant Editor',
          keys: ['Control', 'Shift', 'Meta', 'w'],
        },
        {
          title: 'Reset Editor',
          keys: ['Alt', 'Shift', 'Meta', 'z'],
        },
        {
          title: 'Show Debug area',
          keys: ['Shift', 'Meta', 'y'],
        },
      ],
    },
    {
      title: 'Navigate',
      id: 'navigate',
      version: 1,
      shortcuts: [
        {
          title: 'Reveal in Project Navigator',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Open in Adjacent Editor',
          keys: ['Meta', '<'],
        },
        {
          title: 'Go Forward',
          keys: ['Control', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Go Forward in Alternate Editor',
          keys: ['Control', 'Alt', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Go Back',
          keys: ['Control', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Go Back in Alternate Editor',
          keys: ['Control', 'Alt', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Jump to Selection',
          keys: ['Meta', 'j'],
        },
        {
          title: 'Jump to Definition',
          keys: ['Shift', 'Meta', 'd'],
        },
        {
          title: 'Move Focus To Next Area',
          keys: ['Alt', 'Meta', 'k'],
        },
        {
          title: 'Move Focus To Previous Area',
          keys: ['Alt', 'Shift', 'Meta', 'k'],
        },
      ],
    },
    {
      title: 'Navigate Source Editor',
      id: 'source',
      version: 1,
      shortcuts: [
        {
          title: 'Jump to Counterpart',
          keys: ['Control', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Jump To…',
          keys: ['Shift', 'Meta', 'j'],
        },
        {
          title: 'Jump to Next Placeholder',
          keys: ['Control', '/'],
        },
        {
          title: 'Jump to Previous Placeholder',
          keys: ['Control', '?'],
        },
        {
          title: 'Jump to Next Issue',
          keys: ['Meta', '\''],
        },
        {
          title: 'Jump and Fix Next Issue',
          keys: ['Control', 'Meta', '\''],
        },
        {
          title: 'Jump to Previous Issue',
          keys: ['Meta', '"'],
        },
        {
          title: 'Jump and Fix Previous Issue',
          keys: ['Control', 'Meta', '"'],
        },
      ],
    },
    {
      title: 'Data model',
      id: 'datamodel',
      version: 1,
      shortcuts: [
        {
          title: 'Add Attribute',
          keys: ['Control', 'Meta', 'a'],
        },
        {
          title: 'Add Relationship',
          keys: ['Control', 'Meta', 'r'],
        },
      ],
    },
    {
      title: 'Interface Builder',
      id: 'interface',
      version: 1,
      shortcuts: [
        {
          title: 'Align Left Edges',
          keys: ['Meta', '['],
        },
        {
          title: 'Align Right Edges',
          keys: ['Meta', ']'],
        },
        {
          title: 'Size to Fit',
          keys: ['Meta', '='],
        },
        {
          title: 'Add Horizontal Guide',
          keys: ['Meta', '_'],
        },
        {
          title: 'Add Vertical Guide',
          keys: ['Meta', '|'],
        },
      ],
    },
    {
      title: 'PDF',
      id: 'pdf',
      version: 1,
      shortcuts: [
        {
          title: 'Next Page',
          keys: ['Alt', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Previous Page',
          keys: ['Alt', 'Meta', 'ArrowUp'],
        },
      ],
    },
    {
      title: 'Scripting definition',
      id: 'scripting',
      version: 1,
      shortcuts: [
        {
          title: 'Make Text Bigger',
          keys: ['Meta', '+'],
        },
        {
          title: 'Make Text Smaller',
          keys: ['Meta', '-'],
        },
      ],
    },
    {
      title: 'Source code',
      id: 'source',
      version: 1,
      shortcuts: [
        {
          title: 'Show Completions',
          keys: ['Control', '\\'],
        },
        {
          title: 'Edit All in Scope',
          keys: ['Control', 'Meta', 'e'],
        },
        {
          title: 'Fix All in Scope',
          keys: ['Control', 'Meta', 'f'],
        },
        {
          title: 'Show All Issues',
          keys: ['Control', 'Meta', 'm'],
        },
        {
          title: 'Shift Right',
          keys: ['Meta', ']'],
        },
        {
          title: 'Shift Left',
          keys: ['Meta', '['],
        },
        {
          title: 'Move Line Up',
          keys: ['Alt', 'Meta', '['],
        },
        {
          title: 'Move Line Down',
          keys: ['Alt', 'Meta', ']'],
        },
        {
          title: 'Comment Selection',
          keys: ['Meta', '/'],
        },
        {
          title: 'Fold',
          keys: ['Alt', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Unfold',
          keys: ['Alt', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Fold Methods & Functions',
          keys: ['Alt', 'Shift', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Unfold Methods & Functions',
          keys: ['Alt', 'Shift', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Fold Comment Blocks',
          keys: ['Control', 'Shift', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Unfold Comment Blocks',
          keys: ['Control', 'Shift', 'Meta', 'ArrowRight'],
        },
      ],
    },
    {
      title: 'Hex editor',
      id: 'hex',
      version: 1,
      shortcuts: [
        {
          title: 'Overwrite Mode',
          keys: ['Alt', 'Shift', 'Meta', 'o'],
        },
      ],
    },
    {
      title: 'Run & Test',
      id: 'run',
      version: 1,
      shortcuts: [
        {
          title: 'Run',
          keys: ['Meta', 'r'],
        },
        {
          title: 'Open Run Dialog',
          keys: ['Alt', 'Meta', 'r'],
        },
        {
          title: 'Test',
          keys: ['Meta', 't'],
        },
        {
          title: 'Open Test Dialog',
          keys: ['Alt', 'Meta', 't'],
        },
        {
          title: 'Run Without Building',
          keys: ['Control', 'Meta', 'r'],
        },
        {
          title: 'Test Without Building',
          keys: ['Control', 'Meta', 'u'],
        },
      ],
    },
    {
      title: 'Profile & Analyze',
      id: 'profile',
      version: 1,
      shortcuts: [
        {
          title: 'Profile',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Open Profile Dialog',
          keys: ['Alt', 'Meta', 'i'],
        },
        {
          title: 'Analyze',
          keys: ['Control', 'Meta', 'b'],
        },
        {
          title: 'Open Analyze Dialog',
          keys: ['Control', 'Alt', 'Meta', 'b'],
        },
        {
          title: 'Profile Without Building',
          keys: ['Control', 'Meta', 'i'],
        },
      ],
    },
    {
      title: 'Build',
      id: 'build',
      version: 1,
      shortcuts: [
        {
          title: 'Build For Running',
          keys: ['Shift', 'Meta', 'r'],
        },
        {
          title: 'Build For Testing',
          keys: ['Shift', 'Meta', 'u'],
        },
        {
          title: 'Build for Profiling',
          keys: ['Shift', 'Meta', 'i'],
        },
        {
          title: 'Build',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Clean',
          keys: ['Shift', 'Meta', 'k'],
        },
        {
          title: 'Clean Build Folder…',
          keys: ['Alt', 'Shift', 'Meta', 'k'],
        },
        {
          title: 'Stop',
          keys: ['Meta', '.'],
        },
        {
          title: 'Edit Scheme…',
          keys: ['Meta', '<'],
        },
      ],
    },
    {
      title: 'Debug',
      id: 'debug',
      version: 1,
      shortcuts: [
        {
          title: 'Pause',
          keys: ['Control', 'Meta', 'y'],
        },
        {
          title: 'Step Into',
          keys: ['F7'],
        },
        {
          title: 'Step Over',
          keys: ['F6'],
        },
        {
          title: 'Step Out',
          keys: ['F8'],
        },
        {
          title: 'Step Into Thread',
          keys: ['Control', 'Shift', 'F7'],
        },
        {
          title: 'Step Into Instruction',
          keys: ['Control', 'Meta', 'F7'],
        },
        {
          title: 'Step Over Thread',
          keys: ['Control', 'Shift', 'F6'],
        },
        {
          title: 'Step Over Instruction',
          keys: ['Control', 'F6'],
        },
        {
          title: 'Add Breakpoint at Current Line',
          keys: ['Meta', '\\'],
        },
        {
          title: 'Toggle Breakpoints',
          keys: ['Meta', 'y'],
        },
        {
          title: 'Clear Console',
          keys: ['Meta', 'k'],
        },
      ],
    },
    {
      title: 'Window',
      id: 'window',
      version: 1,
      shortcuts: [
        {
          title: 'Minimize',
          keys: ['Meta', 'm'],
        },
        {
          title: 'Select Next Tab',
          keys: ['Meta', '}'],
        },
        {
          title: 'Select Previous Tab',
          keys: ['Meta', '{'],
        },
        {
          title: 'Organizer',
          keys: ['Shift', 'Meta', '2'],
        },
        {
          title: 'Hide Xcode',
          keys: ['Meta', 'h'],
        },
        {
          title: 'Hide Others',
          keys: ['Alt', 'Meta', 'h'],
        },
        {
          title: 'Quit Xcode',
          keys: ['Meta', 'q'],
        },
      ],
    },
    {
      title: 'Help',
      id: 'help',
      version: 1,
      shortcuts: [
        {
          title: 'Quick Help',
          keys: ['Control', 'Meta', '?'],
        },
        {
          title: 'Search Documentation for Selected Text',
          keys: ['Control', 'Alt', 'Meta', '/'],
        },
        {
          title: 'Developer Documentation',
          keys: ['Alt', 'Meta', '?'],
        },
      ],
    },
  ],
}
