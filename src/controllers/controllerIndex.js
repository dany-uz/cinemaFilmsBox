// Con el var el scope es global
var name = "Daniel Ospina"

if (5>1) {
    var name = "Carlos Guaycha"
}

console.log("Hello " + name)

// Con Let el scope es local

let name2 = "Daniel Ospina"

if (5>1) {
    let name2 = "Carlos Guaycha"
}

console.log("Hello " + name2)