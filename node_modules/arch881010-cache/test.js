const Cache = require('./rewrite.js');
function fail(name) {
    fails.push(name);
    passedCases = passedCases-1;
}
var fails = [];
console.log(Cache);
const testCases = ["newCache();","add();","delete();","update();", "clear();"];
var passedCases = testCases.length;
try{
    Cache.newCache("test");
} catch(err) {
    console.log(err);
    console.log("Failed to create a new Cache, and its required for all test cases!");
    return;
}

try{
    Cache.add("key","test");
} catch(err) {
    fail("add();");
}

try{
    Cache.delete('key');
} catch (err) {
    fail("delete();")
}

try{
    Cache.add("Test","Value");
} catch(err) {
    fail("add();");
}

try{
    Cache.update("Test","X");
} catch(err) {
    fail("update();");
}

try{
    Cache.delete("Test");
} catch(err) {
    fail("delete();");
    console.log(err);
}
try {
Cache.clear("test");
} catch (err) {
    fail("clear();");
}
console.log(`Test cases run/passed: ${passedCases}/${testCases.length}.`);
if(fails.length !=0) {
    console.log(`Issues: "${fails}"`)
}