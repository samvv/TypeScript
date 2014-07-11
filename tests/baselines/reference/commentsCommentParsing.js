//// [commentsCommentParsing.ts]

/// This is simple /// comments
function simple() {
}

simple();

/// multiLine /// Comments
/// This is example of multiline /// comments
/// Another multiLine
function multiLine() {
}
multiLine();

/** this is eg of single line jsdoc style comment */
function jsDocSingleLine() {
}
jsDocSingleLine();


/** this is multiple line jsdoc stule comment
*New line1
*New Line2*/
function jsDocMultiLine() {
}
jsDocMultiLine();

/** this is multiple line jsdoc stule comment
*New line1
*New Line2*/
/** Shoul mege this line as well
* and this too*/ /** Another this one too*/
function jsDocMultiLineMerge() {
}
jsDocMultiLineMerge();


/// Triple slash comment
/** jsdoc comment */
function jsDocMixedComments1() {
}
jsDocMixedComments1();

/// Triple slash comment
/** jsdoc comment */ /*** another jsDocComment*/
function jsDocMixedComments2() {
}
jsDocMixedComments2();

/** jsdoc comment */ /*** another jsDocComment*/
/// Triple slash comment
function jsDocMixedComments3() {
}
jsDocMixedComments3();

/** jsdoc comment */ /*** another jsDocComment*/
/// Triple slash comment
/// Triple slash comment 2
function jsDocMixedComments4() {
}
jsDocMixedComments4();

/// Triple slash comment 1
/** jsdoc comment */ /*** another jsDocComment*/
/// Triple slash comment
/// Triple slash comment 2
function jsDocMixedComments5() {
}
jsDocMixedComments5();

/*** another jsDocComment*/
/// Triple slash comment 1
/// Triple slash comment
/// Triple slash comment 2
/** jsdoc comment */
function jsDocMixedComments6() {
}
jsDocMixedComments6();

// This shoulnot be help comment
function noHelpComment1() {
}
noHelpComment1();

/* This shoulnot be help comment */
function noHelpComment2() {
}
noHelpComment2();

function noHelpComment3() {
}
noHelpComment3();
/** Adds two integers and returns the result
  * @param {number} a first number
  * @param b second number
  */
function sum(a: number, b: number) {
    return a + b;
}
sum(10, 20);
/** This is multiplication function*/
/** @param */
/** @param a first number*/
/** @param b */
/** @param c {
 @param d @anotherTag*/
/** @param e LastParam @anotherTag*/
function multiply(a: number, b: number, c?: number, d?, e?) {
}
/** fn f1 with number
* @param { string} b about b
*/
function f1(a: number);
function f1(b: string);
/**@param opt optional parameter*/
function f1(aOrb, opt?) {
    return aOrb;
}
/** This is subtract function
@param { a
*@param { number | } b this is about b
@param { { () => string; } } c this is optional param c
@param { { () => string; } d this is optional param d
@param { { () => string; } } e this is optional param e
@param { { { () => string; } } f this is optional param f
*/
function subtract(a: number, b: number, c?: () => string, d?: () => string, e?: () => string, f?: () => string) {
}
/** this is square function
@paramTag { number } a this is input number of paramTag
@param { number } a this is input number
@returnType { number } it is return type
*/
function square(a: number) {
    return a * a;
}
/** this is divide function
@param { number} a this is a
@paramTag { number } g this is optional param g
@param { number} b this is b
*/
function divide(a: number, b: number) {
}
/** this is jsdoc style function with param tag as well as inline parameter help
*@param a it is first parameter
*@param c it is third parameter
*/
function jsDocParamTest(/** this is inline comment for a */a: number, /** this is inline comment for b*/ b: number, c: number, d: number) {
    return a + b + c + d;
}

/**/
class NoQuickInfoClass {
}

//// [commentsCommentParsing.js]
function simple() {
}
simple();
function multiLine() {
}
multiLine();
function jsDocSingleLine() {
}
jsDocSingleLine();
function jsDocMultiLine() {
}
jsDocMultiLine();
function jsDocMultiLineMerge() {
}
jsDocMultiLineMerge();
function jsDocMixedComments1() {
}
jsDocMixedComments1();
function jsDocMixedComments2() {
}
jsDocMixedComments2();
function jsDocMixedComments3() {
}
jsDocMixedComments3();
function jsDocMixedComments4() {
}
jsDocMixedComments4();
function jsDocMixedComments5() {
}
jsDocMixedComments5();
function jsDocMixedComments6() {
}
jsDocMixedComments6();
function noHelpComment1() {
}
noHelpComment1();
function noHelpComment2() {
}
noHelpComment2();
function noHelpComment3() {
}
noHelpComment3();
function sum(a, b) {
    return a + b;
}
sum(10, 20);
function multiply(a, b, c, d, e) {
}
function f1(aOrb, opt) {
    return aOrb;
}
function subtract(a, b, c, d, e, f) {
}
function square(a) {
    return a * a;
}
function divide(a, b) {
}
function jsDocParamTest(a, b, c, d) {
    return a + b + c + d;
}
var NoQuickInfoClass = (function () {
    function NoQuickInfoClass() {
    }
    return NoQuickInfoClass;
})();


//// [commentsCommentParsing.d.ts]
declare function simple(): void;
declare function multiLine(): void;
declare function jsDocSingleLine(): void;
declare function jsDocMultiLine(): void;
declare function jsDocMultiLineMerge(): void;
declare function jsDocMixedComments1(): void;
declare function jsDocMixedComments2(): void;
declare function jsDocMixedComments3(): void;
declare function jsDocMixedComments4(): void;
declare function jsDocMixedComments5(): void;
declare function jsDocMixedComments6(): void;
declare function noHelpComment1(): void;
declare function noHelpComment2(): void;
declare function noHelpComment3(): void;
declare function sum(a: number, b: number): number;
declare function multiply(a: number, b: number, c?: number, d?: any, e?: any): void;
declare function f1(a: number): any;
declare function f1(b: string): any;
declare function subtract(a: number, b: number, c?: () => string, d?: () => string, e?: () => string, f?: () => string): void;
declare function square(a: number): number;
declare function divide(a: number, b: number): void;
declare function jsDocParamTest(a: number, b: number, c: number, d: number): number;
declare class NoQuickInfoClass {
}
