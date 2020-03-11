// 是否开启console
const LOG_OPEN  = false

export function Log(...value) {
  if (!LOG_OPEN) {
    return
  }
  console.log(...value)
}
