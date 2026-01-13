async function task() {
    await new Promise(()=>{
        console.log("TAsk 1")
    },3000)

    await new Promise(r => setTimeout(r, 5000));
    console.log("Task 2 done");

    await new Promise(r => setTimeout(r, 1000));
    console.log("Task 3 done");
}

task();



// You created two different async functions