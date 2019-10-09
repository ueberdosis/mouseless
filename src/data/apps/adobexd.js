// https://helpx.adobe.com/xd/help/keyboard-shortcuts.html
export default {
  id: 'adobexd',
  title: 'Adobe XD',
  sets: [
    {
      title: 'General shortcuts',
      id: 'general',
      version: 1,
      shortcuts: [
        {
          title: 'Quit',
          keys: ['Meta', 'q'],
        },
        {
          title: 'Minimize',
          keys: ['Meta', 'm'],
        },
        {
          title: 'Preview',
          keys: ['Meta', 'Enter'],
        },
      ],
    },
    {
      title: 'Edit menu',
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
          title: 'Paste Appearance/Interaction',
          keys: ['Alt', 'Meta', 'v'],
        },
        {
          title: 'Duplicate',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Delete',
          keys: ['Backspace'],
        },
        {
          title: 'Select All',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Deselect All',
          keys: ['Shift', 'Meta', 'a'],
        },
      ],
    },
    {
      title: 'File menu',
      id: 'file',
      version: 1,
      shortcuts: [
        {
          title: 'New',
          keys: ['Meta', 'n'],
        },
        {
          title: 'Open…',
          keys: ['Meta', 'Shift', 'o'],
        },
        {
          title: 'Close',
          keys: ['Meta', 'w'],
        },
        {
          title: 'Save…',
          keys: ['Meta', 's'],
        },
        {
          title: 'Save As…',
          keys: ['Shift', 'Meta', 's'],
        },
        {
          title: 'Export Batch',
          keys: ['Shift', 'Meta', 'e'],
        },
        {
          title: 'Export Selected',
          keys: ['Meta', 'e'],
        },
        {
          title: 'Export to an integrated application',
          keys: ['Alt', 'Meta', 'e'],
        },
        {
          title: 'Import',
          keys: ['Shift', 'Meta', 'i'],
        },
      ],
    },
    {
      title: 'Path & Pen',
      id: 'path',
      version: 1,
      shortcuts: [
        {
          title: 'Switch to Pen tool',
          keys: ['p'],
        },
        {
          title: 'Asymmetric Control Point',
          keys: ['Alt'],
        },
        // Duplicated
        // {
        //   title: 'Snap Control Point Angle',
        //   keys: ['ArrowUp'],
        // },
        {
          title: 'Snap Anchor Point Angle',
          keys: ['ArrowUp'],
        },
        {
          title: 'Add',
          keys: ['Alt', 'Meta', 'u'],
        },
        {
          title: 'Subtract',
          keys: ['Alt', 'Meta', 's'],
        },
        {
          title: 'Intersect',
          keys: ['Alt', 'Meta', 'i'],
        },
        {
          title: 'Exclude Overlap',
          keys: ['Alt', 'Meta', 'x'],
        },
        {
          title: 'Convert to Path',
          keys: ['Meta', '8'],
        },
      ],
    },
    {
      title: 'Layers, Groups & Artboards',
      id: 'layers',
      version: 1,
      shortcuts: [
        {
          title: 'Group layers',
          keys: ['Meta', 'g'],
        },
        {
          title: 'Ungroup layers',
          keys: ['Shift', 'Meta', 'g'],
        },
        {
          title: 'Make component',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Lock/Unlock layer',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Hide/Show layer',
          keys: ['Meta', ','],
        },
        {
          title: 'Mask with shape',
          keys: ['Shift', 'Meta', 'm'],
        },
        {
          title: 'Make repeat grid',
          keys: ['Meta', 'r'],
        },
        {
          title: 'Set layer opacity to 100 %',
          keys: ['0'],
        },
        {
          title: 'Set layer opacity to 50 %',
          keys: ['5'],
        },
        {
          title: 'Show/ Hide artboard guides',
          keys: ['Meta', ';'],
        },
        {
          title: 'Lock artboard guides',
          keys: ['Shift', 'Meta', ';'],
        },
      ],
    },
    {
      title: 'Align',
      id: 'align',
      version: 1,
      shortcuts: [
        {
          title: 'Top',
          keys: ['Control', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Right',
          keys: ['Control', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Bottom',
          keys: ['Control', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Left',
          keys: ['Control', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Center',
          keys: ['Control', 'Meta', 'c'],
        },
        {
          title: 'Middle',
          keys: ['Control', 'Meta', 'm'],
        },
      ],
    },
    {
      title: 'Arrange',
      id: 'arrange',
      version: 1,
      shortcuts: [
        {
          title: 'Bring to Front',
          keys: ['Shift', 'Meta', ']'],
        },
        {
          title: 'Bring Forward',
          keys: ['Meta', ']'],
        },
        {
          title: 'Send Backward',
          keys: ['Meta', '['],
        },
        {
          title: 'Send to Back',
          keys: ['Shift', 'Meta', '['],
        },
      ],
    },
    {
      title: 'Distribute',
      id: 'distribute',
      version: 1,
      shortcuts: [
        {
          title: 'Horizontal',
          keys: ['Control', 'Meta', 'h'],
        },
        {
          title: 'Vertical',
          keys: ['Control', 'Meta', 'v'],
        },
      ],
    },
    {
      title: 'Text',
      id: 'text',
      version: 1,
      shortcuts: [
        {
          title: 'Bold',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Italic',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Increase font size',
          keys: ['Shift', 'Meta', '>'],
        },
        {
          title: 'Decrease font size',
          keys: ['Shift', 'Meta', '<'],
        },
      ],
    },
    {
      title: 'Operations menu',
      id: 'operations',
      version: 1,
      shortcuts: [
        {
          title: 'From Center',
          keys: ['Alt'],
        },
        {
          title: 'Constrain',
          keys: ['Shift'],
        },
        {
          title: 'Edit Text',
          keys: ['Enter'],
        },
        {
          title: 'Constrain Rotate (15°)',
          keys: ['Shift'],
        },
        {
          title: 'Line Constrain Rotate (45°)',
          keys: ['Shift'],
        },
        {
          title: 'Constrain From Center',
          keys: ['Shift', 'Alt'],
        },
        {
          title: 'Direct Select',
          keys: ['Meta'],
        },
        {
          title: 'Switch between Design and Prototype mode',
          keys: ['Control', 'Tab'],
        },
      ],
    },
    {
      title: 'Tools menu',
      id: 'tools',
      version: 1,
      shortcuts: [
        {
          title: 'Select',
          keys: ['v'],
        },
        {
          title: 'Rectangle',
          keys: ['r'],
        },
        {
          title: 'Ellipse',
          keys: ['e'],
        },
        {
          title: 'Polygon',
          keys: ['y'],
        },
        {
          title: 'Line',
          keys: ['l'],
        },
        {
          title: 'Pen',
          keys: ['p'],
        },
        {
          title: 'Text',
          keys: ['t'],
        },
        {
          title: 'Artboard',
          keys: ['a'],
        },
        {
          title: 'Enter zoom mode',
          keys: ['z'],
        },
        {
          title: 'Zoom to Selection',
          keys: ['Meta', '3'],
        },
        {
          title: 'Eyedropper',
          keys: ['i'],
        },
      ],
    },
    {
      title: 'Interface and Viewing Options',
      id: 'interface',
      version: 1,
      shortcuts: [
        {
          title: 'Zoom In',
          keys: [
            ['Meta', '='],
            ['Meta', '+'],
          ],
        },
        {
          title: 'Zoom Out',
          keys: ['Meta', '-'],
        },
        {
          title: 'Zoom to Fit',
          keys: ['Meta', '0'],
        },
        {
          title: 'Zoom to 100%',
          keys: ['Meta', '1'],
        },
        {
          title: 'Zoom to 200%',
          keys: ['Meta', '2'],
        },
        {
          title: 'Pan',
          keys: ['Space'],
        },
        {
          title: 'Assets',
          keys: ['Shift', 'Meta', 'y'],
        },
        {
          title: 'Layers',
          keys: ['Meta', 'y'],
        },
        {
          title: 'Show Layout Grid',
          keys: ['Shift', 'Meta', '\''],
        },
        {
          title: 'Show Square Grid',
          keys: ['Meta', '\''],
        },
        {
          title: 'Fullscreen Mode',
          keys: ['Control', 'Meta', 'f'],
        },
        {
          title: 'Switch between design and prototype mode',
          keys: ['Control', 'Tab'],
        },
        {
          title: 'Switch between Windows (Files)',
          keys: ['Meta', '~'],
        },
        {
          title: 'Increase a value in a field by 1',
          keys: ['ArrowUp'],
        },
        {
          title: 'Decrease a value in a field by 1',
          keys: ['ArrowDown'],
        },
        {
          title: 'Increase a value in a field by 10',
          keys: ['Shift', 'ArrowUp'],
        },
        {
          title: 'Decrease a value in a field by 10',
          keys: ['Shift', 'ArrowDown'],
        },
      ],
    },
    {
      title: 'Prototyping',
      id: 'prototyping',
      version: 1,
      shortcuts: [
        {
          title: 'See all connections in prototype mode',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Preview',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Start or stop recording the preview',
          keys: ['Control', 'Meta', 'r'],
        },
        {
          title: 'Stop recording',
          keys: ['Escape'],
        },
        {
          title: 'Share prototype online',
          keys: ['Shift', 'Meta', 'e'],
        },
        {
          title: 'Next artboard in preview or shared prototype',
          keys: ['ArrowRight'],
        },
        {
          title: 'Previous artboards in preview or shared prototype',
          keys: ['ArrowLeft'],
        },
      ],
    },
  ],
}
