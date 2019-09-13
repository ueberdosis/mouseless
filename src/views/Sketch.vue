<template>
  <div>
    <h1>
      Sketch
    </h1>
    <pre>{{ keybindings }}</pre>
  </div>
</template>

<script>
import Mousetrap from 'mousetrap'
import 'mousetrap/plugins/record/mousetrap-record'
import keybindings from '@/library/sketch.json'

export default {
  data() {
    return {
      keybindings,
    }
  },

  mounted() {
    Mousetrap.bind('4', () => { console.log('4') })
    Mousetrap.bind('?', () => { console.log('show shortcuts!') })
    Mousetrap.bind('esc', () => { console.log('escape') }, 'keyup')

    // combinations
    Mousetrap.bind('command+shift+k', () => { console.log('command shift k') })

    // map multiple combinations to the same callback
    Mousetrap.bind(['command+k', 'ctrl+k'], () => {
      console.log('command k or control k')

      // return false to prevent default browser behavior
      // and stop event from bubbling
      return false
    })

    // gmail style sequences
    Mousetrap.bind('g i', () => { console.log('go to inbox') })
    Mousetrap.bind('* a', () => { console.log('select all') })

    // konami code!
    Mousetrap.bind('up up down down left right left right b a enter', () => {
      console.log('konami code')
    })

    Mousetrap.record(sequence => {
      // sequence is an array like ['ctrl+k', 'c']
      console.log(`You pressed: ${sequence.join(' ')}`)
    })
  },
}
</script>
