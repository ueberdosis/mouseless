module.exports = {
  id: 'xcode',
  title: 'Xcode',
  category: 'Development',
  description: null,
  sets: [
    {
      title: 'Xcode Menu',
      id: 'general',
      version: 1,
      shortcuts: [
        {
          title: 'Preferences…',
          keys: ['Meta', ','],
        },
        {
          title: 'Hide Xcode',
          keys: ['Meta', 'h'],
        },
        {
          title: 'Hide Others',
          keys: ['Alt', 'Meta', 'h'],
        },
        {
          title: 'Quit Xcode',
          keys: ['Meta', 'q'],
        },
      ],
    },
    {
      title: 'File Menu',
      id: 'file',
      version: 1,
      shortcuts: [
        {
          title: 'New Editor',
          keys: ['Control', 'Meta', 't'],
        },
        {
          title: 'New Editor Below',
          keys: ['Control', 'Alt', 'Meta', 't'],
        },
        {
          title: 'New Tab',
          keys: ['Meta', 't'],
        },
        {
          title: 'New Window',
          keys: ['Shift', 'Meta', 't'],
        },
        {
          title: 'New File…',
          keys: ['Meta', 'n'],
        },
        {
          title: 'New Playground…',
          keys: ['Alt', 'Shift', 'Meta', 'n'],
        },
        {
          title: 'New Project…',
          keys: ['Shift', 'Meta', 'n'],
        },
        {
          title: 'New Swift Package…',
          keys: ['Control', 'Shift', 'Meta', 'n'],
        },
        {
          title: 'New Workspace…',
          keys: ['Control', 'Meta', 'n'],
        },
        {
          title: 'New Group',
          keys: ['Alt', 'Meta', 'n'],
        },
        {
          title: 'New Group without Folder',
          keys: ['Control', 'Alt', 'Meta', 'n'],
        },
        {
          title: 'New Folder',
          keys: ['Alt', 'Meta', 'n'],
        },
        {
          title: 'New Playground Page',
          keys: ['Alt', 'Meta', 'n'],
        },
        {
          title: 'Add Files…',
          keys: ['Alt', 'Meta', 'a'],
        },
        {
          title: 'Open…',
          keys: ['Meta', 'o'],
        },
        {
          title: 'Open Quickly…',
          keys: ['Shift', 'Meta', 'o'],
        },
        {
          title: 'Close Window',
          keys: ['Shift', 'Meta', 'w'],
        },
        {
          title: 'Close Other Windows',
          keys: ['Alt', 'Shift', 'Meta', 'w'],
        },
        {
          title: 'Close Tab',
          keys: ['Shift', 'Meta', 'w'],
        },
        {
          title: 'Close Other Tabs',
          keys: ['Alt', 'Shift', 'Meta', 'w'],
        },
        {
          title: 'Close Editor',
          keys: ['Control', 'Alt', 'Meta', 'w'],
        },
        {
          title: 'Close Other Editors',
          keys: ['Control', 'Alt', 'Shift', 'Meta', 'w'],
        },
        {
          title: 'Close Document',
          keys: ['Control', 'Meta', 'w'],
        },
        {
          title: 'Close Workspace',
          keys: ['Control', 'Shift', 'Meta', 'w'],
        },
        {
          title: 'Save',
          keys: ['Meta', 's'],
        },
        {
          title: 'Save All',
          keys: ['Alt', 'Meta', 's'],
        },
        {
          title: 'Duplicate…',
          keys: ['Shift', 'Meta', 's'],
        },
        {
          title: 'Save As…',
          keys: ['Alt', 'Shift', 'Meta', 's'],
        },
        {
          title: 'Page Setup…',
          keys: ['Shift', 'Meta', 'p'],
        },
        {
          title: 'Print…',
          keys: ['Meta', 'p'],
        },
      ],
    },
    {
      title: 'Edit',
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
          title: 'Copy Symbol Name',
          keys: ['Control', 'Shift', 'Meta', 'c'],
        },
        {
          title: 'Copy Qualified Symbol Name',
          keys: ['Control', 'Alt', 'Shift', 'Meta', 'c'],
        },
        {
          title: 'Paste',
          keys: ['Meta', 'v'],
        },
        {
          title: 'Paste Special',
          keys: ['Alt', 'Meta', 'v'],
        },
        {
          title: 'Paste and Preserve Formatting',
          keys: ['Alt', 'Shift', 'Meta', 'v'],
        },
        {
          title: 'Duplicate',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Delete',
          keys: ['Meta', 'Backspace'],
        },
        {
          title: 'Select All',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Filter in Navigator',
          keys: ['Alt', 'Meta', 'j'],
        },
        {
          title: 'Show Fonts',
          keys: ['Control', 'Shift', 'Meta', 't'],
        },
        {
          title: 'Show Spelling and Grammar',
          keys: ['Meta', 'Shift', ':'],
        },
        {
          title: 'Check Document Now',
          keys: ['Meta', 'Shift', ';'],
        },
      ],
    },
    {
      title: 'View',
      id: 'view',
      version: 1,
      shortcuts: [
        {
          title: 'Focus',
          description: 'Editor',
          keys: ['Control', 'Shift', 'Meta', 'Enter'],
        },
        {
          title: 'Show Related Items',
          description: 'Editor',
          keys: ['Control', '1'],
        },
        {
          title: 'Show Previous History',
          description: 'Editor',
          keys: ['Control', '2'],
        },
        {
          title: 'Show Previous Files History',
          description: 'Editor',
          keys: ['Control', 'Meta', '2'],
        },
        {
          title: 'Show Next History',
          description: 'Editor',
          keys: ['Control', '3'],
        },
        {
          title: 'Show Top Level Items',
          description: 'Editor',
          keys: ['Control', '4'],
        },
        {
          title: 'Show Group Files',
          description: 'Editor',
          keys: ['Control', '5'],
        },
        {
          title: 'Show Document Items',
          description: 'Editor',
          keys: ['Control', '6'],
        },
        {
          title: 'Show Code Review',
          keys: ['Alt', 'Shift', 'Meta', 'Enter'],
        },
        {
          title: 'Reset Assitant Selection',
          keys: ['Alt', 'Shift', 'Meta', 'z'],
        },
        {
          title: 'Show Project Navigator',
          description: 'Navigators',
          keys: ['Meta', '1'],
        },
        {
          title: 'Show Source Control Navigator',
          description: 'Navigators',
          keys: ['Meta', '2'],
        },
        {
          title: 'Show Symbol Navigator',
          description: 'Navigators',
          keys: ['Meta', '3'],
        },
        {
          title: 'Show Find Navigator',
          description: 'Navigators',
          keys: ['Meta', '4'],
        },
        {
          title: 'Show Issue Navigator',
          description: 'Navigators',
          keys: ['Meta', '5'],
        },
        {
          title: 'Show Test Navigator',
          description: 'Navigators',
          keys: ['Meta', '6'],
        },
        {
          title: 'Show Debug Navigator',
          description: 'Navigators',
          keys: ['Meta', '7'],
        },
        {
          title: 'Show Breakpoint Navigator',
          description: 'Navigators',
          keys: ['Meta', '8'],
        },
        {
          title: 'Show Report Navigator',
          description: 'Navigators',
          keys: ['Meta', '9'],
        },
        {
          title: 'Show Navigator',
          description: 'Navigators',
          keys: ['Meta', '0'],
        },
        {
          title: 'Filter in Navigator',
          description: 'Navigators',
          keys: ['Alt', 'Meta', 'j'],
        },
        {
          title: 'Activate Console',
          description: 'Debug Area',
          keys: ['Shift', 'Meta', 'c'],
        },
        {
          title: 'Show Debug Area',
          keys: ['Shift', 'Meta', 'y'],
        },
        {
          title: 'Show Custom Class Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '7'],
        },
        {
          title: 'Show Scene Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '7'],
        },
        {
          title: 'Show Mapping Model Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '3'],
        },
        {
          title: 'Show Material Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '5'],
        },
        {
          title: 'Show Size Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '4'],
        },
        {
          title: 'Show Entity Attributes Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '4'],
        },
        {
          title: 'Show View Effects Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '9'],
        },
        {
          title: 'Show Attributes Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '4'],
        },
        {
          title: 'Show Source Control Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '3'],
        },
        {
          title: 'Show Attributes Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '3'],
        },
        {
          title: 'Show Connections Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '7'],
        },
        {
          title: 'Show Components Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '7'],
        },
        {
          title: 'Show Identity Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '4'],
        },
        {
          title: 'Show Attributes Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '7'],
        },
        {
          title: 'Show Physics Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '6'],
        },
        {
          title: 'Show File Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '1'],
        },
        {
          title: 'Show History Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '2'],
        },
        {
          title: 'Show Object Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '3'],
        },
        {
          title: 'Show Node Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '3'],
        },
        {
          title: 'Show Size Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '6'],
        },
        {
          title: 'Show Attributes Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '3'],
        },
        {
          title: 'Show Data Model Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '3'],
        },
        {
          title: 'Show Memory Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '3'],
        },
        {
          title: 'Show Components Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '7'],
        },
        {
          title: 'Show Identity Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '7'],
        },
        {
          title: 'Show Bindings Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '8'],
        },
        {
          title: 'Show Quick Help Inspector',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '3'],
        },
        {
          title: 'Show Inspectors',
          description: 'Inspectors',
          keys: ['Alt', 'Meta', '0'],
        },
        {
          title: 'Show Library',
          keys: ['Shift', 'Meta', 'l'],
        },
        {
          title: 'Open Library',
          keys: ['Alt', 'Shift', 'Meta', 'l'],
        },
        {
          title: 'Show Toolbar',
          keys: ['Alt', 'Meta', 't'],
        },
        {
          title: 'Show All Tabs',
          keys: ['Shift', 'Meta', '\\'],
        },
        {
          title: 'Enter Full Screen',
          keys: ['Control', 'Meta', 'f'],
        },
      ],
    },
    {
      title: 'Find Menu',
      id: 'find',
      version: 1,
      shortcuts: [
        {
          title: 'Find in Workspace…',
          keys: ['Shift', 'Meta', 'f'],
        },
        {
          title: 'Find and Replace in Workspace…',
          keys: ['Alt', 'Shift', 'Meta'],
        },
        {
          title: 'Find Next in Workspace',
          keys: ['Control', 'Meta', 'g'],
        },
        {
          title: 'Find Previous in Workspace',
          keys: ['Control', 'Shift', 'Meta', 'g'],
        },
        {
          title: 'Find Selected Smybol in Workspace',
          keys: ['Control', 'Shift', 'Meta', 'f'],
        },
        {
          title: 'Find Call Hierarchy',
          keys: ['Control', 'Shift', 'Meta', 'h'],
        },
        {
          title: 'Find…',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Find and Replace…',
          keys: ['Alt', 'Meta', 'f'],
        },
        {
          title: 'Find Next',
          keys: ['Meta', 'g'],
        },
        {
          title: 'Find Previous',
          keys: ['Shift', 'Meta', 'g'],
        },
        {
          title: 'Find and Select Next',
          keys: ['Alt', 'Meta', 'g'],
        },
        {
          title: 'Find and Select Previous',
          keys: ['Alt', 'Shift', 'Meta', 'g'],
        },
        {
          title: 'Use Selection for Find',
          keys: ['Meta', 'e'],
        },
        {
          title: 'Use Selection for Replace',
          keys: ['Shift', 'Meta', 'e'],
        },
        {
          title: 'Select Next Occurrence',
          keys: ['Alt', 'Meta', 'e'],
        },
        {
          title: 'Select Previous Occurrence',
          keys: ['Alt', 'Shift', 'Meta', 'e'],
        },
      ],
    },
    {
      title: 'Navigate Menu',
      id: 'navigate',
      version: 1,
      shortcuts: [
        {
          title: 'Reveal in Projet Navigator',
          keys: ['Shift', 'Meta', 'j'],
        },
        {
          title: 'Reveal in Debug Navigator',
          keys: ['Shift', 'Meta', 'd'],
        },
        {
          title: 'Open in Next Editor',
          keys: ['Alt', 'Meta', ','],
        },
        {
          title: 'Move Focus to Next Area',
          keys: ['Alt', 'Meta', '`'],
        },
        {
          title: 'Move Focus to Previous Area',
          keys: ['Alt', 'Shift', 'Meta', '`'],
        },
        {
          title: 'Move Focus to Next Editor',
          keys: ['Control', '`'],
        },
        {
          title: 'Move Focus to Previous Editor',
          keys: ['Control', 'Shift', '`'],
        },
        {
          title: 'Move Focus to Editor…',
          keys: ['Meta', 'j'],
        },
        {
          title: 'Go Forward',
          keys: ['Control', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Go Forward in Next Editor',
          keys: ['Control', 'Alt', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Go Forward in…',
          keys: ['Control', 'Alt', 'Shift', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Go Back',
          keys: ['Control', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Go Back in Next Editor',
          keys: ['Control', 'Alt', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Go Forward in…',
          keys: ['Control', 'Alt', 'Shift', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Jump to Selection',
          keys: ['Alt', 'Meta', 'l'],
        },
        {
          title: 'Jump to Definition',
          keys: ['Control', 'Meta', 'j'],
        },
        {
          title: 'Jump to Definition in Next Editor',
          keys: ['Control', 'Alt', 'Meta', 'j'],
        },
        {
          title: 'Jump to Definition in…',
          keys: ['Control', 'Alt', 'Shift', 'Meta', 'j'],
        },
        {
          title: 'Jump to Next Issue',
          keys: ['Meta', '\''],
        },
        {
          title: 'Fix Next Issue',
          keys: ['Control', 'Meta', '\''],
        },
        {
          title: 'Jump to Previous Issue',
          keys: ['Meta', '"'],
        },
        {
          title: 'Fix Previous Issue',
          keys: ['Control', 'Meta', '"'],
        },
        {
          title: 'Jump to Instruction Pointer',
          keys: ['Control', 'Meta', 'p'],
        },
      ],
    },
    {
      title: 'Navigate Menu for Commit Sheet',
      id: 'navigate_commitsheet',
      version: 1,
      shortcuts: [
        {
          title: 'Jump to Next Counterpart',
          keys: ['Control', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Jump to Next Counterpart in Next Editor',
          keys: ['Control', 'Alt', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Jump to Next Counterpart in…',
          keys: ['Control', 'Alt', 'Shift', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Jump to Previous Counterpart',
          keys: ['Control', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Jump to Previous Counterpart in Next Editor',
          keys: ['Control', 'Alt', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Jump to Previous Counterpart in…',
          keys: ['Control', 'Alt', 'Shift', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Jump to…',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Jump to Next Placeholder',
          keys: ['Control', '/'],
        },
        {
          title: 'Jump to Previous Placeholder',
          keys: ['Control', '?'],
        },
        {
          title: 'Jump to Next Change',
          keys: ['Control', '\\'],
        },
        {
          title: 'Jump to Next Local or Upstream Change',
          keys: ['Control', 'Alt', '\\'],
        },
        {
          title: 'Jump to Previous Change',
          keys: ['Control', '|'],
        },
        {
          title: 'Jump to Previous Local or Upstream Change',
          keys: ['Control', 'Alt', '|'],
        },
      ],
    },
    {
      title: 'Navigate Menu for Documentation',
      id: 'navigate_documentation',
      version: 1,
      shortcuts: [
        {
          title: 'Jump to…',
          keys: ['Meta', 'l'],
        },
      ],
    },
    {
      title: 'Navigate Menu for Playground',
      id: 'navigate_playground',
      version: 1,
      shortcuts: [
        {
          title: 'Jump to…',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Jump to Next Placeholder',
          keys: ['Control', '/'],
        },
        {
          title: 'Jump to Previous Placeholder',
          keys: ['Control', '?'],
        },
      ],
    },
    {
      title: 'Navigate Menu for Source Code',
      id: 'navigate_source_code',
      version: 1,
      shortcuts: [
        {
          title: 'Jump to Next Counterpart',
          keys: ['Control', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Jump to Next Counterpart in Next Editor',
          keys: ['Control', 'Alt', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Jump to Next Counterpart in…',
          keys: ['Control', 'Alt', 'Shift', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Jump to Previous Counterpart',
          keys: ['Control', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Jump to Previous Counterpart in Next Editor',
          keys: ['Control', 'Alt', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Jump to Previous Counterpart in…',
          keys: ['Control', 'Alt', 'Shift', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Jump to…',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Jump to Next Placeholder',
          keys: ['Control', '/'],
        },
        {
          title: 'Jump to Previous Placeholder',
          keys: ['Control', '?'],
        },
        {
          title: 'Jump to Next Change',
          keys: ['Control', '\\'],
        },
        {
          title: 'Jump Lo Next Local or Upstream Change',
          keys: ['Control', 'Alt', '\\'],
        },
        {
          title: 'Jump to Previous Change',
          keys: ['Control', '|'],
        },
        {
          title: 'Jump to Previous Local or Upstream Change',
          keys: ['Control', 'Alt', '|'],
        },
      ],
    },
    {
      title: 'Navigate Menu for Source Code Comparison',
      id: 'navigate_source_code_comparison',
      version: 1,
      shortcuts: [
        {
          title: 'Jump to Next Counterpart',
          keys: ['Control', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Jump to Next Counterpart in Next Editor',
          keys: ['Control', 'Alt', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Jump to Next Counterpart in…',
          keys: ['Control', 'Alt', 'Shift', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Jump to Previous Counterpart',
          keys: ['Control', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Jump to Previous Counterpart in Next Editor',
          keys: ['Control', 'Alt', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Jump to Previous Counterpart in…',
          keys: ['Control', 'Alt', 'Shift', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Jump to…',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Jump to Next Placeholder',
          keys: ['Control', '/'],
        },
        {
          title: 'Jump to Previous Placeholder',
          keys: ['Control', '?'],
        },
        {
          title: 'Jump to Next Change',
          keys: ['Control', '\\'],
        },
        {
          title: 'Jump to Next Local or Upstream Change',
          keys: ['Control', 'Alt', '\\'],
        },
        {
          title: 'Jump to Previous Change',
          keys: ['Control', '|'],
        },
        {
          title: 'Jump to Previous Local or Upstream Change',
          keys: ['Control', 'Alt', '|'],
        },
      ],
    },
    {
      title: 'Navigate Menu for Source Control History',
      id: 'navigate_source_control_history',
      version: 1,
      shortcuts: [
        {
          title: 'Jump to Commit View',
          keys: ['Alt', 'Shift', 'Meta', 'c'],
        },
      ],
    },
    {
      title: 'Navigate Menu for Pull Request Changes',
      id: 'navigate_pull_request_changes',
      version: 1,
      shortcuts: [
        {
          title: 'Jump to Next Counterpart',
          keys: ['Control', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Jump to Next Counterpart in Next Editor',
          keys: ['Control', 'Alt', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Jump to Next Counterpart in…',
          keys: ['Control', 'Alt', 'Shift', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Jump to Previous Counterpart',
          keys: ['Control', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Jump to Previous Counterpart in Next Editor',
          keys: ['Control', 'Alt', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Jump to Previous Counterpart in…',
          keys: ['Control', 'Alt', 'Shift', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Jump to…',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Jump to Next Placeholder',
          keys: ['Control', '/'],
        },
        {
          title: 'Jump to Previous Placeholder',
          keys: ['Control', '?'],
        },
        {
          title: 'Jump to Next Change',
          keys: ['Control', '\\'],
        },
        {
          title: 'Jump to Next Local or Upstream Change',
          keys: ['Control', 'Alt', '\\'],
        },
        {
          title: 'Jump to Previous Change',
          keys: ['Control', '|'],
        },
        {
          title: 'Jump to Previous Local or Upstream Change',
          keys: ['Control', 'Alt', '|'],
        },
      ],
    },
    {
      title: 'Editor Menu for Asset Catalog Comparision',
      id: 'editor_asset_catalog_comparision',
      version: 1,
      shortcuts: [
        {
          title: 'Show Completions',
          keys: ['Control', 'Space'],
        },
        {
          title: 'Edit All in Scope',
          keys: ['Control', 'Meta', 'e'],
        },
        {
          title: 'Fix All Issues',
          keys: ['Control', 'Alt', 'Meta+f'],
        },
        {
          title: 'Issues ► Show All Issues',
          keys: ['Control', 'Meta+m'],
        },
        {
          title: 'Previews ► Refresh',
          keys: ['Alt', 'Meta+p'],
        },
        {
          title: 'Selection ► Select Column Up',
          keys: ['Control', 'Shift', 'ArrowUp'],
        },
        {
          title: 'Selection ► Select Column Down',
          keys: ['Control', 'Shift', 'ArrowDown'],
        },
        {
          title: 'Structure ► Re-Indent',
          keys: ['Control', '|'],
        },
        {
          title: 'Structure ► Shift Right',
          keys: ['Meta', ']'],
        },
        {
          title: 'Structure ► Shift Left',
          keys: ['Meta', '['],
        },
        {
          title: 'Structure ► Move Line Up',
          keys: ['Alt', 'Meta+['],
        },
        {
          title: 'Structure ► Move Line Down',
          keys: ['Alt', 'Meta', ']'],
        },
        {
          title: 'Structure ► Comment Selection',
          keys: ['Meta', '/'],
        },
        {
          title: 'Structure ► Add Documentation',
          keys: ['Alt', 'Meta+/'],
        },
        {
          title: 'Code Folding ► Fold',
          keys: ['Alt', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Code Folding ► Unfold',
          keys: ['Alt', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Code Folding ► Fold Methods & Functions',
          keys: ['Alt', 'Shift', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Code Folding ► Unfold Methods & Functions',
          keys: ['Alt', 'Shift', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Code Folding ► Fold Comment Blocks',
          keys: ['Control', 'Shift', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Code Folding ► Unfold Comment Blocks',
          keys: ['Control', 'Shift', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Font Size ► Increase',
          keys: ['Meta', '+'],
        },
        {
          title: 'Font Size ► Decrease',
          keys: ['Meta', '-'],
        },
        {
          title: 'Font Size ► Reset',
          keys: ['Control', 'Meta', '0'],
        },
      ],
    },
    {
      title: 'Editor Menu for Data Model',
      id: 'editor_data_model',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
      ],
    },
    {
      title: 'Editor Menu for Documentation',
      id: 'editor_documentation',
      version: 1,
      shortcuts: [
        {
          title: 'Zoom In',
          keys: ['Meta', '+'],
        },
        {
          title: 'Zoom Out',
          keys: ['Meta', '-'],
        },
        {
          title: 'Actual Size',
          keys: ['Control', 'Meta', '='],
        },
      ],
    },
    {
      title: 'Editor Menu for GPU Counters',
      id: 'editor_gpu_counters',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
        {
          title: 'Zoom In',
          keys: ['Meta', '+'],
        },
        {
          title: 'Zoom Out',
          keys: ['Meta', '-'],
        },
        {
          title: 'Select Next Draw/Encoder',
          keys: ['Control', 'Alt', 'ArrowRight'],
        },
        {
          title: 'Select Prev Draw/Encoder',
          keys: ['Control', 'Alt', 'ArrowLeft'],
        },
      ],
    },
    {
      title: 'Editor Menu for GPU Frame Debugger',
      id: 'editor_gpu_frame_debugger',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
      ],
    },
    {
      title: 'Editor Menu for Hex',
      id: 'editor_hex',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
      ],
    },
    {
      title: 'Editor Menu for Integration Report Commits',
      id: 'editor_integration_report_commits',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
      ],
    },
    {
      title: 'Editor Menu for Interface Builder - Storyboard',
      id: 'editor_interface_builder',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Preview',
          keys: ['Alt', 'Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
        {
          title: 'Actual Size',
          keys: ['Control', 'Meta', '='],
        },
        {
          title: 'Align Left Edges',
          keys: ['Meta', '['],
        },
        {
          title: 'Align Right Edges',
          keys: ['Meta', ']'],
        },
        {
          title: 'Size to Fit Content',
          keys: ['Meta', '='],
        },
        {
          title: 'Update Frames',
          keys: ['Alt', 'Meta', '='],
        },
        {
          title: 'Add Horizontal Guide',
          keys: ['Meta', '_'],
        },
        {
          title: 'Add Verical Guide',
          keys: ['Control', 'Meta', '|'],
        },
        {
          title: 'Resolve Auto Layout Issues ► Reset to Suggested Constraints',
          keys: ['Alt', 'Shift', 'Meta', '='],
        },
      ],
    },
    {
      title: 'Editor Menu for Interface Builder Cocoa Preview',
      id: 'editor_cocoa_preview',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Preview',
          keys: ['Alt', 'Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
        {
          title: 'Zoom to 100%',
          keys: ['Control', 'Meta', '='],
        },
        {
          title: 'Align Left Edges',
          keys: ['Meta', '['],
        },
        {
          title: 'Align Right Edges',
          keys: ['Meta', ']'],
        },
        {
          title: 'Size to Fit Content',
          keys: ['Meta', '='],
        },
        {
          title: 'Update Frames',
          keys: ['Alt', 'Meta', '='],
        },
        {
          title: 'Add Horizontal Guide',
          keys: ['Meta', '_'],
        },
        {
          title: 'Add Verical Guide',
          keys: ['Control', 'Meta', '|'],
        },
        {
          title: 'Resolve Auto Layout Issues ► Reset to Suggested Constraints',
          keys: ['Alt+'],
        },
      ],
    },
    {
      title: 'Editor Menu for Log Viewer',
      id: 'editor_log_viewer',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
      ],
    },
    {
      title: 'Editor Menu for Machine learning model',
      id: 'editor_machine_learning_model',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
      ],
    },
    {
      title: 'Editor Menu for Mapping Model',
      id: 'editor_mapping_model',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
      ],
    },
    {
      title: 'Editor Menu for Memory',
      id: 'editor_memory',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
      ],
    },
    {
      title: 'Editor Menu for PDF',
      id: 'editor_pdf',
      version: 1,
      shortcuts: [
        {
          title: 'Zoom In',
          keys: ['Meta', '+'],
        },
        {
          title: 'Zoom Out',
          keys: ['Meta', '-'],
        },
        {
          title: 'Zoom Actual Size',
          keys: ['Control', 'Meta', '='],
        },
        {
          title: 'Next Page',
          keys: ['Alt', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Previous Page',
          keys: ['Alt', 'Meta', 'ArrowUp'],
        },
      ],
    },
    {
      title: 'Editor Menu for Playground',
      id: 'editor_playground',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Preview',
          keys: ['Alt', 'Meta', 'Enter'],
        },
        {
          title: 'Show Completions',
          keys: ['Control', 'Space'],
        },
        {
          title: 'Edit All in Scope',
          keys: ['Control', 'Meta', 'e'],
        },
        {
          title: 'Fix All Issues',
          keys: ['Control', 'Alt', 'Meta', 'f'],
        },
        {
          title: 'Issues ► Show All Issues',
          keys: ['Control', 'Meta', 'm'],
        },
        {
          title: 'Selection ► Select Column Up',
          keys: ['Control', 'Shift', 'ArrowUp'],
        },
        {
          title: 'Selection ► Select Column Down',
          keys: ['Control', 'Shift', 'ArrowDown'],
        },
        {
          title: 'Structure ► Re-Indent',
          keys: ['Contol', '|'],
        },
        {
          title: 'Structure ► Shift Right',
          keys: ['Meta', ']'],
        },
        {
          title: 'Structure ► Shift Left',
          keys: ['Meta', '['],
        },
        {
          title: 'Structure ► Move Line Up',
          keys: ['Alt', 'Meta', '['],
        },
        {
          title: 'Structure ► Move Line Down',
          keys: ['Alt', 'Meta', ']'],
        },
        {
          title: 'Structure ► Comment Selection',
          keys: ['Meta', '/'],
        },
        {
          title: 'Structure ► Add Documentation',
          keys: ['Alt', 'Meta', '/'],
        },
        {
          title: 'Code Folding ► Fold',
          keys: ['Alt', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Code Folding ► Unfold',
          keys: ['Alt', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Code Folding ► Fold Methods & Functions',
          keys: ['Alt', 'Shift', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Code Folding ► Unfold Methods & Functions',
          keys: ['Alt', 'Shift', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Code Folding ► Fold Comment Blocks',
          keys: ['Control', 'Shift', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Code Folding ► Unfold Comment Blocks',
          keys: ['Control', 'Shift', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Font Size ► Increase',
          keys: ['Meta', '+'],
        },
        {
          title: 'Font Size ► Decrease',
          keys: ['Meta', '-'],
        },
        {
          title: 'Font Size ► Reset',
          keys: ['Control', 'Meta', '0'],
        },
        {
          title: 'Authors',
          keys: ['Control', 'Shift', 'Meta', 'a'],
        },
        {
          title: 'Run Playground',
          keys: ['Shift', 'Meta', 'Enter'],
        },
        {
          title: 'Run Playground to Current Line',
          keys: ['Shift', 'Enter'],
        },
        {
          title: 'Run Playground from Top to Current Line',
          keys: ['Alt', 'Shift', 'Enter'],
        },
      ],
    },
    {
      title: 'Editor Menu for Property List',
      id: 'editor_property_list',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
      ],
    },
    {
      title: 'Editor Menu for RTF',
      id: 'editor_rtf',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
      ],
    },
    {
      title: 'Editor Menu for SceneKit Document',
      id: 'editor_scene_kit',
      version: 1,
      shortcuts: [
        {
          title: 'Controls ► Focus Selection',
          keys: ['Alt', 'f'],
        },
      ],
    },
    {
      title: 'Editor Menu for Scripting Definition',
      id: 'editor_scripting_definition',
      version: 1,
      shortcuts: [
        {
          title: 'Make Text Bigger',
          keys: ['Meta', '+'],
        },
        {
          title: 'Make Text Smaller',
          keys: ['Meta', '-'],
        },
      ],
    },
    {
      title: 'Editor Menu for Source Code',
      id: 'editor_source_code',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Preview',
          keys: ['Alt', 'Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
        {
          title: 'Show Completions',
          keys: ['Control', 'Space'],
        },
        {
          title: 'Show Code Actions',
          keys: ['Shift', 'Meta', 'a'],
        },
        {
          title: 'Edit All in Scope',
          keys: ['Control', 'Meta', 'e'],
        },
        {
          title: 'Fix All Issues',
          keys: ['Control', 'Alt', 'Meta+f'],
        },
        {
          title: 'Issues ► Show All Issues',
          keys: ['Control', 'Meta+m'],
        },
        {
          title: 'Previews ► Refresh',
          keys: ['Alt', 'Meta', 'p'],
        },
        {
          title: 'Selection ► Select Column Up',
          keys: ['Control', 'Shift', 'ArrowUp'],
        },
        {
          title: 'Selection ► Select Column Down',
          keys: ['Control', 'Shift', 'ArrowDown'],
        },
        {
          title: 'Structure ► Re-Indent',
          keys: ['Control', '|'],
        },
        {
          title: 'Structure ► Shift Right',
          keys: ['Meta', ']'],
        },
        {
          title: 'Structure ► Shift Left',
          keys: ['Meta', '['],
        },
        {
          title: 'Structure ► Move Line Up',
          keys: ['Alt', 'Meta+['],
        },
        {
          title: 'Structure ► Move Line Down',
          keys: ['Alt', 'Meta', ']'],
        },
        {
          title: 'Structure ► Comment Selection',
          keys: ['Meta', '/'],
        },
        {
          title: 'Structure ► Add Documentation',
          keys: ['Alt', 'Meta+/'],
        },
        {
          title: 'Code Folding ► Fold',
          keys: ['Alt', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Code Folding ► Unfold',
          keys: ['Alt', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Code Folding ► Fold Methods & Functions',
          keys: ['Alt', 'Shift', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Code Folding ► Unfold Methods & Functions',
          keys: ['Alt', 'Shift', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Code Folding ► Fold Comment Blocks',
          keys: ['Control', 'Shift', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Code Folding ► Unfold Comment Blocks',
          keys: ['Control', 'Shift', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Font Size ► Increase',
          keys: ['Meta', '+'],
        },
        {
          title: 'Font Size ► Decrease',
          keys: ['Meta', '-'],
        },
        {
          title: 'Font Size ► Reset',
          keys: ['Control', 'Meta', '0'],
        },
        {
          title: 'Minimap',
          keys: ['Control', 'Shift', 'Meta', 'm'],
        },
        {
          title: 'Minimap',
          keys: ['Control', 'Shift', 'Meta', 'm'],
        },
        {
          title: 'Authors',
          keys: ['Control', 'Shift', 'Meta', 'a'],
        },
      ],
    },
    {
      title: 'Editor Menu for Source Code Comparison',
      id: 'editor_source_code_comparison',
      version: 1,
      shortcuts: [
        {
          title: 'Show Completions',
          keys: ['Control', 'Space'],
        },
        {
          title: 'Edit All in Scope',
          keys: ['Control', 'Meta', 'e'],
        },
        {
          title: 'Fix All Issues',
          keys: ['Control', 'Alt', 'Meta', 'f'],
        },
        {
          title: 'Show All Issues',
          keys: ['Control', 'Meta', 'm'],
        },
        {
          title: 'Previews ► Refresh',
          keys: ['Alt', 'Meta', 'p'],
        },
        {
          title: 'Selection ► Select Column Up',
          keys: ['Control', 'Shift', 'ArrowUp'],
        },
        {
          title: 'Selection ► Select Column Down',
          keys: ['Control', 'Shift', 'ArrowDown'],
        },
        {
          title: 'Structure ► Re-Indent',
          keys: ['Control', '|'],
        },
        {
          title: 'Structure ► Shift Right',
          keys: ['Meta', ']'],
        },
        {
          title: 'Structure ► Shift Left',
          keys: ['Meta', '['],
        },
        {
          title: 'Structure ► Move Line Up',
          keys: ['Alt', 'Meta+['],
        },
        {
          title: 'Structure ► Move Line Down',
          keys: ['Alt', 'Meta', ']'],
        },
        {
          title: 'Structure ► Comment Selection',
          keys: ['Meta', '/'],
        },
        {
          title: 'Structure ► Add Documentation',
          keys: ['Alt', 'Meta+/'],
        },
        {
          title: 'Code Folding ► Fold',
          keys: ['Alt', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Code Folding ► Unfold',
          keys: ['Alt', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Code Folding ► Fold Methods & Functions',
          keys: ['Alt', 'Shift', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Code Folding ► Unfold Methods & Functions',
          keys: ['Alt', 'Shift', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Code Folding ► Fold Comment Blocks',
          keys: ['Control', 'Shift', 'Meta', 'ArrowLeft'],
        },
        {
          title: 'Code Folding ► Unfold Comment Blocks',
          keys: ['Control', 'Shift', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Font Size ► Increase',
          keys: ['Meta', '+'],
        },
        {
          title: 'Font Size ► Decrease',
          keys: ['Meta', '-'],
        },
        {
          title: 'Font Size ► Reset',
          keys: ['Control', 'Meta', '0'],
        },
      ],
    },
    {
      title: 'Editor Menu for Source Control History',
      id: 'editor_source_control_history',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
      ],
    },
    {
      title: 'Editor Menu for SpriteKit Scene Editor',
      id: 'editor_sprite_kit_scene_editor',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
        {
          title: 'Edit / Simulate',
          keys: ['Control', 'Space'],
        },
        {
          title: 'Zoom In',
          keys: ['Meta', '+'],
        },
        {
          title: 'Restore Zoom',
          keys: ['Control', 'Meta', '='],
        },
        {
          title: 'Zoom Out',
          keys: ['Meta', '-'],
        },
      ],
    },
    {
      title: 'Editor Menu for Test Plan',
      id: 'editor_stickers_document',
      version: 1,
      shortcuts: [
        {
          title: 'Show Tests',
          keys: ['Control', 'Alt', '1'],
        },
        {
          title: 'Show Configuration',
          keys: ['Control', 'Alt', '2'],
        },
      ],
    },
    {
      title: 'Editor Menu for View Debugger',
      id: 'editor_view_debugger',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
        {
          title: 'Zoom In',
          keys: ['Meta', '+'],
        },
        {
          title: 'Zoom Out',
          keys: ['Meta', '-'],
        },
        {
          title: 'Zoom Actual',
          keys: ['Control', 'Meta', '='],
        },
      ],
    },
    {
      title: 'Editor Menu for GPU Report Document',
      id: 'editor_coverage_report_document',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
      ],
    },
    {
      title: 'Editor Menu for Coverage Report Document',
      id: 'editor_coverage_report_document',
      version: 1,
      shortcuts: [
        {
          title: 'Show Editor Only',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Assistant',
          keys: ['Control', 'Alt', 'Meta', 'Enter'],
        },
      ],
    },
    {
      title: 'Product Menu',
      id: 'product_menu',
      version: 1,
      shortcuts: [
        {
          title: 'Run',
          keys: ['Meta', 'r'],
        },
        {
          title: 'Run…',
          keys: ['Alt', 'Meta', 'r'],
        },
        {
          title: 'Test',
          keys: ['Meta', 'u'],
        },
        {
          title: 'Test…',
          keys: ['Alt', 'Meta', 'u'],
        },
        {
          title: 'Profile',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Profile…',
          keys: ['Alt', 'Meta', 'i'],
        },
        {
          title: 'Analyze',
          keys: ['Shift', 'Meta', 'b'],
        },
        {
          title: 'Analyze…',
          keys: ['Alt', 'Shift', 'Meta', 'b'],
        },
        {
          title: 'Copy to Device (Internal Only)',
          keys: ['Control', 'Meta', 'a'],
        },
        {
          title: 'Build For ► Running',
          keys: ['Shift', 'Meta', 'r'],
        },
        {
          title: 'Build For ► Testing',
          keys: ['Shift', 'Meta', 'u'],
        },
        {
          title: 'Build For ► Profiling',
          keys: ['Shift', 'Meta', 'i'],
        },
        {
          title: 'Perform Action ► Run Without Building',
          keys: ['Control', 'Meta', 'r'],
        },
        {
          title: 'Perform Action ► Test Without Building',
          keys: ['Control', 'Meta', 'u'],
        },
        {
          title: 'Perform Action ► Profile Without Building',
          keys: ['Control', 'Meta', 'i'],
        },
        {
          title: 'Perform Action ► Test',
          keys: ['Control', 'Alt', 'Meta', 'u'],
        },
        {
          title: 'Perform Action ► Test Again',
          keys: ['Control', 'Alt', 'Meta', 'g'],
        },
        {
          title: 'Perform Action ► Compile File',
          keys: ['Control', 'Meta', 'b'],
        },
        {
          title: 'Perform Action ► Analyze File',
          keys: ['Control', 'Shift', 'Meta', 'b'],
        },
        {
          title: 'Build',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Clean',
          keys: ['Shift', 'Meta', 'k'],
        },
        {
          title: 'Clean Build Folder…',
          keys: ['Alt', 'Shift', 'Meta', 'k'],
        },
        {
          title: 'Stop',
          keys: ['Meta', '.'],
        },
        {
          title: 'Scheme ► Choose Scheme',
          keys: ['Control', '0'],
        },
        {
          title: 'Scheme ► Select Next Scheme',
          keys: ['Control', 'Meta', ']'],
        },
        {
          title: 'Scheme ► Select Previous Scheme',
          keys: ['Control', 'Meta', '['],
        },
        {
          title: 'Scheme ► Edit Scheme…',
          keys: ['Meta', '<'],
        },
        {
          title: 'Destination ► Choose Destination',
          keys: ['Control', 'Shift', '0'],
        },
        {
          title: 'Destination ► Select Next Destination',
          keys: ['Control', 'Alt', 'Meta', ']'],
        },
        {
          title: 'Destination ► Select Previous Destination',
          keys: ['Control', 'Alt', 'Meta', '['],
        },
        {
          title: 'Test Plan ► Edit Test Plan',
          keys: ['Meta', '>'],
        },
      ],
    },
    {
      title: 'Debug Menu for GPU Frame Debugger',
      id: 'debug_menu_gpu_frame_debugger',
      version: 1,
      shortcuts: [
        {
          title: 'Release GPU Frame',
          keys: ['Control', 'Meta', 'y'],
        },
        {
          title: 'Step to Previous Draw/Dispatch Call',
          keys: ['F5'],
        },
        {
          title: 'Step to Next Draw/Dispatch Call',
          keys: ['F6'],
        },
        {
          title: 'Step to Previous GPU Call',
          keys: ['Control', 'F5'],
        },
        {
          title: 'Step to Next GPU Call',
          keys: ['Control', 'F6'],
        },
      ],
    },
    {
      title: 'Debug Menu',
      id: 'debug_menu',
      version: 1,
      shortcuts: [
        {
          title: 'Pause / Continue',
          keys: ['Control', 'Meta', 'y'],
        },
        {
          title: 'Continue To Current Line',
          keys: ['Control', 'Meta', 'c'],
        },
        {
          title: 'Step Over',
          keys: ['F6'],
        },
        {
          title: 'Step Into',
          keys: ['F7'],
        },
        {
          title: 'Step Out',
          keys: ['F8'],
        },
        {
          title: 'Step Over Instruction',
          keys: ['Control', 'F6'],
        },
        {
          title: 'Step Over Thread',
          keys: ['Control', 'Shift', 'F6'],
        },
        {
          title: 'Step Into Instruction',
          keys: ['Control', 'F7'],
        },
        {
          title: 'Step Into Thread',
          keys: ['Control', 'Shift', 'F7'],
        },
        {
          title: 'Activate Breakpoints',
          keys: ['Meta', 'y'],
        },
        {
          title: 'Breakpoints ► Add Breakpoint at Current Line',
          keys: ['Meta', '\\'],
        },
        {
          title: 'Breakpoints ► Create Symbolic Breakpoint…',
          keys: ['Alt', 'Meta', '\\'],
        },
        {
          title: 'Debug Workflow ► View Memory',
          keys: ['Control', 'Alt', 'Shift', 'Meta', 'm'],
        },
        {
          title: 'Debug Workflow ► Clear Console',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Debug Workflow ► Reload Console',
          keys: ['Alt', 'Meta', 'k'],
        },
      ],
    },
    {
      title: 'Source Control Menu',
      id: 'source_control_menu',
      version: 1,
      shortcuts: [
        {
          title: 'Commit…',
          keys: ['Alt', 'Meta', 'c'],
        },
        {
          title: 'Pull…',
          keys: ['Alt', 'Meta', 'x'],
        },
      ],
    },
    {
      title: 'Window Menu',
      id: 'window_menu',
      version: 1,
      shortcuts: [
        {
          title: 'Minimize',
          keys: ['Meta', 'm'],
        },
        {
          title: 'Rename Tab…',
          keys: ['Alt', 'Shift', 'Meta', 't'],
        },
        {
          title: 'Show Previous Tab',
          keys: ['Control', 'Shift', 'Tab'],
        },
        {
          title: 'Show Next Tab',
          keys: ['Control', 'Tab'],
        },
        {
          title: 'Developer Documentation',
          keys: ['Shift', 'Meta', '0'],
        },
        {
          title: 'Welcome to Xcode',
          keys: ['Shift', 'Meta', '1'],
        },
        {
          title: 'Devices and Simulators',
          keys: ['Shift', 'Meta', '2'],
        },
        {
          title: 'Organizer',
          keys: ['Alt', 'Shift', 'Meta', 'o'],
        },
      ],
    },
    {
      title: 'Help Menu',
      id: 'help_menu',
      version: 1,
      shortcuts: [
        {
          title: 'Developer Documentation',
          keys: ['Shift', 'Meta', '0'],
        },
        {
          title: 'Show Quick Help for Selected Item',
          keys: ['Control', 'Meta', '?'],
        },
        {
          title: 'Search Documentation for Selected Text',
          keys: ['Control', 'Alt', 'Meta', '/'],
        },
      ],
    },
    {
      title: 'Scrolling',
      id: 'scrolling',
      version: 1,
      shortcuts: [
        {
          title: 'Scroll Page Down',
          keys: ['Control', 'ArrowDown'],
        },
        {
          title: 'Scroll to End of Document',
          keys: ['End'],
        },
        {
          title: 'Center Selection in Visible Area',
          keys: ['Control', 'l'],
        },
        {
          title: 'Scroll Page Up',
          keys: ['Control', 'ArrowUp'],
        },
        {
          title: 'Scroll to Beginning of Document',
          keys: ['Home'],
        },
      ],
    },
    {
      title: 'Transformations',
      id: 'transformations',
      version: 1,
      shortcuts: [
        {
          title: 'Transpose',
          keys: ['Control', 't'],
        },
      ],
    },
    {
      title: 'Mark & Yank',
      id: 'mark_and_yank',
      version: 1,
      shortcuts: [
        {
          title: 'Delete to Mark',
          keys: ['Control', 'w'],
        },
        {
          title: 'Set Mark',
          keys: ['Control', '@'],
        },
        {
          title: 'Yank',
          keys: ['Control', 'y'],
        },
      ],
    },
    {
      title: 'Code Completion',
      id: 'code_completion',
      version: 1,
      shortcuts: [
        {
          title: 'Select Previous Completion',
          keys: ['Control', '>'],
        },
        {
          title: 'Show Completion List',
          keys: ['Alt', 'Escape'],
        },
        {
          title: 'Select Next Completion',
          keys: ['Control', '.'],
        },
      ],
    },
    {
      title: 'Insertions and Indentations',
      id: 'insertions_and_indentations',
      version: 1,
      shortcuts: [
        {
          title: 'Insert Newline',
          keys: ['Enter'],
        },
        {
          title: 'Insert Tab without Extra Action',
          keys: ['Alt', 'Tab'],
        },
        {
          title: 'Insert Double Quote without Extra Action',
          keys: ['Control', '"'],
        },
        {
          title: 'Insert Backtab',
          keys: ['Shift', 'Tab'],
        },
        {
          title: 'Insert Newline without Extra Action',
          keys: ['Alt', 'Enter'],
        },
        {
          title: 'Insert Single Quote without Extra Action',
          keys: ['Control', '\''],
        },
        {
          title: 'Insert Line Break',
          keys: ['Control', 'Enter'],
        },
        {
          title: 'Insert Tab',
          keys: ['Tab'],
        },
        {
          title: 'Insert Newline and Leave Selection Before It',
          keys: ['Control', 'o'],
        },
      ],
    },
    {
      title: 'Deletions',
      id: 'deletions',
      version: 1,
      shortcuts: [
        {
          title: 'Delete Forward',
          keys: ['Control', 'd'],
        },
        {
          title: 'Delete Subword Backward',
          keys: ['Control', 'Backspace'],
        },
        {
          title: 'Delete to End of Paragraph',
          keys: ['Control', 'k'],
        },
        {
          title: 'Delete Backward',
          keys: ['Control', 'h'],
        },
        {
          title: 'Delete Word Backward',
          keys: ['Alt', 'Backspace'],
        },
        {
          title: 'Delete to Beginning of Text',
          keys: ['Meta', 'Backspace'],
        },
      ],
    },
    {
      title: 'Cancellation',
      id: 'cancel',
      version: 1,
      shortcuts: [
        {
          title: 'Cancel',
          keys: ['Escape'],
        },
      ],
    },
    {
      title: 'Selection',
      id: 'selection',
      version: 1,
      shortcuts: [
        {
          title: 'Move Up',
          keys: ['Control', 'p'],
        },
        {
          title: 'Move Down',
          keys: ['Control', 'n'],
        },
        {
          title: 'Move to Beginning of Paragraph Extending Selection',
          keys: ['Control', 'Shift', 'a'],
        },
        {
          title: 'Move Subword Forward Extending Selection',
          keys: ['Control', 'Shift', 'ArrowRight'],
        },
        {
          title: 'Move to End of Text Extending Selection',
          keys: ['Shift', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Move to Beginning of Document Extending Selection',
          keys: ['Shift', 'Meta', 'ArrowUp'],
        },
        {
          title: 'Move Down Extending Selection',
          keys: ['Control', 'Shift', 'n'],
        },
        {
          title: 'Move Word Backward Extending Selection',
          keys: ['Control', 'Alt', 'Shift', 'b'],
        },
        {
          title: 'Move Word Forward Extending Selection',
          keys: ['Control', 'Alt', 'Shift', 'f'],
        },
        {
          title: 'Move Subword Forward',
          keys: ['Control', 'ArrowRight'],
        },
        {
          title: 'Move Page Up Extending Selection',
          keys: ['Shift', 'PageUp'],
        },
        {
          title: 'Move to Beginning of Document',
          keys: ['Meta', 'ArrowUp'],
        },
        {
          title: 'Move Left',
          keys: ['ArrowLeft'],
        },
        {
          title: 'Move Right Extending Selection',
          keys: ['Shift', 'ArrowRight'],
        },
        {
          title: 'Move Backward Extending Selection',
          keys: ['Control', 'Shift', 'b'],
        },
        {
          title: 'Move to Beginning of Paragraph',
          keys: ['Control', 'a'],
        },
        {
          title: 'Move to End of Document Extending Selection',
          keys: ['Shift', 'Meta', 'ArrowDown'],
        },
        {
          title: 'Move Subword Backward',
          keys: ['Control', 'ArrowLeft'],
        },
        {
          title: 'Move Word Right',
          keys: ['Alt', 'ArrowRight'],
        },
        {
          title: 'Move Right',
          keys: ['ArrowRight'],
        },
        {
          title: 'Move Paragraph Backward Extending Selection',
          keys: ['Alt', 'Shift', 'ArrowUp'],
        },
        {
          title: 'Move to Beginning of Text Extending Selection',
          keys: ['Alt', 'Shift', 'ArrowRight'],
        },
        {
          title: 'Move Left Extending Selection',
          keys: ['Shift', 'ArrowLeft'],
        },
        {
          title: 'Move Paragraph Backward',
          keys: ['Alt', 'ArrowUp'],
        },
        {
          title: 'Move Word Backward',
          keys: ['Control', 'Alt', 'b'],
        },
        {
          title: 'Move Backward',
          keys: ['Control', 'b'],
        },
        {
          title: 'Move Forward',
          keys: ['Control', 'f'],
        },
        {
          title: 'Move Page Down Extending Selection',
          keys: ['Control', 'Shift', 'v'],
        },
        {
          title: 'Move Paragraph Forward',
          keys: ['Alt', 'ArrowDown'],
        },
        {
          title: 'Move to End of Text',
          keys: ['Meta', 'ArrowRight'],
        },
        {
          title: 'Move Page Up',
          keys: ['Alt', 'PageUp'],
        },
        {
          title: 'Move Up Extending Selection',
          keys: ['Control', 'Shift', 'p'],
        },
        {
          title: 'Move Forward Extending Selection',
          keys: ['Control', 'Shift', 'f'],
        },
        {
          title: 'Move Forward Extending Selection',
          keys: ['Control', 'Shift', 'f'],
        },
        {
          title: 'Move Page Down',
          keys: ['Control', 'v'],
        },
        {
          title: 'Move to End of Document',
          keys: ['Meta', 'ArrowDown'],
        },
        {
          title: 'Move Word Forward',
          keys: ['Control', 'Alt', 'f'],
        },
        {
          title: 'Move Word Left',
          keys: ['Alt', 'ArrowLeft'],
        },
        {
          title: 'Move to Beginning of Text',
          keys: ['Meta', 'ArrowLeft'],
        },
        {
          title: 'Move Word Left Extending Selection',
          keys: ['Alt', 'Shift', 'ArrowLeft'],
        },
        {
          title: 'Move Subword Backward Extending Selection',
          keys: ['Control', 'Shift', 'ArrowLeft'],
        },
        {
          title: 'Move Paragraph Forward Extending Selection',
          keys: ['Alt', 'Shift', 'ArrowDown'],
        },
        {
          title: 'Move to End of Paragraph',
          keys: ['Control', 'e'],
        },
        {
          title: 'Move to End of Pragraph Extending Selection',
          keys: ['Control', 'Shift', 'e'],
        },
      ],
    },
  ],
}
