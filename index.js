/*index.js

	module "@garypeterson/common-tools"
	
*/

//==================================================================

class CommonTools {
	
	static prn(object) {
		//
		if (object === undefined) return 'undefined';
		if (object === null) return 'null';		
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

// CommonTools.p(10);
// CommonTools.p('foo');
// CommonTools.p({w: 10});
// CommonTools.p([10, 20, 30]);

exports.CommonTools = CommonTools;
exports.prn = CommonTools.prn;
exports.p = CommonTools.prn;