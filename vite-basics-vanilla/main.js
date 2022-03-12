const modules = import.meta.globEager('./glob/*[1].*')

// console.log(modules)
Object.entries(modules).forEach(([key, value]) => {
  console.log(key, value.default)

  // value().then(module => {
  //   console.log(key, module.default)
  // })
})
