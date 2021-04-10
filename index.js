/*index.js

	module "@garypeterson/common-tools"
	
*/

//==================================================================

class CommonTools {
	
	static coercePrintable(object) {
		if (object === undefined) return 'undefined';
		if (object === null) return 'null';	
		return object;
	}
	
	static prn(anObject) {
		const object = CommonTools.coercePrintable(anObject);
		let str = object.toString();
		if (str === '[object Object]')
			 str = JSON.stringify(object);
		console.log(str);
	}
	
	static p(object) {
		//alias
		return this.prn(object);
	}

}

//=============================================

const prn = (object) => CommonTools.prn(object);
const p = (object) => CommonTools.p(object);

//=============================================

// p(10);
// p('foo');
// p({w: 10});
// p([10, 20, 30]);
// p(null);
// p(undefined);

exports.CommonTools = CommonTools;
exports.prn = prn;
exports.p = p;