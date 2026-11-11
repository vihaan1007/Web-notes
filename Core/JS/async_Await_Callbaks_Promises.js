//Synchronous: everything done till now. Each instruction waits for the previous one. which can break the flow.
//Asynchronous: execute next instructions immediately and dosent break the flow.
//Timeout
console.log("before");

setTimeout(() => {
    console.log("hello");
}, 4000); //takes a callback and a interval in ms. It runs the callback after that interval.

console.log("after");

//Callbacks: a function passed as a argument to another function. they are not passed as a argument with ().

//Callback hell: Nested callbacks stacked below one another forming a pyramid structure (Pyramid of Doom). This style of proggraming becomes difficult to understand and manage. nesting means one in another. EX- make a pyramid of doom.
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}
getData(1, () => {
    //it needs a callback
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
}); //2s delay on all data. but it is very complex to see.

//Promises: it is for "eventual" completion of task. It is an object in JS. It is a solution to callback hell.
let promise1 = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("Your work is done"); //work is done
    //they are given by JS.
});
//promise has three states:
//pending: work is neither done nor rejected. settled
//fulfilled: work is done. not settled
//rejected: work is not done or rejected. settled
//value: if pending then it is undefined, if resolve then the message inside resolve function. if rejeted the nthe message is inside reject function.

function pGetData(dataId, getNextData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}
/*
let cpromise = pGetData(1);
console.log(cpromise);
; do in console*/

//methods
//.then(callback) exicutes when the promise is fulfilled
//.catch(callback) exicutes when the promise is rejected
let promi = new Promise((resolve, reject) => {
    let a = Math.random();
    a = Math.round(a);
    if (a === 0) {
        reject("error");
    } else if (a === 1) {
        resolve("success");
    }
});

promi.then((res) => {
    //res is the message which came in resolve();
    console.log("Your promise is fulfilled with a message: ", res);
});

promi.catch((err) => {
    //err is the message which came in reject();
    console.log("The promise is rejected with a error message: ", err);
});

//Promise chaining
function asyncFunc1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 2000);
    });
}

function asyncFunc2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("some data2");
            resolve("success");
        }, 2000);
    });
}

function asyncFunc3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("some data3");
            resolve("success");
        }, 2000);
    });
}

console.log("fetching data1...");
asyncFunc1()
    .then((res) => {
        console.log(res);
        console.log("fetching data2...");
        return asyncFunc2();
    })
    .then((res) => {
        console.log(res);
        console.log("fetching data3...");
        return asyncFunc3();
    })
    .then((res) => {
        console.log(res);
        console.log("Done");
    });
//looks bad but better.

//solve callback hell with this
pGetData(1)
    .then((res) => {
        return pGetData(2);
    })
    .then((res) => {
        return pGetData(3);
    })
    .then((res) => {
        pGetData(4);
        console.log("Done");
    });
////It is a step up to the callback hell problem

//Async Await: they are keywords
//async is a keyword to add before functions. it's function always returns a promise.
//await is a keyword to add before async functions calls. it pauses the execution of its surrounding async functions until the promise is settled.

//Solve callback hell once and for all.
async function getAllData() {
    console.log("getting data1...");
    await pGetData(1);

    console.log("getting data2...");
    await pGetData(2);

    console.log("getting data3...");
    await pGetData(3);

    console.log("getting data4...");
    await pGetData(4);
}//looks very clean then the ones before

//IIFE: Immediately Invoked Function Expression
//IIFE is a function that is immediately called when defined. It dosent have a name and is written in (). and a () to call it right away.
(function () {
    console.log("hello");
})();