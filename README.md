# AddEventListener - Exemplo

### O que é o AddEventListener ?
É um método de escuta de eventos muito utilizado na aplicação de eventos utilizando a linguagem Javascript ou o superset Typescript. O método é composto por 3 argumentos que devem ser passados por parâmetro:

1º é o evento a ser escutado podendo ser: click, mouseover, keyup entre outros;
2º é a função responsável por ter todas as instruções a serem realizadas quando o evento for disparado;
3º é o useCapture que recebe o valor booleano: true ou false, por padrão ainda que não seja passado o valor, ele recebe false, mas existem caso que é necessário passar o valor true representando assim a captura do evento.

### Sintaxe do método addEventListener():
elementoDOM.addEventListener('evento', function, useCapture)

### Exemplo desenvolvido:
1º Cards que emite mensagem ao clicar no botão e mudam de cor ao passar o mouse por cima;
2º Um texto que é revelado somente quando o usuário clica no botão.

### Tecnologias Web utilizadas para  o desenvolvimento:
- 📄 HTML: conteúdo
- 🎨 CSS: layout
- 🛠 Javascript: lógica e interação

### Conteúdo aplicado:
- Método de captura: querySelector()
- Método de evento: addEventListener()
- Propriedade: classList e métodos: add() e remove()


