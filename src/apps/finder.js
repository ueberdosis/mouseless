/* eslint-disable max-len */
// https://support.apple.com/en-gb/HT201236
module.exports = {
  id: 'finder',
  title: 'Finder',
  category: 'Utility',
  sets: [
    {
      title: 'Essentials',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Create a new folder',
          keys: ['Shift', 'Meta', 'n'],
        },
        {
          title: 'Open a new Finder window',
          keys: ['Meta', 'n'],
        },
        {
          title: 'Create a new Smart Folder',
          keys: ['Alt', 'Meta', 'n'],
        },
        {
          title: 'Duplicate the selected files',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Show the Get Info window for a selected file',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Start a Spotlight search in the Finder window',
          keys: ['Meta', 'f'],
        },
      ],
    },
    {
      title: 'Quick Look',
      id: 'quick-look',
      version: 1,
      shortcuts: [
        {
          title: 'Use Quick Look to preview the selected files',
          keys: ['Space'],
        },
        {
          title: 'View a Quick Look slideshow of the selected files',
          keys: ['Alt', 'Space'],
        },
      ],
    },
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        {
          title: 'Go to the previous folder',
          keys: ['Meta', '['],
        },
        {
          title: 'Go to the next folder',
          keys: ['Meta', ']'],
        },
        {
          title: 'Open a Go to Folder window',
          keys: ['Shift', 'Meta', 'g'],
        },
        {
          title: 'Open the selected item',
          keys: ['Meta', 'ArrowDown'],
        },
        {
          title: 'Open the folder that contains the current folder',
          keys: ['Meta', 'ArrowUp'],
        },
        {
          title: 'Open the folder that contains the current folder in a new window',
          keys: ['Meta', 'Control', 'ArrowUp'],
        },
      ],
    },
    {
      title: 'System Folders',
      id: 'system-folders',
      version: 1,
      shortcuts: [
        {
          title: 'Open the Home folder of the current macOS user account',
          keys: ['Shift', 'Meta', 'h'],
        },
        {
          title: 'Open the Computer window',
          keys: ['Shift', 'Meta', 'c'],
        },
        {
          title: 'Open the Network window',
          keys: ['Shift', 'Meta', 'k'],
        },
        {
          title: 'Open the desktop folder',
          keys: ['Shift', 'Meta', 'd'],
        },
        {
          title: 'Open the Utilities folder',
          keys: ['Shift', 'Meta', 'u'],
        },
        {
          title: 'Open the Downloads folder',
          keys: ['Alt', 'Meta', 'l'],
        },
        {
          title: 'Open the Documents folder',
          keys: ['Shift', 'Meta', 'o'],
        },
        {
          title: 'Open iCloud Drive',
          keys: ['Shift', 'Meta', 'i'],
        },
      ],
    },
    {
      title: 'Layout',
      id: 'layout',
      version: 1,
      shortcuts: [
        {
          title: 'View the items in the Finder window as icons',
          keys: ['Meta', '1'],
        },
        {
          title: 'View the items in a Finder window as a list',
          keys: ['Meta', '2'],
        },
        {
          title: 'View the items in a Finder window in columns',
          keys: ['Meta', '3'],
        },
        {
          title: 'View the items in a Finder window with Cover Flow',
          keys: ['Meta', '4'],
        },
        {
          title: 'Show or hide the Preview pane in Finder windows',
          keys: ['Shift', 'Meta', 'p'],
        },
        {
          title: 'Show or hide the tab bar in Finder windows',
          keys: ['Shift', 'Meta', 't'],
        },
        {
          title: 'Hide or show the path bar in Finder windows',
          keys: ['Alt', 'Meta', 'p'],
        },
        {
          title: 'Hide or show the Sidebar in Finder windows',
          keys: ['Alt', 'Meta', 's'],
        },
        {
          title: 'Hide or show the status bar in Finder windows',
          keys: ['Meta', '/'],
        },
        {
          title: 'Show or hide the tab bar when a single tab is open in the current Finder window',
          keys: ['Meta', 't'],
        },
        {
          title: 'Show or hide the toolbar when a single tab is open in the current Finder window',
          keys: ['Alt', 'Meta', 't'],
        },
        {
          title: 'Show View Options',
          keys: ['Meta', 'j'],
        },
      ],
    },
    {
      title: 'Trash',
      id: 'trash',
      version: 1,
      shortcuts: [
        {
          title: 'Move the selected item to the Trash',
          keys: ['Meta', 'Delete'],
        },
        {
          title: 'Empty the Trash',
          keys: ['Shift', 'Meta', 'Delete'],
        },
        {
          title: 'Empty the Trash without confirmation dialog',
          keys: ['Alt', 'Shift', 'Meta', 'Delete'],
        },
      ],
    },
    {
      title: 'Miscellaneous',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Eject the selected disk or volume',
          keys: ['Meta', 'e'],
        },
        {
          title: 'Open the Recents window, showing all of the files you viewed or changed recently',
          keys: ['Shift', 'Meta', 'f'],
        },
        {
          title: 'Open the AirDrop window',
          keys: ['Shift', 'Meta', 'r'],
        },
        {
          title: 'Add selected Finder item to the Dock',
          keys: ['Control', 'Shift', 'Meta', 't'],
        },
        {
          title: 'Add the selected item to the sidebar',
          keys: ['Control', 'Meta', 't'],
        },
        {
          title: 'Open the Connect to Server window',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Make an alias of the selected item',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Move the files in the Clipboard to the current location',
          keys: ['Alt', 'Meta', 'v'],
        },
      ],
    },
  ],
  // TODO: Meta-R: (1) When an alias is selected the Finder: show the original file for the selected alias. (2) In some apps, such as Calendar or Safari, refresh or reload the page. (3) In Software Update preferences, check for software updates again.
  // TODO: Works only in the list view
  // {
  //   title: 'Open the selected folder',
  //   description: 'This works only when in list view',
  //   keys: ['ArrowRight'],
  // },
  // {
  //   title: 'Close the selected folder',
  //   description: 'This works only when in list view',
  //   keys: ['ArrowLeft'],
  // },
  // TODO: Special keys
  // {
  //   title: 'Turn target display mode on or off',
  //   keys: ['Meta', 'Brightness Up'],
  // },
  // {
  //   title: 'Turn video mirroring on or off when your Mac is connected to more than one display',
  //   keys: ['Meta', 'Brightness Down'],
  // },
  // {
  //   title: 'Open Displays preferences. This works with either Brightness key',
  //   keys: ['Option', 'Brightness Up'],
  // },
  // {
  //   title: 'Change the brightness of your external display, if supported by your display',
  //   keys: ['Control', 'Brightness Up or Control', 'Brightness Down'],
  // },
  // {
  //   title: 'Adjust the display brightness in smaller steps. Add the Control key to this shortcut to make the adjustment on your external display, if supported by your display',
  //   keys: ['Option', 'Shift', 'Brightness Up or Option', 'Shift', 'Brightness Down'],
  // },
  // {
  //   title: 'Open Mission Control preferences',
  //   keys: ['Option', 'Mission Control'],
  // },
  // {
  //   title: 'Show the desktop',
  //   keys: ['Meta', 'Mission Control'],
  // },
  // {
  //   title: 'Open Sound preferences. This works with any of the volume keys',
  //   keys: ['Option', 'Volume Up'],
  // },
  // {
  //   title: 'Adjust the sound volume in smaller steps',
  //   keys: ['Option', 'Shift', 'Volume Up or Option', 'Shift', 'Volume Down'],
  // },
  // {
  //   title: 'Open Keyboard preferences. This works with either Keyboard Brightness key',
  //   keys: ['Option', 'Keyboard Brightness Up'],
  // },
  // {
  //   title: 'Adjust the keyboard brightness in smaller steps',
  //   keys: ['Option', 'Shift', 'Keyboard Brightness Up or Option', 'Shift', 'Keyboard Brightness Down'],
  // },
  // {
  //   title: 'Open the item in a separate window, then close the original window',
  //   keys: ['Option key while double', 'clicking'],
  // },
  // {
  //   title: 'Open a folder in a separate tab or window',
  //   keys: ['Meta key while double', 'clicking'],
  // },
  // {
  //   title: 'Move the dragged item to the other volume, instead of copying it',
  //   keys: ['Meta key while dragging to another volume'],
  // },
  // {
  //   title: 'Copy the dragged item. The pointer changes while you drag the item',
  //   keys: ['Option key while dragging'],
  // },
  // {
  //   title: 'Make an alias of the dragged item. The pointer changes while you drag the item',
  //   keys: ['Alt', 'Meta while dragging'],
  // },
  // {
  //   title: 'Open all folders within the selected folder. This works only when in list view',
  //   keys: ['Alt', 'click a disclosure triangle'],
  // },
  // {
  //   title: 'See the folders that contain the current folder',
  //   keys: ['Meta', 'click a window title'],
  // },
}
