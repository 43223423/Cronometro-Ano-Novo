const novoAno = '1 Jan 2024';


const diasId = document.getElementById('dias')
const horasId = document.getElementById('horas')
const minutosId = document.getElementById('minutos')
const segundosId = document.getElementById('segundos')

function Contador() {

    const novoAnoData = new Date(novoAno);
    const diaAtual = new Date()

    const segundosTotais = (novoAnoData - diaAtual) / 1000

    const dia = Math.floor(segundosTotais / 3600 / 24)

    const hora = Math.floor(segundosTotais / 3600) % 24

    const minutos = Math.floor(segundosTotais / 60) % 60

    const segundos = Math.floor(segundosTotais % 60)

    // console.log(dia, hora, minutos, segundos)

    
    diasId.innerHTML = dia
    horasId.innerHTML = Zero(hora)
    minutosId.innerHTML = Zero(minutos)
    segundosId.innerHTML = Zero(segundos)

}
Contador()

function Zero(time){
    return time < 10 ? `0${time}`: time
}

setInterval(Contador, 1000)
