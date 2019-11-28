/* eslint-disable max-len */
// https://support.culturedcode.com/customer/en/portal/articles/2785159-keyboard-shortcuts-for-mac
export default {
  id: 'things',
  title: 'Things',
  category: 'Productivity',
  sets: [
    {
      title: 'Create new items',
      id: 'new',
      version: 1,
      shortcuts: [
        {
          title: 'Create a new to-do',
          keys: ['Meta', 'n'],
        },
        {
          title: 'Create a new to-do below selection',
          keys: ['Space'],
        },
        {
          title: 'Paste plain text to create new to-dos',
          keys: ['Meta', 'v'],
        },
        {
          title: 'Create a checklist in an open to-do',
          keys: ['Meta', 'Shift', 'c'],
        },
        {
          title: 'Create a new heading in a project',
          keys: ['Meta', 'Shift', 'n'],
        },
        {
          title: 'Create a new project',
          keys: ['Meta', 'Alt', 'n'], // TODO: need to check
        },
        {
          title: 'Open Quick Entry',
          keys: ['Control', 'Space'],
        },
        {
          title: 'Open Quick Entry with Autofill',
          keys: ['Alt', 'Control', 'Space'],
        },
      ],
    },
    {
      title: 'Edit items',
      id: 'edit',
      version: 1,
      shortcuts: [
        {
          title: 'Open a to-do or project',
          keys: ['Enter'],
        },
        {
          title: 'Save and close',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Save and close',
          keys: ['Escape'],
        },
        {
          title: 'Duplicate a to-do or project',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Copy a to-do or project',
          keys: ['Meta', 'c'],
        },
        {
          title: 'Paste a to-do or project',
          keys: ['Meta', 'v'],
        },
        {
          title: 'Complete selected items',
          keys: ['Meta', '.'],
        },
        {
          title: 'Cancel selected items',
          keys: ['Meta', 'Alt', '.'], // TODO: need to check
        },
        {
          title: 'Delete selected items',
          keys: ['Delete'],
        },
        {
          title: 'Move completed to Logbook',
          keys: ['Meta', 'l'],
        },
      ],
    },
    {
      title: 'Select items',
      id: 'select',
      version: 1,
      shortcuts: [
        {
          title: 'Select item above',
          keys: ['ArrowUp'],
        },
        {
          title: 'Select item below',
          keys: ['ArrowDown'],
        },
        {
          title: 'Extend selection upwards',
          keys: ['Shift', 'ArrowUp'],
        },
        {
          title: 'Extend selection downwards',
          keys: ['Shift', 'ArrowDown'],
        },
        {
          title: 'Extend selection to the top',
          keys: ['Alt', 'Shift', 'ArrowUp'],
        },
        {
          title: 'Extend selection to the bottom',
          keys: ['Alt', 'Shift', 'ArrowDown'],
        },
        {
          title: 'Select everything',
          keys: ['Meta', 'a'],
        },
      ],
    },
    {
      title: 'Move items',
      id: 'move',
      version: 1,
      shortcuts: [
        {
          title: 'Move selection to another list',
          keys: ['Meta', 'Shift', 'm'],
        },
        {
          title: 'Move copied to-dos and projects',
          keys: ['Meta', 'Alt', 'v'],
        },
        {
          title: 'Move selection up',
          keys: ['Meta', 'ArrowUp'],
        },
        {
          title: 'Move selection down',
          keys: ['Meta', 'ArrowDown'],
        },
        {
          title: 'Move selection to top of list',
          keys: ['Meta', 'Alt', 'ArrowUp'],
        },
        {
          title: 'Move selection to bottom of list',
          keys: ['Meta', 'Alt', 'ArrowDown'],
        },
      ],
    },
    {
      title: 'Edit dates',
      id: 'dates',
      version: 1,
      shortcuts: [
        {
          title: 'Show Jump Start',
          keys: ['Meta', 's'],
        },
        {
          title: 'Start Today',
          keys: ['Meta', 't'],
        },
        {
          title: 'Start This Evening',
          keys: ['Meta', 'e'],
        },
        {
          title: 'Start Anytime',
          keys: ['Meta', 'r'],
        },
        {
          title: 'Start Someday',
          keys: ['Meta', 'o'],
        },
        {
          title: 'Start date +1 day',
          keys: ['Control', ']'],
        },
        {
          title: 'Start date -1 day',
          keys: ['Control', '['],
        },
        {
          title: 'Start date +1 week',
          keys: ['Control', '}'], // original: ['Control', 'Shift', ']']
        },
        {
          title: 'Start date -1 week',
          keys: ['Control', '{'], // original: ['Control', 'Shift', '[']
        },
        {
          title: 'Direct access to set a Deadline',
          keys: ['Meta', 'Shift', 'd'],
        },
        {
          title: 'Deadline +1 day',
          keys: ['Control', '.'],
        },
        {
          title: 'Deadline -1 day',
          keys: ['Control', ','],
        },
        {
          title: 'Deadline +1 week',
          keys: ['Control', 'Shift', '>'], // TODO: need to check
        },
        {
          title: 'Deadline -1 week',
          keys: ['Control', 'Shift', '<'], // TODO: need to check
        },
        {
          title: 'Make to-do or project repeating',
          keys: ['Meta', 'Shift', 'r'],
        },
      ],
    },
    {
      title: 'Control windows',
      id: 'windows',
      version: 1,
      shortcuts: [
        {
          title: 'Open new window',
          keys: ['Meta', 'Control', 'n'],
        },
        {
          title: 'Cycle through open windows',
          keys: ['Meta', 'Shift', '`'], // TODO: need to check
        },
        {
          title: 'Close current window',
          keys: ['Meta', 'w'],
        },
        {
          title: 'Close all windows',
          keys: ['Meta', 'Alt', 'w'],
        },
        {
          title: 'Hide or show sidebar',
          keys: ['Meta', '/'],
        },
        {
          title: 'Hide or show toolbar',
          keys: ['Meta', 'Alt', 't'],
        },
        {
          title: 'Full screen',
          keys: ['Meta', 'Control', 'f'],
        },
      ],
    },
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        {
          title: 'Go to Inbox',
          keys: ['Meta', '1'],
        },
        {
          title: 'Go to Today',
          keys: ['Meta', '2'],
        },
        {
          title: 'Go to Upcoming',
          keys: ['Meta', '3'],
        },
        {
          title: 'Go to Anytime',
          keys: ['Meta', '4'],
        },
        {
          title: 'Go to Someday',
          keys: ['Meta', '5'],
        },
        {
          title: 'Go to Logbook',
          keys: ['Meta', '6'],
        },
        {
          title: 'Show to-do in list',
          keys: ['Meta', 'Shift', 'l'],
        },
        {
          title: 'Enter a selected project',
          keys: ['ArrowRight'],
        },
        {
          title: 'Return to previous list',
          keys: ['ArrowLeft'],
        },
        {
          title: 'Scroll to top',
          keys: ['Alt', 'ArrowUp'],
        },
        {
          title: 'Scroll to bottom',
          keys: ['Alt', 'ArrowDown'],
        },
        {
          title: 'Navigate up in the sidebar',
          keys: ['Meta', 'Alt', 'Control', 'ArrowUp'],
        },
        {
          title: 'Navigate down in the sidebar',
          keys: ['Meta', 'Alt', 'Control', 'ArrowDown'],
        },
      ],
    },
    {
      title: 'Search',
      id: 'search',
      version: 1,
      shortcuts: [
        {
          title: 'Find',
          keys: ['Meta', 'f'],
        },
      ],
    },
    {
      title: 'Tags',
      id: 'tags',
      version: 1,
      shortcuts: [
        {
          title: 'Open tag window',
          keys: ['Meta', 'Control', 't'],
        },
        {
          title: 'Close tag window',
          keys: ['Escape'],
        },
        {
          title: 'Direct access to add a tag',
          keys: ['Meta', 'Shift', 't'],
        },
        // {
        //   title: 'Toggle a tag for selected to-do',
        //   keys: ['Control', 'shortcut'],
        // },
        // {
        //   title: 'Filter for a tag',
        //   keys: ['Alt', 'Control', 'shortcut'],
        // },
        // {
        //   title: 'Select multiple tags',
        //   keys: ['Meta', 'click any tag'],
        // },
        {
          title: 'Destroy previous filter',
          keys: ['Control', 'Escape'],
        },
      ],
    },
    {
      title: 'Links',
      id: 'links',
      version: 1,
      shortcuts: [
        {
          title: 'Open a link',
          keys: ['Meta', 'Alt', 'Enter'],
        },
      ],
    },
  ],
}
