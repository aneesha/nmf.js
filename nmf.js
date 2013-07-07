// Javascript implementation of Non-negative Matrix Factorisation
// using the Multiplicative Update Algorithm

function nmf()
{
  var maxiterations = 5;
  var k = 2;
  var epsilon = 0.0001;
  var tolerance = 0.01;
  var m,n;
  
  var A,W,H;
  
  A = [[1,1,0,0],
       [1,1,0,0],
       [0,0,1,1],
       [0,0,1,1]];
       
  A_dim = numeric.dim(A)
  m = A_dim[0]
  n = A_dim[1]
  
  W = numeric.random([m,k]); // initialize W as random matrix
  H = numeric.random([k,n]); // initialize H as random matrix
    
  for (i=0; i<maxiterations; i++)
  {
    //H = H .* (W'A) ./ (W'WH + epsilon);
    H = numeric.div(numeric.mul(H,(numeric.dot(numeric.transpose(W),A))),(numeric.add(numeric.dot(numeric.dot(numeric.transpose(W),W),H),epsilon)));
    //W = W .* (AH' ) ./ (WHH' + epsilon);
    W = numeric.div(numeric.mul(W,numeric.dot(A,numeric.transpose(H))),(numeric.add(numeric.dot(numeric.dot(W,H),numeric.transpose(H)),epsilon)));
  }
  
  A_reconstructed = numeric.dot(W,H);
  
  //alert(numeric.prettyPrint(W));
  
  //alert(numeric.prettyPrint(H));
  
  alert(numeric.prettyPrint(A_reconstructed));
  
  alert(calculate_reconstructionError(A, A_reconstructed))
  
}

function calculate_reconstructionError(A, A_reconstructed)
{
  return numeric.norm2(numeric.sub(A,A_reconstructed));
}
