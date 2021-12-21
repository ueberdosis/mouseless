// https://resources.jetbrains.com/storage/products/pycharm/docs/PyCharm_ReferenceCard_mac.pdf
module.exports = {
  id: 'pycharm',
  title: 'PyCharm MacOS keymap',
  category: 'Development',
  description: null,
  sets: [
    {
      title: 'Actions',
      id: 'actions',
      version: 1,
      shortcuts: [
        {
          title: 'Find any action inside the IDE',
          keys: ['Shift', 'Meta', 'A'],
        },
      ]
    },
    {
      title: 'Create and Edit',
      id: 'createandedit',
      version: 1,
      shortcuts: [
        {
          title: 'Show intention actions',
          keys: ['Alt', 'Enter'],
        },
        {
          title: 'Basic code completion',
          keys: ['Control', 'Space'],
        },
        {
          title: 'Smart code completion',
          keys: ['Control', 'Shift', 'Space'],
        },
        {
          title: 'Type name completion',
          keys: ['Control', 'Alt', 'Space'],
        },
        {
          title: 'Complete statement',
          keys: ['Shift', 'Meta', 'Enter'],
        },
        {
          title: 'Parameter information',
          keys: ['Meta', 'P'],
        },
        {
          title: 'Quick definition',
          keys: ['Alt', 'Space'],
        },
        {
          title: 'Quick documentation',
          keys: ['F1'],
        },
        {
          title: 'External documentation',
          keys: ['Shift', 'F1'],
        },
        {
          title: 'Generate code',
          keys: ['Meta', 'N'],
        },
        {
          title: 'Override members',
          keys: ['Control', 'O'],
        },
        {
          title: 'Implement members',
          keys: ['Control', 'I'],
        },
        {
          title: 'Surround with...',
          keys: ['Control', 'Meta', 'T'],
        },
        {
          title: 'Comment with line comment',
          keys: ['Meta', '/'],
        },
        {
          title: 'Extend selection',
          keys: ['Control', 'ArrowUp'],
        },
        {
          title: 'Shrink selection',
          keys: ['Control', 'ArrowDown'],
        },
        {
          title: 'Context info',
          keys: ['Control', 'Shift', 'Q'],
        },
        {
          title: 'Optimize imports',
          keys: ['Control', 'Alt', 'O'],
        },
        {
          title: 'Auto-indent lines',
          keys: ['Control', 'Alt', 'I'],
        },
        {
          title: 'Cut',
          keys: ['Meta', 'X'],
        },
        {
          title: 'Сopy',
          keys: ['Meta', 'C'],
        },
        {
          title: 'Paste',
          keys: ['Meta', 'V'],
        },
        {
          title: 'Copy document path',
          keys: ['Shift', 'Meta', 'C'],
        },
        {
          title: 'Paste from clipboard history',
          keys: ['Shift', 'Meta', 'V'],
        },
        {
          title: 'Duplicate current line or selection',
          keys: ['Meta', 'D'],
        },
        {
          title: 'Move line up',
          keys: ['Shift', 'Meta', 'ArrowUp']
        },
        {
          title: 'Move line down',
          keys: ['Shift', 'Meta', 'ArrowDown']
        },
        {
          title: 'Delete line at caret',
          keys: ['Meta', 'Backspace']
        },
        {
          title: 'Join line',
          keys: ['Shift', 'Meta', 'J'],
        },
        {
          title: 'Split line',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Start new line',
          keys: ['Shift', 'Enter'],
        },
        {
          title: 'Toggle case',
          keys: ['Shift', 'Meta', 'U'],
        },
        {
          title: 'Expand code block',
          keys: ['Meta', '+'],
        },
        {
          title: 'Collapse code block',
          keys: ['Meta', '-'],
        },
        {
          title: 'Expand all',
          keys: ['Shift', 'Meta', '+'],
        },
        {
          title: 'Collapse all',
          keys: ['Shift', 'Meta', '-'],
        },
        {
          title: 'Save all',
          keys: ['Meta', 'S'],
        },
      ],
    },
    {
      title: 'Version Control',
      id: 'versioncontrol',
      version: 1,
      shortcuts: [
        {
          title: 'VCS operations popup...',
          keys: ['Control', '`']
        },
        {
          title: 'Commit',
          keys: ['Meta', 'K']
        },
        {
          title: 'Update project',
          keys: ['Meta', 'T']
        },
        {
          title: 'Recent changes',
          keys: ['Alt', 'Shift', 'C']
        },
        {
          title: 'Revert',
          keys: ['Control', 'Meta', 'Z']
        },
        {
          title: 'Push...',
          keys: ['Shift', 'Meta', 'K']
        },
        {
          title: 'Next change',
          keys: ['Control', 'Alt', 'Shift', 'ArrowDown']
        },
        {
          title: 'Previous change',
          keys: ['Control', 'Alt', 'Shift', 'ArrowUp']
        },
      ],
    },
    {
      title: 'Master Your IDE',
      id: 'masteryouride',
      version: 1,
      shortcuts: [
        {
          title: 'Find action...',
          keys: ['Shift', 'Meta', 'A']
        },
        {
          title: 'Open a tool window',
          keys: ['Meta', 'Y', '[0-9]']
        },
        {
          title: 'Synchronize',
          keys: ['Alt', 'Meta', 'Y']
        },
        {
          title: 'Toggle full screen mode',
          keys: ['Control', 'Meta', 'F']
        },
        {
          title: 'Quick switch scheme...',
          keys: ['Control', '`']
        },
        {
          title: 'Preferences...',
          keys: ['Meta', ',']
        },
        {
          title: 'Jump to source',
          keys: ['Meta', 'ArrowDown']
        },
        {
          title: 'Jump to navigation bar',
          keys: ['Meeta', 'ArrowUp']
        },
        {
          title: 'Jump to last tool window',
          keys: ['F12']
        },
        {
          title: 'Hide active tool windows',
          keys: ['Shift', 'Esc']
        },
        {
          title: 'Hide all tool windows',
          keys: ['Shift', 'Meta', 'F12']
        },
        {
          title: 'Go to next/previous editor tab',
          keys: ['Control', 'Tab']
        },
        {
          title: 'Go to editor (from a tool window)',
          keys: ['Esc']
        },
      ],
    },
    {
      title: 'Find Everything',
      id: 'findeverything',
      version: 1,
      shortcuts: [
        {
          title:'Search everywhere',
          keys: ['Shift', 'Shift']
        },
        {
          title:'Find',
          keys: ['Meta', 'F']
        },
        {
          title:'Replace',
          keys: ['Meta', 'R']
        },
        {
          title:'Find in path',
          keys: ['Shift', 'Meta', 'F']
        },
        {
          title:'Replace in path',
          keys: ['Shift', 'Meta', 'R']
        },
        {
          title:'Next occurence',
          keys: ['Meta', 'G']
        },
        {
          title:'Previous occurence',
          keys: ['Meta', 'Shift', 'G']
        },
        {
          title:'Go to class',
          keys: ['Meta', 'O']
        },
        {
          title:'Go to file',
          keys: ['Shift', 'Meta', 'O']
        },
        {
          title:'Go to file member',
          keys: ['Meta', 'F12']
        },
        {
          title:'Go to symbol',
          keys: ['Control', 'Meta', 'O']
        },
      ],
    },
    {
      title: 'Navigate From Symbols',
      id: 'navigatefromsymbols',
      version: 1,
      shortcuts: [
        {
          title: 'Declaration',
          keys: ['Meta', 'B']
        },
        {
          title: 'Type declaration (JavaScript only)',
          keys: ['Control', 'Shift', 'B']
        },
        {
          title: 'Super method',
          keys: ['Meta', 'U']
        },
        {
          title: 'Implementation(s)',
          keys: ['Alt', 'Meta', 'B']
        },
        {
          title: 'Find usages',
          keys: ['Alt', 'F7']
        },
        {
          title: 'Find usages in file',
          keys: ['Meta', 'F7']
        },
        {
          title: 'Highlight usages in file',
          keys: ['Shift', 'Meta', 'F7']
        },
        {
          title: 'Show usages',
          keys: ['Alt', 'Meta', 'F7']
        },
      ],
    },
    {
      title: 'Refactor and Clean Up',
      id: 'refactorandcleanup',
      version: 1,
      shortcuts: [
        {
          title: 'Refactor this...',
          keys: ['Control', 'T']
        },
        {
          title: 'Copy...',
          keys: ['F5']
        },
        {
          title: 'Move...',
          keys: ['F6']
        },
        {
          title: 'Safe delete...',
          keys: ['Meta', 'Backspace']
        },
        {
          title: 'Rename...',
          keys: ['Shift', 'F6']
        },
        {
          title: 'Change signature...',
          keys: ['Meta', 'F6']
        },
        {
          title: 'Inline...',
          keys: ['Alt', 'Meta', 'N']
        },
        {
          title: 'Extract method',
          keys: ['Alt', 'Meta', 'M']
        },
        {
          title: 'Introduce variable',
          keys: ['Alt', 'Meta', 'V']
        },
        {
          title: 'Introduce field',
          keys: ['Alt', 'Meta', 'F']
        },
        {
          title: 'Introduce constant ',
          keys: ['Alt', 'Meta', 'C']
        },
        {
          title: 'Introduce parameter ',
          keys: ['Alt', 'Meta', 'P']
        },
        {
          title: 'Reformat code',
          keys: ['Alt', 'Meta', 'L']
        },
      ],
    },
    {
      title: 'Analyze and Explore',
      id: 'analyzeandexplore',
      version: 1,
      shortcuts: [
        {
          title: 'Show error description',
          keys: ['Meta', 'F1']
        },
        {
          title: 'Next highlighted error',
          keys: ['F2']
        },
        {
          title: 'Previous highlighted error',
          keys: ['Shift', 'F2']
        },
        {
          title: 'Run inspection by name...',
          keys: ['Alt', 'Shift', 'Meta', 'I']
        },
        {
          title: 'Type hierarchy',
          keys: ['Control', 'H']
        },
        {
          title: 'Call hierarchy',
          keys: ['Control', 'Alt', 'H']
        },
      ],
    },
    {
      title: 'Navigate in Context',
      id: 'navigateincontext',
      version: 1,
      shortcuts: [
        {
          title: 'Select in...',
          keys: ['Alt', 'F1']
        },
        {
          title: 'Recently viewed locations',
          keys: ['Meta', 'E']
        },
        {
          title: 'Recent locations',
          keys: ['Shift', 'Meta', 'E']
        },
        {
          title: 'Last edit location',
          keys: ['Shift', 'Meta', 'Backspace']
        },
        {
          title: 'Navigate back',
          keys: ['Meta', '/']
        },
        {
          title: 'Navigate forward',
          keys: ['/', 'Meta']
        },
        {
          title: 'Go to previous method',
          keys: ['Alt', 'ArrowUp']
        },
        {
          title: 'Go to next method',
          keys: ['Alt', 'ArrowDown']
        },
        {
          title: 'Go to line / column...',
          keys: ['Meta', 'L']
        },
        {
          title: 'Go to code block end',
          keys: ['Alt', 'Meta', ']']
        },
        {
          title: 'Go to code block start',
          keys: ['Alt', 'Meta', '[']
        },
        {
          title: 'Add to favorites',
          keys: ['Alt', 'Shift', 'F']
        },
        {
          title: 'Toggle bookmark',
          keys: ['F3']
        },
        {
          title: 'Toggle bookmark with mnemonic',
          keys: ['Alt', 'F3']
        },
        {
          title: 'Go to numbered bookmark',
          keys: ['Control', '[0-9]']
        },
        {
          title: 'Show bookmarks',
          keys: ['Meta', 'F3']
        },
      ],
    },
    {
      title: 'Build, Run and Debug',
      id: 'buildrunanddebug',
      version: 1,
      shortcuts: [
        {
          title: 'Run context configuration',
          keys: ['Control', 'Alt', 'R']
        },
        {
          title: 'Run selected configuration',
          keys: ['Control', 'Alt', 'R']
        },
        {
          title: 'Debug selected configuration',
          keys: ['Control', 'Alt', 'D']
        },
        {
          title: 'Run current configuration',
          keys: ['Control', 'R']
        },
        {
          title: 'Debug current configuration',
          keys: ['Control', 'D']
        },
        {
          title: 'Step over',
          keys: ['F8']
        },
        {
          title: 'Step into',
          keys: ['F7']
        },
        {
          title: 'Smart step into',
          keys: ['Shift', 'F7']
        },
        {
          title: 'Step out',
          keys: ['Shift', 'F8']
        },
        {
          title: 'Run to cursor',
          keys: ['Alt', 'F9']
        },
        {
          title: 'Force run to cursor',
          keys: ['Alt', 'Meta', 'F9']
        },
        {
          title: 'Show execution point',
          keys: ['Alt', 'F10']
        },
        {
          title: 'Evaluate expression...',
          keys: ['Alt', 'F8']
        },
        {
          title: 'Stop',
          keys: ['Meta', 'F2']
        },
        {
          title: 'Stop background processes...',
          keys: ['Shift', 'Meta', 'F2']
        },
        {
          title: 'Resume program',
          keys: ['Alt', 'Meta', 'R']
        },
        {
          title: 'Toggle line breakpoint',
          keys: ['Meta', 'F8']
        },
        {
          title: 'Toggle temporary line breakpoint',
          keys: ['Alt', 'Shift', 'Meta', 'F8']
        },
        {
          title: 'Edit / view breakpoint',
          keys: ['Shift', 'Meta', 'F8']
        },
      ],
    },
  ],
}
