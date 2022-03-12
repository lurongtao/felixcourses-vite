import './count.js'

import { foo } from './foo.js'

foo()

console.log('main module.')

if (import.meta.hot) {
  import.meta.hot.accept('./foo', (newFoo) => {
    if (newFoo.cache.amount > 5) {
      import.meta.hot.invalidate()
    } else {
      newFoo.foo()
    }
  })
  // import.meta.hot.accept()
  import.meta.hot.decline()
}