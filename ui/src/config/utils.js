export default class Utils {
  static scrollAnimation(to, callback, scrollSpeed = 10) {
    if (!callback) {
      callback = () => null;
    }
    let from = document.documentElement.scrollTop;
    let speed = 0;
    if (from < to) {
      speed = scrollSpeed;
    } else if (from > to) {
      speed = -1 * scrollSpeed;
    }
    const interval = setInterval(function() {
      if (Math.abs(from - to) > 10) {
        from = from + speed;
        document.documentElement.scrollTop = from;
      } else {
        document.documentElement.scrollTop = to;
        callback();
        clearInterval(interval);
      }
    }, 5);
  }
}