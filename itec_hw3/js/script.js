


// part 1
document.getElementById("computeForce").addEventListener("click", computeForce);
document.getElementById("computeAvgVelocity").addEventListener("click", computeAvgVelocity);
document.getElementById("computeQuadratic").addEventListener("click", computeQuadratic);
document.getElementById("computeAnnuity").addEventListener("click", computePresentValue);


function computeForce() {
    console.log("Running computeForce");
    let mass = document.getElementById("inputMass").value;
    let acceleration = document.getElementById("inputAcceleration").value;


    let force = mass * acceleration;

    document.getElementById("displayForce").innerHTML = "Force is " + force + " Newtons."; //using the formula provided; testing by hand nets the same result.

}


// part 2
function computeAvgVelocity() {
    console.log("Running computeAvgVelocity");
    let initialVelocity = document.getElementById("initialVelocity").value;
    let time = document.getElementById("inputTime").value;
    let acceleration = document.getElementById("inputAcceleration1").value;
    timeSquared = Math.pow(time , 2);

    let displacement = (initialVelocity * time) - (1/2) * (acceleration * timeSquared); //using the formula provided; solving by hand nets the same result

    document.getElementById("displayAvgVelocity").innerHTML = "Average Velocity " + displacement;

}


// part 3
function computeQuadratic() {
    console.log("Running computeQuadratic");
    let a = document.getElementById("inputA").value;
    let b = document.getElementById("inputB").value;
    let c = document.getElementById("inputC").value;

    console.log(a);
    console.log(b);
    console.log(c);

    let bSquared = Math.pow(b,2);
    let fourAC = 4 * a * c;
    let termUnderSqrRoot = Math.abs(bSquared - fourAC);
    let negativeB = Math.abs(b) * - 1;
    let squareRoot = Math.sqrt(termUnderSqrRoot);
    let numerator1 = negativeB - squareRoot;
    let numerator2 = negativeB + squareRoot;
    let denominator = 2*a;

    console.log(bSquared);
    console.log(fourAC);
    console.log(termUnderSqrRoot);                        //console.log used to verify if values are correct at specific points in script.
    console.log(negativeB);
    console.log(squareRoot);
    console.log(numerator1);
    console.log(numerator2);
    console.log(denominator);


    let solution1 = numerator1/denominator;

    console.log(solution1);

    let solution2 = numerator2/denominator;

    console.log(solution2);

    document.getElementById("displayQuadratic").innerHTML = "Solutions to Quadratic Formula are " + solution1 + " and " + solution2; //using the formula provided; solving by hand nets the same result


}

// part 4
function computePresentValue() {
  let pmt=document.getElementById("inputPMT").value;
  let r =document.getElementById("inputR").value;
  let n =document.getElementById("inputN").value;

  let onePlusRToThePowerOfN = Math.pow((1+r),n);
  let oneOverOnePlusRToThePowerOfN = 1/onePlusRToThePowerOfN;
  let numerator = 1 - oneOverOnePlusRToThePowerOfN;
  let term2 = numerator/r;

  let solution = pmt * term2;                                                   

  document.getElementById("displayAnnuity").innerHTML = "Present Value is $" + solution;

}
