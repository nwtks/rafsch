function scheduler() {
  let scheduled = false
  let callback = null
  return f => {
    callback = f
    if (!scheduled) {
      scheduled = true
      window.requestAnimationFrame(() => {
        scheduled = false
        if (callback) {
          callback()
        }
        callback = null
      })
    }
  }
}

export default scheduler
