//No inherent rights of javascript function

var dias = new Array("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-feira","Sexta-Feira","Sábado");
var meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");

/* Função que retorna a data para o WEBSITE */
function getdate()
{
	var getDay	=	new Date();
	var year = getDay.getYear();
	
	if (year < 1000)
		year += 1900;

	var day =getDay.getDay();
	var mesAtual = getDay.getMonth();
	var daym = getDay.getDate();

	if (daym < 10)
		daym ="0"+daym;

	//formatando o data para exibição na tela
	var showDate = dias[day]+" - "+ daym+" de "+meses[mesAtual]+" de "+year;

	if (document.all)
		document.all.clock.innerHTML = showDate;
	else if (document.getElementById)
		document.getElementById("lblSetDate").innerHTML = showDate;
	else
		document.write(showDate);

}
	if (!document.all&&!document.getElementById)
		getdate();

function setdate()
{
	if (document.all||document.getElementById)
		setInterval("getdate()",10);
}

/* Função que retorna a Idade para o WEBSITE */
function SetIdade() {
    var data = new Date,
        ano_atual = data.getFullYear(),
        mes_atual = data.getMonth() + 1,
        dia_atual = data.getDate(),

        ano_aniversario = +1994,
        mes_aniversario = +10,
        dia_aniversario = +18,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }
    document.getElementById("setIdade").innerHTML = quantos_anos +" anos";
}