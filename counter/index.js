const count = document.querySelectorAll('.count');
count.forEach((count) => {
    // console.log(counter);
    count.innerHTML = 0;
    const updateCounter = () => {
        //+unary operator convert string into number or Number(str):
        const targetCount = +count.getAttribute('data-target');
        // console.log( typeof targetCount);
        const startingCount = Number(count.innerHTML);
        const increment = targetCount / 100;
        if (startingCount < targetCount) {
            count.innerHTML = `${Math.round(startingCount + increment)}`;
            setTimeout(() => {
                updateCounter();
            }, 10);
        }
        else {
            count.innerHTML = targetCount;
        }

    }
    updateCounter();
});