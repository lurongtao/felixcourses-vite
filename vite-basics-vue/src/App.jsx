import { defineComponent } from 'vue'
import '@styles/index.css'
// import '@styles/sass-test.scss'
// import '@styles/less-test.less'
// import '@styles/stylus-test.stylus'

import { titleSize } from '@styles/example.module.css'

// import logo from './assets/logo.png?url'
// import main from './main.js?raw'
const imgUrl = new URL('./assets/logo.png', import.meta.url).href
// import style from '/style.css'

// console.log(logo)
// console.log(main)

const Test = defineComponent({
  render() {
    return (
      <div class={`title ${titleSize}`}>
        hello vite jsx component
        <span>!!!</span>
        <img src={imgUrl} alt="" />
      </div>
    )
  }
})

export {
  Test
}