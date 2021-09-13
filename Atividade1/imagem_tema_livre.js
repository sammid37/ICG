// ------------------- casa rgb(121, 180, 183)
MidPointLineAlgorithm(15, 30, 70, 30, [121, 180, 183], [121, 180, 183]);
MidPointLineAlgorithm(15, 30, 15, 70, [121, 180, 183], [121, 180, 183]);
MidPointLineAlgorithm(70, 30, 70, 70, [121, 180, 183], [121, 180, 183]);
// telhado
DrawTriangle(15, 70, 42, 90, 70, 70, [104, 121, 128], [104, 121, 128], [121, 180, 183]);
// porta
MidPointLineAlgorithm(20, 30, 20, 50, [118, 97, 97], [118, 97, 97]);
MidPointLineAlgorithm(30, 30, 30, 50, [118, 97, 97], [118, 97, 97]);
MidPointLineAlgorithm(20, 50, 30, 50, [118, 97, 97], [118, 97, 97]);
color_buffer.putPixel(22,40,[118, 97, 97]);
// janela 1
MidPointLineAlgorithm(35, 40, 35, 60, [118, 97, 97], [118, 97, 97]);
MidPointLineAlgorithm(45, 40, 45, 60, [118, 97, 97], [118, 97, 97]);
MidPointLineAlgorithm(35, 40, 45, 40, [118, 97, 97], [118, 97, 97]);
MidPointLineAlgorithm(35, 60, 45, 60, [118, 97, 97], [118, 97, 97]);
MidPointLineAlgorithm(40, 40, 40, 60, [118, 97, 97], [118, 97, 97]);
MidPointLineAlgorithm(35, 50, 45, 50, [118, 97, 97], [118, 97, 97]);
// janela 2
MidPointLineAlgorithm(55, 40, 55, 60, [118, 97, 97], [118, 97, 97]);
MidPointLineAlgorithm(65, 40, 65, 60, [118, 97, 97], [118, 97, 97]);
MidPointLineAlgorithm(55, 40, 65, 40, [118, 97, 97], [118, 97, 97]);
MidPointLineAlgorithm(55, 60, 65, 60, [118, 97, 97], [118, 97, 97]);
MidPointLineAlgorithm(60, 40, 60, 60, [118, 97, 97], [118, 97, 97]);
MidPointLineAlgorithm(55, 50, 65, 50, [118, 97, 97], [118, 97, 97]);

// --------------------------------- exterior
// gramado rgb(168, 255, 62)
MidPointLineAlgorithm(0,30,200,30, [168, 255, 62], [168, 255, 62])
MidPointLineAlgorithm(5,30,5,32, [168, 255, 62], [168, 255, 62])
color_buffer.putPixel(6,20,[168, 255, 62]);
MidPointLineAlgorithm(7,30,7,35, [168, 255, 62], [168, 255, 62])
MidPointLineAlgorithm(15,30,15,32, [168, 255, 62], [168, 255, 62])
color_buffer.putPixel(20,25,[168, 255, 62]);
MidPointLineAlgorithm(25,30,25,32, [168, 255, 62], [168, 255, 62])
MidPointLineAlgorithm(35,17,35,22, [168, 255, 62], [168, 255, 62])
MidPointLineAlgorithm(40,30,40,35, [168, 255, 62], [168, 255, 62])
MidPointLineAlgorithm(45,30,45,32, [168, 255, 62], [168, 255, 62])
MidPointLineAlgorithm(43,17,43,19, [168, 255, 62], [168, 255, 62])
MidPointLineAlgorithm(45,17,45,22, [168, 255, 62], [168, 255, 62])
MidPointLineAlgorithm(47,30,47,32, [168, 255, 62], [168, 255, 62])
MidPointLineAlgorithm(55,30,55,35, [168, 255, 62], [168, 255, 62])

color_buffer.putPixel(60,15,[168, 255, 62]);
color_buffer.putPixel(65,25,[168, 255, 62]);
MidPointLineAlgorithm(70,17,70,22, [168, 255, 62], [168, 255, 62])

MidPointLineAlgorithm(72,30,72,32, [168, 255, 62], [168, 255, 62])
MidPointLineAlgorithm(75,17,75,19, [168, 255, 62], [168, 255, 62])
MidPointLineAlgorithm(75,30,75,32, [168, 255, 62], [168, 255, 62])
MidPointLineAlgorithm(85,30,85,32, [168, 255, 62], [168, 255, 62])
MidPointLineAlgorithm(100,30,100,35, [168, 255, 62], [168, 255, 62])
MidPointLineAlgorithm(105,30,105,32, [168, 255, 62], [168, 255, 62])
MidPointLineAlgorithm(125,30,125,32, [168, 255, 62], [168, 255, 62])
color_buffer.putPixel(120,25,[168, 255, 62]);
color_buffer.putPixel(125,20,[168, 255, 62]);

MidPointLineAlgorithm(10,5,10,8, [168, 255, 62], [168, 255, 62])


// sol
MidPointLineAlgorithm(10,100,10,110,[244, 255, 97],[244, 255, 97])
MidPointLineAlgorithm(20,100,20,110,[244, 255, 97],[244, 255, 97])
MidPointLineAlgorithm(10,100,20,100,[244, 255, 97],[244, 255, 97])
MidPointLineAlgorithm(10,110,20,110,[244, 255, 97],[244, 255, 97])


// ------------------- árvore rgb(131, 81, 81) rgb(255, 184, 48) rgb(250, 255, 0) rgb(255, 36, 66) 
MidPointLineAlgorithm(90, 30, 90, 70, [131, 81, 81], [131, 81, 81]);
MidPointLineAlgorithm(95, 30, 95, 70, [131, 81, 81], [131, 81, 81]);
// copa da árvore
DrawTriangle(80, 60, 90, 70, 80, 70, [255, 184, 48], [2250, 255, 0], [255, 36, 66]);
DrawTriangle(95, 70, 105, 70, 95, 60, [250, 255, 0], [255, 36, 66], [255, 184, 48]);
DrawTriangle(100, 80, 110, 80, 100, 70, [255, 36, 66], [255, 184, 48], [250, 255, 0]);
DrawTriangle(90, 100, 80, 100, 90, 80, [255, 184, 48], [250, 255, 0], [255, 36, 66]);
DrawTriangle(85, 70, 65, 80, 85, 80, [255, 184, 48], [255, 36, 66], [250, 255, 0]);
DrawTriangle(100, 90, 110, 80, 110, 70, [250, 255, 0], [255, 184, 48], [255, 36, 66]);
DrawTriangle(90, 70, 110, 80, 110, 75, [255, 36, 66], [250, 255, 0], [255, 184, 48]);
DrawTriangle(80, 70, 90, 80, 85, 75, [255, 36, 66], [250, 255, 0], [255, 184, 48]);
DrawTriangle(85, 90, 110, 80, 100, 75, [255, 36, 66], [250, 255, 0], [255, 184, 48]);
DrawTriangle(120, 100, 130, 90, 110, 80, [250, 255, 0], [255, 184, 48], [255, 36, 66]);
DrawTriangle(70, 100, 100, 90, 90, 80, [250, 255, 0], [255, 184, 48], [255, 36, 66]);
DrawTriangle(100, 90, 110, 100, 100, 100, [255, 184, 48], [2250, 255, 0], [255, 36, 66]);



// ---------------------- água, talvez rgb(168, 231, 233)
MidPointLineAlgorithm(110,10,10,15,[168, 231, 233],[168, 231, 233])
MidPointLineAlgorithm(120,10,20,15,[168, 231, 233],[168, 231, 233])
MidPointLineAlgorithm(110,10,20,10,[168, 231, 233],[168, 231, 233])
MidPointLineAlgorithm(110,15,20,15,[168, 231, 233],[168, 231, 233])

// ---------------------- bicho rgb(61, 178, 255)
MidPointLineAlgorithm(110,40,110,45,[61, 178, 255],[61, 178, 255])
MidPointLineAlgorithm(115,40,115,45,[61, 178, 255],[61, 178, 255])
MidPointLineAlgorithm(110,40,115,40,[61, 178, 255],[61, 178, 255])
MidPointLineAlgorithm(110,45,115,45,[61, 178, 255],[61, 178, 255])
DrawTriangle(120, 30, 110, 40, 110, 30, [61, 178, 255], [61, 178, 255], [61, 178, 255]);
DrawTriangle(110, 42, 115, 48, 115, 42, [61, 178, 255], [61, 178, 255], [61, 178, 255]);
DrawTriangle(115, 42, 110, 48, 110, 42, [61, 178, 255], [61, 178, 255], [61, 178, 255]);
MidPointLineAlgorithm(120,30,120,38,[61, 178, 255],[61, 178, 255])
MidPointLineAlgorithm(120,38,125,38,[61, 178, 255],[61, 178, 255])
MidPointLineAlgorithm(115,36,115,40,[61, 178, 255],[61, 178, 255])
MidPointLineAlgorithm(111,39,115,39,[255, 36, 66],[255, 36, 66])






