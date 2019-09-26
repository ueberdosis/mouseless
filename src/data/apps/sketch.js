// https://www.sketch.com/docs/shortcuts/
export default {
  id: 'sketch',
  title: 'Sketch',
  groups: [
    {
      title: 'Layers',
      id: 'layers',
      version: 1,
      shortcuts: [
        {
          title: 'Artboard',
          keys: ['a'],
        },
        {
          title: 'Oval',
          keys: ['o'],
        },
        {
          title: 'Line',
          keys: ['l'],
        },
        {
          title: 'Rounded Rectangle',
          keys: ['u'],
        },
        {
          title: 'Vector',
          keys: ['v'],
        },
        {
          title: 'Pencil',
          keys: ['p'],
        },
        {
          title: 'Text',
          keys: ['t'],
        },
        {
          title: 'Slice',
          keys: ['s'],
        },
        {
          title: 'Hotspot',
          keys: ['h'],
        },
      ],
    },
    {
      title: 'Foo',
      id: 'foo',
      version: 1,
      shortcuts: [
        {
          title: 'Bold',
          keys: ['meta', 'b'],
          group: 2,
        },
      ],
    },
    {
      title: 'Bar',
      id: 'bar',
      version: 1,
      shortcuts: [
        {
          title: 'Send backward',
          keys: ['meta', '['],
          group: 3,
        },
      ],
    },
  ],
}
