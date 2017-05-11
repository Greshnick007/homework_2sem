'use strict';

import Timer from './timer';

let t = new Timer(5);
t.start.then(x=>document.title=x);