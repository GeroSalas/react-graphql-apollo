export default class Storage {

  static getItem(key){
    return localStorage.getItem(key);
  }

  static getObjectItem(key){
    return JSON.parse(localStorage.getItem(key));
  }

  static setItem(key, value){
    return localStorage.setItem(key, value);
  }

  static setObjectItem(key, value){
    return localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key){
    return localStorage.removeItem(key);
  }

}
