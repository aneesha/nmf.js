"use strict";

// Javascript implementation of Non-negative Matrix Factorisation Algorithms

var nmf = (typeof exports === "undefined")?(function nmf() {}):(exports);
if(typeof global !== "undefined") { global.nmf = nmf; }

nmf.version = "0.8";
nmf.epsilon = 0.0001;

nmf.mu = function mu(A, k, maxiterations, tolerance)
{
  // Implements Lee and Seungs Multiplicative Update Algorithm
  var W,H;
  var m,n;
       
  A_dim = numeric.dim(A)
  m = A_dim[0]
  n = A_dim[1]
  
  W = numeric.random([m,k]); // initialize W as random matrix
  H = numeric.random([k,n]); // initialize H as random matrix
    
  for (i=0; i<maxiterations; i++)
  {
    //H = H .* (W'A) ./ (W'WH + epsilon);
    H = numeric.div(numeric.mul(H,(numeric.dot(numeric.transpose(W),A))),(numeric.add(numeric.dot(numeric.dot(numeric.transpose(W),W),H),nmf.epsilon)));
    //W = W .* (AH' ) ./ (WHH' + epsilon);
    W = numeric.div(numeric.mul(W,numeric.dot(A,numeric.transpose(H))),(numeric.add(numeric.dot(numeric.dot(W,H),numeric.transpose(H)),nmf.epsilon)));
  
    A_reconstructed = numeric.dot(W,H);
    
    if (nmf.calculate_reconstructionError <= tolerance)
    {
      break;
    }
  }
  
  return {W:W,H:H}
}

nmf.calculate_reconstructionError = function calculate_reconstructionError(A, A_reconstructed)
{
  return numeric.norm2(numeric.sub(A,A_reconstructed));
}
