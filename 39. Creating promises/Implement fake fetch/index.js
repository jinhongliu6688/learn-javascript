const fakeFetch = () => {
    // TODO: implement fake fetch
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                        departed: false,
                        delayed: true
                    })
        }, 1_000)
    })
}

// Sample usage - do not modify
fakeFetch().then((data) => {
    console.log(data);
});
