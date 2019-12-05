/* eslint-disable max-len */
// https://help.figma.com/article/77-keyboard-shortcuts
module.exports = {
  id: 'figma',
  title: 'Figma',
  category: 'Design',
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Show/Hide UI',
          keys: ['Meta', '\\'],
        },
        {
          title: 'Pick Color',
          keys: ['Control', 'c'],
        },
        {
          title: 'Search Menu',
          keys: ['Meta', '/'],
        },
      ],
    },
    {
      title: 'Tools',
      id: 'tools',
      version: 1,
      shortcuts: [
        {
          title: 'Move Tool',
          keys: ['v'],
        },
        {
          title: 'Frame Tool',
          keys: ['f'],
        },
        {
          title: 'Pen Tool',
          keys: ['p'],
        },
        {
          title: 'Pencil Tool',
          keys: ['Shift', 'p'],
        },
        {
          title: 'Text Tool',
          keys: ['t'],
        },
        {
          title: 'Rectangle Tool',
          keys: ['r'],
        },
        {
          title: 'Ellipse Tool',
          keys: ['o'],
        },
        {
          title: 'Line Tool',
          keys: ['l'],
        },
        {
          title: 'Arrow Tool',
          keys: ['Shift', 'l'],
        },
        {
          title: 'Add/Show Comments',
          keys: ['c'],
        },
        {
          title: 'Slice Tool',
          keys: ['s'],
        },
      ],
    },
    {
      title: 'View',
      id: 'view',
      version: 1,
      shortcuts: [
        {
          title: 'Rulers',
          keys: ['Shift', 'r'],
        },
        {
          title: 'Show Outlines',
          keys: ['Meta', 'y'],
        },
        {
          title: 'Pixel Preview',
          keys: ['Control', 'p'],
        },
        {
          title: 'Layout Grids',
          keys: ['Control', 'g'],
        },
        {
          title: 'Pixel Grid',
          keys: ['Meta', '\''],
        },
        {
          title: 'Show Multiplayer Cursors',
          keys: ['Alt', 'Meta', '\\'],
        },
        {
          title: 'Show Layers',
          keys: ['Alt', '1'],
        },
        {
          title: 'Show Components',
          keys: ['Alt', '2'],
        },
        {
          title: 'Show Team Library',
          keys: ['Alt', '3'],
        },
      ],
    },
    {
      title: 'Zoom',
      id: 'zoom',
      version: 1,
      shortcuts: [
        // TODO: Unclear. Works only with mousedrag.
        // {
        //   title: 'Pan',
        //   keys: ['Space'],
        // },
        {
          title: 'Zoom In',
          keys: [
            ['='],
            ['+'],
          ],
        },
        {
          title: 'Zoom Out',
          keys: ['-'],
        },
        {
          title: 'Zoom to 100%',
          keys: ['Shift', '0'],
        },
        {
          title: 'Zoom to Fit',
          keys: ['Shift', '1'],
        },
        {
          title: 'Zoom to Selection',
          keys: ['Shift', '2'],
        },
        {
          title: 'Zoom to Previous Frame',
          keys: ['Shift', 'n'],
        },
        {
          title: 'Zoom to Next Frame',
          keys: ['n'],
        },
        {
          title: 'Previous Page',
          keys: ['PageUp'],
        },
        {
          title: 'Next Page',
          keys: ['PageDown'],
        },
        // TODO: fn doesn't send event
        // {
        //   title: 'Find Previous Frame',
        //   keys: ['Fn', 'ArrowLeft'],
        // },
        // TODO: fn doesn't send event
        // {
        //   title: 'Find Next Frame',
        //   keys: ['Fn', 'ArrowRight'],
        // },
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
          title: 'Underline',
          keys: ['Meta', 'u'],
        },
        {
          title: 'Paste and Match Style',
          keys: ['Shift', 'Meta', 'v'],
        },
        {
          title: 'Text Align Left',
          keys: ['Alt', 'Meta', 'l'],
        },
        {
          title: 'Text Align Center',
          keys: ['Alt', 'Meta', 't'],
        },
        {
          title: 'Text Align Right',
          keys: ['Alt', 'Meta', 'r'],
        },
        {
          title: 'Text Align Justified',
          keys: ['Alt', 'Meta', 'j'],
        },
        {
          title: 'Decrease Font Size',
          keys: ['Shift', 'Meta', '<'],
        },
        {
          title: 'Increase Font Size',
          keys: ['Shift', 'Meta', '>'],
        },
        {
          title: 'Decrease Letter Spacing',
          keys: ['Alt', ','],
        },
        {
          title: 'Increase Letter Spacing',
          keys: ['Alt', '.'],
        },
        {
          title: 'Decrease Line Height',
          keys: ['Shift', 'Alt', '<'],
        },
        {
          title: 'Increase Line Height',
          keys: ['Shift', 'Alt', '>'],
        },
      ],
    },
    {
      title: 'Shape',
      id: 'shape',
      version: 1,
      shortcuts: [
        {
          title: 'Pen',
          keys: ['p'],
        },
        {
          title: 'Pencil',
          keys: ['Shift', 'p'],
        },
        {
          // while editing a shape …
          title: 'Paint Bucket',
          keys: ['b'],
        },
        {
          // while editing a shape …
          title: 'Bend Tool',
          keys: ['Meta'],
        },
        {
          title: 'Remove Fill',
          keys: ['Alt', '/'],
        },
        {
          title: 'Remove Stroke',
          keys: ['/'],
        },
        {
          title: 'Swap Fill and Stroke',
          keys: ['Shift', 'x'],
        },
        {
          title: 'Outline Stroke',
          keys: ['Shift', 'Meta', 'o'],
        },
        {
          title: 'Flatten Selection',
          keys: ['Meta', 'e'],
        },
        {
          // after selecting points…
          title: 'Join Selection',
          keys: ['Meta', 'j'],
        },
        {
          title: 'Smooth Join Selection',
          keys: ['Shift', 'Meta', 'j'],
        },
        {
          title: 'Delete and Heal Selection',
          keys: ['Shift', 'Backspace'],
        },
      ],
    },
    {
      title: 'Selection',
      id: 'selection',
      version: 1,
      shortcuts: [
        {
          title: 'Select All',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Select Inverse',
          keys: ['Shift', 'Meta', 'a'],
        },
        {
          title: 'Select None',
          keys: ['Escape'],
        },
        {
          title: 'Select Child',
          keys: ['Enter'],
        },
        {
          title: 'Select Parents',
          keys: ['Shift', 'Enter'],
        },
        {
          title: 'Select Next Sibling',
          keys: ['Tab'],
        },
        {
          title: 'Select Previous Sibling',
          keys: ['Shift', 'Tab'],
        },
        {
          title: 'Group Selection',
          keys: ['Meta', 'g'],
        },
        {
          title: 'Ungroup Selection',
          keys: ['Shift', 'Meta', 'g'],
        },
        {
          title: 'Frame Selection',
          keys: ['Alt', 'Meta', 'g'],
        },
        {
          title: 'Show/Hide Selection',
          keys: ['Shift', 'Meta', 'h'],
        },
        {
          title: 'Lock/Unlock Selection',
          keys: ['Shift', 'Meta', 'l'],
        },
      ],
    },
    {
      title: 'Edit',
      id: 'edit',
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
          title: 'Paste Over Selection',
          keys: ['Shift', 'Meta', 'v'],
        },
        {
          title: 'Duplicate',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Rename Selection',
          keys: ['Meta', 'r'],
        },
        {
          title: 'Export',
          keys: ['Shift', 'Meta', 'e'],
        },
        {
          title: 'Copy Properties',
          keys: ['Shift', 'Meta', 'c'],
        },
        {
          title: 'Paste Properties',
          keys: ['Alt', 'Meta', 'v'],
        },
      ],
    },
    {
      title: 'Transform',
      id: 'transform',
      version: 1,
      shortcuts: [
        {
          title: 'Flip Horizontal',
          keys: ['Shift', 'h'],
        },
        {
          title: 'Flip Vertical',
          keys: ['Shift', 'v'],
        },
        {
          title: 'Use as Mask',
          keys: ['Control', 'Meta', 'm'],
        },
        {
          title: 'Edit Shape or Image',
          keys: ['Enter'],
        },
        {
          title: 'Place Image',
          keys: ['Shift', 'Meta', 'k'],
        },
        {
          title: 'Set Opacity to 10%',
          keys: ['1'],
        },
        {
          title: 'Set Opacity to 50%',
          keys: ['5'],
        },
        {
          title: 'Set Opacity to 100%',
          keys: ['0'],
        },
      ],
    },
    {
      title: 'Arrange',
      id: 'arrange',
      version: 1,
      shortcuts: [
        {
          title: 'Bring Forward',
          keys: ['Meta', ']'],
        },
        {
          title: 'Send Backward',
          keys: ['Meta', '['],
        },
        {
          title: 'Bring to Front',
          keys: ['Alt', 'Meta', ']'],
        },
        {
          title: 'Send to Back',
          keys: ['Alt', 'Meta', '['],
        },
        {
          title: 'Align Left',
          keys: ['Alt', 'a'],
        },
        {
          title: 'Align Right',
          keys: ['Alt', 'd'],
        },
        {
          title: 'Align Top',
          keys: ['Alt', 'w'],
        },
        {
          title: 'Align Bottom',
          keys: ['Alt', 's'],
        },
        {
          title: 'Align Horizontal Centers',
          keys: ['Alt', 'h'],
        },
        {
          title: 'Align Vertical Centers',
          keys: ['Alt', 'v'],
        },
        {
          title: 'Tidy Up',
          keys: ['Control', 'Alt', 't'],
        },
        {
          title: 'Distribute Horizontal Spacing',
          keys: ['Control', 'Alt', 'h'],
        },
        {
          title: 'Distribute Vertical Spacing',
          keys: ['Control', 'Alt', 'v'],
        },
      ],
    },
    {
      title: 'Components',
      id: 'components',
      version: 1,
      shortcuts: [
        {
          title: 'Show Components',
          keys: ['Alt', '2'],
        },
        {
          title: 'Team Library',
          keys: ['Alt', 'Meta', 'o'],
        },
        {
          title: 'Create Component',
          keys: ['Alt', 'Meta', 'k'],
        },
        {
          title: 'Detach Instance',
          keys: ['Alt', 'Meta', 'b'],
        },
      ],
    },
  ],
}
