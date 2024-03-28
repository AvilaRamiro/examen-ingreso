function tipoDeFigura(cantidadLados, largoLado){

    let figura
    let perimetro

    if (cantidadLados === 0){

        figura = "circulo"
        perimetro = 2 * Math.PI * largoLado
        
    } else if (cantidadLados === 3){

        perimetro = largoLado * 3
        figura = "triángulo"

    } else if (cantidadLados === 4){

        perimetro = largoLado * 4
        figura = "cuadrado"

    } else if (cantidadLados === 5){

        perimetro = largoLado * 5
        figura = "pentágono"

    } else if (cantidadLados === 6){

        perimetro = largoLado * 6
        figura = "hexágono"

    } else if (cantidadLados > 6){

        perimetro = largoLado * cantidadLados
        figura = "polígono"

    } else {

        return "ERROR: El numero de lados no es correcto"

    }

    return "Tu figura es un " + figura + " y tiene un perímetro de " + perimetro
}


console.log(tipoDeFigura(1, 10))