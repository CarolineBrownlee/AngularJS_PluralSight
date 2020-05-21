var result = 5 + 5;
 
alert(result);

// functions as abstrations
var work = function(){
    console.log("working hard!")
}

work()

var doWork = function(f) {
    console.log("starting");

    try {
        f();
    }
    catch(ex){
        console.log(ex);
    }
    console.log("end");
}

doWork(work);

// This is called an iife, or immediatly invoked function expression, which gets rid of global variables
(function(){
// functions to build modules
// has data and methods
// function to create a worker object we can invoke methods on
var createWorker = function (){
    var workCount = 0;
    // implementation details
    var task1 = function() {
        workCount += 1;
        console.log("task1" + " " + workCount);
    };
    var task2 = function(){
        workCount += 1;
        console.log("task2" + " " + workCount);
    };
    // return an object to be exposed to the outside world
    return {
            job1: task1,
            job2: task2
        };
}


// create worker object
var worker = createWorker();
// worker object has two methods on it 
worker.job1();
worker.job2();
worker.job1();
worker.job2();
}());

// output: 
// gettingStarted.js:7 working hard!
// gettingStarted.js:13 starting
// gettingStarted.js:7 working hard!
// gettingStarted.js:21 end
// gettingStarted.js:34 task11
// gettingStarted.js:38 task22
// gettingStarted.js:34 task13
// gettingStarted.js:38 task24

