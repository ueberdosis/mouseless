module.exports = {
    id: 'discord',
    title: 'Discord',
    category: 'Communication',
    description: 'Discord is an instant messaging and VoIP application and digital distribution platform designed for creating communities. Discord has amazing support for Keyboard Shortcuts',
    sets: [
        {
            title: 'Navigation',
            id: 'navigation',
            version: 1,
            shortcuts: [
                {
                    title: 'Navigate between servers (up)',
                    keys: ['Meta', 'alt', 'ArrowUp'],
                },
                {
                    title: 'Navigate between servers (down)',
                    keys: ['Meta','Alt','ArrowDown'],
                },
                {
                    title: 'Navigate between channels (up)',
                    keys: ['Alt','ArrowUp'],
                },
                {
                    title: 'Navigate between channels (down)',
                    keys: ['Alt','ArrowDown'],
                },
                {
                    title: 'Navigate between unread channels with mentions (up)',
                    keys: ['Meta','Shift','Alt','UpArrow'],
                },
                {
                    title: 'Navigate between unread channels with mentions (down)',
                    keys: ['Meta','Shift','Alt','DownArrow'],
                },
                {
                    title: 'Toggle between last server and DMs',
                    keys: ['Meta','Alt','LeftArrow'],
                },
                {
                    title: 'Scroll chat (up)',
                    keys: ['PageUp'],
                },
                {
                    title: 'Scroll chat (down)',
                    keys: ['PageDown'],
                },
                {
                    title: 'Jump to oldest unread message',
                    keys: ['Shift','PageUp'],
                },
                {
                    title: 'Toggle Quickswitcher',
                    keys: ['Meta','k'],
                },

            ],
            title: 'Read \& Write',
            id: 'read',
            version: 1,
            shortcuts: [
                {
                    title: 'Mark channel as read',
                    keys: ['Escape'],
                },
                {
                    title: 'Mark server as read',
                    keys: ['Shift','Escape'],
                },
                {
                    title: 'Mark top inbox channel as read',
                    keys: ['Meta','Shift','e'],
                },
                {
                    title: 'Toggle emoji picker',
                    keys: ['Meta','e'],
                },
                {
                    title: 'Toggle GIF picker',
                    keys: ['Meta','g'],
                },
                {
                    title: 'Upload a file',
                    keys: ['Meta','Shift','u'],
                },
            ],

            title: 'Calls',
            id: 'call',
            version: 1,
            shortcuts: [
                {
                    title: 'Awnser incoming call',
                    keys: ['Meta','Return'],
                },
                {
                    title: 'Decline incoming call',
                    keys: ['Escape'],
                },
                {
                    title: 'Toggle mute',
                    keys: ['Meta','Shift','m'],
                },
                {
                    title: 'Toggle deafen',
                    keys: ['Meta','Shift','d'],
                },
                {
                    title: 'Start call in private message or group',
                    keys: ['Control','\''],
                },
            ],

            title: 'Miscellaneous',
            id: 'miscellaneous',
            version: 1,
            shortcuts: [
                {
                    title: 'Create or join a server',
                    keys: ['Meta','Shift','n'],
                },
                {
                    title: 'Create a private group',
                    keys: ['Meta','Shift','t'],
                },
                {
                    title: 'Toggle pins popout',
                    keys: ['Meta','p'],
                },
                {
                    title: 'Toggle inbox popout',
                    keys: ['Meta','i'],
                },
                {
                    title: 'Toggle channel member list',
                    keys: ['Meta','u'],
                },
                {
                    title: 'Get help',
                    keys: ['Meta','Shift','h'],
                },
                {
                    title: 'Show keyboard combos',
                    keys: ['Meta','\/'],
                }
            ],
        },
    ],
}