/*
 * Função para mudar as imagens do menu de navegação do site
 */
const mudaFoto = (foto) => {
    document.querySelector('header#cabecalho > img#icone').src = foto;
};

/* 
 *Função para exibir o ano atual no rodapé da página do site
 */
const verificandoAno = () => { /* Arrow Function */
    const anoAtual = new Date().getFullYear();
    return anoAtual;
};

//Mostrando o resultado do ano atual 
document.querySelectorAll('time#ano')[0].innerHTML = Number(verificandoAno());

//Calculando o preço do prutudo por quantidades
const calculoTotal = function() {
    var qtd = document.getElementById('cQtd').value;
    let tot = qtd * 1500;

    document.getElementById('cTot').value = tot;
};