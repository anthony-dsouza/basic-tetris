let gameArea = document.querySelector(".gamearea")

let play = true

let i = 1
 
let repeat = () => {
    //// create multiple pieces

    const duration = 1000;
    let starttime = null;
    draw()
    let autoDown = (timestamp) => {
    
        if (!starttime) {
            starttime = timestamp;
        }
        
        document.onkeydown = (e) => {     
            console.log(e.key)
        
                if (e.key === "ArrowRight") {
                    // make into function?
                    undraw()
                    currentPosition += 1
                    draw() 
                }
    
                if (e.key === "ArrowLeft") {
                    // make into function?
                    undraw()
                    currentPosition -= 1
                    draw()
                }
    
                if (e.key === " ") {
                    undraw()
                    // update current
                    draw()       
                }
    
        }
    
        let runtime = timestamp - starttime;

      
        if (runtime < duration) {
            requestAnimationFrame(autoDown);
        } else {
            i++
            undraw()
            currentPosition += lineWidth
            draw()
            requestAnimationFrame(repeat)
        }
    }

    requestAnimationFrame(autoDown)


}

    

