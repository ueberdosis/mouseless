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
        Find in Workspace…||Shift++Meta++f
        Find and Replace in Workspace…||Alt++Shift++Meta
        Find Next in Workspace||Control++Meta++g
        Find Previous in Workspace||Control++Shift++Meta++g
        Find Selected Smybol in Workspace||Control++Shift++Meta++f
        Find Call Hierarchy||Control++Shift++Meta++h
        Find…||Meta++f
        Find and Replace…||Alt++Meta++f
        Find Next||Meta++g
        Find Previous||Shift++Meta++g
        Find and Select Next||Alt++Meta++g
        Find and Select Previous||Alt++Shift++Meta++g
        Use Selection for Find||Meta++e
        Use Selection for Replace||Shift++Meta++e
        Select Next Occurrence||Alt++Meta++e
        Select Previous Occurrence||Alt++Shift++Meta++e
      ],
    },
    {
      title: 'Navigate Menu',
      id: 'navigate',
      version: 1,
      shortcuts: [
        Reveal in Projet Navigator||Shift++Meta++j
        Reveal in Debug Navigator||Shift++Meta++d
        Open in Next Editor||Alt++Meta++,
        Move Focus to Next Area||Alt++Meta++`
        Move Focus to Previous Area||Alt++Shift++Meta++`
        Move Focus to Next Editor||Control++`
        Move Focus to Previous Editor||Control++Shift++`
        Move Focus to Editor…||Meta++j
        Go Forward||Control++Meta++ArrowRight
        Go Forward in Next Editor||Control++Alt++Meta++ArrowRight
        Go Forward in…||Control++Alt++Shift++Meta++ArrowRight
        Go Back||Control++Meta++ArrowLeft
        Go Back in Next Editor||Control++Alt++Meta++ArrowLeft
        Go Forward in…||Control++Alt++Shift++Meta++ArrowLeft
        Jump to Selection||Alt++Meta++l
        Jump to Definition||Control++Meta++j
        Jump to Definition in Next Editor||Control++Alt++Meta++j
        Jump to Definition in…||Control++Alt++Shift++Meta++j
        Jump to Next Issue||Meta++'
        Fix Next Issue||Control++Meta++'
        Jump to Previous Issue||Meta++"
        Fix Previous Issue||Control++Meta++"
        Jump to Instruction Pointer||Control++Meta++p
      ],
    },
    {
      title: 'Navigate Menu for Commit Sheet',
      id: 'navigate_commitsheet',
      version: 1,
      shortcuts: [
        Jump to Next Counterpart||Control++Meta++ArrowUp
        Jump to Next Counterpart in Next Editor||Control++Alt++Meta++ArrowUp
        Jump to Next Counterpart in…||Control++Alt++Shift++Meta++ArrowUp
        Jump to Previous Counterpart||Control++Meta++ArrowDown
        Jump to Previous Counterpart in Next Editor||Control++Alt++Meta++ArrowDown
        Jump to Previous Counterpart in…||Control++Alt++Shift++Meta++ArrowDown
        Jump to…||Meta++l
        Jump to Next Placeholder||Control++/
        Jump to Previous Placeholder||Control++?
        Jump to Next Change||Control++\
        Jump to Next Local or Upstream Change||Control++Alt++\
        Jump to Previous Change||Control++|
        Jump to Previous Local or Upstream Change||Control++Alt++|
      ],
    },
    {
      title: 'Navigate Menu for Documentation',
      id: 'navigate_documentation',
      version: 1,
      shortcuts: [
        Jump to…||Meta++l
      ],
    },
    {
      title: 'Navigate Menu for Playground',
      id: 'navigate_playground',
      version: 1,
      shortcuts: [
        Jump to…||Meta++l
        Jump to Next Placeholder||Control++/
        Jump to Previous Placeholder||Control++?
      ],
    },
    {
      title: 'Navigate Menu for Source Code',
      id: 'navigate_source_code',
      version: 1,
      shortcuts: [
        Jump to Next Counterpart||Control++Meta++ArrowUp
        Jump to Next Counterpart in Next Editor||Control++Alt++Meta++ArrowUp
        Jump to Next Counterpart in…||Control++Alt++Shift++Meta++ArrowUp
        Jump to Previous Counterpart||Control++Meta++ArrowDown
        Jump to Previous Counterpart in Next Editor||Control++Alt++Meta++ArrowDown
        Jump to Previous Counterpart in…||Control++Alt++Shift++Meta++ArrowDown
        Jump to…||Meta++l
        Jump to Next Placeholder||Control++/
        Jump to Previous Placeholder||Control++?
        Jump to Next Change||Control++\
        Jump Lo Next Local or Upstream Change||Control++Alt++\
        Jump to Previous Change||Control++|
        Jump to Previous Local or Upstream Change||Control++Alt++|
      ],
    },
    {
      title: 'Navigate Menu for Source Code Comparison',
      id: 'navigate_source_code_comparison',
      version: 1,
      shortcuts: [
        Jump to Next Counterpart||Control++Meta++ArrowUp
        Jump to Next Counterpart in Next Editor||Control++Alt++Meta++ArrowUp
        Jump to Next Counterpart in…||Control++Alt++Shift++Meta++ArrowUp
        Jump to Previous Counterpart||Control++Meta++ArrowDown
        Jump to Previous Counterpart in Next Editor||Control++Alt++Meta++ArrowDown
        Jump to Previous Counterpart in…||Control++Alt++Shift++Meta++ArrowDown
        Jump to…||Meta++l
        Jump to Next Placeholder||Control++/
        Jump to Previous Placeholder||Control++?
        Jump to Next Change||Control++\
        Jump to Next Local or Upstream Change||Control++Alt++\
        Jump to Previous Change||Control++|
        Jump to Previous Local or Upstream Change||Control++Alt++|
      ],
    },
    {
      title: 'Navigate Menu for Source Control History',
      id: 'navigate_source_control_history',
      version: 1,
      shortcuts: [
        Jump to Commit View||Alt++Shift++Meta++c
      ],
    },
    {
      title: 'Navigate Menu for Pull Request Changes',
      id: 'navigate_pull_request_changes',
      version: 1,
      shortcuts: [
        Jump to Next Counterpart||Control++Meta++ArrowUp
        Jump to Next Counterpart in Next Editor||Control++Alt++Meta++ArrowUp
        Jump to Next Counterpart in…||Control++Alt++Shift++Meta++ArrowUp
        Jump to Previous Counterpart||Control++Meta++ArrowDown
        Jump to Previous Counterpart in Next Editor||Control++Alt++Meta++ArrowDown
        Jump to Previous Counterpart in…||Control++Alt++Shift++Meta++ArrowDown
        Jump to…||Meta++l
        Jump to Next Placeholder||Control++/
        Jump to Previous Placeholder||Control++?
        Jump to Next Change||Control++\
        Jump to Next Local or Upstream Change||Control++Alt++\
        Jump to Previous Change||Control++|
        Jump to Previous Local or Upstream Change||Control++Alt++|
      ],
    },
    {
      title: 'Editor Menu for Asset Catalog Comparision',
      id: 'editor_asset_catalog_comparision',
      version: 1,
      shortcuts: [
        Show Completions||Control++Space
        Edit All in Scope||Control++Meta++e
        Fix All Issues||Control++Alt++Meta+f
        Issues ► Show All Issues||Control++Meta+m
        Previews ► Refresh||Alt++Meta+p
        Selection ► Select Column Up||Control++Shift++ArrowUp
        Selection ► Select Column Down||Control++Shift++ArrowDown
        Structure ► Re-Indent||Control++|
        Structure ► Shift Right||Meta++]
        Structure ► Shift Left||Meta++[
        Structure ► Move Line Up||Alt++Meta+[
        Structure ► Move Line Down||Alt++Meta++]
        Structure ► Comment Selection||Meta++/
        Structure ► Add Documentation||Alt++Meta+/
        Code Folding ► Fold||Alt++Meta++ArrowLeft
        Code Folding ► Unfold||Alt++Meta++ArrowRight
        Code Folding ► Fold Methods & Functions||Alt++Shift++Meta++ArrowLeft
        Code Folding ► Unfold Methods & Functions||Alt++Shift++Meta++ArrowRight
        Code Folding ► Fold Comment Blocks||Control++Shift++Meta++ArrowLeft
        Code Folding ► Unfold Comment Blocks||Control++Shift++Meta++ArrowRight
        Font Size ► Increase||Meta+++
        Font Size ► Decrease||Meta++-
        Font Size ► Reset||Control++Meta++0
      ],
    },
    {
      title: 'Editor Menu for Data Model',
      id: 'editor_data_model',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Assistant||Control++Alt++Meta++Enter
      ],
    },
    {
      title: 'Editor Menu for Documentation',
      id: 'editor_documentation',
      version: 1,
      shortcuts: [
        Zoom In||Meta+++
        Zoom Out||Meta++-
        Actual Size||Control++Meta++=
      ],
    },
    {
      title: 'Editor Menu for GPU Counters',
      id: 'editor_gpu_counters',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Assistant||Control++Alt++Meta++Enter
        Zoom In||Meta+++
        Zoom Out||Meta++-
        Select Next Draw/Encoder||Control++Alt++ArrowRight
        Select Prev Draw/Encoder||Control++Alt++ArrowLeft
      ],
    },
    {
      title: 'Editor Menu for GPU Frame Debugger',
      id: 'editor_gpu_frame_debugger',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Assistant||Control++Alt++Meta++Enter
      ],
    },
    {
      title: 'Editor Menu for Hex',
      id: 'editor_hex',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Assistant||Control++Alt++Meta++Enter
      ],
    },
    {
      title: 'Editor Menu for Integration Report Commits',
      id: 'editor_integration_report_commits',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Assistant||Control++Alt++Meta++Enter
      ],
    },
    {
      title: 'Editor Menu for Interface Builder - Storyboard',
      id: 'editor_interface_builder',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Preview||Alt++Meta++Enter
        Assistant||Control++Alt++Meta++Enter
        Actual Size||Control++Meta++=
        Align Left Edges||Meta++[
        Align Right Edges||Meta++]
        Size to Fit Content||Meta++=
        Update Frames||Alt++Meta++=
        Add Horizontal Guide||Meta++_
        Add Verical Guide||Control++Meta++|
        Resolve Auto Layout Issues ► Reset to Suggested Constraints||Alt++Shift++Meta++=
      ],
    },
    {
      title: 'Editor Menu for Interface Builder Cocoa Preview',
      id: 'editor_cocoa_preview',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Preview||Alt++Meta++Enter
        Assistant||Control++Alt++Meta++Enter
        Zoom to 100%||Control++Meta++=
        Align Left Edges||Meta++[
        Align Right Edges||Meta++]
        Size to Fit Content||Meta++=
        Update Frames||Alt++Meta++=
        Add Horizontal Guide||Meta++_
        Add Verical Guide||Control++Meta++|
        Resolve Auto Layout Issues ► Reset to Suggested Constraints||Alt+
      ],
    },
    {
      title: 'Editor Menu for Log Viewer',
      id: 'editor_log_viewer',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Assistant||Control++Alt++Meta++Enter
      ],
    },
    {
      title: 'Editor Menu for Machine learning model',
      id: 'editor_machine_learning_model',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Assistant||Control++Alt++Meta++Enter
      ],
    },
    {
      title: 'Editor Menu for Mapping Model',
      id: 'editor_mapping_model',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Assistant||Control++Alt++Meta++Enter
      ],
    },
    {
      title: 'Editor Menu for Memory',
      id: 'editor_memory',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Assistant||Control++Alt++Meta++Enter
      ],
    },
    {
      title: 'Editor Menu for PDF',
      id: 'editor_pdf',
      version: 1,
      shortcuts: [
        Zoom In||Meta+++
        Zoom Out||Meta++-
        Zoom Actual Size||Control++Meta++=
        Next Page||Alt++Meta++ArrowDown
        Previous Page||Alt++Meta++ArrowUp
      ],
    },
    {
      title: 'Editor Menu for Playground',
      id: 'editor_playground',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Preview||Alt++Meta++Enter
        Show Completions||Control++Space
        Edit All in Scope||Control++Meta++e
        Fix All Issues||Control++Alt++Meta++f
        Issues ► Show All Issues||Control++Meta++m
        Selection ► Select Column Up||Control++Shift++ArrowUp
        Selection ► Select Column Down||Control++Shift++ArrowDown
        Structure ► Re-Indent||Contol++|
        Structure ► Shift Right||Meta++]
        Structure ► Shift Left||Meta++[
        Structure ► Move Line Up||Alt++Meta++[
        Structure ► Move Line Down||Alt++Meta++]
        Structure ► Comment Selection||Meta++/
        Structure ► Add Documentation||Alt++Meta++/
        Code Folding ► Fold||Alt++Meta++ArrowLeft
        Code Folding ► Unfold||Alt++Meta++ArrowRight
        Code Folding ► Fold Methods & Functions||Alt++Shift++Meta++ArrowLeft
        Code Folding ► Unfold Methods & Functions||Alt++Shift++Meta++ArrowRight
        Code Folding ► Fold Comment Blocks||Control++Shift++Meta++ArrowLeft
        Code Folding ► Unfold Comment Blocks||Control++Shift++Meta++ArrowRight
        Font Size ► Increase||Meta+++
        Font Size ► Decrease||Meta++-
        Font Size ► Reset||Control++Meta++0
        Authors||Control++Shift++Meta++a
        Run Playground||Shift++Meta++Enter
        Run Playground to Current Line||Shift++Enter
        Run Playground from Top to Current Line||Alt++Shift++Enter
      ],
    },
    {
      title: 'Editor Menu for Property List',
      id: 'editor_property_list',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Assistant||Control++Alt++Meta++Enter
      ],
    },
    {
      title: 'Editor Menu for RTF',
      id: 'editor_rtf',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Assistant||Control++Alt++Meta++Enter
      ],
    },
    {
      title: 'Editor Menu for SceneKit Document',
      id: 'editor_scene_kit',
      version: 1,
      shortcuts: [
        Controls ► Focus Selection||Alt++f
      ],
    },
    {
      title: 'Editor Menu for Scripting Definition',
      id: 'editor_scripting_definition',
      version: 1,
      shortcuts: [
        Make Text Bigger||Meta+++
        Make Text Smaller||Meta++-
      ],
    },
    {
      title: 'Editor Menu for Source Code',
      id: 'editor_source_code',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Preview||Alt++Meta++Enter
        Assistant||Control++Alt++Meta++Enter
        Show Completions||Control++Space
        Show Code Actions||Shift++Meta++a
        Edit All in Scope||Control++Meta++e
        Fix All Issues||Control++Alt++Meta+f
        Issues ► Show All Issues||Control++Meta+m
        Previews ► Refresh||Alt++Meta++p
        Selection ► Select Column Up||Control++Shift++ArrowUp
        Selection ► Select Column Down||Control++Shift++ArrowDown
        Structure ► Re-Indent||Control++|
        Structure ► Shift Right||Meta++]
        Structure ► Shift Left||Meta++[
        Structure ► Move Line Up||Alt++Meta+[
        Structure ► Move Line Down||Alt++Meta++]
        Structure ► Comment Selection||Meta++/
        Structure ► Add Documentation||Alt++Meta+/
        Code Folding ► Fold||Alt++Meta++ArrowLeft
        Code Folding ► Unfold||Alt++Meta++ArrowRight
        Code Folding ► Fold Methods & Functions||Alt++Shift++Meta++ArrowLeft
        Code Folding ► Unfold Methods & Functions||Alt++Shift++Meta++ArrowRight
        Code Folding ► Fold Comment Blocks||Control++Shift++Meta++ArrowLeft
        Code Folding ► Unfold Comment Blocks||Control++Shift++Meta++ArrowRight
        Font Size ► Increase||Meta+++
        Font Size ► Decrease||Meta++-
        Font Size ► Reset||Control++Meta++0
        Minimap||Control++Shift++Meta++m
        Minimap||Control++Shift++Meta++m
        Authors||Control++Shift++Meta++a
      ],
    },
    {
      title: 'Editor Menu for Source Code Comparison',
      id: 'editor_source_code_comparison',
      version: 1,
      shortcuts: [
        Show Completions||Control++Space
        Edit All in Scope||Control++Meta++e
        Fix All Issues||Control++Alt++Meta++f
        Show All Issues||Control++Meta++m
        Previews ► Refresh||Alt++Meta++p
        Selection ► Select Column Up||Control++Shift++ArrowUp
        Selection ► Select Column Down||Control++Shift++ArrowDown
        Structure ► Re-Indent||Control++|
        Structure ► Shift Right||Meta++]
        Structure ► Shift Left||Meta++[
        Structure ► Move Line Up||Alt++Meta+[
        Structure ► Move Line Down||Alt++Meta++]
        Structure ► Comment Selection||Meta++/
        Structure ► Add Documentation||Alt++Meta+/
        Code Folding ► Fold||Alt++Meta++ArrowLeft
        Code Folding ► Unfold||Alt++Meta++ArrowRight
        Code Folding ► Fold Methods & Functions||Alt++Shift++Meta++ArrowLeft
        Code Folding ► Unfold Methods & Functions||Alt++Shift++Meta++ArrowRight
        Code Folding ► Fold Comment Blocks||Control++Shift++Meta++ArrowLeft
        Code Folding ► Unfold Comment Blocks||Control++Shift++Meta++ArrowRight
        Font Size ► Increase||Meta+++
        Font Size ► Decrease||Meta++-
        Font Size ► Reset||Control++Meta++0
      ],
    },
    {
      title: 'Editor Menu for Source Control History',
      id: 'editor_source_control_history',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Assistant||Control++Alt++Meta++Enter
      ],
    },
    {
      title: 'Editor Menu for SpriteKit Scene Editor',
      id: 'editor_sprite_kit_scene_editor',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Assistant||Control++Alt++Meta++Enter
        Edit / Simulate||Control++Space
        Zoom In||Meta+++
        Restore Zoom||Control++Meta++=
        Zoom Out||Meta++-
      ],
    },
    {
      title: 'Editor Menu for Test Plan',
      id: 'editor_stickers_document',
      version: 1,
      shortcuts: [
        Show Tests||Control++Alt++1
        Show Configuration||Control++Alt++2
      ],
    },
    {
      title: 'Editor Menu for View Debugger',
      id: 'editor_view_debugger',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Assistant||Control++Alt++Meta++Enter
        Zoom In||Meta+++
        Zoom Out||Meta++-
        Zoom Actual||Control++Meta++=
      ],
    },
    {
      title: 'Editor Menu for GPU Report Document',
      id: 'editor_coverage_report_document',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
      ],
    },
    {
      title: 'Editor Menu for Coverage Report Document',
      id: 'editor_coverage_report_document',
      version: 1,
      shortcuts: [
        Show Editor Only||Meta++Enter
        Assistant||Control++Alt++Meta++Enter
      ],
    },
    {
      title: 'Product Menu',
      id: 'product_menu',
      version: 1,
      shortcuts: [
        Run||Meta++r
        Run…||Alt++Meta++r
        Test||Meta++u
        Test…||Alt++Meta++u
        Profile||Meta++i
        Profile…||Alt++Meta++i
        Analyze||Shift++Meta++b
        Analyze…||Alt++Shift++Meta++b
        Copy to Device (Internal Only)||Control++Meta++a
        Build For ► Running||Shift++Meta++r
        Build For ► Testing||Shift++Meta++u
        Build For ► Profiling||Shift++Meta++i
        Perform Action ► Run Without Building||Control++Meta++r
        Perform Action ► Test Without Building||Control++Meta++u
        Perform Action ► Profile Without Building||Control++Meta++i
        Perform Action ► Test||Control++Alt++Meta++u
        Perform Action ► Test Again||Control++Alt++Meta++g
        Perform Action ► Compile File||Control++Meta++b
        Perform Action ► Analyze File||Control++Shift++Meta++b
        Build||Meta++b
        Clean||Shift++Meta++k
        Clean Build Folder…||Alt++Shift++Meta++k
        Stop||Meta++.
        Scheme ► Choose Scheme||Control++0
        Scheme ► Select Next Scheme||Control++Meta++]
        Scheme ► Select Previous Scheme||Control++Meta++[
        Scheme ► Edit Scheme…||Meta++<
        Destination ► Choose Destination||Control++Shift++0
        Destination ► Select Next Destination||Control++Alt++Meta++]
        Destination ► Select Previous Destination||Control++Alt++Meta++[
        Test Plan ► Edit Test Plan||Meta++>
      ],
    },
    {
      title: 'Debug Menu for GPU Frame Debugger',
      id: 'debug_menu_gpu_frame_debugger',
      version: 1,
      shortcuts: [
        Release GPU Frame||Control++Meta++y
        Step to Previous Draw/Dispatch Call||F5
        Step to Next Draw/Dispatch Call||F6
        Step to Previous GPU Call||Control++F5
        Step to Next GPU Call||Control++F6
      ],
    },
    {
      title: 'Debug Menu',
      id: 'debug_menu',
      version: 1,
      shortcuts: [
        Pause / Continue||Control++Meta++y
        Continue To Current Line||Control++Meta++c
        Step Over||F6
        Step Into||F7
        Step Out||F8
        Step Over Instruction||Control++F6
        Step Over Thread||Control++Shift++F6
        Step Into Instruction||Control++F7
        Step Into Thread||Control++Shift++F7
        Activate Breakpoints||Meta++y
        Breakpoints ► Add Breakpoint at Current Line||Meta++\
        Breakpoints ► Create Symbolic Breakpoint…||Alt++Meta++\
        Debug Workflow ► View Memory||Control++Alt++Shift++Meta++m
        Debug Workflow ► Clear Console||Meta++k
        Debug Workflow ► Reload Console||Alt++Meta++k
      ],
    },
    {
      title: 'Source Control Menu',
      id: 'source_control_menu',
      version: 1,
      shortcuts: [
        Commit…||Alt++Meta++c
        Pull…||Alt++Meta++x
      ],
    },
    {
      title: 'Window Menu',
      id: 'window_menu',
      version: 1,
      shortcuts: [
        Minimize||Meta++m
        Rename Tab…||Alt++Shift++Meta++t
        Show Previous Tab||Control++Shift++Tab
        Show Next Tab||Control++Tab
        Developer Documentation||Shift++Meta++0
        Welcome to Xcode||Shift++Meta++1
        Devices and Simulators||Shift++Meta++2
        Organizer||Alt++Shift++Meta++o
      ],
    },
    {
      title: 'Help Menu',
      id: 'help_menu',
      version: 1,
      shortcuts: [
        Developer Documentation||Shift++Meta++0
        Show Quick Help for Selected Item||Control++Meta++?
        Search Documentation for Selected Text||Control++Alt++Meta++/
      ],
    },
    {
      title: 'Scrolling',
      id: 'scrolling',
      version: 1,
      shortcuts: [
        Scroll Page Down||Control++ArrowDown
        Scroll to End of Document||End
        Center Selection in Visible Area||Control++l
        Scroll Page Up||Control++ArrowUp
        Scroll to Beginning of Document||Home
      ],
    },
    {
      title: 'Transformations',
      id: 'transformations',
      version: 1,
      shortcuts: [
        Transpose||Control++t
      ],
    },
    {
      title: 'Mark & Yank',
      id: 'mark_and_yank',
      version: 1,
      shortcuts: [
        Delete to Mark||Control++w
        Set Mark||Control++@
        Yank||Control++y
      ],
    },
    {
      title: 'Code Completion',
      id: 'code_completion',
      version: 1,
      shortcuts: [
        Select Previous Completion||Control++>
        Show Completion List||Alt++Escape
        Select Next Completion||Control++.
      ],
    },
    {
      title: 'Insertions and Indentations',
      id: 'insertions_and_indentations',
      version: 1,
      shortcuts: [
        Insert Newline||Enter
        Insert Tab without Extra Action||Alt++Tab
        Insert Double Quote without Extra Action||Control++"
        Insert Backtab||Shift++Tab
        Insert Newline without Extra Action||Alt++Enter
        Insert Single Quote without Extra Action||Control++\'
        Insert Line Break||Control++Enter
        Insert Tab||Tab
        Insert Newline and Leave Selection Before It||Control++o
      ],
    },
    {
      title: 'Deletions',
      id: 'deletions',
      version: 1,
      shortcuts: [
        Delete Forward||Control++d
        Delete Subword Backward||Control++Backspace
        Delete to End of Paragraph||Control++k
        Delete Backward||Control++h
        Delete Word Backward||Alt++Backspace
        Delete to Beginning of Text||Meta++Backspace
      ],
    },
    {
      title: 'Cancellation',
      id: 'cancel',
      version: 1,
      shortcuts: [
        Cancel||Escape
      ],
    },
    {
      title: 'Selection',
      id: 'selection',
      version: 1,
      shortcuts: [
        Move Up||Control++p
        Move Down||Control++n
        Move to Beginning of Paragraph Extending Selection||Control++Shift++a
        Move Subword Forward Extending Selection||Control++Shift++ArrowRight
        Move to End of Text Extending Selection||Shift++Meta++ArrowRight
        Move to Beginning of Document Extending Selection||Shift++Meta++ArrowUp
        Move Down Extending Selection||Control++Shift++n
        Move Word Backward Extending Selection||Control++Alt++Shift++b
        Move Word Forward Extending Selection||Control++Alt++Shift++f
        Move Subword Forward||Control++ArrowRight
        Move Page Up Extending Selection||Shift++PageUp
        Move to Beginning of Document||Meta++ArrowUp
        Move Left||ArrowLeft
        Move Right Extending Selection||Shift++ArrowRight
        Move Backward Extending Selection||Control++Shift++b
        Move to Beginning of Paragraph||Control++a
        Move to End of Document Extending Selection||Shift++Meta++ArrowDown
        Move Subword Backward||Control++ArrowLeft
        Move Word Right||Alt++ArrowRight
        Move Right||ArrowRight
        Move Paragraph Backward Extending Selection||Alt++Shift++ArrowUp
        Move to Beginning of Text Extending Selection||Alt++Shift++ArrowRight
        Move Left Extending Selection||Shift++ArrowLeft
        Move Paragraph Backward||Alt++ArrowUp
        Move Word Backward||Control++Alt++b
        Move Backward||Control++b
        Move Forward||Control++f
        Move Page Down Extending Selection||Control++Shift++v
        Move Paragraph Forward||Alt++ArrowDown
        Move to End of Text||Meta++ArrowRight
        Move Page Up||Alt++PageUp
        Move Up Extending Selection||Control++Shift++p
        Move Forward Extending Selection||Control++Shift++f
        Move Forward Extending Selection||Control++Shift++f
        Move Page Down||Control++v
        Move to End of Document||Meta++ArrowDown
        Move Word Forward||Control++Alt++f
        Move Word Left||Alt++ArrowLeft
        Move to Beginning of Text||Meta++ArrowLeft
        Move Word Left Extending Selection||Alt++Shift++ArrowLeft
        Move Subword Backward Extending Selection||Control++Shift++ArrowLeft
        Move Paragraph Forward Extending Selection||Alt++Shift++ArrowDown
        Move to End of Paragraph||Control++e
        Move to End of Pragraph Extending Selection||Control++Shift++e
      ],
    },
  ],
}
