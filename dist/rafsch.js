'use strict';

var createScheduler = function () {
  var scheduled = false;
  var callback = null;
  return function (f) {
    callback = f;
    if (!scheduled && callback) {
      scheduled = true;
      window.requestAnimationFrame(function () {
        scheduled = false;
        callback && callback();
        callback = null;
      });
    }
  };
};

module.exports = createScheduler;
