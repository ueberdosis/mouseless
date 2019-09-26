// https://help.figma.com/article/77-keyboard-shortcuts
export default {
  id: 'figma',
  title: 'Figma',
  groups: [
    {
      title: 'Essential',
      id: 'essential',
      version: 1,
      shortcuts: [
        {
          title: 'Show/Hide UI',
          keys: ['meta', '\\'],
        },
        {
          title: 'Pick Color',
          keys: ['control', 'c'],
        },
        {
          title: 'Search Menu',
          keys: ['meta', '/'],
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
          keys: ['shift', 'p'],
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
          keys: ['shift', 'l'],
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
          keys: ['shift', 'r'],
        },
        {
          title: 'Show Outlines',
          keys: ['meta', 'y'],
        },
        {
          title: 'Pixel Preview',
          keys: ['control', 'p'],
        },
        {
          title: 'Layout Grids',
          keys: ['control', 'g'],
        },
        {
          title: 'Pixel Grid',
          keys: ['meta', '\''],
        },
        {
          title: 'Show Multiplayer Cursors',
          keys: ['alt', 'meta', '\\'],
        },
        {
          title: 'Show Layers',
          keys: ['alt', '1'],
        },
        {
          title: 'Show Components',
          keys: ['alt', '2'],
        },
        {
          title: 'Show Team Library',
          keys: ['alt', '3'],
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
        //   keys: ['space'],
        // },
        {
          title: 'Zoom In',
          keys: ['+'],
        },
        {
          title: 'Zoom Out',
          keys: ['-'],
        },
        {
          title: 'Zoom to 100%',
          keys: ['shift', '0'],
        },
        {
          title: 'Zoom to Fit',
          keys: ['shift', '1'],
        },
        {
          title: 'Zoom to Selection',
          keys: ['shift', '2'],
        },
        {
          title: 'Zoom to Previous Frame',
          keys: ['shift', 'n'],
        },
        {
          title: 'Zoom to Next Frame',
          keys: ['n'],
        },
        {
          title: 'Previous Page',
          keys: ['pageup'],
        },
        {
          title: 'Next Page',
          keys: ['pagedown'],
        },
        // TODO: fn doesn't send event
        // {
        //   title: 'Find Previous Frame',
        //   keys: ['fn', 'left'],
        // },
        // TODO: fn doesn't send event
        // {
        //   title: 'Find Next Frame',
        //   keys: ['fn', 'right'],
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
          keys: ['meta', 'b'],
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
          title: 'Paste and Match Style',
          keys: ['shift', 'meta', 'v'],
        },
        {
          title: 'Text Align Left',
          keys: ['alt', 'meta', 'l'],
        },
        {
          title: 'Text Align Center',
          keys: ['alt', 'meta', 't'],
        },
        {
          title: 'Text Align Right',
          keys: ['alt', 'meta', 'r'],
        },
        {
          title: 'Text Align Justified',
          keys: ['alt', 'meta', 'j'],
        },
        {
          title: 'Decrease Font Size',
          keys: ['shift', 'meta', '<'],
        },
        {
          title: 'Increase Font Size',
          keys: ['shift', 'meta', '>'],
        },
        {
          title: 'Decrease Letter Spacing',
          keys: ['alt', ','],
        },
        {
          title: 'Increase Letter Spacing',
          keys: ['alt', '.'],
        },
        {
          title: 'Decrease Line Height',
          keys: ['shift', 'alt', '<'],
        },
        {
          title: 'Increase Line Height',
          keys: ['shift', 'alt', '>'],
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
          keys: ['shift', 'p'],
        },
        {
          // while editing a shape …
          title: 'Paint Bucket',
          keys: ['b'],
        },
        {
          // while editing a shape …
          title: 'Bend Tool',
          keys: ['meta'],
        },
        {
          title: 'Remove Fill',
          keys: ['alt', '/'],
        },
        {
          title: 'Remove Stroke',
          keys: ['/'],
        },
        {
          title: 'Swap Fill and Stroke',
          keys: ['shift', 'x'],
        },
        {
          title: 'Outline Stroke',
          keys: ['shift', 'meta', 'o'],
        },
        {
          title: 'Flatten Selection',
          keys: ['meta', 'e'],
        },
        {
          // after selecting points…
          title: 'Join Selection',
          keys: ['meta', 'j'],
        },
        {
          title: 'Smooth Join Selection',
          keys: ['shift', 'meta', 'j'],
        },
        {
          title: 'Delete and Heal Selection',
          keys: ['shift', 'backspace'],
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
          keys: ['meta', 'a'],
        },
        {
          title: 'Select Inverse',
          keys: ['shift', 'meta', 'a'],
        },
        {
          title: 'Select None',
          keys: ['esc'],
        },
        {
          title: 'Select Child',
          keys: ['enter'],
        },
        {
          title: 'Select Parents',
          keys: ['shift', 'enter'],
        },
        {
          title: 'Select Next Sibling',
          keys: ['tab'],
        },
        {
          title: 'Select Previous Sibling',
          keys: ['shift', 'tab'],
        },
        {
          title: 'Group Selection',
          keys: ['meta', 'g'],
        },
        {
          title: 'Ungroup Selection',
          keys: ['shift', 'meta', 'g'],
        },
        {
          title: 'Frame Selection',
          keys: ['shift', 'meta', 'g'],
        },
        {
          title: 'Show/Hide Selection',
          keys: ['shift', 'meta', 'h'],
        },
        {
          title: 'Lock/Unlock Selection',
          keys: ['shift', 'meta', 'l'],
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
          title: 'Paste Over Selection',
          keys: ['shift', 'meta', 'v'],
        },
        {
          title: 'Duplicate',
          keys: ['meta', 'd'],
        },
        {
          title: 'Rename Selection',
          keys: ['meta', 'r'],
        },
        {
          title: 'Export',
          keys: ['shift', 'meta', 'e'],
        },
        {
          title: 'Copy Properties',
          keys: ['shift', 'meta', 'c'],
        },
        {
          title: 'Paste Properties',
          keys: ['shift', 'meta', 'v'],
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
          keys: ['shift', 'h'],
        },
        {
          title: 'Flip Vertical',
          keys: ['shift', 'v'],
        },
        {
          title: 'Use as Mask',
          keys: ['control', 'meta', 'm'],
        },
        {
          title: 'Edit Shape or Image',
          keys: ['enter'],
        },
        {
          title: 'Place Image',
          keys: ['shift', 'meta', 'k'],
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
          keys: ['meta', ']'],
        },
        {
          title: 'Send Backward',
          keys: ['meta', '['],
        },
        {
          title: 'Bring to Front',
          keys: ['alt', 'meta', ']'],
        },
        {
          title: 'Send to Back',
          keys: ['alt', 'meta', '['],
        },
        {
          title: 'Align Left',
          keys: ['alt', 'a'],
        },
        {
          title: 'Align Right',
          keys: ['alt', 'd'],
        },
        {
          title: 'Align Top',
          keys: ['alt', 'w'],
        },
        {
          title: 'Align Bottom',
          keys: ['alt', 's'],
        },
        {
          title: 'Align Horizontal Centers',
          keys: ['alt', 'h'],
        },
        {
          title: 'Align Vertical Centers',
          keys: ['alt', 'v'],
        },
        {
          title: 'Tidy Up',
          keys: ['control', 'alt', 't'],
        },
        {
          title: 'Distribute Horizontal Spacing',
          keys: ['control', 'alt', 'h'],
        },
        {
          title: 'Distribute Vertical Spacing',
          keys: ['control', 'alt', 'v'],
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
          keys: ['alt', '2'],
        },
        {
          title: 'Team Library',
          keys: ['alt', 'meta', 'o'],
        },
        {
          title: 'Create Component',
          keys: ['alt', 'meta', 'k'],
        },
        {
          title: 'Detach Instance',
          keys: ['alt', 'meta', 'b'],
        },
      ],
    },
  ],
}
