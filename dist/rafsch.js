'use strict';

var requestAnimationFrame = window.requestAnimationFrame;

function scheduler() {
  var scheduled = false;
  var callback = null;
  return function (f) {
    callback = f;
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(function () {
        scheduled = false;
        if (callback) {
          callback();
        }
        callback = null;
      });
    }
  }
}

module.exports = scheduler;
