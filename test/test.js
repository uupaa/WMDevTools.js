var ModuleTestWMDevelop = (function(global) {

var _runOnNode = "process" in global;
var _runOnWorker = "WorkerLocation" in global;
var _runOnBrowser = "document" in global;

return new Test("WMDevelop", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       true,
        button:     true,
        both:       true, // test the primary module and secondary module
    }).add([
        testWMDevelop_value,
        testWMDevelop_isNumber,
        testWMDevelop_isInteger,
    ]).run().clone();

function testWMDevelop_value(test, pass, miss) {

    var result = new WMDevelop(123.4).value();

    if (result === 123.4) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testWMDevelop_isNumber(test, pass, miss) {

    var result = [
            new WMDevelop(123.4).isNumber(),  // true
            new WMDevelop(123.0).isNumber()   // true
        ];

    if (!/false/.test(result.join())) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testWMDevelop_isInteger(test, pass, miss) {

    var result = [
           !new WMDevelop(123.4).isInteger(), // !false -> true
            new WMDevelop(123.0).isInteger()  // true
        ];

    if (!/false/.test(result.join())) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

})((this || 0).self || global);

