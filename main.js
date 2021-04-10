
const prn = require('./index').prn;

prn(10);
prn('foo');
prn({w: 10});
prn([10, 20, 30]);
prn(null);
prn(undefined);