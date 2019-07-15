window.addEventListener("load",() => {

    const sounds = document.querySelectorAll(".sound");
    const pads =document.querySelectorAll(".pads div");
    const visual =document.querySelector(".visual");
    const colors = [
        "#ce93d8",
        "#90caf9",
        "#4db6ac",
        "#ba68c8",
        "#f06292",
        "#8bc34a"

    ];
    // console.log(sounds[4]);
    
    
    
    // get  going with the sounds 
    pads.forEach( (pad ,index) => {
        pad.addEventListener("click",function(){

             //reset the current time to play again when click
            
            sounds[index].currentTime = 0;
            sounds[index].play();
            
            createBubbles(index);
            
        });

    });

    //create a fuction that makes bubbles 

    const createBubbles = (index) => {

        const bubble =document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor =colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        });
    };


});