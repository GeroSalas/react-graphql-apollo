export default class Logger {

    static debug(label, data) {
        console.log(`%c${label}: `, 'color: black; font-weight: bold;', data);
    }
  
    static info(label, data) {
        console.info(`%c${label}: `, 'color: green; font-weight: bold;', data);
    }
  
    static warn(label, data) {
        console.warn(`%c${label}: `, 'color: yellow; font-weight: bold;', data);
    }
  
    static error(label, data) {
        console.error(`%c${label}: `, 'color: red; font-weight: bold;', data);
    }

}
