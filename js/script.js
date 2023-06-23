// Accordion 

function accTrigger(accTrigger, accItem) {
    const trigger = document.getElementById(accTrigger);
    const item = document.getElementById(accItem);

    trigger.addEventListener('click', function() {
        item.classList.toggle('hidden');
    })

    // if(trigger) {
    //     console.log('Hello World');      
    // }
}