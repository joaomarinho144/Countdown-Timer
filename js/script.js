var dataRecebido;

function Executar(){ 
        var data = document.getElementById('time-to').value; 
        var dataAtual = new Date().getTime();  
        var dataEscolhida = ValidarData(data);
        var DiferencaDatas = Calcular(dataAtual, dataEscolhida);
        var DataFormatada = Formatar(DiferencaDatas)
        Imprimir(DataFormatada)
        Finalizar(dataAtual, dataEscolhida);
}

function ValidarData(data){
    if(typeof(data) == "undefined"){
        return 0;
    } else{
        return dataRecebido = new Date(data).getTime();
    }
}

function Calcular(dataAtual, DataEscolhida){
    var subtracao = DataEscolhida - dataAtual;
    return subtracao;
}

function Formatar(DiferencaDatas){
    var days = Math.floor(DiferencaDatas / (1000 * 60 * 60 * 24));
		var hours = Math.floor((DiferencaDatas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((DiferencaDatas % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((DiferencaDatas % (1000 * 60)) / 1000);
        
    var DataFormatada = new Object();
        DataFormatada.Dia = days;
        DataFormatada.Horas = hours;
        DataFormatada.Minutos = minutes;
        DataFormatada.Segundos = seconds;
    return DataFormatada;
}

function Imprimir(DataFormatada){
    document.querySelector('.clock-day').innerHTML = DataFormatada.Dia;
    document.querySelector('.clock-hours').innerHTML = DataFormatada.Horas;
    document.querySelector('.clock-minutes').innerHTML = DataFormatada.Minutos;
    document.querySelector('.clock-seconds').innerHTML = DataFormatada.Segundos;
}

function Finalizar(dataAtual, DataEscolhida){

if(dataAtual > DataEscolhida){
			document.querySelector('.clock-day').innerHTML = 'D';
			document.querySelector('.clock-hours').innerHTML = 'O';
			document.querySelector('.clock-minutes').innerHTML = 'N';
            document.querySelector('.clock-seconds').innerHTML = 'E';
            var atualizar = 0;
}

if(atualizar =! 0){
    setInterval(Executar, 1000);
}

}
