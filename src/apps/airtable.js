// https://support.airtable.com/hc/en-us/articles/204143385-Airtable-keyboard-shortcuts
module.exports = {
  id: 'airtable',
  title: 'Airtable',
  category: 'Productivity',
  description: null,
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Undo',
          keys: ['Meta', 'z'],
        },
        {
          title: 'Redo',
          keys: ['Meta', 'y'],
        },
        {
          title: 'Print',
          keys: ['Meta', 'p'],
        },
        {
          title: 'Open table switcher',
          keys: ['Meta', 'j'],
        },
        {
          title: 'Open quick base switcher',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Open view switcher',
          keys: ['Meta', 'Shift', 'k'],
        },
        {
          title: 'Open filter menu',
          keys: ['Meta', 'Shift', 'f'],
        },
        {
          title: 'Create a new filter',
          keys: ['Enter'],
        },
        {
          title: 'Open grouped records menu',
          keys: ['Meta', 'Shift', 'd'],
        },
        {
          title: 'Open sort menu',
          keys: ['Meta', 'Shift', 's'],
        },
        // duplicated
        // {
        //   title: 'Re-apply the most recent sort',
        //   keys: ['Enter'],
        // },
        {
          title: 'Toggles blocks',
          keys: ['Meta', 'Shift', '\\'],
        },
        {
          title: 'Open find bar',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Close find bar',
          keys: ['Escape'],
        },
        {
          title: 'Set selected date field to now',
          keys: ['Meta', ';'],
        },
      ],
    },
    {
      title: 'Grid',
      id: 'grid',
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
          title: 'Expand the active record',
          keys: ['Space'],
        },
        {
          title: 'Return to table',
          keys: ['Escape'],
        },
        {
          title: 'Expand active cell',
          keys: ['Shift', 'Space'],
        },
        {
          title: 'Scroll one screen up',
          keys: ['PageUp'],
        },
        {
          title: 'Scroll one screen down',
          keys: ['PageDown'],
        },
        {
          title: 'Scroll one screen left',
          keys: ['Alt', 'PageUp'],
        },
        {
          title: 'Scroll one screen right',
          keys: ['Alt', 'PageDown'],
        },
        {
          title: 'Jump to the right edge of table',
          keys: ['Meta', 'ArrowRight'],
        },
        {
          title: 'Jump to bottom edge of table',
          keys: ['Meta', 'ArrowDown'],
        },
        {
          title: 'Jump to the right edge of table and select cells',
          keys: ['Shift', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Jump to bottom edge of table and select cells',
          keys: ['Shift', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Select range of cells',
          keys: ['Shift', 'ArrowRight'],
        },
        {
          title: 'Insert a record below selected cell',
          keys: ['Shift', 'Enter'],
        },
        {
          title: 'Edit selected cell',
          keys: ['Enter'],
        },
      ],
    },
    {
      title: 'Gallery',
      id: 'gallery',
      version: 1,
      shortcuts: [
        {
          title: 'Scroll to the top',
          keys: ['Meta', 'ArrowUp'],
        },
        {
          title: 'Scroll to bottom',
          keys: ['Meta', 'ArrowDown'],
        },
      ],
    },
    {
      title: 'Kanban',
      id: 'kanban',
      version: 1,
      shortcuts: [
        {
          title: 'Scroll kanban board to the left',
          keys: ['ArrowLeft'],
        },
        {
          title: 'Scroll kanban board to the right',
          keys: ['ArrowRight'],
        },
        {
          title: 'Scroll kanban board to the right',
          keys: ['Meta', 'ArrowRight'],
        },
        {
          title: 'Scroll kanban board to the left',
          keys: ['Meta', 'ArrowLeft'],
        },
        {
          title: 'Scroll all stacks to the top',
          keys: ['Meta', 'ArrowUp'],
        },
        {
          title: 'Scroll all stacks to the bottom',
          keys: ['Meta', 'ArrowDown'],
        },
      ],
    },
    {
      title: 'Expanded Record',
      id: 'expanded',
      version: 1,
      shortcuts: [
        {
          title: 'Move to the next record',
          keys: ['Meta', 'Shift', '>'],
        },
        {
          title: 'Move to the previous record',
          keys: ['Meta', 'Shift', '<'],
        },
        {
          title: 'Close expanded record',
          keys: ['Escape'],
        },
      ],
    },
  ],
}
