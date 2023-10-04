const horas = document.querySelector('.horas')

const minutos = document.querySelector('.minutos')

const segundos = document.querySelector('.segundos')

function semTempoIrmao() {
    const tempo = new Date();

    const horaRotacao = (360 / 12) * tempo.getHours()
    /* 360 graus dividido por 12 horas do meu relogio analógico, multiplicado pela hora oficial de agr */

    const minutoRotacao = (360 / 60) * tempo.getMinutes ();

    const segundosRotacao = (360 / 60) * tempo.getSeconds ();

    horas.style.transform = `rotate(${horaRotacao}deg)`
    minutos.style.transform = `rotate(${minutoRotacao}deg)`
    segundos.style.transform = `rotate(${segundosRotacao}deg)`

    setInterval(semTempoIrmao, 1000)

}

semTempoIrmao()

