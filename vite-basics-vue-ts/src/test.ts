import { Person } from './types'

import fu from './assets/fu.svg'

declare const enum Age {
  age1 = 18,
  age2 = 19
}

let person: Person = {
  name: 'felix',
  age: 18
}

export {
  person,
  // Person
}