
const readline = require('readline-sync');

function batalha() {
    let time1 = [];
    let time2 = [];
    let treinador1 = 0;
    let treinador2 = 0;
   
    let inicio = readline.question(`Bem-vindos à arena de batalha de Pokémon! Neste emocionante confronto, cada treinador trará consigo uma equipe de seis Pokémon para competir pela vitória. Antes da batalha começar, você terá a oportunidade de montar seu personagem, distribuindo 200 pontos entre os atributos de ataque, defesa e HP (pontos de vida) do seu treinador.
    
    Cada Pokémon só poderá lutar uma vez durante toda a batalha, então escolha sabiamente quando enviar seus companheiros para a luta. O objetivo é acumular pontos para a equipe vencedora, ganhando uma quantidade determinada de pontos por vitória em cada duelo.
    
    É importante lembrar que a batalha ocorrerá em um campo neutro, onde não haverá vantagens ou desvantagens de tipo. Isso significa que cada Pokémon terá uma chance igual de brilhar, independentemente de seu tipo ou habilidades específicas.
    
    Prepare-se para mostrar suas habilidades como treinador e formar estratégias inteligentes para superar seu oponente. O destino de sua equipe está em suas mãos. Que a melhor equipe vença!
    
    Pressione Enter para continuar...`)
    // Coleta os Pokémon do primeiro treinador
    for (let i = 0; i < 2; i++) {
        console.log(`Treinador 1 - Pokemon ${i + 1}`);
        let pokemon = readline.question(`Digite o nome do seu Pokémon: `);
        let pokemonTipo = readline.question("Digite o tipo do seu Pokémon: ");
        let pontosRestantes = 200;
        let ataque = Number(readline.question(`Digite o ataque de ${pokemon}, ainda restão ${pontosRestantes} : `));
        pontosRestantes -= ataque;
        let defesa = Number(readline.question(`Digite a defesa de ${pokemon}, ainda restão ${pontosRestantes}, os resto dos pontos serão automaticamente adicionados à vida: `));
        pontosRestantes -= defesa;
        let hp = pontosRestantes;

        time1.push({
            pokemon: pokemon,
            ataque: ataque,
            hp: hp,
            defesa: defesa,
            pokemonTipo: pokemonTipo
        });
    }

    // Coleta os Pokémon do segundo treinador
    for (let i = 0; i < 2; i++) {
        console.log(`Treinador 2 - Pokemon ${i + 1}`);
        let pokemon = readline.question(`Digite o nome do seu Pokémon: `);
        let pokemonTipo = readline.question("Digite o tipo do seu Pokémon: ");
        let pontosRestantes = 200;
        let ataque = Number(readline.question(`Digite o ataque de ${pokemon}: `));
        pontosRestantes -= ataque;
        let defesa = Number(readline.question(`Digite a defesa de ${pokemon}: `));
        pontosRestantes -= defesa;
        let hp = pontosRestantes;

        time2.push({
            pokemon: pokemon,
            ataque: ataque,
            hp: hp,
            defesa: defesa,
            pokemonTipo: pokemonTipo
        });
    }

    // Batalha entre os Pokémon dos dois treinadores
    for (let i = 0; i < 2; i++) {
        let vida1 = time1[i].hp;
        let vida2 = time2[i].hp;

        while (vida1 > 0 && vida2 > 0) {
            vida2 -= (2 * 50 / 5 + 2) * time1[i].ataque / time2[i].defesa / 50 + 2;
            if (vida2 <= 0) {
                treinador1++;
                console.log(`${time1[i].pokemon} derrotou ${time2[i].pokemon}!`);
                break;
            }

            vida1 -= (2 * 50 / 5 + 2) * time2[i].ataque / time1[i].defesa / 50 + 2;
            if (vida1 <= 0) {
                treinador2++;
                console.log(`${time2[i].pokemon} derrotou ${time1[i].pokemon}!`);
                break;
            }
        }
    }

    // Exibe o resultado da batalha
    if (treinador1 > treinador2) {
        console.log(`Parabéns, o treinador 1 ganhou!`);
    } else if (treinador1 < treinador2) {
        console.log(`Parabéns, o treinador 2 ganhou!`);
    } else {
        console.log(`Ficou empatado, parabéns para os dois!`);
    }
}

batalha();
