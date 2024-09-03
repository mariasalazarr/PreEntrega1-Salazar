function calcularNotafinal() {
    let notas = []
    let nota_final = 0
    const cantidad_de_notas = 4

    for (let i = 0; i < cantidad_de_notas; i++) {
        let nota = parseInt(prompt("integresa tu nota aqui"))
        if (isNaN(nota)) {
            alert("Insert a valid number ya dummy")
        }
        else {
            notas.push(nota)
            nota_final += nota
            
        }
    }

    nota_final = nota_final / cantidad_de_notas

    alert("tu nota es" + " " + nota_final + " " + "verfirifica en la consola!")
    console.log("tu nota es" + " " + nota_final)
}

console.log("Calculador de nota final hecho con amor en Javascripto")
calcularNotafinal()
