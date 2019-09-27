// https://www.sketch.com/docs/shortcuts/
export default {
  id: 'sketch',
  title: 'Sketch',
  groups: [
    {
      title: 'General Shortcuts',
      id: 'general',
      version: 1,
      shortcuts: [
        {
          title: 'Copy',
          keys: ['meta', 'c'],
        },
        {
          title: 'Cut',
          keys: ['meta', 'x'],
        },
        {
          title: 'Paste',
          keys: ['meta', 'v'],
        },
        {
          title: 'Paste over selection',
          keys: ['shift', 'meta', 'v'],
        },
        {
          title: 'New page',
          keys: ['shift', 'meta', 'n'],
        },
        {
          title: 'Run custom plugin',
          keys: ['control', 'meta', 'k'],
        },
        {
          title: 'Undo',
          keys: ['meta', 'z'],
        },
        {
          title: 'Redo',
          keys: ['shift', 'meta', 'redo'],
        },
        {
          title: 'Page setup',
          keys: ['shift', 'meta', 'p'],
        },
        {
          title: 'Open Preferences window',
          keys: ['meta', ','],
        },
        {
          title: 'Quit Sketch',
          keys: ['meta', 'q'],
        },
        {
          title: 'Open the Help menu',
          keys: ['shift', 'meta', '?'],
        },
        {
          title: 'Open Preview window',
          keys: ['meta', 'p'],
        },
      ],
    },
    {
      title: 'View',
      id: 'view',
      version: 1,
      shortcuts: [
        {
          title: 'Hide Sketch',
          keys: ['meta', 'h'],
        },
        {
          title: 'Zoom in',
          keys: ['meta', '+'],
        },
        {
          title: 'Zoom out',
          keys: ['meta', '-'],
        },
        {
          title: 'Show/hide rulers',
          keys: ['control', 'r'],
        },
        {
          title: 'Show/hide pixels',
          keys: ['control', 'p'],
        },
        {
          title: 'Show/hide pixel grid',
          keys: ['control', 'x'],
        },
        {
          title: 'Show/hide grid',
          keys: ['control', 'g'],
        },
        {
          title: 'Show/hide layout',
          keys: ['control', 'l'],
        },
        {
          title: 'Show/hide slices',
          keys: ['control', 'e'],
        },
        {
          title: 'Show/hide prototyping',
          keys: ['control', 'f'],
        },
        {
          title: 'Filter in Layer List',
          keys: ['meta', 'f'],
        },
      ],
    },
    {
      title: 'Documents',
      id: 'documents',
      version: 1,
      shortcuts: [
        {
          title: 'New document',
          keys: ['meta', 'n'],
        },
        {
          title: 'Open document',
          keys: ['meta', 'o'],
        },
        {
          title: 'Close window',
          keys: ['meta', 'w'],
        },
        {
          title: 'Save document',
          keys: ['meta', 's'],
        },
        {
          title: 'Duplicate document',
          keys: ['shift', 'meta', 's'],
        },
        {
          title: 'Save document as…',
          keys: ['alt', 'shift', 'meta', 's'],
        },
      ],
    },
    {
      title: 'Inserting Layers',
      id: 'insertinglayers',
      version: 1,
      shortcuts: [
        {
          title: 'Rectangle',
          keys: ['r'],
        },
        {
          title: 'Oval',
          keys: ['o'],
        },
        {
          title: 'Line',
          keys: ['l'],
        },
        {
          title: 'Rounded rectangle',
          keys: ['u'],
        },
        {
          title: 'Vector tool',
          keys: ['v'],
        },
        {
          title: 'Pencil tool',
          keys: ['p'],
        },
        {
          title: 'Text tool',
          keys: ['t'],
        },
        {
          title: 'Artboard tool',
          keys: ['a'],
        },
        {
          title: 'Slice tool',
          keys: ['s'],
        },
        {
          title: 'Hotspot tool',
          keys: ['h'],
        },
      ],
    },
    {
      title: 'Selecting Layers',
      id: 'selectinglayers',
      version: 1,
      shortcuts: [
        {
          title: 'Select all',
          keys: ['meta', 'a'],
        },
        {
          title: 'Select all Artboards',
          keys: ['shift', 'meta', 'a'],
        },
        {
          title: 'Reveal selection in Layer List',
          keys: ['shift', 'meta', 'j'],
        },
      ],
    },
    {
      title: 'Resizing Layers',
      id: 'resizinglayers',
      version: 1,
      shortcuts: [
        {
          title: 'Duplicate',
          keys: ['meta', 'd'],
        },
        {
          title: 'Scale Layer',
          keys: ['meta', 'k'],
        },
        // TODO: Multiple bindings
        // Nudge layer any direction by 1 px*
        // Nudge layer any direction by 10 px*
        // Expand by 1 px
        // Contract by 1 px
        // Expand by 10 px
        // Contract by 10 px
      ],
    },
    {
      title: 'Editing Layers',
      id: 'editinglayers',
      version: 1,
      shortcuts: [
        {
          title: 'Edit layer',
          keys: ['enter'],
        },
        {
          title: 'Finish editing',
          keys: ['Escape'],
        },
        {
          title: 'Focus X position input field in the Inspector',
          keys: ['alt', 'tab'],
        },
        {
          title: 'Delete layer',
          keys: ['backspace'],
        },
        {
          title: 'Copy style',
          keys: ['alt', 'meta', 'c'],
        },
        {
          title: 'Paste style',
          keys: ['alt', 'meta', 'v'],
        },
        {
          title: 'Sync shared style',
          keys: ['control', 's'],
        },
        {
          title: 'Reset shared style',
          keys: ['alt', 'control', 's'],
        },
        {
          title: 'Add link to Artboard',
          keys: ['w'],
        },
        {
          title: 'Toggle fill',
          keys: ['f'],
        },
        {
          title: 'Toggle border',
          keys: ['b'],
        },
        {
          title: 'Pick color',
          keys: ['control', 'c'],
        },
        // TODO: Multiple bindings 0-9
        // {
        //   title: 'Edit layer opacity',
        //   keys: [''],
        // },
        {
          title: 'Transform shape',
          keys: ['shift', 'meta', 't'],
        },
        {
          title: 'Rotate layer',
          keys: ['shift', 'meta', 'r'],
        },
        {
          title: 'Use as mask',
          keys: ['ctrl', 'meta', 'm'],
        },
        {
          title: 'Return to instance',
          keys: ['meta', 'Escape'],
        },
        {
          title: 'Union multiple layers',
          keys: ['alt', 'meta', 'u'],
        },
        {
          title: 'Subtract multiple layers',
          keys: ['alt', 'meta', 's'],
        },
        {
          title: 'Intersect multiple layers',
          keys: ['alt', 'meta', 'i'],
        },
        {
          title: 'Difference multiple layers',
          keys: ['alt', 'meta', 'x'],
        },
      ],
    },
    {
      title: 'Vector Editing',
      id: 'vectorediting',
      version: 1,
      shortcuts: [
        {
          title: 'Open/close path',
          keys: ['alt', 'meta', 'o'],
        },
        {
          title: 'Selects next point',
          keys: ['tab'],
        },
        {
          title: 'Show all handle control points',
          keys: ['alt'],
        },
        {
          title: 'Straight point type',
          keys: ['1'],
        },
        {
          title: 'Mirrored point type',
          keys: ['2'],
        },
        {
          title: 'Disconnected point type',
          keys: ['3'],
        },
        {
          title: 'Asymmetric point type',
          keys: ['4'],
        },
      ],
    },
    {
      title: 'Text Editing',
      id: 'textediting',
      version: 1,
      shortcuts: [
        {
          title: 'Paste as rich text',
          keys: ['alt', 'shift', 'meta', 'v'],
        },
        {
          title: 'Change typeface',
          keys: ['meta', 't'],
        },
        {
          title: 'Bold',
          keys: ['meta', 'bold'],
        },
        {
          title: 'Italic',
          keys: ['meta', 'i'],
        },
        {
          title: 'Underline',
          keys: ['meta', 'u'],
        },
        {
          title: 'Increase font size',
          keys: ['alt', 'meta', '+'],
        },
        {
          title: 'Decrease font size',
          keys: ['alt', 'meta', '-'],
        },
        {
          title: 'Increase character spacing',
          keys: ['control', 'alt', 'l'],
        },
        {
          title: 'Decrease character spacing',
          keys: ['control', 'alt', 't'],
        },
        {
          title: 'Align left',
          keys: ['shift', 'meta', '{'],
        },
        {
          title: 'Align center',
          keys: ['shift', 'meta', '|'],
        },
        {
          title: 'Align right',
          keys: ['shift', 'meta', '{'],
        },
        {
          title: 'Emoji & symbols',
          keys: ['alt', 'meta', 'space'],
        },
        {
          title: 'Convert to outlines',
          keys: ['alt', 'meta', 'o'],
        },
        {
          title: 'Insert a line break',
          keys: ['shift', 'enter'],
        },
      ],
    },
    {
      title: 'Arranging Layers',
      id: 'arranginglayers',
      version: 1,
      shortcuts: [
        {
          title: 'Group',
          keys: ['meta', 'g'],
        },
        {
          title: 'Ungroup',
          keys: ['shift', 'meta', 'g'],
        },
        {
          title: 'Rename layer',
          keys: ['meta', 'r'],
        },
        {
          title: 'Select next layer in group',
          keys: ['tab'],
        },
        {
          title: 'Select previous layer in group',
          keys: ['shift', 'tab'],
        },
        {
          title: 'Selects layer inside group',
          keys: ['enter'],
        },
        {
          title: 'Selects parent group',
          keys: ['Escape'],
        },
        {
          title: 'Bring forward',
          keys: ['meta', ']'],
        },
        {
          title: 'Bring to front',
          keys: ['meta', 'alt', ']'],
        },
        {
          title: 'Send backward',
          keys: ['meta', '['],
        },
        {
          title: 'Send to back',
          keys: ['meta', 'alt', '['],
        },
        {
          title: 'Move up (out of group/Artboard)',
          keys: ['alt', 'shift', 'meta', 'up'],
        },
        {
          title: 'Distribute horizontally',
          keys: ['control', 'meta', 'h'],
        },
        {
          title: 'Distribute vertically',
          keys: ['control', 'meta', 'v'],
        },
        {
          title: 'Hide/show layer',
          keys: ['shift', 'meta', 'h'],
        },
        {
          title: 'Lock/unlock layer',
          keys: ['shift', 'meta', 'l'],
        },
      ],
    },
    {
      title: 'Exporting Layers',
      id: 'exportinglayers',
      version: 1,
      shortcuts: [
        {
          title: 'Export',
          keys: ['shift', 'meta', 'e'],
        },
        {
          title: 'Export selected layer(s)',
          keys: ['meta', 'e'],
        },
      ],
    },
    {
      title: 'Zoom and Focus',
      id: 'zoom',
      version: 1,
      shortcuts: [
        {
          title: 'Zoom to 100%',
          keys: ['meta', '0'],
        },
        {
          title: 'Zoom to all elements on Canvas',
          keys: ['meta', '1'],
        },
        {
          title: 'Zoom to selected layer(s)',
          keys: ['meta', '2'],
        },
        {
          title: 'Center selected layer(s) in the Canvas',
          keys: ['meta', '3'],
        },
        {
          title: 'Toggle full screen',
          keys: ['control', 'meta', 'f'],
        },
        {
          title: 'Show/hide Layer List',
          keys: ['alt', 'meta', '1'],
        },
        {
          title: 'Show/hide Inspector',
          keys: ['alt', 'meta', '2'],
        },
        {
          title: 'Enter presentation mode',
          keys: ['meta', '.'],
        },
        {
          title: 'Show/hide Toolbar',
          keys: ['alt', 'meta', 't'],
        },
      ],
    },
    {
      title: 'Text Fields',
      id: 'textfields',
      version: 1,
      shortcuts: [
        {
          title: 'Focus Inspector',
          keys: ['alt', 'tab'],
        },
        {
          title: 'Select next field',
          keys: ['tab'],
        },
        {
          title: 'Select previous field',
          keys: ['shift', 'tab'],
        },
        {
          title: 'Confirm change',
          keys: ['enter'],
        },
        {
          title: 'Clear change',
          keys: ['Escape'],
        },
        {
          title: 'Increase value by 1',
          keys: ['up'],
        },
        {
          title: 'Decrease value by 1',
          keys: ['down'],
        },
        {
          title: 'Increase value by 10',
          keys: ['shift', 'up'],
        },
        {
          title: 'Decrease value by 10',
          keys: ['shift', 'down'],
        },
        {
          title: 'Increase value by 0.1',
          keys: ['alt', 'up'],
        },
        {
          title: 'Decrease value by 0.1',
          keys: ['alt', 'down'],
        },
      ],
    },
    {
      title: 'Miscellaneous',
      id: 'misc',
      version: 1,
      shortcuts: [
        {
          title: 'Launch Sketch with all plugins disabled',
          description: 'Press on startup',
          keys: ['shift'],
        },
        {
          title: 'Detach from Symbol',
          keys: ['control', 'meta', 'd'],
        },
        {
          title: 'Detach all contents from Symbol',
          keys: ['control', 'alt', 'meta', 'd'],
        },
        {
          title: 'Refresh Data',
          keys: ['shift', 'meta', 'd'],
        },
        {
          title: 'Run last-used plugin again',
          keys: ['control', 'meta', 'r'],
        },
        {
          title: 'Position selected gradient stop directly between two existing stops',
          keys: ['='],
        },
      ],
    },
  ],
}
