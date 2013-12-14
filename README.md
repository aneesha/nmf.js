nmf.js
======

Implementation of Non-negative Matrix Factorization in Javascript. This is a rather ambitious project and relies on the numeric.js library for linear algebra support. 

Simple usage:

  var maxiterations = 20;
  
  var k = 2;
  
  var tolerance = 0.001;
  
  var A;
  
  
  
  A = [[1,1,0,0],
       [1,1,0,0],
       [0,0,1,1],
       [0,0,1,1]];
  
  
  nmf_factorized = nmf.mu(A, k, maxiterations, tolerance);
  
  alert(numeric.prettyPrint(nmf_factorized.W));
  
  alert(numeric.prettyPrint(nmf_factorized.H));
