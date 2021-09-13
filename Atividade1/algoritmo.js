// Samantha Dantas Medeiros (13/09/2021)
class Canvas {
    constructor(canvas_id) {
        this.canvas = document.getElementById(canvas_id);
        this.context = this.canvas.getContext("2d");
        this.clear_color = 'rgba(0,0,0,255)';
    }
    clear() {
        this.context.fillStyle = this.clear_color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    putPixel(x, y, color) {
        this.context.fillStyle = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
        this.context.fillRect(x, (this.canvas.height - 1) - y, 1, 1);
    }
} 
let color_buffer = new Canvas("canvas");
color_buffer.clear();

//----------------------- Implementando funções (https://codepen.io/ICG-UFPB/pen/oNWaQjM)
function MidPointLineAlgorithm(x0, y0, x1, y1, color_0, color_1) {
    var dx = x1 - x0; // delta x
    var dy = y1 - y0; // delta y
    var d; // variavel de decisão
    var i; // para utilizar no laço for
    // incremento, auxiliar
    var ix = 1; 
    var iy = 1;
    

    // verificando o resultado da variação das coordenadas x e y
    if (dx < 0) {
        ix = -ix;
    }
    if (dy < 0) {
        iy = -iy;
    } 

    dx = Math.abs(dx);
    dy = Math.abs(dy);	

    var x = x0;
    var y = y0;

    if (dx > dy) {
        d = 2 * dy - dx; // decisão para o 1º pixel

        for (i = 0; i < dx; i++){
            // pinta o pixel de coordenadas (x,y)
            color_buffer.putPixel(x,y,color_0);
            if(d < 0){
                d += 2 * dy; // caminha para leste
            } else {
                y += iy;
                d += 2 * (dy - dx); // caminha para nordeste
            }
            x+=ix; // sempre incrementa o x
        }
    } 
    else {
        d = 2 * dx - dy; // decisão para o 1º pixel 
        
        for(i = 0; i < dy; i++){
            // pinta o pixel de coordenadas (x,y)
            color_buffer.putPixel(x,y,color_0);
            if(d < 0) {
                d += 2 * dx; // caminha para leste
            } else {
                x += ix;
                d += 2 * (dx - dy); // caminha para nordeste
            }
            y+=iy; // sempre incrementa o y
        }
    }
}

function DrawTriangle(x0, y0, x1, y1, x2, y2, color_0, color_1, color_2) {
    // Desenhando linhas chamando a função do "Algoritmo de Ponto Médio"
    MidPointLineAlgorithm(x0, y0, x1, y1, color_0, color_1);
    MidPointLineAlgorithm(x1, y1, x2, y2, color_1, color_2);
    MidPointLineAlgorithm(x2, y2, x0, y0, color_2, color_0); 
}

/*
    Observações
    p0(25, 30)  rgb(255,0,0,255)
    p1(50, 100) rgb(0,0,255,255)
    p2(100, 15) rgb(0,255,0,255)
*/    
