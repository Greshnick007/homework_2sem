'use strict';

export default class Timer {
  constructor (sec) {
    this.secs = sec;
  }
  
  
  get start() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.secs*1000);
      }, this.secs*1000);
  })
  }
}