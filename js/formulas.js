// Find the surface area of a donut shape, also known as a Torus or Tori for multiple.
function surfaceAreaOfDonut(r1, r2) {
    var surfaceArea = 4 * Math.pow(Math.PI, 2) * r1 * r2;
    var surfaceAreaRounded = surfaceArea.toFixed(2);
    console.log("Surface area equals " + surfaceAreaRounded);
}

// Find the volume of a donut shape, also known as a Torus or Tori for multiple.
function volumeOfDonut(r1, r2) {
    var volume = 2 * Math.pow(Math.PI, 2) * r1 * Math.pow(r2, 2);
    var volumeRounded = volume.toFixed(2);
    console.log("Volume equals " + volumeRounded);
}