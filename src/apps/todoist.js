/* eslint-disable max-len */
// https://get.todoist.help/hc/en-us/articles/205063212-Keyboard-Shortcuts
module.exports = {
  id: 'todoist',
  title: 'Todoist',
  category: 'Productivity',
  description: null,
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Add a task',
          keys: ['q'],
        },
        {
          title: 'Add a task at the bottom',
          keys: ['a'],
        },
        {
          title: 'Add a task at the top',
          keys: ['Shift', 'a'],
        },
        {
          title: 'Add a section',
          keys: ['s'],
        },
        {
          title: 'Open search',
          keys: ['f'],
        },
        {
          title: 'Open preferences',
          keys: ['Meta', ','],
        },
      ],
    },
    {
      title: 'Global shortcuts',
      id: 'global',
      version: 1,
      shortcuts: [
        {
          title: 'Show/hide Todoist',
          keys: ['Control', 'Meta', 't'],
        },
        {
          title: 'Open task Quick Add',
          keys: ['Control', 'Meta', 'a'],
        },
      ],
    },
    {
      title: 'Adding & Editing',
      id: 'adding',
      version: 1,
      shortcuts: [
        {
          title: 'Cancel current changes',
          keys: ['Escape'],
        },
        {
          title: 'Save a newly created task and create a new one below it',
          keys: ['Enter'],
        },
        {
          title: 'Save changes to an existing task and create a new task below it',
          keys: ['Shift', 'Enter'],
        },
        {
          title: 'Save a new task or save changes to an existing one and create a new task above it',
          keys: ['Control', 'Enter'],
        },
        {
          title: 'Move to the task above the task currently being edited',
          keys: ['Control', 'ArrowUp'],
        },
        {
          title: 'Move to the task below the task currently being edited',
          keys: ['Control', 'ArrowDown'],
        },
      ],
    },
    {
      title: 'Sub-tasks',
      id: 'subtasks',
      version: 1,
      shortcuts: [
        {
          title: 'Increase task indent',
          keys: ['Meta', 'ArrowRight'],
        },
        {
          title: 'Decrease task indent',
          keys: ['Meta', 'ArrowLeft'],
        },
      ],
    },
    {
      title: 'Sorting',
      id: 'sorting',
      version: 1,
      shortcuts: [
        {
          title: 'Sort by date',
          keys: ['d'],
        },
        {
          title: 'Sort by priority',
          keys: ['p'],
        },
        {
          title: 'Sort by name',
          keys: ['n'],
        },
        {
          title: 'Sort by assignee',
          keys: ['r'],
        },
      ],
    },
  ],
}
