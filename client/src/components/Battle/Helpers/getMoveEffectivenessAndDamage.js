const effectiveness_chart = {
    "0": "Cela n'a aucun effet.",
    "0.25": "Ce n'est pas très efficace.",
    "0.5": "Ce n'est pas très efficace.",
    "1": "",
    "2": "C'est super efficace !",
    "4": "C'est super efficace !"
};

const getMoveEffectivenessAndDamage = (move, attacked_pokemon) => {
    let move_type = move.type;
    console.log("move type: ", move_type);
    console.log("attacked pokemon: ", attacked_pokemon);
    let effectiveness = attacked_pokemon.type_defenses[move_type];
    let damage = parseInt(move.power * effectiveness);
    return {
        effectiveness: effectiveness_chart[effectiveness],
        damage
    };
};

export default getMoveEffectivenessAndDamage;