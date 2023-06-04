import requests
import json
import os
import urllib.request

type_defenses_data = {
    "normal": {
        "normal": 1,
        "fire": 1,
        "water": 1,
        "electric": 1,
        "grass": 1,
        "ice": 1,
        "fighting": 2,
        "poison": 1,
        "ground": 1,
        "flying": 1,
        "psychic": 1,
        "bug": 1,
        "rock": 1,
        "ghost": 0,
        "dragon": 1,
        "dark": 1,
        "steel": 1,
        "fairy": 1,
    },
    "fire": {
        "normal": 1,
        "fire": 0.5,
        "water": 2,
        "electric": 1,
        "grass": 0.5,
        "ice": 0.5,
        "fighting": 1,
        "poison": 1,
        "ground": 2,
        "flying": 1,
        "psychic": 1,
        "bug": 0.5,
        "rock": 2,
        "ghost": 1,
        "dragon": 1,
        "dark": 1,
        "steel": 0.5,
        "fairy": 0.5,
    },
    "water": {
        "normal": 1,
        "fire": 0.5,
        "water": 0.5,
        "electric": 2,
        "grass": 2,
        "ice": 0.5,
        "fighting": 1,
        "poison": 1,
        "ground": 1,
        "flying": 1,
        "psychic": 1,
        "bug": 1,
        "rock": 1,
        "ghost": 1,
        "dragon": 1,
        "dark": 1,
        "steel": 0.5,
        "fairy": 1,
    },
    "electric": {
        "normal": 1,
        "fire": 1,
        "water": 1,
        "electric": 0.5,
        "grass": 1,
        "ice": 1,
        "fighting": 1,
        "poison": 1,
        "ground": 2,
        "flying": 0.5,
        "psychic": 1,
        "bug": 1,
        "rock": 1,
        "ghost": 1,
        "dragon": 1,
        "dark": 1,
        "steel": 0.5,
        "fairy": 1,
    },
    "grass": {
        "normal": 1,
        "fire": 2,
        "water": 0.5,
        "electric": 0.5,
        "grass": 0.5,
        "ice": 2,
        "fighting": 1,
        "poison": 2,
        "ground": 0.5,
        "flying": 2,
        "psychic": 1,
        "bug": 2,
        "rock": 1,
        "ghost": 1,
        "dragon": 1,
        "dark": 1,
        "steel": 1,
        "fairy": 1,
    },
    "ice": {
        "normal": 1,
        "fire": 2,
        "water": 1,
        "electric": 1,
        "grass": 1,
        "ice": 0.5,
        "fighting": 2,
        "poison": 1,
        "ground": 1,
        "flying": 1,
        "psychic": 1,
        "bug": 1,
        "rock": 2,
        "ghost": 1,
        "dragon": 1,
        "dark": 1,
        "steel": 2,
        "fairy": 1,
    },
    "fighting": {
        "normal": 1,
        "fire": 1,
        "water": 1,
        "electric": 1,
        "grass": 1,
        "ice": 1,
        "fighting": 1,
        "poison": 1,
        "ground": 1,
        "flying": 2,
        "psychic": 2,
        "bug": 0.5,
        "rock": 0.5,
        "ghost": 1,
        "dragon": 1,
        "dark": 0.5,
        "steel": 1,
        "fairy": 2,
    },
    "poison": {
        "normal": 1,
        "fire": 1,
        "water": 1,
        "electric": 1,
        "grass": 0.5,
        "ice": 1,
        "fighting": 0.5,
        "poison": 0.5,
        "ground": 2,
        "flying": 1,
        "psychic": 2,
        "bug": 0.5,
        "rock": 1,
        "ghost": 1,
        "dragon": 1,
        "dark": 1,
        "steel": 1,
        "fairy": 0.5,
    },
    "ground": {
        "normal": 1,
        "fire": 1,
        "water": 2,
        "electric": 0,
        "grass": 2,
        "ice": 2,
        "fighting": 1,
        "poison": 0.5,
        "ground": 1,
        "flying": 1,
        "psychic": 1,
        "bug": 1,
        "rock": 0.5,
        "ghost": 1,
        "dragon": 1,
        "dark": 1,
        "steel": 1,
        "fairy": 1,
    },
    "flying": {
        "normal": 1,
        "fire": 1,
        "water": 1,
        "electric": 2,
        "grass": 0.5,
        "ice": 2,
        "fighting": 0.5,
        "poison": 1,
        "ground": 0,
        "flying": 1,
        "psychic": 1,
        "bug": 0.5,
        "rock": 2,
        "ghost": 1,
        "dragon": 1,
        "dark": 1,
        "steel": 1,
        "fairy": 1,
    },
    "psychic": {
        "normal": 1,
        "fire": 1,
        "water": 1,
        "electric": 1,
        "grass": 1,
        "ice": 1,
        "fighting": 0.5,
        "poison": 1,
        "ground": 1,
        "flying": 1,
        "psychic": 0.5,
        "bug": 2,
        "rock": 1,
        "ghost": 2,
        "dragon": 1,
        "dark": 2,
        "steel": 1,
        "fairy": 1,
    },
    "bug": {
        "normal": 1,
        "fire": 2,
        "water": 1,
        "electric": 1,
        "grass": 0.5,
        "ice": 1,
        "fighting": 0.5,
        "poison": 1,
        "ground": 0.5,
        "flying": 2,
        "psychic": 1,
        "bug": 1,
        "rock": 2,
        "ghost": 1,
        "dragon": 1,
        "dark": 1,
        "steel": 1,
        "fairy": 1,
    },
    "rock": {
        "normal": 0.5,
        "fire": 0.5,
        "water": 2,
        "electric": 1,
        "grass": 2,
        "ice": 1,
        "fighting": 2,
        "poison": 0.5,
        "ground": 2,
        "flying": 0.5,
        "psychic": 1,
        "bug": 1,
        "rock": 1,
        "ghost": 1,
        "dragon": 1,
        "dark": 1,
        "steel": 2,
        "fairy": 1,
    },
    "ghost": {
        "normal": 0,
        "fire": 1,
        "water": 1,
        "electric": 1,
        "grass": 1,
        "ice": 1,
        "fighting": 0,
        "poison": 0.5,
        "ground": 1,
        "flying": 1,
        "psychic": 1,
        "bug": 0.5,
        "rock": 1,
        "ghost": 2,
        "dragon": 1,
        "dark": 2,
        "steel": 1,
        "fairy": 1,
    },
    "dragon": {
        "normal": 1,
        "fire": 0.5,
        "water": 0.5,
        "electric": 0.5,
        "grass": 0.5,
        "ice": 2,
        "fighting": 1,
        "poison": 1,
        "ground": 1,
        "flying": 1,
        "psychic": 1,
        "bug": 1,
        "rock": 1,
        "ghost": 1,
        "dragon": 2,
        "dark": 1,
        "steel": 1,
        "fairy": 2,
    },
    "dark": {
        "normal": 1,
        "fire": 1,
        "water": 1,
        "electric": 1,
        "grass": 1,
        "ice": 1,
        "fighting": 2,
        "poison": 1,
        "ground": 1,
        "flying": 1,
        "psychic": 0,
        "bug": 2,
        "rock": 1,
        "ghost": 0.5,
        "dragon": 1,
        "dark": 0.5,
        "steel": 1,
        "fairy": 2,
    },
    "steel": {
        "normal": 0.5,
        "fire": 2,
        "water": 1,
        "electric": 1,
        "grass": 0.5,
        "ice": 0.5,
        "fighting": 2,
        "poison": 0,
        "ground": 2,
        "flying": 0.5,
        "psychic": 0.5,
        "bug": 0.5,
        "rock": 0.5,
        "ghost": 1,
        "dragon": 0.5,
        "dark": 1,
        "steel": 0.5,
        "fairy": 0.5,
    },
    "fairy": {
        "normal": 1,
        "fire": 1,
        "water": 1,
        "electric": 1,
        "grass": 1,
        "ice": 1,
        "fighting": 0.5,
        "poison": 2,
        "ground": 1,
        "flying": 1,
        "psychic": 1,
        "bug": 0.5,
        "rock": 1,
        "ghost": 1,
        "dragon": 0,
        "dark": 0.5,
        "steel": 2,
        "fairy": 1,
    }
}


# get the data from the API pokeapi.co for 150 pokemons
def get_pokemon_data():
    pokemon_data = []
    for i in range(1, 151):
        print(f'Getting data for pokemon {i}')
        response = requests.get(f'https://pokeapi.co/api/v2/pokemon/{i}')
        pokemon_data.append(response.json())
    return pokemon_data


'''
# save the data in a json file with the name pokemon_data.json
Exemple of data:
const pokemon_data = [
  {
    id: 1,
    label: "Pikachu",
    front: require("../assets/images/pokemon/pikachu.gif"),
    back: require("../assets/images/pokemon/pikachu-back.gif"),
    sprite: require("../assets/images/pokemon/pikachu-small.png"),
    cry: require("../assets/sounds/cries/pikachu.mp3"),
    moves: [1, 2, 3, 4, 5, 6, 7],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 0.5,
      grass: 1,
      ice: 1,
      fighting: 1,
      poison: 1,
      ground: 2,
      flying: 0.5,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1
    }
  },
  {
    id: 2,
    label: "Blastoise",
    front: require("../assets/images/pokemon/blastoise.gif"),
    back: require("../assets/images/pokemon/blastoise-back.gif"),
    sprite: require("../assets/images/pokemon/blastoise-small.png"),
    cry: require("../assets/sounds/cries/blastoise.mp3"),
    moves: [8, 9, 10, 11, 12, 13],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 0.5,
      electric: 2,
      grass: 2,
      ice: 0.5,
      fighting: 1,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1
    }
  },
  {
    id: 3,
    label: "Ivysaur",
    front: require("../assets/images/pokemon/ivysaur.gif"),
    back: require("../assets/images/pokemon/ivysaur-back.gif"),
    sprite: require("../assets/images/pokemon/ivysaur-small.png"),
    cry: require("../assets/sounds/cries/ivysaur.mp3"),
    moves: [14, 15, 16, 17, 18, 19, 20, 21, 22],
    type_defenses: {
      normal: 1,
      fire: 2,
      water: 0.5,
      electric: 0.5,
      grass: 0.5,
      ice: 2,
      fighting: 0.5,
      poison: 1,
      ground: 1,
      flying: 2,
      psychic: 2,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 0.5
    }
  },
  {
    id: 4,
    label: "Dragonite",
    front: require("../assets/images/pokemon/dragonite.gif"),
    back: require("../assets/images/pokemon/dragonite-back.gif"),
    sprite: require("../assets/images/pokemon/dragonite-small.png"),
    cry: require("../assets/sounds/cries/dragonite.mp3"),
    moves: [23, 24, 25, 26, 27, 28, 29, 7],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 0.5,
      electric: 1,
      grass: 0.25,
      ice: 4,
      fighting: 0.5,
      poison: 1,
      ground: 0,
      flying: 1,
      psychic: 1,
      bug: 0.5,
      rock: 2,
      ghost: 1,
      dragon: 2,
      dark: 1,
      steel: 1,
      fairy: 2
    }
  },
  {
    id: 5,
    label: "Golduck",
    front: require("../assets/images/pokemon/golduck.gif"),
    back: require("../assets/images/pokemon/golduck-back.gif"),
    sprite: require("../assets/images/pokemon/golduck-small.png"),
    cry: require("../assets/sounds/cries/golduck.mp3"),
    moves: [9, 30, 31, 32, 33, 34],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 0.5,
      electric: 2,
      grass: 2,
      ice: 0.5,
      fighting: 1,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1
    }
  }];
'''


def save_pokemon_data(pokemon_data):
    output_data = []

    # load moves_data if exists, else create an empty list
    if os.path.exists('moves_data.json'):
        with open('moves_data.json', 'r') as f:
            moves_data = json.load(f)
    else:
        moves_data = []

    # if not exist create folder cries
    if not os.path.exists('cries'):
        os.makedirs('cries')

    for pokemon in pokemon_data:
        print(
            f'Getting type defenses for pokemon {pokemon["name"]} type {pokemon["types"][0]["type"]["name"]}')
        type_defenses = type_defenses_data[pokemon["types"][0]["type"]["name"]]
        hp = pokemon["stats"][0]["base_stat"]
        attack = pokemon["stats"][1]["base_stat"]
        defense = pokemon["stats"][2]["base_stat"]
        special_attack = pokemon["stats"][3]["base_stat"]
        special_defense = pokemon["stats"][4]["base_stat"]
        speed = pokemon["stats"][5]["base_stat"]

        # if cry file does not exist, download it from https://play.pokemonshowdown.com/audio/cries/
        cry_path = f'cries/{pokemon["name"]}.mp3'
        if not os.path.exists(cry_path):
            print(f'Downloading cry for pokemon {pokemon["name"]}')
            #remove - in pokemon name
            cry_url = f'https://play.pokemonshowdown.com/audio/cries/{pokemon["name"].replace("-","")}.mp3'
            print(cry_url)

            # Make a GET request to the server
            response = requests.get(cry_url, stream=True, headers={
                                    'User-agent': 'Mozilla/5.0'})

            # Check if the request was successful
            if response.status_code == 200:
                # Write the contents of the response to a file
                with open(cry_path, 'wb') as f:
                    for chunk in response.iter_content(chunk_size=128):
                        f.write(chunk)
            else:
                print(f'Failed to download cry: {response.status_code}')

        # process moves
    
        move_ids = []
        for i, move in enumerate(pokemon["moves"]):
            print(
                f'Getting move {i+1} of {len(pokemon["moves"])} for pokemon {pokemon["name"]}')
            move_name = move["move"]["name"]
            move_id = move["move"]["url"].split('/')[-2]

            # find if the move is already in moves_data with the same id
            for move_data in moves_data:
                if move_data["id"] == int(move_id):
                    move_ids.append(move_id)
                    print(f'Move {move_name} already exists, skipping')
                    break
            else:
                # if the move is not in moves_data, add it with a new id
                move_url = move["move"]["url"]
                move_details = requests.get(move_url).json()

                # if move power is null pass the move
                if move_details.get('power', 0) == None:
                    print(f'Move {move_name} has no power, skipping')
                    continue

                moves_data.append({
                    "id": int(move_id),
                    "title": move_name.replace('-', ' ').title(),
                    "power": move_details.get('power', 0),
                    "type": move_details["type"]["name"],
                    "is_first": move_details["priority"] > 0,
                })
                move_ids.append(move_id)

        output_data.append({
            "id": pokemon["id"],
            "label": pokemon["name"],
            "front": pokemon["sprites"]["front_default"],
            "back": pokemon["sprites"]["back_default"],
            "sprite": pokemon["sprites"]["front_default"],
            "cry": f'./assets/sounds/cries/{pokemon["name"]}.mp3',
            "moves": move_ids,
            "type_defenses": type_defenses,
            "hp": hp,
            "attack": attack,
            "defense": defense,
            "special_attack": special_attack,
            "special_defense": special_defense,
            "speed": speed,
        })

        print(f'Pokemon {pokemon["name"]} done')
      

    # save the data in a js file
    with open('pokemon_data.js', 'w') as f:
        f.write('const pokemon_data = ')
        json.dump(output_data, f, ensure_ascii=False, indent=4)

    # save moves_data in a js file
    with open('moves_data.js', 'w') as f:
        f.write('const moves_data = ')
        json.dump(moves_data, f, ensure_ascii=False, indent=4)


# call the functions
pokemon_data = get_pokemon_data()
save_pokemon_data(pokemon_data)
