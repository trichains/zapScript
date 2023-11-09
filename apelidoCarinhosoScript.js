async function sendScriptMSG(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

sendScriptMSG(`
Calma calabreso
Calma ludmilo
Calma luizo manoelo
Calma cnpjoto
Calma valesco popozudo
Calma braganço paulisto
Calma caldo de cano
Calma chora na tora
Calma salado de fruto
Calma emicido
Calma djongo
Calma diademo
Calma biblioteco
Calma caso lotérico
Calma arabio saudito
Calma microfono
Calma fritadeiro
Calma biomo
Calma jaguatirico
Calma esmolo
Calma bicicleto
Calma detergento
Calma silabo
Calma deserto saaro
Calma espinafro
Calma rocambolo
Calma teto
Calma iveto sangalo
Calma mato atlantico
Calma casos bahio
Calma rito cadilaco
Calma madonno
Calma patricio poeto
Calma samsungo
Calma tubaino
Calma corrento
Calma caganeiro
Calma motocicleto
Calma cracolandio
Calma prefeituro
Calma ambulancio
Calma vasilho
Calma bolacho maizeno
Calma geladeiro
Calma abóboro
Calma banano
Calma cadeiro
Calma caneto
Calma girafo
Calma goiabo
Calma portario
Calma janelo
Calma meso
Calma garrafo
Calma beterrabo
Calma livrario
Calma derramado
Calma camo
Calma fábrico
Calma velo
Calma bugigango
Calma águo
Calma lagartixo
Calma laranjo
Calma camiso
Calma espado
Calma baterio
Calma gelatino
Calma madeiro
Calma corujo
Calma bandeiro
Calma farinho
Calma folho
Calma estrelo
Calma abelho
Calma guitarro
Calma abacaxo
Calma pulgo
Calma formigo
Calma esmeraldo
Calma espinheiro santo
Calma lamparino
Calma chocolato
Calma especiario
Calma paraibo
Calma sacolo
Calma sorveto
Calma gincano
Calma luneto
Calma julieto
Calma arrancado
Calma vigaristo
Calma silos malafaio
Calma iphono
Calma lagosto
Calma capaceto
Calma revisto
Calma receito
Calma turbanto
Calma mexerico
Calma lampado
`).then(e => console.log(`Script finalizado, ${e} apelidos carinhosos enviados`)).catch(console.error)