var add = function (a, b) {
    return a + b;
};
var exampleFunction = function (a) { return function (b) {
    var sum = a + b;
    console.log("Hello World!" + sum);
    return 1;
}; };
console.log(exampleFunction(2)(3));
console.log(add(3, 45));
