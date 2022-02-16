function getAverage (a,b) {

        var average = (a + b) / 6;
        console.log(average);
        return average;

}

var myResult = getAverage(7,11);


function logResult (){

        console.log("the average is " + myResult);
}

logResult()