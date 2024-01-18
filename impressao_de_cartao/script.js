let printCount = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    const printButtons = document.querySelectorAll('.flip-card__btn'); // Duas sublinhas aqui

    printButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            printCount++;
            window.print();

            console.log("Script carregado");

        });
    });
});

const cpf = document.querySelector("#cpf");

cpf.addEventListener("blur", () => {
    let value = cpf.value.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4");

    cpf.value = value;
});


document.addEventListener('DOMContentLoaded', (event) => {
    // Seu código existente aqui...

    // Ajuste para o botão de virar
    const button = document.querySelector('.button'); // Selecione o botão correto
    const slider = document.querySelector('.slider'); // Selecione o elemento que deve virar

    button.addEventListener('click', () => {
        slider.classList.toggle('flipped'); // Alterna a classe 'flipped' para virar o elemento
    });
});