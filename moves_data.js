const moves_data = [
    {
        "id": 13,
        "title": "Razor Wind",
        "power": 80,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 15,
        "title": "Cut",
        "power": 50,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 20,
        "title": "Bind",
        "power": 15,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 22,
        "title": "Vine Whip",
        "power": 45,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 29,
        "title": "Headbutt",
        "power": 70,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 33,
        "title": "Tackle",
        "power": 40,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 34,
        "title": "Body Slam",
        "power": 85,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 36,
        "title": "Take Down",
        "power": 90,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 38,
        "title": "Double Edge",
        "power": 120,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 70,
        "title": "Strength",
        "power": 80,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 72,
        "title": "Mega Drain",
        "power": 40,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 75,
        "title": "Razor Leaf",
        "power": 55,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 76,
        "title": "Solar Beam",
        "power": 120,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 80,
        "title": "Petal Dance",
        "power": 120,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 99,
        "title": "Rage",
        "power": 20,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 124,
        "title": "Sludge",
        "power": 65,
        "type": "poison",
        "is_first": false
    },
    {
        "id": 130,
        "title": "Skull Bash",
        "power": 130,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 173,
        "title": "Snore",
        "power": 50,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 188,
        "title": "Sludge Bomb",
        "power": 90,
        "type": "poison",
        "is_first": false
    },
    {
        "id": 189,
        "title": "Mud Slap",
        "power": 20,
        "type": "ground",
        "is_first": false
    },
    {
        "id": 200,
        "title": "Outrage",
        "power": 120,
        "type": "dragon",
        "is_first": false
    },
    {
        "id": 202,
        "title": "Giga Drain",
        "power": 75,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 206,
        "title": "False Swipe",
        "power": 40,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 210,
        "title": "Fury Cutter",
        "power": 40,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 237,
        "title": "Hidden Power",
        "power": 60,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 249,
        "title": "Rock Smash",
        "power": 40,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 263,
        "title": "Facade",
        "power": 70,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 282,
        "title": "Knock Off",
        "power": 65,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 290,
        "title": "Secret Power",
        "power": 70,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 311,
        "title": "Weather Ball",
        "power": 50,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 331,
        "title": "Bullet Seed",
        "power": 25,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 345,
        "title": "Magical Leaf",
        "power": 60,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 402,
        "title": "Seed Bomb",
        "power": 80,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 412,
        "title": "Energy Ball",
        "power": 90,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 437,
        "title": "Leaf Storm",
        "power": 130,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 438,
        "title": "Power Whip",
        "power": 120,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 474,
        "title": "Venoshock",
        "power": 65,
        "type": "poison",
        "is_first": false
    },
    {
        "id": 496,
        "title": "Round",
        "power": 60,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 497,
        "title": "Echoed Voice",
        "power": 40,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 520,
        "title": "Grass Pledge",
        "power": 80,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 803,
        "title": "Grassy Glide",
        "power": 70,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 63,
        "title": "Hyper Beam",
        "power": 150,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 89,
        "title": "Earthquake",
        "power": 100,
        "type": "ground",
        "is_first": false
    },
    {
        "id": 338,
        "title": "Frenzy Plant",
        "power": 150,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 414,
        "title": "Earth Power",
        "power": 90,
        "type": "ground",
        "is_first": false
    },
    {
        "id": 416,
        "title": "Giga Impact",
        "power": 150,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 431,
        "title": "Rock Climb",
        "power": 90,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 523,
        "title": "Bulldoze",
        "power": 60,
        "type": "ground",
        "is_first": false
    },
    {
        "id": 572,
        "title": "Petal Blizzard",
        "power": 90,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 707,
        "title": "Stomping Tantrum",
        "power": 75,
        "type": "ground",
        "is_first": false
    },
    {
        "id": 805,
        "title": "Terrain Pulse",
        "power": 50,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 5,
        "title": "Mega Punch",
        "power": 80,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 7,
        "title": "Fire Punch",
        "power": 75,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 9,
        "title": "Thunder Punch",
        "power": 75,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 10,
        "title": "Scratch",
        "power": 40,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 17,
        "title": "Wing Attack",
        "power": 60,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 25,
        "title": "Mega Kick",
        "power": 120,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 44,
        "title": "Bite",
        "power": 60,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 52,
        "title": "Ember",
        "power": 40,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 53,
        "title": "Flamethrower",
        "power": 90,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 66,
        "title": "Submission",
        "power": 80,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 83,
        "title": "Fire Spin",
        "power": 35,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 91,
        "title": "Dig",
        "power": 80,
        "type": "ground",
        "is_first": false
    },
    {
        "id": 126,
        "title": "Fire Blast",
        "power": 110,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 129,
        "title": "Swift",
        "power": 60,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 154,
        "title": "Fury Swipes",
        "power": 18,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 157,
        "title": "Rock Slide",
        "power": 75,
        "type": "rock",
        "is_first": false
    },
    {
        "id": 163,
        "title": "Slash",
        "power": 70,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 223,
        "title": "Dynamic Punch",
        "power": 100,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 225,
        "title": "Dragon Breath",
        "power": 60,
        "type": "dragon",
        "is_first": false
    },
    {
        "id": 231,
        "title": "Iron Tail",
        "power": 100,
        "type": "steel",
        "is_first": false
    },
    {
        "id": 232,
        "title": "Metal Claw",
        "power": 50,
        "type": "steel",
        "is_first": false
    },
    {
        "id": 242,
        "title": "Crunch",
        "power": 80,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 246,
        "title": "Ancient Power",
        "power": 60,
        "type": "rock",
        "is_first": false
    },
    {
        "id": 257,
        "title": "Heat Wave",
        "power": 95,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 264,
        "title": "Focus Punch",
        "power": 150,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 280,
        "title": "Brick Break",
        "power": 75,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 314,
        "title": "Air Cutter",
        "power": 60,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 315,
        "title": "Overheat",
        "power": 130,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 317,
        "title": "Rock Tomb",
        "power": 60,
        "type": "rock",
        "is_first": false
    },
    {
        "id": 332,
        "title": "Aerial Ace",
        "power": 60,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 337,
        "title": "Dragon Claw",
        "power": 80,
        "type": "dragon",
        "is_first": false
    },
    {
        "id": 394,
        "title": "Flare Blitz",
        "power": 120,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 406,
        "title": "Dragon Pulse",
        "power": 85,
        "type": "dragon",
        "is_first": false
    },
    {
        "id": 407,
        "title": "Dragon Rush",
        "power": 100,
        "type": "dragon",
        "is_first": false
    },
    {
        "id": 411,
        "title": "Focus Blast",
        "power": 120,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 421,
        "title": "Shadow Claw",
        "power": 70,
        "type": "ghost",
        "is_first": false
    },
    {
        "id": 424,
        "title": "Fire Fang",
        "power": 65,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 481,
        "title": "Flame Burst",
        "power": 70,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 488,
        "title": "Flame Charge",
        "power": 50,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 510,
        "title": "Incinerate",
        "power": 60,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 512,
        "title": "Acrobatics",
        "power": 55,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 517,
        "title": "Inferno",
        "power": 100,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 519,
        "title": "Fire Pledge",
        "power": 80,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 525,
        "title": "Dragon Tail",
        "power": 60,
        "type": "dragon",
        "is_first": false
    },
    {
        "id": 612,
        "title": "Power Up Punch",
        "power": 40,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 851,
        "title": "Tera Blast",
        "power": 80,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 19,
        "title": "Fly",
        "power": 90,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 211,
        "title": "Steel Wing",
        "power": 70,
        "type": "steel",
        "is_first": false
    },
    {
        "id": 239,
        "title": "Twister",
        "power": 40,
        "type": "dragon",
        "is_first": false
    },
    {
        "id": 299,
        "title": "Blaze Kick",
        "power": 85,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 307,
        "title": "Blast Burn",
        "power": 150,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 403,
        "title": "Air Slash",
        "power": 75,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 466,
        "title": "Ominous Wind",
        "power": 60,
        "type": "ghost",
        "is_first": false
    },
    {
        "id": 507,
        "title": "Sky Drop",
        "power": 60,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 542,
        "title": "Hurricane",
        "power": 110,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 595,
        "title": "Mystical Fire",
        "power": 75,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 693,
        "title": "Brutal Swing",
        "power": 60,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 784,
        "title": "Breaking Swipe",
        "power": 60,
        "type": "dragon",
        "is_first": false
    },
    {
        "id": 799,
        "title": "Scale Shot",
        "power": 25,
        "type": "dragon",
        "is_first": false
    },
    {
        "id": 814,
        "title": "Dual Wingbeat",
        "power": 40,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 815,
        "title": "Scorching Sands",
        "power": 70,
        "type": "ground",
        "is_first": false
    },
    {
        "id": 8,
        "title": "Ice Punch",
        "power": 75,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 55,
        "title": "Water Gun",
        "power": 40,
        "type": "water",
        "is_first": false
    },
    {
        "id": 56,
        "title": "Hydro Pump",
        "power": 110,
        "type": "water",
        "is_first": false
    },
    {
        "id": 57,
        "title": "Surf",
        "power": 90,
        "type": "water",
        "is_first": false
    },
    {
        "id": 58,
        "title": "Ice Beam",
        "power": 90,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 59,
        "title": "Blizzard",
        "power": 110,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 61,
        "title": "Bubble Beam",
        "power": 65,
        "type": "water",
        "is_first": false
    },
    {
        "id": 93,
        "title": "Confusion",
        "power": 50,
        "type": "psychic",
        "is_first": false
    },
    {
        "id": 127,
        "title": "Waterfall",
        "power": 80,
        "type": "water",
        "is_first": false
    },
    {
        "id": 145,
        "title": "Bubble",
        "power": 40,
        "type": "water",
        "is_first": false
    },
    {
        "id": 196,
        "title": "Icy Wind",
        "power": 55,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 205,
        "title": "Rollout",
        "power": 30,
        "type": "rock",
        "is_first": false
    },
    {
        "id": 229,
        "title": "Rapid Spin",
        "power": 50,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 250,
        "title": "Whirlpool",
        "power": 35,
        "type": "water",
        "is_first": false
    },
    {
        "id": 252,
        "title": "Fake Out",
        "power": 40,
        "type": "normal",
        "is_first": true
    },
    {
        "id": 291,
        "title": "Dive",
        "power": 80,
        "type": "water",
        "is_first": false
    },
    {
        "id": 323,
        "title": "Water Spout",
        "power": 150,
        "type": "water",
        "is_first": false
    },
    {
        "id": 330,
        "title": "Muddy Water",
        "power": 90,
        "type": "water",
        "is_first": false
    },
    {
        "id": 352,
        "title": "Water Pulse",
        "power": 60,
        "type": "water",
        "is_first": false
    },
    {
        "id": 362,
        "title": "Brine",
        "power": 65,
        "type": "water",
        "is_first": false
    },
    {
        "id": 396,
        "title": "Aura Sphere",
        "power": 80,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 401,
        "title": "Aqua Tail",
        "power": 90,
        "type": "water",
        "is_first": false
    },
    {
        "id": 428,
        "title": "Zen Headbutt",
        "power": 80,
        "type": "psychic",
        "is_first": false
    },
    {
        "id": 453,
        "title": "Aqua Jet",
        "power": 40,
        "type": "water",
        "is_first": true
    },
    {
        "id": 503,
        "title": "Scald",
        "power": 80,
        "type": "water",
        "is_first": false
    },
    {
        "id": 518,
        "title": "Water Pledge",
        "power": 80,
        "type": "water",
        "is_first": false
    },
    {
        "id": 812,
        "title": "Flip Turn",
        "power": 60,
        "type": "water",
        "is_first": false
    },
    {
        "id": 308,
        "title": "Hydro Cannon",
        "power": 150,
        "type": "water",
        "is_first": false
    },
    {
        "id": 324,
        "title": "Signal Beam",
        "power": 75,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 399,
        "title": "Dark Pulse",
        "power": 80,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 419,
        "title": "Avalanche",
        "power": 60,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 430,
        "title": "Flash Cannon",
        "power": 80,
        "type": "steel",
        "is_first": false
    },
    {
        "id": 479,
        "title": "Smack Down",
        "power": 50,
        "type": "rock",
        "is_first": false
    },
    {
        "id": 710,
        "title": "Liquidation",
        "power": 85,
        "type": "water",
        "is_first": false
    },
    {
        "id": 776,
        "title": "Body Press",
        "power": 80,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 450,
        "title": "Bug Bite",
        "power": 60,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 527,
        "title": "Electroweb",
        "power": 55,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 16,
        "title": "Gust",
        "power": 40,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 60,
        "title": "Psybeam",
        "power": 65,
        "type": "psychic",
        "is_first": false
    },
    {
        "id": 94,
        "title": "Psychic",
        "power": 90,
        "type": "psychic",
        "is_first": false
    },
    {
        "id": 138,
        "title": "Dream Eater",
        "power": 100,
        "type": "psychic",
        "is_first": false
    },
    {
        "id": 168,
        "title": "Thief",
        "power": 60,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 247,
        "title": "Shadow Ball",
        "power": 80,
        "type": "ghost",
        "is_first": false
    },
    {
        "id": 318,
        "title": "Silver Wind",
        "power": 60,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 369,
        "title": "U Turn",
        "power": 70,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 405,
        "title": "Bug Buzz",
        "power": 90,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 522,
        "title": "Struggle Bug",
        "power": 50,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 577,
        "title": "Draining Kiss",
        "power": 50,
        "type": "fairy",
        "is_first": false
    },
    {
        "id": 611,
        "title": "Infestation",
        "power": 20,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 676,
        "title": "Pollen Puff",
        "power": 90,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 40,
        "title": "Poison Sting",
        "power": 15,
        "type": "poison",
        "is_first": false
    },
    {
        "id": 31,
        "title": "Fury Attack",
        "power": 15,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 41,
        "title": "Twineedle",
        "power": 25,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 42,
        "title": "Pin Missile",
        "power": 25,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 64,
        "title": "Peck",
        "power": 35,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 228,
        "title": "Pursuit",
        "power": 40,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 371,
        "title": "Payback",
        "power": 50,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 372,
        "title": "Assurance",
        "power": 60,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 398,
        "title": "Poison Jab",
        "power": 80,
        "type": "poison",
        "is_first": false
    },
    {
        "id": 404,
        "title": "X Scissor",
        "power": 80,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 529,
        "title": "Drill Run",
        "power": 80,
        "type": "ground",
        "is_first": false
    },
    {
        "id": 565,
        "title": "Fell Stinger",
        "power": 50,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 675,
        "title": "Throat Chop",
        "power": 80,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 98,
        "title": "Quick Attack",
        "power": 40,
        "type": "normal",
        "is_first": true
    },
    {
        "id": 143,
        "title": "Sky Attack",
        "power": 140,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 185,
        "title": "Feint Attack",
        "power": 60,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 253,
        "title": "Uproar",
        "power": 90,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 365,
        "title": "Pluck",
        "power": 60,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 413,
        "title": "Brave Bird",
        "power": 120,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 85,
        "title": "Thunderbolt",
        "power": 90,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 87,
        "title": "Thunder",
        "power": 110,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 158,
        "title": "Hyper Fang",
        "power": 80,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 172,
        "title": "Flame Wheel",
        "power": 60,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 279,
        "title": "Revenge",
        "power": 60,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 343,
        "title": "Covet",
        "power": 60,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 351,
        "title": "Shock Wave",
        "power": 60,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 387,
        "title": "Last Resort",
        "power": 140,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 389,
        "title": "Sucker Punch",
        "power": 70,
        "type": "dark",
        "is_first": true
    },
    {
        "id": 451,
        "title": "Charge Beam",
        "power": 50,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 514,
        "title": "Retaliate",
        "power": 70,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 528,
        "title": "Wild Charge",
        "power": 90,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 65,
        "title": "Drill Peck",
        "power": 80,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 161,
        "title": "Tri Attack",
        "power": 80,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 310,
        "title": "Astonish",
        "power": 30,
        "type": "ghost",
        "is_first": false
    },
    {
        "id": 21,
        "title": "Slam",
        "power": 80,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 35,
        "title": "Wrap",
        "power": 15,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 51,
        "title": "Acid",
        "power": 40,
        "type": "poison",
        "is_first": false
    },
    {
        "id": 305,
        "title": "Poison Fang",
        "power": 50,
        "type": "poison",
        "is_first": false
    },
    {
        "id": 342,
        "title": "Poison Tail",
        "power": 50,
        "type": "poison",
        "is_first": false
    },
    {
        "id": 426,
        "title": "Mud Bomb",
        "power": 65,
        "type": "ground",
        "is_first": false
    },
    {
        "id": 441,
        "title": "Gunk Shot",
        "power": 120,
        "type": "poison",
        "is_first": false
    },
    {
        "id": 482,
        "title": "Sludge Wave",
        "power": 95,
        "type": "poison",
        "is_first": false
    },
    {
        "id": 491,
        "title": "Acid Spray",
        "power": 40,
        "type": "poison",
        "is_first": false
    },
    {
        "id": 562,
        "title": "Belch",
        "power": 120,
        "type": "poison",
        "is_first": false
    },
    {
        "id": 422,
        "title": "Thunder Fang",
        "power": 65,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 423,
        "title": "Ice Fang",
        "power": 65,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 6,
        "title": "Pay Day",
        "power": 40,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 24,
        "title": "Double Kick",
        "power": 30,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 84,
        "title": "Thunder Shock",
        "power": 40,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 192,
        "title": "Zap Cannon",
        "power": 120,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 209,
        "title": "Spark",
        "power": 65,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 344,
        "title": "Volt Tackle",
        "power": 120,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 364,
        "title": "Feint",
        "power": 30,
        "type": "normal",
        "is_first": true
    },
    {
        "id": 435,
        "title": "Discharge",
        "power": 80,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 521,
        "title": "Volt Switch",
        "power": 70,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 574,
        "title": "Disarming Voice",
        "power": 40,
        "type": "fairy",
        "is_first": false
    },
    {
        "id": 583,
        "title": "Play Rough",
        "power": 90,
        "type": "fairy",
        "is_first": false
    },
    {
        "id": 609,
        "title": "Nuzzle",
        "power": 20,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 804,
        "title": "Rising Voltage",
        "power": 70,
        "type": "electric",
        "is_first": false
    },
    {
        "id": 885,
        "title": "Trailblaze",
        "power": 50,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 141,
        "title": "Leech Life",
        "power": 80,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 306,
        "title": "Crush Claw",
        "power": 75,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 328,
        "title": "Sand Tomb",
        "power": 35,
        "type": "ground",
        "is_first": false
    },
    {
        "id": 341,
        "title": "Mud Shot",
        "power": 55,
        "type": "ground",
        "is_first": false
    },
    {
        "id": 400,
        "title": "Night Slash",
        "power": 70,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 498,
        "title": "Chip Away",
        "power": 70,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 798,
        "title": "Steel Roller",
        "power": 130,
        "type": "steel",
        "is_first": false
    },
    {
        "id": 444,
        "title": "Stone Edge",
        "power": 100,
        "type": "rock",
        "is_first": false
    },
    {
        "id": 276,
        "title": "Superpower",
        "power": 120,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 350,
        "title": "Rock Blast",
        "power": 25,
        "type": "rock",
        "is_first": false
    },
    {
        "id": 506,
        "title": "Hex",
        "power": 65,
        "type": "ghost",
        "is_first": false
    },
    {
        "id": 667,
        "title": "High Horsepower",
        "power": 95,
        "type": "ground",
        "is_first": false
    },
    {
        "id": 30,
        "title": "Horn Attack",
        "power": 65,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 37,
        "title": "Thrash",
        "power": 120,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 457,
        "title": "Head Smash",
        "power": 150,
        "type": "rock",
        "is_first": false
    },
    {
        "id": 684,
        "title": "Smart Strike",
        "power": 70,
        "type": "steel",
        "is_first": false
    },
    {
        "id": 224,
        "title": "Megahorn",
        "power": 120,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 1,
        "title": "Pound",
        "power": 40,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 3,
        "title": "Double Slap",
        "power": 15,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 304,
        "title": "Hyper Voice",
        "power": 90,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 309,
        "title": "Meteor Mash",
        "power": 90,
        "type": "steel",
        "is_first": false
    },
    {
        "id": 340,
        "title": "Bounce",
        "power": 85,
        "type": "flying",
        "is_first": false
    },
    {
        "id": 358,
        "title": "Wake Up Slap",
        "power": 70,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 409,
        "title": "Drain Punch",
        "power": 75,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 473,
        "title": "Psyshock",
        "power": 80,
        "type": "psychic",
        "is_first": false
    },
    {
        "id": 500,
        "title": "Stored Power",
        "power": 20,
        "type": "psychic",
        "is_first": false
    },
    {
        "id": 585,
        "title": "Moonblast",
        "power": 95,
        "type": "fairy",
        "is_first": false
    },
    {
        "id": 605,
        "title": "Dazzling Gleam",
        "power": 80,
        "type": "fairy",
        "is_first": false
    },
    {
        "id": 800,
        "title": "Meteor Beam",
        "power": 120,
        "type": "rock",
        "is_first": false
    },
    {
        "id": 802,
        "title": "Misty Explosion",
        "power": 100,
        "type": "fairy",
        "is_first": false
    },
    {
        "id": 326,
        "title": "Extrasensory",
        "power": 80,
        "type": "psychic",
        "is_first": false
    },
    {
        "id": 492,
        "title": "Foul Play",
        "power": 95,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 541,
        "title": "Tail Slap",
        "power": 25,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 807,
        "title": "Burning Jealousy",
        "power": 70,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 120,
        "title": "Self Destruct",
        "power": 200,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 861,
        "title": "Ice Spinner",
        "power": 80,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 876,
        "title": "Pound",
        "power": 40,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 886,
        "title": "Chilling Water",
        "power": 50,
        "type": "water",
        "is_first": false
    },
    {
        "id": 797,
        "title": "Expanding Force",
        "power": 80,
        "type": "psychic",
        "is_first": false
    },
    {
        "id": 71,
        "title": "Absorb",
        "power": 20,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 440,
        "title": "Cross Poison",
        "power": 70,
        "type": "poison",
        "is_first": false
    },
    {
        "id": 884,
        "title": "Pounce",
        "power": 50,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 408,
        "title": "Power Gem",
        "power": 80,
        "type": "rock",
        "is_first": false
    },
    {
        "id": 555,
        "title": "Snarl",
        "power": 55,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 808,
        "title": "Lash Out",
        "power": 75,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 806,
        "title": "Skitter Smack",
        "power": 70,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 238,
        "title": "Cross Chop",
        "power": 100,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 248,
        "title": "Future Sight",
        "power": 120,
        "type": "psychic",
        "is_first": false
    },
    {
        "id": 485,
        "title": "Synchronoise",
        "power": 120,
        "type": "psychic",
        "is_first": false
    },
    {
        "id": 490,
        "title": "Low Sweep",
        "power": 65,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 499,
        "title": "Clear Smog",
        "power": 50,
        "type": "poison",
        "is_first": false
    },
    {
        "id": 2,
        "title": "Karate Chop",
        "power": 50,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 265,
        "title": "Smelling Salts",
        "power": 70,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 370,
        "title": "Close Combat",
        "power": 120,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 410,
        "title": "Vacuum Wave",
        "power": 40,
        "type": "fighting",
        "is_first": true
    },
    {
        "id": 530,
        "title": "Dual Chop",
        "power": 40,
        "type": "dragon",
        "is_first": false
    },
    {
        "id": 681,
        "title": "Power Trip",
        "power": 20,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 889,
        "title": "Rage Fist",
        "power": 50,
        "type": "ghost",
        "is_first": false
    },
    {
        "id": 682,
        "title": "Burn Up",
        "power": 130,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 706,
        "title": "Psychic Fangs",
        "power": 85,
        "type": "psychic",
        "is_first": false
    },
    {
        "id": 833,
        "title": "Raging Fury",
        "power": 120,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 245,
        "title": "Extreme Speed",
        "power": 80,
        "type": "normal",
        "is_first": true
    },
    {
        "id": 442,
        "title": "Iron Head",
        "power": 80,
        "type": "steel",
        "is_first": false
    },
    {
        "id": 301,
        "title": "Ice Ball",
        "power": 30,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 509,
        "title": "Circle Throw",
        "power": 60,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 663,
        "title": "Darkest Lariat",
        "power": 85,
        "type": "dark",
        "is_first": false
    },
    {
        "id": 427,
        "title": "Psycho Cut",
        "power": 70,
        "type": "psychic",
        "is_first": false
    },
    {
        "id": 27,
        "title": "Rolling Kick",
        "power": 60,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 233,
        "title": "Vital Throw",
        "power": 70,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 418,
        "title": "Bullet Punch",
        "power": 40,
        "type": "steel",
        "is_first": true
    },
    {
        "id": 348,
        "title": "Leaf Blade",
        "power": 90,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 536,
        "title": "Leaf Tornado",
        "power": 65,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 62,
        "title": "Aurora Beam",
        "power": 65,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 132,
        "title": "Constrict",
        "power": 10,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 88,
        "title": "Rock Throw",
        "power": 50,
        "type": "rock",
        "is_first": false
    },
    {
        "id": 153,
        "title": "Explosion",
        "power": 250,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 359,
        "title": "Hammer Arm",
        "power": 100,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 537,
        "title": "Steamroller",
        "power": 65,
        "type": "bug",
        "is_first": false
    },
    {
        "id": 23,
        "title": "Stomp",
        "power": 65,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 669,
        "title": "Solar Blade",
        "power": 125,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 883,
        "title": "Snowscape",
        "power": 0,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 534,
        "title": "Razor Shell",
        "power": 75,
        "type": "water",
        "is_first": false
    },
    {
        "id": 429,
        "title": "Mirror Shot",
        "power": 65,
        "type": "steel",
        "is_first": false
    },
    {
        "id": 443,
        "title": "Magnet Bomb",
        "power": 60,
        "type": "steel",
        "is_first": false
    },
    {
        "id": 796,
        "title": "Steel Beam",
        "power": 140,
        "type": "steel",
        "is_first": false
    },
    {
        "id": 660,
        "title": "First Impression",
        "power": 90,
        "type": "bug",
        "is_first": true
    },
    {
        "id": 26,
        "title": "Jump Kick",
        "power": 100,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 458,
        "title": "Double Hit",
        "power": 35,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 122,
        "title": "Lick",
        "power": 30,
        "type": "ghost",
        "is_first": false
    },
    {
        "id": 333,
        "title": "Icicle Spear",
        "power": 25,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 420,
        "title": "Ice Shard",
        "power": 40,
        "type": "ice",
        "is_first": true
    },
    {
        "id": 524,
        "title": "Frost Breath",
        "power": 60,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 325,
        "title": "Shadow Punch",
        "power": 60,
        "type": "ghost",
        "is_first": false
    },
    {
        "id": 425,
        "title": "Shadow Sneak",
        "power": 40,
        "type": "ghost",
        "is_first": true
    },
    {
        "id": 128,
        "title": "Clamp",
        "power": 35,
        "type": "water",
        "is_first": false
    },
    {
        "id": 131,
        "title": "Spike Cannon",
        "power": 20,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 556,
        "title": "Icicle Crash",
        "power": 85,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 123,
        "title": "Smog",
        "power": 30,
        "type": "poison",
        "is_first": false
    },
    {
        "id": 809,
        "title": "Poltergeist",
        "power": 110,
        "type": "ghost",
        "is_first": false
    },
    {
        "id": 566,
        "title": "Phantom Force",
        "power": 90,
        "type": "ghost",
        "is_first": false
    },
    {
        "id": 11,
        "title": "Vice Grip",
        "power": 55,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 152,
        "title": "Crabhammer",
        "power": 100,
        "type": "water",
        "is_first": false
    },
    {
        "id": 121,
        "title": "Egg Bomb",
        "power": 100,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 140,
        "title": "Barrage",
        "power": 15,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 452,
        "title": "Wood Hammer",
        "power": 120,
        "type": "grass",
        "is_first": false
    },
    {
        "id": 125,
        "title": "Bone Club",
        "power": 65,
        "type": "ground",
        "is_first": false
    },
    {
        "id": 155,
        "title": "Bonemerang",
        "power": 50,
        "type": "ground",
        "is_first": false
    },
    {
        "id": 198,
        "title": "Bone Rush",
        "power": 25,
        "type": "ground",
        "is_first": false
    },
    {
        "id": 136,
        "title": "High Jump Kick",
        "power": 130,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 4,
        "title": "Comet Punch",
        "power": 18,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 146,
        "title": "Dizzy Punch",
        "power": 70,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 183,
        "title": "Mach Punch",
        "power": 40,
        "type": "fighting",
        "is_first": true
    },
    {
        "id": 327,
        "title": "Sky Uppercut",
        "power": 85,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 190,
        "title": "Octazooka",
        "power": 65,
        "type": "water",
        "is_first": false
    },
    {
        "id": 181,
        "title": "Powder Snow",
        "power": 40,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 531,
        "title": "Heart Stamp",
        "power": 60,
        "type": "psychic",
        "is_first": false
    },
    {
        "id": 813,
        "title": "Triple Axel",
        "power": 20,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 436,
        "title": "Lava Plume",
        "power": 80,
        "type": "fire",
        "is_first": false
    },
    {
        "id": 480,
        "title": "Storm Throw",
        "power": 60,
        "type": "fighting",
        "is_first": false
    },
    {
        "id": 873,
        "title": "Raging Bull",
        "power": 90,
        "type": "normal",
        "is_first": false
    },
    {
        "id": 573,
        "title": "Freeze Dry",
        "power": 70,
        "type": "ice",
        "is_first": false
    },
    {
        "id": 664,
        "title": "Sparkling Aria",
        "power": 90,
        "type": "water",
        "is_first": false
    },
    {
        "id": 434,
        "title": "Draco Meteor",
        "power": 130,
        "type": "dragon",
        "is_first": false
    },
    {
        "id": 540,
        "title": "Psystrike",
        "power": 100,
        "type": "psychic",
        "is_first": false
    }
]