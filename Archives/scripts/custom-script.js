//No inherent rights of javascript function

//Array para Formatar dia e hora
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

	/*if (document.all)
		document.all.clock.innerHTML = showDate;
	else if (document.getElementById)
		document.getElementById("lblDate").innerHTML = showDate;
	else
		document.write(showDate);*/

}
	if (!document.all&&!document.getElementById)
		getdate();

function Setdate()
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

/* Função que retorna o Bom dia, Boa tarde ou Boa noite. */
function SetCumprimento()
{
	var data = new Date();
	var horas = data.getHours();
	var exibe = "";

	if(horas > 0 && horas <= 11)
		exibe = "Bom dia";
	else if (horas > 11 && horas <= 18)
		exibe = "Boa tarde";
	else
		exibe = "Boa noite";

	document.getElementById("cumprimento").innerHTML = exibe;

}

/* Função que sorteia um numero e seleciona uma mensagem para exibiçao */
function SetMessage()
{
	var rdn = Math.floor((Math.random() * 20) + 1);
	var message = "";

	switch(rdn)
	{
		case 1:
			message = "“É fácil reprovar uma ideia, difícil é ter uma.” - Homer Simpson ";
			break;
		case 2:
			message = "“O que dói não é crescer. O que dói é ver uma pessoa que tanto amou mudar.” - Naruto";
			break;
		case 3:
			message = "“Por um mundo onde as baterias duram pelo menos 2 dias.” ";
			break;
		case 4:
			message = "“Se tudo um dia falhar... pressione o ctrl+alt+del.”";
			break;
		case 5:
			message = "“Você nunca sabe a força que tem. Até que a sua única alternativa é ser forte.” – Johnny Depp ";
			break;
		case 6:
			message = "“Há mais pessoas que desistem do que pessoas que fracassam.” – Henry Ford";
			break;
		case 7:
			message = "“A alegria evita mil males e prolonga a vida.” – William Shakespeare";
			break;
		case 8:
			message = "“As loiras roubam a cena, já as morenas roubam o filme todo.”";
			break;
		case 9:
			message = "“E pensar que a gente trabalha por um simples pedaço de papel.”";
			break;
		case 10:
			message = "“Por um país mais justo, onde quem trabalha mais, ganha mais.”";
			break;
		case 3:
			message = "“Uma boa equipe é o resultado de uma boa liderança.”";
			break;
		case 11:
			message = "“Regra da vida: Se eu te chamei para conversar ontem, hoje quem tem que chamar é você.”";
			break;
		case 12:
			message = "“Se você não tem razão para estar vivo, é o mesmo que estar morto.” - Naruto";
			break;
		case 13:
			message = "“Quando se tem humildade, a aparência é um pequeno detalhe.”";
			break;
		case 14:
			message = "“Não vale a pena viver sonhando e se esquecer de viver.” - Harry Potter";
			break;
		case 15:
			message = "“Não podemos alterar o futuro.” - Back to the future ";
			break;
		case 16:
			message = "“Gente que tem coragem não finge” - Rodox";
			break;
		case 17:
			message = "“E agora está claro como esta promessa que estamos fazendo” - Justin Timberlake (Mirros) ";
			break;
		case 18:
			message = "“O prazer no trabalho aperfeiçoa a obra” - Aristóteles";
			break;
		case 19:
			message = "“Mais importante que a vontade de vencer é a coragem de começar.”";
			break;
		case 20:
			message = "“Sem lutas não haverá vitória, sem incentivo não haverá vontade.”";
			break;
	}

	document.getElementById("message").innerHTML = message;
}
