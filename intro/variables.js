
/*
  Variables Intro
  - What Is Variable ?
  - Why We Use Variables ?
  - Declare A Variable And Use
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  - Variable Without Var
  - Multiple Variables In The Same Line
  - Id And Global Variable
  - Loosely Typed vs Strongly Typed

  */

  /*
  Identifiers
  - Name Conventions And Rules (camelCase)
  - Reserved Words
*/

var userName = "me" , age= 12;
console.log(userName + " " +age);


/*
  Var
  - Redeclare (Yes) =====================
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/

var a = 1; // you can 
var a = 2; // you can 

window.a = 3;

console.log(a);








