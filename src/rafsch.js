const createScheduler = () => {
  let scheduled = false;
  let callback = null;
  return (f) => {
    callback = f;
    if (!scheduled && callback) {
      scheduled = true;
      window.requestAnimationFrame(() => {
        scheduled = false;
        callback && callback();
        callback = null;
      });
    }
  };
};

export default createScheduler;
