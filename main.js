  
var canvas = document.querySelector('canvas'),
c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var grid = new Array(100)
 
for (var i = 0; i < grid.length; i ++) {
    grid[i] = new Array(100)
}
 
for (var y = 0; y < grid.length; y ++) {
    for (var x = 0; x < grid.length; x ++) {
        grid[y][x] = 0;
    }
}
//c.rect(200, 200, 100, 100)
//c.fill()


function check() {
    for (var y = 0; y < grid.length; y ++) {
    for (var x = 0; x < grid.length; x ++) {
        if (grid[y][x] == 0) {
        c.fillStyle = "white"
        c.fillRect(x * 8, y * 8, 8, 8)
        } if (grid[y][x] == 1) {
            c.fillStyle = "black"
        c.fillRect(x * 8, y * 8, 8, 8)
        }
        if (grid[y][x] == 2) {
            c.fillStyle = "black"
        c.fillRect(x * 8, y * 8, 8, 8)
        } 
        if (grid[y][x] == 3) {
            c.fillStyle = "Red"
        c.fillRect(x * 8, y * 8, 8, 8)
        }
    }
}
}


var a = 0
main()
function main(){
    a++
    requestAnimationFrame(main)
    check()
    Shapes()
    Win()
    if (a % 15 == 1) {       
     }
   }


for( var i = 0; i < 100; i++ ) {
    grid[33][i] = 1
    grid[66][i] = 1
    grid[i][33] = 1
    grid[i][66] = 1

}

var mouseX = 0
var mouseY = 0

window.addEventListener('mousedown', mouse , false)


document.addEventListener('mousemove', (event) => {	
    mouseY = Math.floor ( event.clientY/8 )
    mouseX = Math.floor ( event.clientX/8 )
    if    (event.buttons = 1) {
    
    
    }
});

var Color = 2
var ChangeColor = true 

function mouse() {

     ChangeColor = false

    if( mouseY < 33 && mouseX  < 33 ) {    
        if (grid[16][16] == 0 ) {
            grid[16][16] = [Color]
            ChangeColor = true
         

        }
    }
    else if( mouseY > 33 && mouseY < 66 && mouseX  > 33 && mouseX  < 66  ) {
        if (grid[50][50] == 0 ) {
        grid[50][50] = [Color]
         ChangeColor = true
        }
    }
    else if( mouseY > 66 && mouseX  > 66  ) {
        if (grid[83][83] == 0 ) {
        grid[83][83] = [Color]
         ChangeColor = true
        }
    }
    else if( mouseY < 33 && mouseX  > 33 && mouseX  < 66  ) {
        if (grid[16][50] == 0 ) {
        grid[16][50] = [Color]
         ChangeColor = true
        }
    }
    else if( mouseY > 33 && mouseY < 66 && mouseX  < 33 ) {
        if (grid[50][16] == 0 ) {
        grid[50][16] = [Color]
         ChangeColor = true
        }
    }
    else if( mouseY < 33 && mouseX  > 66 ) {
        if (grid[16][83] == 0 ) {
        grid[16][83] = [Color]
         ChangeColor = true
        }
    }
    else if( mouseY > 33 && mouseY < 66 && mouseX  > 66 ) {
        if (grid[50][83] == 0 ) {
        grid[50][83] = [Color]
         ChangeColor = true
        }
    }
    else if( mouseY > 66 && mouseX  < 33 ) {
        if (grid[83][16] == 0 ) {
        grid[83][16] = [Color]
         ChangeColor = true
        }
    }
    else if( mouseY > 66 && mouseX  > 33 && mouseX  < 66 ) {
        if (grid[83][50] == 0 ) {
        grid[83][50] = [Color]
         ChangeColor = true
        }
    }

    if( ChangeColor == true ) {
         if ( Color == 2 ) {
         Color = 3
         }
         else {
         Color = 2
        }
    }
    
}

function Shapes() {
    for (var y = 0; y < grid.length; y ++) {
        for (var x = 0; x < grid.length; x ++) {
            if (grid[y][x] == 2) {               
                c.beginPath()
                c.arc( x*8, y*8, 50, 0, 2 * Math.PI)
                c.lineWidth = 3
                c.fillStyle = "black"
                c.fill()

            }
             if (grid[y][x] == 3) {
                c.beginPath()
                c.moveTo(x * 8 - 20, y * 8 - 20)
                c.lineTo(x * 8 + 27, y * 8 + 27)
                c.strokeStyle = "red"
                c.lineWidth = 20
                c.stroke()
                c.beginPath()
                c.moveTo(x * 8 + 20, y * 8 - 20)
                c.lineTo(x * 8 - 27, y * 8 + 27)
                c.strokeStyle = "red"
                c.lineWidth = 20
                c.stroke()
            } 
        }
    }
}


function Win() {
    for (var y = 0; y < grid.length; y ++) {
        for (var x = 0; x < grid.length; x ++) {
            if (grid[y][x] == 2) {            
                if (grid[y+33][x+33] == 2) {
                    if (grid[y+66][x+66] == 2) {
                        console.log('hi')



                    }   
                }   
            }
             
            
            
            
            if (grid[y][x] == 3) {
                
            } 
        }
    }
}