<script>
export default {
  functional: true,

  props: {
    name: {
      type: String,
      default: '',
    },

    size: {
      type: String,
      default: 'normal',
    },
  },

  render(createElement, { props }) {
    let svgHTML = ''
    try {
      svgHTML = require(`!html-loader!@/assets/icons/${props.name}.svg`)
    } catch (e) {
      console.warn(`Unable to load "icon-${props.name}.svg" icon. Verify it exists in the icons directory.`, e)
    }
    return createElement(
      'div',
      {
        class: `icon icon--${props.size}`,
        domProps: {
          innerHTML: svgHTML,
        },
      },
    )
  },
}
</script>

<style lang="scss" src="./style.scss" ></style>
