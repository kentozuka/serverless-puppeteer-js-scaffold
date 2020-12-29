module.exports.memories = process.memoryUsage()

module.exports.memoriesInMB = () => {
  const copy = {}
  for (const [key, value] of Object.entries(this.memories)) {
    copy[key] = calc(value)
  }
  return copy
}

function calc (x) {
  return `${Math.round(x / 1024 / 1024 * 100) / 100} MB`
}
