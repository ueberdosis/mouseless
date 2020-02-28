/* eslint-disable max-len */
// https://university.webflow.com/article/keyboard-shortcuts-in-the-webflow-designer
module.exports = {
  id: 'webflow',
  title: 'Webflow',
  systemTitle: 'Webflow',
  category: 'Productivity',
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Show shortcut cheatsheet',
          keys: ['Shift', '/'],
        },
        {
          title: 'Save as Snapshot',
          keys: ['Shift', 'Meta', 's'],
        },
        {
          title: 'Deselect/Abort',
          keys: ['Escape'],
        },
        {
          title: 'Delete Element',
          keys: ['Backspace'],
        },
        {
          title: 'Show Publish Dialog',
          keys: ['Shift', 'p'],
        },
        {
          title: 'Show Export Code Dialog',
          keys: ['Shift', 'e'],
        },
        {
          title: 'Edit element',
          keys: ['Enter'],
        },
        {
          title: '‍Copy',
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
          title: 'Undo',
          keys: ['Meta', 'z'],
        },
        {
          title: 'Redo',
          keys: ['Shift', 'Meta', 'z'],
        },
      ],
    },
    {
      title: 'View',
      id: 'view',
      version: 1,
      shortcuts: [
        {
          title: 'Preview mode',
          keys: ['Shift', 'Meta', 'p'],
        },
        {
          title: 'Guide overlay',
          keys: ['Shift', 'Meta', 'g'],
        },
        {
          title: 'Show element edges',
          keys: ['Shift', 'Meta', 'e'],
        },
        {
          title: 'X-ray mode',
          keys: ['Shift', 'Meta', 'x'],
        },
        {
          title: 'Desktop view',
          keys: ['1'],
        },
        {
          title: 'Tablet view',
          keys: ['2'],
        },
        {
          title: 'Phone (landscape) view',
          keys: ['3'],
        },
        {
          title: 'Phone (portrait) view',
          keys: ['4'],
        },
      ],
    },
    {
      title: 'Left-hand Toolbar',
      id: 'toolbar',
      version: 1,
      shortcuts: [
        {
          title: 'Show Add panel',
          keys: ['a'],
        },
        {
          title: 'Show Navigator tab',
          keys: ['z'],
        },
        {
          title: 'Show Pages panel',
          keys: ['p'],
        },
        {
          title: 'Show Symbols panel',
          keys: ['Shift', 'a'],
        },
        {
          title: 'Make selected element a Symbol',
          keys: ['Meta', 'Shift', 'a'],
        },
        {
          title: 'Show Asset Manager',
          keys: ['j'],
        },
      ],
    },
    {
      title: 'Right-hand Tabs',
      id: 'tabs',
      version: 1,
      shortcuts: [
        {
          title: '‍Show Style tab',
          keys: ['s'],
        },
        {
          title: 'Show Settings tab',
          keys: ['d'],
        },
        {
          title: 'Show Style Manager tab',
          keys: ['g'],
        },
        {
          title: 'Show Interactions tab',
          keys: ['h'],
        },
      ],
    },
    {
      title: 'Style Panel',
      id: 'style',
      version: 1,
      shortcuts: [
        {
          title: 'Add class to selected element',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Rename Last Class on Selected Element',
          keys: ['Meta', 'Shift', 'Enter'],
        },
      ],
    },
    {
      title: 'Miscellaneous',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Select parent element',
          keys: ['ArrowUp'],
        },
        {
          title: 'Select child element',
          keys: ['ArrowDown'],
        },
        {
          title: 'Select next element',
          keys: ['Alt', 'ArrowRight'],
        },
        {
          title: 'Select previous element',
          keys: ['Alt', 'ArrowLeft'],
        },
        {
          title: 'Toggle Collaborators on selected element',
          keys: ['Meta', 'Shift', 'l'],
        },
        {
          title: 'Quick Find',
          keys: ['Meta', 'e'],
        },
      ],
    },
  ],
}
