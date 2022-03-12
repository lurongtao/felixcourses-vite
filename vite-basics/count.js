export const count = 1

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    console.log(newModule.count)
  })
}
