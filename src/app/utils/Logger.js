export default class Logger {

    static debug(label, data) {
        console.log(`%cDEBUG - ${label}: `, 'color: black; font-weight: bold;', data);
    }
  
    static info(label, data) {
        console.log(`%cINFO - ${label}: `, 'color: green; font-weight: bold;', data);
    }
  
    static warn(label, data) {
        console.log(`%cWARN - ${label}: `, 'color: yellow; font-weight: bold;', data);
    }
  
    static error(label, data) {
        console.log(`%cERROR - ${label}: `, 'color: red; font-weight: bold;', data);
    }

}
