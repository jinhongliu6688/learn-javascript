const failedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 500);
    });
}

const init = async () => {
    try {
        const result = await failedPromise();
        console.log("You will never see me");
    } catch (error) {
        console.log("There was an error");
        console.log(error);
    }
}

// Sample usage - do not modify
init();
