/* eslint-disable max-len */
// https://code.visualstudio.com/docs/getstarted/keybindings#_basic-editing
module.exports = {
  id: 'vscode',
  title: 'Code',
  category: 'Development',
  description: 'Visual Studio Code is an open source code editor that runs everywhere. VS Code comes with so many features and has an amazing support for keyboard shortcuts. Tip: Learn one or two every week.',
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Find',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Replace',
          keys: ['Alt', 'Meta', 'f'],
        },
        {
          title: 'Find Next',
          keys: ['Enter'],
        },
        {
          title: 'Find Previous',
          keys: ['Shift', 'Meta', 'g'],
        },
        {
          title: 'Toggle Line Comment',
          keys: ['Meta', '/'],
        },
        {
          title: 'Toggle Block Comment',
          keys: ['Shift', 'Alt', 'a'],
        },
        {
          title: 'Scroll Line Down',
          keys: ['Control', 'PageDown'],
        },
        {
          title: 'Scroll Line Up',
          keys: ['Control', 'PageUp'],
        },
        {
          title: 'Scroll Page Down',
          keys: ['Meta', 'PageDown'],
        },
        {
          title: 'Scroll Page Up',
          keys: ['Meta', 'PageUp'],
        },
      ],
    },
    {
      title: 'Selections',
      id: 'selections',
      version: 1,
      shortcuts: [
        {
          title: 'Select current line',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Add Selection To Next Find Match',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Select all occurrences of current word',
          keys: ['Meta', 'F2'],
        },
        {
          title: 'Select All Occurrences of Find Match',
          keys: ['Alt', 'Enter'],
        },
        {
          title: 'Select all occurrences of current selection',
          keys: ['Shift', 'Meta', 'l'],
        },
        // {
        //   title: 'Move Last Selection To Next Find Match',
        //   keys: ['⌘K ⌘D'],
        // },
        {
          title: 'Expand AST Selection',
          keys: ['Control', 'Shift', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Shrink AST Selection',
          keys: ['Control', 'Shift', 'Meta', 'ArrowLeft'],
        },
      ],
    },
    {
      title: 'Lines',
      id: 'lines',
      version: 1,
      shortcuts: [
        {
          title: 'Cut line (empty selection)',
          keys: ['Meta', 'x'],
        },
        {
          title: 'Copy line (empty selection)',
          keys: ['Meta', 'c'],
        },
        {
          title: 'Delete Line',
          keys: ['Shift', 'Meta', 'k'],
        },
        {
          title: 'Insert Line Below',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Insert Line Above',
          keys: ['Shift', 'Meta', 'Enter'],
        },
        {
          title: 'Move Line Down',
          keys: ['Alt', 'ArrowDown'],
        },
        {
          title: 'Move Line Up',
          keys: ['Alt', 'ArrowUp'],
        },
        {
          title: 'Copy Line Down',
          keys: ['Shift', 'Alt', 'ArrowDown'],
        },
        {
          title: 'Copy Line Up',
          keys: ['Shift', 'Alt', 'ArrowUp'],
        },
        {
          title: 'Indent Line',
          keys: ['Meta', ']'],
        },
        {
          title: 'Outdent Line',
          keys: ['Meta', '['],
        },
        // {
        //   title: 'Go to Beginning of Line',
        //   keys: ['Home'],
        // },
        {
          title: 'Go to End of Line',
          keys: ['End'],
        },
      ],
    },
    {
      title: 'Cursors',
      id: 'cursors',
      version: 1,
      shortcuts: [
        {
          title: 'Undo last cursor operation',
          keys: ['Meta', 'u'],
        },
        {
          title: 'Insert cursor at end of each line selected',
          keys: ['Shift', 'Alt', 'i'],
        },
        {
          title: 'Insert Cursor Below',
          keys: ['Alt', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Insert Cursor Above',
          keys: ['Alt', 'Meta', 'ArrowUp'],
        },
      ],
    },
    {
      title: 'Rich Languages Editing',
      id: 'rich',
      version: 1,
      shortcuts: [
        {
          title: 'Trigger Suggest',
          keys: ['Control', 'Space'],
        },
        {
          title: 'Trigger Parameter Hints',
          keys: ['Shift', 'Meta', 'Space'],
        },
        {
          title: 'Format Document',
          keys: ['Shift', 'Alt', 'f'],
        },
        // {
        //   title: 'Format Selection',
        //   keys: ['⌘K ⌘F'],
        // },
        {
          title: 'Go to Definition',
          keys: ['F12'],
        },
        // {
        //   title: 'Show Hover',
        //   keys: ['⌘K ⌘I'],
        // },
        {
          title: 'Peek Definition',
          keys: ['Alt', 'F12'],
        },
        // {
        //   title: 'Open Definition to the Side',
        //   keys: ['⌘K F12'],
        // },
        {
          title: 'Quick Fix',
          keys: ['Meta', '.'],
        },
        {
          title: 'Peek References',
          keys: ['Shift', 'F12'],
        },
        {
          title: 'Rename Symbol',
          keys: ['F2'],
        },
        {
          title: 'Replace with Next Value',
          keys: ['Shift', 'Meta', '.'],
        },
        {
          title: 'Replace with Previous Value',
          keys: ['Shift', 'Meta', ','],
        },
        // {
        //   title: 'Trim Trailing Whitespace',
        //   keys: ['⌘K ⌘X'],
        // },
        // {
        //   title: 'Change Language Mode',
        //   keys: ['⌘K M'],
        // },
      ],
    },
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        {
          title: 'Show All Symbols',
          keys: ['Meta', 't'],
        },
        {
          title: 'Go to Line…',
          keys: ['Control', 'g'],
        },
        {
          title: 'Go to File…, Quick Open',
          keys: ['Meta', 'p'],
        },
        {
          title: 'Go to Symbol…',
          keys: ['Shift', 'Meta', 'o'],
        },
        {
          title: 'Show Problems',
          keys: ['Shift', 'Meta', 'm'],
        },
        {
          title: 'Go to Next Error or Warning',
          keys: ['F8'],
        },
        {
          title: 'Go to Previous Error or Warning',
          keys: ['Shift', 'F8'],
        },
        {
          title: 'Show All Commands',
          keys: ['Shift', 'Meta', 'p'],
        },
        {
          title: 'Navigate Editor Group History',
          keys: ['Control', 'Shift', 'Tab'],
        },
        {
          title: 'Go Back',
          keys: ['Control', '-'],
        },
        // Duplicated
        // {
        //   title: 'Go back in Quick Input',
        //   keys: ['Control', '-'],
        // },
        {
          title: 'Go Forward',
          keys: ['Control', 'Shift', '-'],
        },
        {
          title: 'Go to End of File',
          keys: ['Meta', 'ArrowDown'],
        },
        {
          title: 'Go to Beginning of File',
          keys: ['Meta', 'ArrowUp'],
        },
      ],
    },
    {
      title: 'Window Management',
      id: 'window',
      version: 1,
      shortcuts: [
        {
          title: 'New Window',
          keys: ['Shift', 'Meta', 'n'],
        },
        {
          title: 'Close Window',
          keys: ['Shift', 'Meta', 'w'],
        },
        {
          title: 'Close Editor',
          keys: ['Meta', 'w'],
        },
        // {
        //   title: 'Close Folder',
        //   keys: ['⌘K F'],
        // },
        {
          title: 'Split Editor',
          keys: ['Meta', '\\'],
        },
        {
          title: 'Focus into First Editor Group',
          keys: ['Meta', '1'],
        },
        {
          title: 'Focus into Second Editor Group',
          keys: ['Meta', '2'],
        },
        {
          title: 'Focus into Third Editor Group',
          keys: ['Meta', '3'],
        },
        // {
        //   title: 'Move Editor Left',
        //   keys: ['⌘K ⇧⌘←'],
        // },
        // {
        //   title: 'Move Editor Right',
        //   keys: ['⌘K ⇧⌘→'],
        // },
        // {
        //   title: 'Move Active Editor Group Left',
        //   keys: ['⌘K ←'],
        // },
        // {
        //   title: 'Move Active Editor Group Right',
        //   keys: ['⌘K →'],
        // },
        {
          title: 'Move Editor into Next Group',
          keys: ['Control', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Move Editor into Previous Group',
          keys: ['Control', 'Meta', 'ArrowLeft'],
        },
      ],
    },
    {
      title: 'File Management',
      id: 'files',
      version: 1,
      shortcuts: [
        {
          title: 'New File',
          keys: ['Meta', 'n'],
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
          title: 'Save As…',
          keys: ['Shift', 'Meta', 's'],
        },
        {
          title: 'Close',
          keys: ['Meta', 'w'],
        },
        {
          title: 'Close Others',
          keys: ['Alt', 'Meta', 't'],
        },
        // {
        //   title: 'Close Group',
        //   keys: ['⌘K W'],
        // },
        // {
        //   title: 'Close All',
        //   keys: ['⌘K ⌘W'],
        // },
        {
          title: 'Reopen Closed Editor',
          keys: ['Shift', 'Meta', 't'],
        },
        // {
        //   title: 'Keep Open',
        //   keys: ['⌘K Enter'],
        // },
        {
          title: 'Open Next',
          keys: ['Control', 'Tab'],
        },
        {
          title: 'Open Previous',
          keys: ['Control', 'Shift', 'Tab'],
        },
        // {
        //   title: 'Copy Path of Active File',
        //   keys: ['⌘K P'],
        // },
        // {
        //   title: 'Reveal Active File in Windows',
        //   keys: ['⌘K R'],
        // },
        // {
        //   title: 'Show Opened File in New Window',
        //   keys: ['⌘K O'],
        // },
      ],
    },
    {
      title: 'Display',
      id: 'display',
      version: 1,
      shortcuts: [
        {
          title: 'Toggle Full Screen',
          keys: ['Control', 'Meta', 'f'],
        },
        // {
        //   title: 'Toggle Zen Mode',
        //   keys: ['⌘K Z'],
        // },
        // {
        //   title: 'Leave Zen Mode',
        //   keys: ['Escape Escape'],
        // },
        {
          title: 'Zoom in',
          keys: [
            ['Meta', '='],
            ['Meta', '+'],
          ],
        },
        {
          title: 'Zoom out',
          keys: ['Meta', '-'],
        },
        // {
        //   title: 'Reset Zoom',
        //   keys: ['Meta', 'Numpad0'],
        // },
        {
          title: 'Toggle Sidebar Visibility',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Show Explorer / Toggle Focus',
          keys: ['Shift', 'Meta', 'e'],
        },
        {
          title: 'Show Search',
          keys: ['Shift', 'Meta', 'f'],
        },
        {
          title: 'Show Source Control',
          keys: ['Control', 'Shift', 'g'],
        },
        {
          title: 'Show Debug',
          keys: ['Shift', 'Meta', 'd'],
        },
        {
          title: 'Show Extensions',
          keys: ['Shift', 'Meta', 'x'],
        },
        {
          title: 'Show Output',
          keys: ['Shift', 'Meta', 'u'],
        },
        {
          title: 'Quick Open View',
          keys: ['Control', 'q'],
        },
        {
          title: 'Open New Command Prompt',
          keys: ['Shift', 'Meta', 'c'],
        },
        {
          title: 'Toggle Markdown Preview',
          keys: ['Shift', 'Meta', 'v'],
        },
        // {
        //   title: 'Open Preview to the Side',
        //   keys: ['⌘K V'],
        // },
        {
          title: 'Toggle Integrated Terminal',
          keys: ['Control', '`'],
        },
      ],
    },
    {
      title: 'Search',
      id: 'search',
      version: 1,
      shortcuts: [
        {
          title: 'Show Search',
          keys: ['Shift', 'Meta', 'f'],
        },
        {
          title: 'Replace in Files',
          keys: ['Shift', 'Meta', 'h'],
        },
        {
          title: 'Toggle Match Case',
          keys: ['Alt', 'Meta', 'c'],
        },
        {
          title: 'Toggle Match Whole Word',
          keys: ['Alt', 'Meta', 'w'],
        },
        {
          title: 'Toggle Use Regular Expression',
          keys: ['Alt', 'Meta', 'r'],
        },
        {
          title: 'Toggle Search Details',
          keys: ['Shift', 'Meta', 'j'],
        },
        {
          title: 'Focus Next Search Result',
          keys: ['F4'],
        },
        {
          title: 'Focus Previous Search Result',
          keys: ['Shift', 'F4'],
        },
        {
          title: 'Show Next Search Term',
          keys: ['ArrowDown'],
        },
        {
          title: 'Show Previous Search Term',
          keys: ['ArrowUp'],
        },
      ],
    },
    // {
    //   title: 'Preferences',
    //   id: 'preferences',
    //   version: 1,
    //   shortcuts: [
    //     {
    //       title: 'Open Settings',
    //       keys: ['Meta', ','],
    //     },
    //     // {
    //     //   title: 'Open Keyboard Shortcuts',
    //     //   keys: ['⌘K ⌘S'],
    //     // },
    //     // {
    //     //   title: 'Select Color Theme',
    //     //   keys: ['⌘K ⌘T'],
    //     // },
    //   ],
    // },
    {
      title: 'Debug',
      id: 'debug',
      version: 1,
      shortcuts: [
        {
          title: 'Toggle Breakpoint',
          keys: ['F9'],
        },
        {
          title: 'Start',
          keys: ['F5'],
        },
        // Duplicated
        // {
        //   title: 'Continue',
        //   keys: ['F5'],
        // },
        {
          title: 'Start (without debugging)',
          keys: ['Control', 'F5'],
        },
        {
          title: 'Pause',
          keys: ['F6'],
        },
        {
          title: 'Step Into',
          keys: ['F11'],
        },
        {
          title: 'Step Out',
          keys: ['Shift', 'F11'],
        },
        {
          title: 'Step Over',
          keys: ['F10'],
        },
        {
          title: 'Stop',
          keys: ['Shift', 'F5'],
        },
        // {
        //   title: 'Show Hover',
        //   keys: ['⌘K ⌘I'],
        // },
      ],
    },
    {
      title: 'Miscellaneous',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Jump to matching bracket',
          keys: ['Shift', 'Meta', '\\'],
        },
        {
          title: 'Fold (collapse) region',
          keys: ['Alt', 'Meta', '['],
        },
        {
          title: 'Unfold (uncollapse) region',
          keys: ['Alt', 'Meta', ']'],
        },
        // {
        //   title: 'Fold (collapse) all subregions',
        //   keys: ['⌘K ⌘['],
        // },
        // {
        //   title: 'Unfold (uncollapse) all subregions',
        //   keys: ['⌘K ⌘]'],
        // },
        // {
        //   title: 'Fold (collapse) all regions',
        //   keys: ['⌘K ⌘0'],
        // },
        // {
        //   title: 'Unfold (uncollapse) all regions',
        //   keys: ['⌘K ⌘J'],
        // },
        {
          title: 'Toggle Find Case Sensitive',
          keys: ['Alt', 'Meta', 'c'],
        },
        {
          title: 'Toggle Find Regex',
          keys: ['Alt', 'Meta', 'r'],
        },
        {
          title: 'Toggle Find Whole Word',
          keys: ['Alt', 'Meta', 'w'],
        },
        {
          title: 'Toggle Use of Tab Key for Setting Focus',
          keys: ['Control', 'Shift', 'm'],
        },
        {
          title: 'Toggle Word Wrap',
          keys: ['Alt', 'z'],
        },
        // {
        //   title: 'Add Line Comment',
        //   keys: ['⌘K ⌘C'],
        // },
        // {
        //   title: 'Remove Line Comment',
        //   keys: ['⌘K ⌘U'],
        // },
      ],
    },
  ],
}
