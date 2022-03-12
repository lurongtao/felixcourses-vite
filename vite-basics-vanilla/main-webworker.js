// const worker = new Worker('./worker.js')
import MyWorker from './worker?worker'
const worker = new MyWorker()

worker.onmessage = function (ev) {
  console.log(ev.data)
}
