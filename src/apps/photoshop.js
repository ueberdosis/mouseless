// https://helpx.adobe.com/photoshop/using/default-keyboard-shortcuts.html
module.exports = {
  id: 'photoshop',
  title: 'Photoshop',
  systemTitle: 'Photoshop',
  category: 'Productivity',
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Free Transform',
          keys: ['Meta', 't'],
        },
        {
          title: 'Default Foreground/Background colors',
          keys: ['d'],
        },
        {
          title: 'Switch Foreground/Background colors',
          keys: ['x'],
        },
        {
          title: 'New layer via copy',
          keys: ['Meta', 'j'],
        },
        {
          title: 'New layer via cut',
          keys: ['Shift', 'Meta', 'j'],
        },
        {
          title: 'Close all open documents other than the current document',
          keys: ['Meta', 'Alt', 'p'],
        },
        {
          title: 'Cancel any modal dialog window (including the Start Workspace)',
          keys: ['Escape'],
        },
        {
          title: 'Select the first edit field of the toolbar',
          keys: ['Enter'],
        },
        {
          title: 'Navigate between fields',
          keys: ['Tab'],
        },
        {
          title: 'Navigate between fields in the opposite direction',
          keys: ['Tab', 'Shift'],
        },
        {
          title: 'Change Cancel to Reset',
          keys: ['Alt'],
        },
        {
          title: 'Toggle Standard/Quick Mask modes',
          keys: ['q'],
        },
        {
          title: 'Toggle Preserve Transparency',
          keys: ['/'],
        },
      ],
    },
    {
      title: 'Tools I',
      id: 'tools-1',
      version: 1,
      shortcuts: [
        {
          title: 'Move tool',
          keys: ['v'],
        },
        {
          title: 'Marquee tool',
          keys: ['m'],
        },
        {
          title: 'Lasso tool',
          keys: ['l'],
        },
        {
          title: 'Magic Wand tool',
          keys: ['w'],
        },
        {
          title: 'Crop tool',
          keys: ['c'],
        },
        {
          title: 'Eyedropper tool',
          keys: ['i'],
        },
      ],
    },
    {
      title: 'Tools II',
      id: 'tools-2',
      version: 1,
      shortcuts: [
        {
          title: 'Healing Brush tool',
          keys: ['j'],
        },
        {
          title: 'Brush tool',
          keys: ['b'],
        },
        {
          title: 'Clone Stamp tool',
          keys: ['s'],
        },
        {
          title: 'History Brush tool',
          keys: ['y'],
        },
        {
          title: 'Eraser tool',
          keys: ['e'],
        },
        {
          title: 'Gradient tool',
          keys: ['g'],
        },
        {
          title: 'Dodge tool',
          keys: ['o'],
        },
      ],
    },
    {
      title: 'Tools III',
      id: 'tools-3',
      version: 1,
      shortcuts: [
        {
          title: 'Pen tool',
          keys: ['p'],
        },
        {
          title: 'Type tool',
          keys: ['t'],
        },
        {
          title: 'Selection tool',
          keys: ['a'],
        },
        {
          title: 'Shape tool',
          keys: ['u'],
        },
        {
          title: 'Hand tool',
          keys: ['h'],
        },
        {
          title: 'Rotate View tool',
          keys: ['r'],
        },
        {
          title: 'Zoom tool',
          keys: ['z'],
        },
      ],
    },
    {
      title: 'Layers',
      id: 'layers',
      version: 1,
      shortcuts: [
        {
          title: 'New layer',
          keys: ['Meta', 'Shift', 'n'],
        },
        {
          title: 'New layer via copy',
          keys: ['Meta', 'j'],
        },
        {
          title: 'New layer via cut',
          keys: ['Shift', 'Meta', 'j'],
        },
        {
          title: 'Group layers',
          keys: ['Meta', 'g'],
        },
        {
          title: 'Ungroup layers',
          keys: ['Meta', 'Shift', 'g'],
        },
        {
          title: 'Create/release clipping mask',
          keys: ['Meta', 'Alt', 'g'],
        },
        {
          title: 'Merge visible layers',
          keys: ['Meta', 'Shift', 'e'],
        },
        {
          title: 'Move target layer up',
          keys: ['Meta', ']'],
        },
        {
          title: 'Merge a copy of all visible layers into target layer',
          keys: ['Meta', 'Shift', 'Alt', 'e'],
        },
        {
          title: 'Merge layers',
          keys: ['Meta', 'e'],
        },
        {
          title: 'Move layer to top',
          keys: ['Meta', '{'],
        },
        {
          title: 'Move layer to bottom',
          keys: ['Meta', '}'],
        },
        {
          title: 'Toggle lock transparency for target layer, or last applied lock',
          keys: ['/'],
        },
      ],
    },
    {
      title: 'Select Layers',
      id: 'select-layers',
      version: 1,
      shortcuts: [
        {
          title: 'Select all layers',
          keys: ['Meta', 'Alt', 'a'],
        },
        {
          title: 'Select top layer',
          keys: ['Alt', '.'],
        },
        {
          title: 'Select bottom layer',
          keys: ['Alt', ','],
        },
        {
          title: 'Add to layer selection in Layers panel',
          keys: ['Shift', 'Alt', '['],
        },
        {
          title: 'Select next layer down',
          keys: ['Alt', '['],
        },
      ],
    },
    {
      title: 'Brushes',
      id: 'brushes',
      version: 1,
      shortcuts: [
        {
          title: 'Previous Brush',
          keys: [','],
        },
        {
          title: 'Next Brush',
          keys: ['.'],
        },
        {
          title: 'First Brush',
          keys: ['<'],
        },
        {
          title: 'Last Brush',
          keys: ['>'],
        },
        {
          title: 'Decrease Brush Size',
          keys: ['['],
        },
        {
          title: 'Increase Brush Size',
          keys: [']'],
        },
        {
          title: 'Decrease Brush Hardness',
          keys: ['{'],
        },
        {
          title: 'Increase Brush Hardness',
          keys: ['}'],
        },
        {
          title: 'Rotate the brush tip anti-clockwise',
          keys: ['Shift', 'ArrowLeft'],
        },
        {
          title: 'Rotate the brush tip clockwise',
          keys: ['Shift', 'ArrowRight'],
        },
      ],
    },
    {
      title: 'View Images',
      id: 'images',
      version: 1,
      shortcuts: [
        {
          title: 'Cycle through open documents',
          keys: ['Control', 'Tab'],
        },
        {
          title: 'Switch to previous document',
          keys: ['Shift', 'Meta', '`'],
        },
        {
          title: 'Close a file and open Bridge',
          keys: ['Shift', 'Meta', 'w'],
        },
        {
          title: 'Toggle Standard & Quick Mask mode',
          keys: ['q'],
        },
        {
          title: 'Toggle forward between screen modes',
          keys: ['f'],
        },
        {
          title: 'Toggle backward between screen modes',
          keys: ['Shift', 'f'],
        },
        {
          title: 'Magnify 100%',
          keys: ['Meta', '1'],
        },
        {
          title: 'Switch to Hand tool (when not in text-edit mode)',
          keys: ['Space'],
        },
        {
          title: 'Switch to Zoom In tool',
          keys: ['Meta', 'Space'],
        },
        {
          title: 'Switch to Zoom Out tool',
          keys: ['Alt', 'Space'],
        },
        {
          title: 'Scroll up 1 screen',
          keys: ['PageUp'],
        },
        {
          title: 'Scroll down 1 screen',
          keys: ['PageDown'],
        },
        {
          title: 'Scroll up 10 units',
          keys: ['Shift', 'PageUp'],
        },
        {
          title: 'Scroll down 10 units',
          keys: ['Shift', 'PageDown'],
        },
        {
          title: 'Toggle layer mask on/off',
          keys: ['\\'],
        },
      ],
    },
    {
      title: 'Curves',
      id: 'curves',
      version: 1,
      shortcuts: [
        {
          title: 'Open the Curves dialog box',
          keys: ['Meta', 'm'],
        },
        {
          title: 'Select next point on the curve',
          keys: ['+'],
        },
        {
          title: 'Select the previous point on the curve',
          keys: ['-'],
        },
        {
          title: 'Deselect a point',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Delete a point on the curve',
          keys: ['Backspace'],
        },
      ],
    },
    {
      title: 'Transform Selections',
      id: 'selections',
      version: 1,
      shortcuts: [
        // {
        //   title: 'Transform from the center or reflect',
        //   keys: ['Alt'],
        // },
        // {
        //   title: 'Constrain',
        //   keys: ['Shift'],
        // },
        // {
        //   title: 'Distort',
        //   keys: ['Meta'],
        // },
        {
          title: 'Apply',
          keys: ['Enter'],
        },
        {
          title: 'Cancel',
          keys: ['Escape'],
        },
        {
          title: 'Free transform with duplicate data',
          keys: ['Meta', 'Alt', 't'],
        },
        {
          title: 'Transform again with duplicate data',
          keys: ['Meta', 'Shift', 'Alt', 't'],
        },
      ],
    },
    {
      title: 'Painting',
      id: 'painting',
      version: 1,
      shortcuts: [
        {
          title: 'Select foreground color with Eyedropper tool',
          keys: ['Alt'],
        },
        {
          title: 'Set flow for painting mode to 50%',
          keys: ['Shift', '5'],
        },
        {
          title: 'Cycle through blending modes',
          keys: ['Shift', '+'],
        },
        {
          title: 'Open Fill dialog box',
          keys: ['Backspace'],
        },
        {
          title: 'Fill with foreground or background color',
          keys: ['Alt', 'Backspace'],
        },
        {
          title: 'Fill from history',
          keys: ['Meta', 'Alt', 'Backspace'],
        },
        {
          title: 'Displays Fill dialog box',
          keys: ['Shift', 'Backspace'],
        },
        {
          title: 'Lock transparent pixels on/off',
          keys: ['/'],
        },
      ],
    },
    {
      title: 'Blending Modes I',
      id: 'blending-modes-1',
      version: 1,
      shortcuts: [
        {
          title: 'Cycle through blending modes',
          keys: ['Shift', '+'],
        },
        {
          title: 'Normal',
          keys: ['Shift', 'Alt', 'n'],
        },
        {
          title: 'Dissolve',
          keys: ['Shift', 'Alt', 'i'],
        },
        {
          title: 'Behind',
          keys: ['Shift', 'Alt', 'q'],
        },
        {
          title: 'Clear',
          keys: ['Shift', 'Alt', 'r'],
        },
        {
          title: 'Darken',
          keys: ['Shift', 'Alt', 'k'],
        },
        {
          title: 'Multiply',
          keys: ['Shift', 'Alt', 'm'],
        },
        {
          title: 'Color Burn',
          keys: ['Shift', 'Alt', 'b'],
        },
        {
          title: 'Linear Burn',
          keys: ['Shift', 'Alt', 'a'],
        },
      ],
    },
    {
      title: 'Blending Modes II',
      id: 'blending-modes-2',
      version: 1,
      shortcuts: [

        {
          title: 'Lighten',
          keys: ['Shift', 'Alt', 'g'],
        },
        {
          title: 'Screen',
          keys: ['Shift', 'Alt', 's'],
        },
        {
          title: 'Color Dodge',
          keys: ['Shift', 'Alt', 'd'],
        },
        {
          title: 'Linear Dodge',
          keys: ['Shift', 'Alt', 'w'],
        },
        {
          title: 'Overlay',
          keys: ['Shift', 'Alt', 'o'],
        },
        {
          title: 'Soft Light',
          keys: ['Shift', 'Alt', 'f'],
        },
        {
          title: 'Hard Light',
          keys: ['Shift', 'Alt', 'h'],
        },
        {
          title: 'Vivid Light',
          keys: ['Shift', 'Alt', 'v'],
        },
        {
          title: 'Linear Light',
          keys: ['Shift', 'Alt', 'j'],
        },
      ],
    },
    {
      title: 'Blending Modes III',
      id: 'blending-modes-3',
      version: 1,
      shortcuts: [
        {
          title: 'Pin Light',
          keys: ['Shift', 'Alt', 'z'],
        },
        {
          title: 'Hard Mix',
          keys: ['Shift', 'Alt', 'l'],
        },
        {
          title: 'Difference',
          keys: ['Shift', 'Alt', 'e'],
        },
        {
          title: 'Exclusion',
          keys: ['Shift', 'Alt', 'x'],
        },
        {
          title: 'Hue',
          keys: ['Shift', 'Alt', 'u'],
        },
        {
          title: 'Saturation',
          keys: ['Shift', 'Alt', 't'],
        },
        {
          title: 'Color',
          keys: ['Shift', 'Alt', 'c'],
        },
        {
          title: 'Luminosity',
          keys: ['Shift', 'Alt', 'y'],
        },
      ],
    },
    {
      title: 'Format Type',
      id: 'type',
      version: 1,
      shortcuts: [
        {
          title: 'Align left',
          keys: ['Meta', 'Shift', 'l'],
        },
        {
          title: 'Align center',
          keys: ['Meta', 'Shift', 'c'],
        },
        {
          title: 'Align right',
          keys: ['Meta', 'Shift', 'r'],
        },
        {
          title: 'Choose 100% horizontal scale',
          keys: ['Meta', 'Shift', 'x'],
        },
        {
          title: 'Choose 100% vertical scale',
          keys: ['Meta', 'Shift', 'Alt', 'x'],
        },
        {
          title: 'Choose Auto leading',
          keys: ['Meta', 'Shift', 'Alt', 'a'],
        },
        {
          title: 'Choose 0 for tracking',
          keys: ['Meta', 'Control', 'Shift', 'q'],
        },
        {
          title: 'Justify paragraph, left aligns last line',
          keys: ['Meta', 'Shift', 'j'],
        },
        {
          title: 'Justify paragraph, justifies all',
          keys: ['Meta', 'Shift', 'f'],
        },
        {
          title: 'Toggle paragraph hyphenation',
          keys: ['Meta', 'Control', 'Shift', 'Alt', 'h'],
        },
        {
          title: 'Toggle single/every-line composer on/off',
          keys: ['Meta', 'Shift', 'Alt', 't'],
        },
        {
          title: 'Increase type size of selected text',
          keys: ['Meta', 'Shift', '>'],
        },
        {
          title: 'Increase leading',
          keys: ['Alt', 'ArrowUp'],
        },
        {
          title: 'Decrease baseline shift',
          keys: ['Shift', 'Alt', 'ArrowDown'],
        },
        {
          title: 'Decrease kerning',
          keys: ['Alt', 'ArrowLeft'],
        },
      ],
    },
    {
      title: 'Puppet Warp',
      id: 'puppet-warp',
      version: 1,
      shortcuts: [
        {
          title: 'Cancel completely',
          keys: ['Escape'],
        },
        {
          title: 'Undo last pin adjustment',
          keys: ['Meta', 'z'],
        },
        {
          title: 'Select all pins',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Deselect all pins',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Temporarily hide pins',
          keys: ['h'],
        },
      ],
    },
    {
      title: 'Refine Edge',
      id: 'refine-edge',
      version: 1,
      shortcuts: [
        {
          title: 'Open the Refine Edge dialog box',
          keys: ['Meta', 'Alt', 'r'],
        },
        {
          title: 'Cycle forward through preview modes',
          keys: ['f'],
        },
        {
          title: 'Cycle backward through preview modes',
          keys: ['Shift', 'f'],
        },
        {
          title: 'Toggle between original image & selection preview',
          keys: ['x'],
        },
        {
          title: 'Toggle between original selection & refined version',
          keys: ['p'],
        },
        {
          title: 'Toggle radius preview',
          keys: ['j'],
        },
        {
          title: 'Toggle between Refine Radius & Erase Refinements tools',
          keys: ['Shift', 'e'],
        },
      ],
    },
    {
      title: 'Filter Gallery',
      id: 'filter-gallery',
      version: 1,
      shortcuts: [
        {
          title: 'Reapply last-used filter',
          keys: ['Control', 'Meta', 'f'],
        },
        {
          title: 'Change Cancel button to Default',
          keys: ['Meta'],
        },
        {
          title: 'Change Cancel button to Reset',
          keys: ['Alt'],
        },
        {
          title: 'Undo/Redo',
          keys: ['Meta', 'z'],
        },
        {
          title: 'Step forward',
          keys: ['Meta', 'Shift', 'z'],
        },
        {
          title: 'Step backward',
          keys: ['Meta', 'Alt', 'z'],
        },
      ],
    },
    {
      title: 'Liquify Filter',
      id: 'liquify-filter',
      version: 1,
      shortcuts: [
        {
          title: 'Forward Warp tool',
          keys: ['w'],
        },
        {
          title: 'Reconstruct tool',
          keys: ['r'],
        },
        {
          title: 'Twirl Clockwise tool',
          keys: ['c'],
        },
        {
          title: 'Pucker tool',
          keys: ['s'],
        },
        {
          title: 'Bloat tool',
          keys: ['b'],
        },
        {
          title: 'Push Left tool',
          keys: ['o'],
        },
        {
          title: 'Mirror tool',
          keys: ['m'],
        },
        {
          title: 'Turbulence tool',
          keys: ['t'],
        },
        {
          title: 'Freeze Mask tool',
          keys: ['f'],
        },
        {
          title: 'Thaw Mask tool',
          keys: ['d'],
        },
        {
          title: 'Cycle through controls on right from top',
          keys: ['Tab'],
        },
        {
          title: 'Cycle through controls on right from bottom',
          keys: ['Shift', 'Tab'],
        },
        {
          title: 'Change Cancel to Reset',
          keys: ['Alt'],
        },
      ],
    },
    {
      title: 'Vanishing Point',
      id: 'vanishing-point',
      version: 1,
      shortcuts: [
        {
          title: 'Zoom 2x (temporary)',
          keys: ['x'],
        },
        {
          title: 'Zoom in',
          keys: [
            ['='],
            ['+'],
          ],
        },
        {
          title: 'Zoom out',
          keys: ['Meta', '-'],
        },
        {
          title: 'Fit in view',
          keys: ['Meta', '0'],
        },
        {
          title: 'Deselect all',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Hide selection and planes',
          keys: ['Meta', 'h'],
        },
        {
          title: 'Move selection 1 pixel left',
          keys: ['ArrowLeft'],
        },
        {
          title: 'Move selection 10 pixels right',
          keys: ['Shift', 'ArrowRight'],
        },
        {
          title: 'Repeat last duplicate and move',
          keys: ['Meta', 'Shift', 't'],
        },
        {
          title: 'Constrain selection to a 15° rotation',
          keys: ['Alt', 'Shift'],
        },
        {
          title: 'Delete last node while creating plane',
          keys: ['Backspace'],
        },
      ],
    },
    {
      title: 'Black-and-White Dialog',
      id: 'black-and-white',
      version: 1,
      shortcuts: [
        {
          title: 'Open the Black-and-White dialog box',
          keys: ['Shift', 'Meta', 'Alt', 'b'],
        },
        {
          title: 'Increase selected value by 1%',
          keys: ['ArrowUp'],
        },
        {
          title: 'Decrease selected value by 10%',
          keys: ['ArrowDown'],
        },
      ],
    },
  ],
}
