export default class Cache {
  static login() {
    localStorage.setItem('user','logined');
  }
  static isLogin() {
    const data = localStorage.getItem('user');
    if (!data) {
      return 'loginout';
    } else {
      return data;
    }
  }
  static loginOut() {
    localStorage.setItem('user', 'loginout');
  }
}