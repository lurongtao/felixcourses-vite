import init from "./math.wasm";

init().then((exports) => {
  console.log(exports.add(4, 5));
});
