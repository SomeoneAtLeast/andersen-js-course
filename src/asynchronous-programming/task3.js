const delay = ms => {
    return (
        new Promise(resolve => {
            setTimeout(resolve, ms, 100);
        })
    )
};

delay(1000).then(value => console.log('Done with ' + value));