// https://resources.jetbrains.com/storage/products/pycharm/docs/PyCharm_ReferenceCard.pdf
module.exports = {
  id: 'pycharm',
  title: 'PyCharm',
  category: 'Development',
  description: null,
  sets: [
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
          keys: ['Control', 'Shift', 'Enter'],
        },
        {
          title: 'Parameter information',
          keys: ['Control', 'P'],
        },
        {
          title: 'Context info',
          keys: ['Alt', 'Q'],
        },
        {
          title: 'Quick definition',
          keys: ['Control', 'Shift', 'I'],
        },
        {
          title: 'Quick documentation',
          keys: ['Control', 'Q'],
        },
        {
          title: 'External documentation',
          keys: ['Shift', 'F1'],
        },
        {
          title: 'Generate code',
          keys: ['Alt', 'Insert'],
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
          keys: ['Control', 'Alt', 'T'],
        },
        {
          title: 'Comment with line comment',
          keys: ['Control', '/'],
        },
        {
          title: 'Extend',
          keys: ['Control', 'W'],
        },
        {
          title: 'Shrink selection',
          keys: ['Control', 'Shift', 'W'],
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
          keys: ['Control', 'X'],
        },
        {
          title: 'Сopy',
          keys: ['Control', 'C'],
        },
        {
          title: 'Paste',
          keys: ['Control', 'V'],
        },
        {
          title: 'Copy document path',
          keys: ['Control', 'Shift', 'C'],
        },
        {
          title: 'Paste from clipboard history',
          keys: ['Control', 'Shift', 'V'],
        },
        {
          title: 'Duplicate current line or selection',
          keys: ['Control', 'D'],
        },
        {
          title: 'Move line up',
          keys: ['Control', 'Shift', 'Up']
        },
        {
          title: 'Move line down',
          keys: ['Control', 'Shift', 'Down']
        },
        {
          title: 'Delete line at caret',
          keys: ['Control', 'Y']
        },
        {
          title: 'Join line',
          keys: ['Control', 'Shift', 'J'],
        },
        {
          title: 'Split line',
          keys: ['Control', 'Enter'],
        },
        {
          title: 'Start new line',
          keys: ['Shift', 'Enter'],
        },
        {
          title: 'Toggle case',
          keys: ['Control', 'Shift', 'U'],
        },
        {
          title: 'Expand code block',
          keys: ['Control', 'NumPad','+'],
        },
        {
          title: 'Collapse code block',
          keys: ['Control', 'NumPad', '-'],
        },
        {
          title: 'Expand all',
          keys: ['Control', 'Shift', 'NumPad', '+'],
        },
        {
          title: 'Collapse all',
          keys: ['Control', 'Shift', 'NumPad', '-'],
        },
        {
          title: 'Save all',
          keys: ['Control', 'S'],
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
          keys: ['Alt', '`']
        },
        {
          title: 'Commit',
          keys: ['Ctrl', 'K']
        },
        {
          title: 'Update project',
          keys: ['Ctrl', 'T']
        },
        {
          title: 'Recent changes',
          keys: ['Alt', 'Shift', 'C']
        },
        {
          title: 'Revert',
          keys: ['Ctrl', 'Alt', 'Z']
        },
        {
          title: 'Push...',
          keys: ['Ctrl', 'Shift', 'K']
        },
        {
          title: 'Next change',
          keys: ['Ctrl', 'Alt', 'Shift', 'Down']
        },
        {
          title: 'Previous change',
          keys: ['Ctrl', 'Alt', 'Shift', 'Up']
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
          keys: ['Ctrl', 'Shift', 'A']
        },
        {
          title: 'Open a tool window',
          keys: ['Alt', '[0-9]']
        },
        {
          title: 'Synchronize',
          keys: ['Ctrl', 'Alt', 'Y']
        },
        {
          title: 'Quick switch scheme...',
          keys: ['Ctrl', '`']
        },
        {
          title: 'Settings...',
          keys: ['Ctrl', 'Alt', 'S']
        },
        {
          title: 'Jump to source bar',
          keys: ['F4']
        },
        {
          title: 'Jump to navigation bar',
          keys: ['Alt', 'Home']
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
          keys: ['Ctrl', 'Shift', 'F12']
        },
        {
          title: 'Go to next editor tab',
          keys: ['Alt', 'Right']
        },
        {
          title: 'Go to previous editor tab',
          keys: ['Alt', 'Left']
        },
        {
          title: 'Go to editor (from a tool window)',
          keys: ['Esc']
        },
        {
          title: 'Close active tab',
          keys: ['Ctrl', 'Shift', 'F4']
        },
        {
          title: 'Close active window',
          keys: ['Ctrl', 'F4']
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
          keys: ['Ctrl', 'F']
        },
        {
          title:'Replace',
          keys: ['Ctrl', 'R']
        },
        {
          title:'Find in path',
          keys: ['Ctrl', 'Shift', 'F']
        },
        {
          title:'Replace in path',
          keys: ['Ctrl', 'Shift', 'R']
        },
        {
          title:'Next occurence',
          keys: ['F3']
        },
        {
          title:'Previous occurence',
          keys: ['Shift', 'F3']
        },
        {
          title:'Find word at caret',
          keys: ['Ctrl', 'F3']
        },
        {
          title:'Go to class',
          keys: ['Ctrl', 'N']
        },
        {
          title:'Go to file',
          keys: ['Ctrl', 'Shift', 'N']
        },
        {
          title:'Go to file member',
          keys: ['Ctrl', 'F12']
        },
        {
          title:'Go to symbol',
          keys: ['Ctrl', 'Alt', 'Shift', 'N']
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
          keys: ['Ctrl', 'B']
        },
        {
          title: 'Type declaration (JavaScript only)',
          keys: ['Ctrl', 'Shift', 'B']
        },
        {
          title: 'Super method',
          keys: ['Ctrl', 'U']
        },
        {
          title: 'Implementation(s)',
          keys: ['Ctrl', 'Alt', 'B']
        },
        {
          title: 'Find usages',
          keys: ['Alt', 'F7']
        },
        {
          title: 'Find usages in file',
          keys: ['Ctrl', 'F7']
        },
        {
          title: 'Highlight usages in file',
          keys: ['Ctrl', 'Shift', 'F7']
        },
        {
          title: 'Show usages',
          keys: ['Ctrl', 'Alt', 'F7']
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
          keys: ['Ctrl', 'Alt', 'Shift', 'T']
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
          keys: ['Alt', 'Delete']
        },
        {
          title: 'Rename...',
          keys: ['Shift', 'F6']
        },
        {
          title: 'Change signature...',
          keys: ['Ctrl', 'F6']
        },
        {
          title: 'Inline...',
          keys: ['Ctrl', 'Alt', 'N']
        },
        {
          title: 'Extract method',
          keys: ['Ctrl', 'Alt', 'M']
        },
        {
          title: 'Introduce variable',
          keys: ['Ctrl', 'Alt', 'V']
        },
        {
          title: 'Introduce parameter',
          keys: ['Ctrl', 'Alt', 'P']
        },
        {
          title: 'Introduce field ',
          keys: ['Ctrl', 'Alt', 'F']
        },
        {
          title: 'Introduce constant ',
          keys: ['Ctrl', 'Alt', 'C']
        },
        {
          title: 'Reformat code',
          keys: ['Ctrl', 'Alt', 'L']
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
          keys: ['Ctrl', 'F1']
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
          keys: ['Ctrl', 'Alt', 'Shift', 'I']
        },
        {
          title: 'Type hierarchy',
          keys: ['Ctrl', 'H']
        },
        {
          title: 'Call hierarchy',
          keys: ['Ctrl', 'Alt', 'H']
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
          keys: ['Ctrl', 'E']
        },
        {
          title: 'Recent locations',
          keys: ['Ctrl', 'Shift', 'E']
        },
        {
          title: 'Last edit location',
          keys: ['Ctrl', 'Shift', 'Back']
        },
        {
          title: 'Navigate back',
          keys: ['Ctrl', 'Alt', 'Left']
        },
        {
          title: 'Navigate forward',
          keys: ['Ctrl', 'Alt', 'Right']
        },
        {
          title: 'Go to previous method',
          keys: ['Alt', 'Up']
        },
        {
          title: 'Go to next method',
          keys: ['Alt', 'Down']
        },
        {
          title: 'Go to line / column...',
          keys: ['Ctrl', 'G']
        },
        {
          title: 'Go to code block end',
          keys: ['Ctrl', ']']
        },
        {
          title: 'Go to code block start',
          keys: ['Ctrl', '[']
        },
        {
          title: 'Add to favorites',
          keys: ['Alt', 'Shift', 'F']
        },
        {
          title: 'Toggle bookmark',
          keys: ['F11']
        },
        {
          title: 'Toggle bookmark with mnemonic',
          keys: ['Ctrl', 'F11']
        },
        {
          title: 'Go to numbered bookmark',
          keys: ['Ctrl', '[0-9]']
        },
        {
          title: 'Show bookmarks',
          keys: ['Shift', 'F11']
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
          keys: ['Ctrl', 'Shift', 'F10']
        },
        {
          title: 'Run selected configuration',
          keys: ['Alt', 'Shift', 'F10']
        },
        {
          title: 'Debug selected configuration',
          keys: ['Alt', 'Shift', 'F9']
        },
        {
          title: 'Run current configuration',
          keys: ['Shift', 'F10']
        },
        {
          title: 'Debug current configuration',
          keys: ['Shift', 'F9']
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
          keys: ['Ctrl', 'Alt', 'F9']
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
          keys: ['Ctrl', 'F2']
        },
        {
          title: 'Stop background processes...',
          keys: ['Ctrl', 'Shift', 'F2']
        },
        {
          title: 'Resume program',
          keys: ['F9']
        },
        {
          title: 'Toggle line breakpoint',
          keys: ['Ctrl', 'F8']
        },
        {
          title: 'Toggle temporary line breakpoint',
          keys: ['Ctrl', 'Alt', 'Shift', 'F8']
        },
        {
          title: 'Edit / view breakpoint',
          keys: ['Ctrl', 'Shift', 'F8']
        },
      ],
    },
  ],
}
