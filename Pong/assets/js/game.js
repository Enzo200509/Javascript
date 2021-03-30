class Game
{
    constructor() {

        let lastTime;
        const callback = (miliseconds) => {
            if(lastTime){
                this.update( (miliseconds - lastTime) / 1000 );
                this.draw();
            }
            lastTime = miliseconds;
            window.requestAnimFrame(callback)
        }
        callback();

    }


    update(deltatime){
    }

    draw(){
    }

}