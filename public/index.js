async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    const refreshButton = document.querySelector('#refresh-button')

    let response = await fetch('http://localhost:9001/counter')
    let parsedResponse = await response.json()
    console.log(parsedResponse)
    let countValue = parsedResponse.value;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    function refresh(){
        countValue = parsedResponse.value;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    refreshButton.addEventListener('click', refresh)
    countContainer.textContent = countValue;
}
main()