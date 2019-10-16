// https://www.sketch.com/docs/shortcuts/
export default {
  id: 'sketch',
  title: 'Sketch',
  systemTitle: 'Sketch',
  category: 'Design',
  sets: [
    {
      title: 'General Shortcuts',
      id: 'general',
      version: 1,
      shortcuts: [
        {
          title: 'Copy',
          keys: ['Meta', 'c'],
        },
        {
          title: 'Cut',
          keys: ['Meta', 'x'],
        },
        {
          title: 'Paste',
          keys: ['Meta', 'v'],
        },
        {
          title: 'Paste over selection',
          keys: ['Shift', 'Meta', 'v'],
        },
        {
          title: 'New page',
          keys: ['Shift', 'Meta', 'n'],
        },
        {
          title: 'Run custom plugin',
          keys: ['Control', 'Meta', 'k'],
        },
        {
          title: 'Undo',
          keys: ['Meta', 'z'],
        },
        {
          title: 'Redo',
          keys: ['Shift', 'Meta', 'z'],
        },
        {
          title: 'Page setup',
          keys: ['Shift', 'Meta', 'p'],
        },
        {
          title: 'Open Preferences window',
          keys: ['Meta', ','],
        },
        {
          title: 'Quit Sketch',
          keys: ['Meta', 'q'],
        },
        {
          title: 'Open the Help menu',
          keys: ['Shift', 'Meta', '?'],
        },
        {
          title: 'Open Preview window',
          keys: ['Meta', 'p'],
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
          keys: ['Meta', 'h'],
        },
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
        {
          title: 'Show/hide rulers',
          keys: ['Control', 'r'],
        },
        {
          title: 'Show/hide pixels',
          keys: ['Control', 'p'],
        },
        {
          title: 'Show/hide pixel grid',
          keys: ['Control', 'x'],
        },
        {
          title: 'Show/hide grid',
          keys: ['Control', 'g'],
        },
        {
          title: 'Show/hide layout',
          keys: ['Control', 'l'],
        },
        {
          title: 'Show/hide slices',
          keys: ['Control', 'e'],
        },
        {
          title: 'Show/hide prototyping',
          keys: ['Control', 'f'],
        },
        {
          title: 'Filter in Layer List',
          keys: ['Meta', 'f'],
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
          keys: ['Meta', 'n'],
        },
        {
          title: 'Open document',
          keys: ['Meta', 'o'],
        },
        {
          title: 'Close window',
          keys: ['Meta', 'w'],
        },
        {
          title: 'Save document',
          keys: ['Meta', 's'],
        },
        {
          title: 'Duplicate document',
          keys: ['Shift', 'Meta', 's'],
        },
        {
          title: 'Save document as…',
          keys: ['Alt', 'Shift', 'Meta', 's'],
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
          keys: ['Meta', 'a'],
        },
        {
          title: 'Select all Artboards',
          keys: ['Shift', 'Meta', 'a'],
        },
        {
          title: 'Reveal selection in Layer List',
          keys: ['Shift', 'Meta', 'j'],
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
          keys: ['Meta', 'd'],
        },
        {
          title: 'Scale Layer',
          keys: ['Meta', 'k'],
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
          keys: ['Enter'],
        },
        {
          title: 'Finish editing',
          keys: ['Escape'],
        },
        {
          title: 'Focus X position input field in the Inspector',
          keys: ['Alt', 'Tab'],
        },
        {
          title: 'Delete layer',
          keys: ['Backspace'],
        },
        {
          title: 'Copy style',
          keys: ['Alt', 'Meta', 'c'],
        },
        {
          title: 'Paste style',
          keys: ['Alt', 'Meta', 'v'],
        },
        {
          title: 'Sync shared style',
          keys: ['Control', 's'],
        },
        {
          title: 'Reset shared style',
          keys: ['Alt', 'Control', 's'],
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
          keys: ['Control', 'c'],
        },
        // TODO: Multiple bindings 0-9
        // {
        //   title: 'Edit layer opacity',
        //   keys: [''],
        // },
        {
          title: 'Transform shape',
          keys: ['Shift', 'Meta', 't'],
        },
        {
          title: 'Rotate layer',
          keys: ['Shift', 'Meta', 'r'],
        },
        {
          title: 'Use as mask',
          keys: ['Control', 'Meta', 'm'],
        },
        {
          title: 'Return to instance',
          keys: ['Meta', 'Escape'],
        },
        {
          title: 'Union multiple layers',
          keys: ['Alt', 'Meta', 'u'],
        },
        {
          title: 'Subtract multiple layers',
          keys: ['Alt', 'Meta', 's'],
        },
        {
          title: 'Intersect multiple layers',
          keys: ['Alt', 'Meta', 'i'],
        },
        {
          title: 'Difference multiple layers',
          keys: ['Alt', 'Meta', 'x'],
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
          keys: ['Alt', 'Meta', 'o'],
        },
        {
          title: 'Selects next point',
          keys: ['Tab'],
        },
        {
          title: 'Show all handle control points',
          keys: ['Alt'],
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
          keys: ['Alt', 'Shift', 'Meta', 'v'],
        },
        {
          title: 'Change typeface',
          keys: ['Meta', 't'],
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
          title: 'Increase font size',
          keys: ['Alt', 'Meta', '+'],
        },
        {
          title: 'Decrease font size',
          keys: ['Alt', 'Meta', '-'],
        },
        {
          title: 'Increase character spacing',
          keys: ['Control', 'Alt', 'l'],
        },
        {
          title: 'Decrease character spacing',
          keys: ['Control', 'Alt', 't'],
        },
        {
          title: 'Align left',
          keys: ['Meta', '{'], // original: ['Shift', 'Meta', '{']
        },
        {
          title: 'Align center',
          keys: ['Meta', '|'], // original: ['Shift', 'Meta', '{']
        },
        {
          title: 'Align right',
          keys: ['Meta', '}'], // original: ['Shift', 'Meta', '}']
        },
        {
          title: 'Emoji & symbols',
          keys: ['Alt', 'Meta', 'Space'],
        },
        {
          title: 'Convert to outlines',
          keys: ['Alt', 'Meta', 'o'],
        },
        {
          title: 'Insert a line break',
          keys: ['Shift', 'Enter'],
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
          keys: ['Meta', 'g'],
        },
        {
          title: 'Ungroup',
          keys: ['Shift', 'Meta', 'g'],
        },
        {
          title: 'Rename layer',
          keys: ['Meta', 'r'],
        },
        {
          title: 'Select next layer in group',
          keys: ['Tab'],
        },
        {
          title: 'Select previous layer in group',
          keys: ['Shift', 'Tab'],
        },
        {
          title: 'Selects layer inside group',
          keys: ['Enter'],
        },
        {
          title: 'Selects parent group',
          keys: ['Escape'],
        },
        {
          title: 'Bring forward',
          keys: ['Meta', ']'],
        },
        {
          title: 'Bring to front',
          keys: ['Meta', 'Alt', ']'],
        },
        {
          title: 'Send backward',
          keys: ['Meta', '['],
        },
        {
          title: 'Send to back',
          keys: ['Meta', 'Alt', '['],
        },
        {
          title: 'Move up (out of group/Artboard)',
          keys: ['Alt', 'Shift', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Distribute horizontally',
          keys: ['Control', 'Meta', 'h'],
        },
        {
          title: 'Distribute vertically',
          keys: ['Control', 'Meta', 'v'],
        },
        {
          title: 'Hide/show layer',
          keys: ['Shift', 'Meta', 'h'],
        },
        {
          title: 'Lock/unlock layer',
          keys: ['Shift', 'Meta', 'l'],
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
          keys: ['Shift', 'Meta', 'e'],
        },
        {
          title: 'Export selected layer(s)',
          keys: ['Meta', 'e'],
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
          keys: ['Meta', '0'],
        },
        {
          title: 'Zoom to all elements on Canvas',
          keys: ['Meta', '1'],
        },
        {
          title: 'Zoom to selected layer(s)',
          keys: ['Meta', '2'],
        },
        {
          title: 'Center selected layer(s) in the Canvas',
          keys: ['Meta', '3'],
        },
        {
          title: 'Toggle full screen',
          keys: ['Control', 'Meta', 'f'],
        },
        {
          title: 'Show/hide Layer List',
          keys: ['Alt', 'Meta', '1'],
        },
        {
          title: 'Show/hide Inspector',
          keys: ['Alt', 'Meta', '2'],
        },
        {
          title: 'Enter presentation mode',
          keys: ['Meta', '.'],
        },
        {
          title: 'Show/hide Toolbar',
          keys: ['Alt', 'Meta', 't'],
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
          keys: ['Alt', 'Tab'],
        },
        {
          title: 'Select next field',
          keys: ['Tab'],
        },
        {
          title: 'Select previous field',
          keys: ['Shift', 'Tab'],
        },
        {
          title: 'Confirm change',
          keys: ['Enter'],
        },
        {
          title: 'Clear change',
          keys: ['Escape'],
        },
        {
          title: 'Increase value by 1',
          keys: ['ArrowUp'],
        },
        {
          title: 'Decrease value by 1',
          keys: ['ArrowDown'],
        },
        {
          title: 'Increase value by 10',
          keys: ['Shift', 'ArrowUp'],
        },
        {
          title: 'Decrease value by 10',
          keys: ['Shift', 'ArrowDown'],
        },
        {
          title: 'Increase value by 0.1',
          keys: ['Alt', 'ArrowUp'],
        },
        {
          title: 'Decrease value by 0.1',
          keys: ['Alt', 'ArrowDown'],
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
          keys: ['Shift'],
        },
        {
          title: 'Detach from Symbol',
          keys: ['Control', 'Meta', 'd'],
        },
        {
          title: 'Detach all contents from Symbol',
          keys: ['Control', 'Alt', 'Meta', 'd'],
        },
        {
          title: 'Refresh Data',
          keys: ['Shift', 'Meta', 'd'],
        },
        {
          title: 'Run last-used plugin again',
          keys: ['Control', 'Meta', 'r'],
        },
        {
          title: 'Position selected gradient stop directly between two existing stops',
          keys: ['='],
        },
      ],
    },
  ],
}
