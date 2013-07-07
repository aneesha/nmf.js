// Javascript implementation of Non-negative Matrix Factorisation
// using the Multiplicative Update Algorithm

function nmf()
{
  var maxiterations = 1000;
  var k = 2;
  var epsilon = 0.0000001;
  
  var A,W,H;
  
  A = [[1,2,3],
       [4,5,6],
       [7,3,9]]
       
  A_dim = numeric.dim(A)
  n = A_dim[0]
  m = A_dim[1]
  
  W = numeric.random([m,k]); // initialize W as random matrix
  H = numeric.random([k,n]); // initialize H as random matrix
  
  
  for (i=0; i<maxiterations; i++)
  {
    //H = H .* (W'A) ./ (W'WH + epsilon);
    H = numeric.div(numeric.mul(H,(numeric.dot(numeric.transpose(W),A)),(numeric.dot(numeric.dot(numeric.transpose(W),W),H)) + epsilon));
    //W = W .* (AH' ) ./ (WHH' + epsilon);
    W = numeric.div(numeric.mul(W,numeric.dot(A,numeric.transpose(H))),(numeric.dot(numeric.dot(W,H),numeric.transpose(H)) + epsilon));
  }
  
}
