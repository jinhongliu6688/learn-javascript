const waitOneSecond = () => {
    return new Promise(resolve => {
        setTimeout(() => {
        }, 1_000);
        return resolve()
    });
}

// Sample usage - do not modify
waitOneSecond().then(() => {
    console.log("Done waiting.");
});
