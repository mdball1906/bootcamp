function myLoad(){
    let myClock = document.querySelector('#clock');
    let myB = document.querySelector('body');
    let count = 0
    function moveMe(){
        count += 50;
        myClock.style.left= `${count}px`;
        console.log(count);
    }
    myClock.addEventListener('click', moveMe);
    myB.addEventListener('hover', alert('Test'));
}



