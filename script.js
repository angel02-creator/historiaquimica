// ================= QUIZ =================
const preguntas = [
    {
        pregunta: "¿Quién es considerado el padre de la química moderna?",
        opciones: ["Newton", "Lavoisier", "Einstein"],
        correcta: 1
    },
    {
        pregunta: "¿Qué buscaban los alquimistas?",
        opciones: ["Crear electricidad", "Convertir metales en oro", "Viajar al espacio"],
        correcta: 1
    }
];

let actual = 0;

function cargarPregunta() {
    const p = preguntas[actual];
    document.getElementById("pregunta").textContent = p.pregunta;

    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";

    p.opciones.forEach((op, i) => {
        const btn = document.createElement("button");
        btn.textContent = op;
        btn.onclick = () => verificar(i);
        opcionesDiv.appendChild(btn);
    });
}

function verificar(i) {
    const res = document.getElementById("resultado");

    if (i === preguntas[actual].correcta) {
        res.textContent = "✅ Correcto!";
    } else {
        res.textContent = "❌ Incorrecto";
    }

    actual = (actual + 1) % preguntas.length;
    setTimeout(cargarPregunta, 1000);
}

cargarPregunta();

// ================= MEMORIA =================
const cartas = ["⚗️", "🧪", "🔬", "🧬", "⚗️", "🧪", "🔬", "🧬"];
let seleccion = [];

function crearTablero() {
    const tablero = document.getElementById("tablero");
    cartas.sort(() => 0.5 - Math.random());

    cartas.forEach((carta, index) => {
        const div = document.createElement("div");
        div.classList.add("carta");
        div.dataset.valor = carta;

        div.onclick = () => voltear(div);
        tablero.appendChild(div);
    });
}

function voltear(carta) {
    if (seleccion.length < 2 && !carta.textContent) {
        carta.textContent = carta.dataset.valor;
        seleccion.push(carta);

        if (seleccion.length === 2) {
            setTimeout(verificarPareja, 500);
        }
    }
}

function verificarPareja() {
    if (seleccion[0].dataset.valor !== seleccion[1].dataset.valor) {
        seleccion[0].textContent = "";
        seleccion[1].textContent = "";
    }
    seleccion = [];
}

crearTablero();