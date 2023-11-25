class Classe {
  nome;
  idade;
  tipo;
  ataque = "";

  constructor(nome, idade, tipo) {
    nome = this.nome;
    idade = this.idade;
    tipo = this.tipo;
  }

  atacar() {
    if (this.tipo.toLowerCase() == "mago") {
      this.ataque = "magia";
    } else if (this.tipo.toLowerCase() == "guerreiro") {
      this.ataque = "espada";
    } else if (this.tipo.toLowerCase() == "monge") {
      this.ataque = "artes marcias";
    } else if (this.tipo.toLowerCase() == "ninja") {
      this.ataque = "shuriken";
    } else if (this.tipo.toLowerCase() == "clérigo") {
      this.ataque = "palavra sagrada";
    } else {
      return console.log(
        `Classe não cadastrada, porfavor utilize as classes : ninja, monge, guerreiro, mago ou clérigo!`
      );
    }

    console.log(`O ${this.tipo.toLowerCase()} atacou usando ${this.ataque}!`);
  }
}

const seki = new Classe();
seki.nome = "Seki, o Viúvo";
seki.idade = 28;
seki.tipo = "mago";
seki.atacar();
