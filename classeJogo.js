class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    // Definindo o tipo de ataque no tipo de herói
    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'ataque desconhecido';
        break;
    }

    // Exibindo a mensagem de ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso:

// Criando instâncias de heróis
const heroi1 = new Heroi("Merlin", 35, "mago");
const heroi2 = new Heroi("Arthur", 28, "guerreiro");
const heroi3 = new Heroi("Shaolin", 45, "monge");
const heroi4 = new Heroi("Hattori", 30, "ninja");

// Chamando o método atacar para cada herói
heroi1.atacar();  // Exibe: O mago atacou usando magia
heroi2.atacar();  // Exibe: O guerreiro atacou usando espada
heroi3.atacar();  // Exibe: O monge atacou usando artes marciais
heroi4.atacar();  // Exibe: O ninja atacou usando shuriken
