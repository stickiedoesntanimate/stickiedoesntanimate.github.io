function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getArticle(word) {

    if (word.slice(0,3) === "The") {
        return ''
    }

    const firstLetter = word.slice(0,1);
    const vowels = ['A', 'E', 'I', 'O', 'U', '1', '8'];

    if (vowels.includes(firstLetter)) {
        return 'an';
    } else {
        return 'a';
    }
}
function vanillalinkify(input) {
    var inputtolink = input
    //add "the" if its a tarot and not one that doesnt require a "the"
    if (tarot.includes(inputtolink) && !(inputtolink === 'Justice') && !(inputtolink === 'Strength') && !(inputtolink === 'Death') && !(inputtolink === 'Temperance') && !(inputtolink === 'Judgement')) {
        inputtolink = 'The ' + inputtolink
    }
    do {
        inputtolink = inputtolink.replace(" ", "_")
    } while (inputtolink.includes(" "))
    return "https://balatrowiki.org/w/" + inputtolink
}

function linkify(input) {
    var inputtolink = input
    do {
        inputtolink = inputtolink.replace(" ", "_")
    } while (inputtolink.includes(" "))
    return inputtolink
}

function removefrom(thing, array) {
    var index = array.indexOf(thing);
    if (index > -1) { // only splice array when item is found
        array.splice(index, 1); // 2nd parameter means remove one item only
    }
}
function removerarity(raritytoremove) {
    var index = rarities.indexOf(raritytoremove);
    if (index > -1) { // only splice array when item is found
        rarityweights.splice(index, 1); // 2nd parameter means remove one item only
    }
    removefrom(raritytoremove, rarities)
}
function weightedRandom(items, weights) {
  if (items.length !== weights.length) {
    console.log("Items and weights arrays must have the same length. THE ITEMS:" + items);
  }

  let totalWeight = 0;
  for (let i = 0; i < weights.length; i++) {
    totalWeight += weights[i];
  }

  const randomNumber = Math.random() * totalWeight;

  let accumulatedWeight = 0;
  for (let i = 0; i < items.length; i++) {
    accumulatedWeight += weights[i];
    if (randomNumber < accumulatedWeight) {
      return items[i];
    }
  }
  // This should ideally not be reached if weights are positive and totalWeight is correctly calculated.
  return null; 
}
function pickrandomjoker() {
    const jokers = [
        "Joker", "Greedy Joker", "Lusty Joker", "Wrathful Joker", "Gluttonous Joker",
        "Jolly Joker", "Zany Joker", "Mad Joker", "Crazy Joker", "Droll Joker",
        "Sly Joker", "Wily Joker", "Clever Joker", "Devious Joker", "Crafty Joker",
        "Half Joker", "Joker Stencil", "Four Fingers", "Mime", "Credit Card",
        "Ceremonial Dagger", "Banner", "Mystic Summit", "Marble Joker", "Loyalty Card",
        "8 Ball", "Misprint", "Dusk", "Raised Fist", "Chaos the Clown", "Fibonacci",
        "Steel Joker", "Scary Face", "Abstract Joker", "Delayed Gratification",
        "Hack", "Pareidolia", "Gros Michel", "Even Steven", "Odd Todd", "Scholar",
        "Business Card", "Supernova", "Ride the Bus", "Space Joker", "Egg", "Burglar",
        "Blackboard", "Runner", "Ice Cream", "DNA", "Splash", "Blue Joker", "Sixth Sense",
        "Constellation", "Hiker", "Faceless Joker", "Green Joker", "Superposition",
        "To Do List", "Cavendish", "Card Sharp", "Red Card", "Madness", "Square Joker",
        "Séance", "Riff-Raff", "Vampire", "Shortcut", "Hologram", "Vagabond", "Baron",
        "Cloud 9", "Rocket", "Obelisk", "Midas Mask", "Luchador", "Photograph",
        "Gift Card", "Turtle Bean", "Erosion", "Reserved Parking", "Mail-In Rebate",
        "To the Moon", "Hallucination", "Fortune Teller", "Juggler", "Drunkard",
        "Stone Joker", "Golden Joker", "Lucky Cat", "Baseball Card", "Bull",
        "Diet Cola", "Trading Card", "Flash Card", "Popcorn", "Spare Trousers",
        "Ancient Joker", "Ramen", "Walkie Talkie", "Seltzer", "Castle", "Smiley Face",
        "Campfire", "Golden Ticket", "Mr. Bones", "Acrobat", "Sock and Buskin",
        "Swashbuckler", "Troubadour", "Certificate", "Smeared Joker", "Throwback",
        "Hanging Chad", "Rough Gem", "Bloodstone", "Arrowhead", "Onyx Agate",
        "Glass Joker", "Showman", "Flower Pot", "Blueprint", "Wee Joker", "Merry Andy",
        "Oops! All 6s", "The Idol", "Seeing Double", "Matador", "Hit the Road",
        "The Duo", "The Trio", "The Family", "The Order", "The Tribe", "Stuntman",
        "Invisible Joker", "Brainstorm", "Satellite", "Shoot the Moon", "Driver's License",
        "Cartomancer", "Astronomer", "Burnt Joker", "Bootstraps", "Canio", "Triboulet",
        "Yorick", "Chicot", "Perkeo"
    ]
    const paperbackjokers = [
        "Calling Card", "Forgery", "Wish You Were Here", "Quick Fix", "The One Who Waits",
        "Unholy Alliance", "Stamp", "Solar System", "Pool Table", "Meeple", "Solemn Lament",
        "Boundary of Death", "Furioso", "Mismatched Sock", "Basic Joker Energy", "Reference Card",
        "Oracle", "Skydiver", "Surfer", "Apple", "Joker Cookie", "Double Dutchman", "Nachos",
        "Crispy Taco", "Soft Taco", "Complete Breakfast", "Ghost Cola", "B-Soda", "Ice Cube",
        "Cream Liqueur", "Deviled Egg", "Champagne", "Coffee", "Matcha", "Pinot Noir",
        "Milk Tea", "Epic Sauce", "Dreamsicle", "Popsicle Stick", "Cakepop", "Pop-Stick",
        "Caramel Apple", "Pointy Stick", "Charred Marshmallow", "Sticky Stick", "Pear",
        "Sake Cup", "Full Moon", "Black Rainbows", "Emergency Broadcast", "Blue Marble",
        "Triple Moon Goddess", "As Above, So Below", "Plague Doctor", "WhiteNight",
        "One Sin and Hundreds of Good Deeds", "Angel Investor", "Shopping Center",
        "High Speed Rail", "Grand Strategy", "Ready to Fly", "Great Wave", "Let it Happen",
        "Joker CD-i", "Determination", "Prince of Darkness", "GIGA SIZE", "Jester of Nihil",
        "[[WILD PRIZE!1!]]", "Deadringer", "Bicycle", "Joke Master", "Pride Flag", "Bismuth",
        "Cherry Blossoms", "Hole in One", "Blue Bonnets", "Derecho", "Autumn Leaves",
        "River", "Evergreens", "Backpack", "Mexican Train", "Resurrections",
        "Summoning Circle", "Union Card", "Book of Vengeance", "Moribund", "Subterfuge",
        "The World", "Blood Rain", "Paranoia", "Touch Tone Joker", "Jestrica", 
        "You Are a Fool!", "Alert", "Legacy", "Telamon", "Weather Radio", "Power Surge",
        "Find Jimbo", "Jimbo's Joyous Joker Jamboree", "The Normal Joker", "Jimbo Adventure",
        "Ddakji", "Pocket Pair", "Ultra Rare", "The Quiet", "Big Misser", "Da Capo",
        "Heretical Joker", "Quartz", "Rock Candy", "Rockin' Stick", "Birches", "Black Star",
        "Shooting Star", "Blue Star", "Lurid Joker", "Zealous Joker", "The Dynasty", "J&J's",
        "Master Spark", "Prism", "Fraudulent Joker", "Pyrite", "Tanghulu", "Sweet Stick",
        "Wheat Field", "Solar Eclipse", "Gambit", "King Me", "Manilla Folder", "Clippy",
        "Clothespin", "Kintsugi Joker", "Watercolor Joker", "Medic", "Festive Joker",
        "Sommelier", "Spotty Joker", "L'angely", "Pedrillo", "Nichola"
    ]
    const cryptidjokers = [
        "Adroit Joker",
        "Nostalgic Googol Play Card",
        "...Like Antennas to Heaven",
        "AP Joker",
        "Arsonist",
        "Astral in a Bottle",
        "Big Cube",
        "Huge",
        "Blacklist",
        "Rotten Egg",
        "Blender",
        "Blurred Joker",
        "Bonk",
        "Bonkers Joker",
        "Bonus Joker",
        "Booster Joker",
        "Boredom",
        "Brittle Candy",
        "Bubble M",
        "Bus Driver",
        "Buttercup",
        "Candy Basket",
        "Candy Buttons",
        "Candy Cane",
        "Candy Dagger",
        "Candy Sticks",
        "Canvas",
        "Caramel",
        "Cat Owl",
        "Chad",
        "Chili Pepper",
        "Chocolate Die",
        "Circulus Pistoris",
        "Circus",
        "The Clash",
        "The",
        "Clicked Cookie",
        "Clockwork Joker",
        "Code Joker",
        "Crypto Coin",
        "Compound Interest",
        "Copy/Paste",
        "Cotton Candy",
        "Crustulum",
        "M Chain",
        "Cube",
        "Sob",
        "Cursor",
        "Cut",
        "Delirious Joker",
        "Demicolon",
        "Starfruit",
        "Digital Hallucinations",
        "Discreet Joker",
        "Doodle M",
        "Double Scale",
        "Dropshot",
        "Dubious Joker",
        "The Duos",
        "Duplicare",
        "Effarcire",
        "Energia",
        "Ace Aequilibrium",
        "{C:red}ERR{}{C:dark_edition}O{}{C:red}R{}",
        "Eternal Flame",
        "Exoplanet",
        "Exponentia",
        "Exposed",
        "Eye of Hagane",
        "High Five",
        "Facile",
        "Familiar Currency",
        "The Filler",
        "Fractal Fingers",
        "On the Flip Side",
        "Fast Food M",
        "Foolhardy Joker",
        "Undefined Joker",
        "Formidiulosus",
        "Foxy Joker",
        "Fidget Spinner",
        "Garden of Forking Paths",
        "Gemini",
        "Ghost",
        "Absurd Joker",
        "Gold Joker",
        "Googol Play Card",
        ":D",
        "Happy House",
        "The Home",
        "Consume-able",
        "Hunting Season",
        "Iterum",
        "Jawbreaker",
        "Jimball",
        "Jolly Joker?",
        "Jimbo-tron 9000",
        "Kidnapping",
        "Kitty Printer",
        "Kooky Joker",
        "Krusty the Clown",
        "Kaleidoscope",
        "LeBaron James",
        "Light Up the Night",
        "Monster",
        "Loopy",
        "Lucky Joker",
        "Luigi",
        "m",
        "M",
        "Macabre Joker",
        "Fridge Magnet",
        "Manic Joker",
        "Mario",
        "Mask",
        "Maximized",
        "Labyrinth",
        "Megg",
        "Mellowcreme",
        "Membership Card",
        "Old Membership Card",
        "Meteor Shower",
        "Neon M",
        "Mondrian",
        "Monkey Dagger",
        "Monopoly Money",
        "Morse Code",
        "Tredecim",
        "M Stack",
        "Mult Joker",
        "Necromancer",
        "Negative Joker",
        "Nice",
        "Night",
        "No Sound, No Memory",
        "Motebook",
        "Number Blocks",
        "The Nuts",
        "Nutty Joker",
        "Oil Lamp",
        "Old Blueprint",
        "Nostalgic Candy",
        "Nostalgic Invisible Joker",
        "Panopticon",
        "Penetrating Joker",
        "Pickle",
        "Pirate Dagger",
        "Pity Prize",
        "Pot of Jokes",
        "Primus",
        "Pumpkin",
        "Carved Pumpkin",
        "Python",
        "Queen's Gambit",
        "The Quintet",
        "Red Bloon",
        "Redeo",
        "Rescribere",
        "Reverse Card",
        "RNJoker",
        "Sacrifice",
        "Sapling",
        "Savvy Joker",
        "Scalae",
        "Scrabble Tile",
        "Seal the Deal",
        "Shrewd Joker",
        "Silly Joker",
        "Tiny",
        "One for All",
        "Flesh Panopticon",
        "Sock and Sock",
        "Broken Home",
        "Yarn Ball",
        "Pizza",
        "Pizza Slice",
        "Paved Joker",
        "Fading Joker",
        "Poor Joker",
        "Celestial Globe",
        "Spectrogram",
        "Speculo",
        "Spy",
        "Stardust",
        "Stella Mortis",
        "The Stronghold",
        "Subtle Joker",
        "Supercell",
        "SUS",
        "The Swarm",
        "Sync Catalyst",
        "Tax Fraud",
        "Tenebris",
        "Translucent Joker",
        "Treacherous Joker",
        "Nebulous Joker",
        "Words Can't Even Begin to Describe This Joker",
        "Many Have Lost Their Minds Comprehending This Joker",
        "The Complete and Utter Annihilation of Everything That Makes Balatro Sacred",
        "Trick-or-Treat",
        "Tricksy Joker",
        "Triplet Rhythm",
        "Tropical Smoothie",
        "The Unity",
        "Universe",
        "Universum",
        "Unjust Dagger",
        "Non Verisimile",
        "Virgo",
        "Wacky Joker",
        "Waluigi",
        "Wario",
        "Weebonacci",
        "2D",
        "Wheel of Hope",
        "The WHIP",
        "Wonka Bar",
        "Wrapped Candy",
        "Zooble",
    ]
    const buncojokers = [
        "Cassette (A Side)",
        "Cassette (B Side)",
        "Mosaic Joker",
        "Voxel Joker",
        "Crop Circles",
        "X-Ray",
        "Dread",
        "Prehistoric Joker",
        "Linocut Joker",
        "Ghost Print",
        "Loan Shark",
        "Basement Joker",
        "Shepherd Joker",
        "Joker Knight",
        "Joker Man & Jester Boy Trading Card No. 54",
        "Dogs Playing Poker",
        "Righthook Joker",
        "Fiendish Joker",
        "Carnival",
        "Sledgehammer",
        "Doorhanger",
        "Fingerprints",
        "Zero Shapiro",
        "Nil Bill",
        "Bierdeckel",
        "Registration Plate",
        "Slothful Joker",
        "Neon Joker",
        "Gameplan",
        "Conquest",
        "Hierarchy of Needs",
        "Dwarven Joker",
        "Aristocrat",
        "Metallurgist",
        "Juggalo",
        "Head in the Clouds",
        "Headshot",
        "Trigger Finger",
        "Hopscotch",
        "Pawn",
        "Puzzle Board",
        "Vandalism",
        "Protester",
        "Doodle",
        "Disproportionality",
        "Running Joke",
        "On Broadway",
        "Rasta",
        "Critic",
        "Cellphone",
        "Wino",
        "Bounty Hunter",
        "Mousetrap",
        "The Joker",
        "Tangram",
        "Domino",
        "Glue Gun",
        "Taped Jokers",
        "Rubber Band Ball",
        "Headache",
        "Games Collector",
        "Jumper",
        "Stylophone",
        "Kite Experiment",
        "Robot",
        "Hardtack",
        "Pica Joker",
        "Zealous Joker",
        "Lurid Joker",
        "Envious Joker",
        "Proud Joker",
        "Wishalloy",
        "Unobtanium",
        "The Dynasty",
        "Magic Wand",
        "Starfruit",
        "Fondue",
        "Myopia",
        "Astigmatism",
        "Roy G. Biv",
        "Rigoletto",
    ]
    const jokerstopick = [
        "Vanilla"
    ]

    if (document.getElementById("paperback").checked) {
        jokerstopick.push("Paperback")
    }
    if (document.getElementById("cryptid").checked) {
        jokerstopick.push("Cryptid")
    }
    if (document.getElementById("bunco").checked) {
        jokerstopick.push("Bunco")
    }



    var jokerpicked = getRandomItem(jokerstopick)

    if (jokerpicked === "Vanilla") { //vanillalinkify(input)
        jokerpicked = getRandomItem(jokers)
        jokerpicked = '<a target="_blank" rel="noopener noreferrer" href="' + vanillalinkify(jokerpicked)+ '">' + jokerpicked + '</a>'
    } else if (jokerpicked === "Paperback") {
        jokerpicked = '<a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Paperback/Jokers">' + getRandomItem(paperbackjokers) + '</a>'
    } else if (jokerpicked === "Cryptid") {
        jokerpicked = getRandomItem(cryptidjokers)
        jokerpicked = '<a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Cryptid/' + linkify(jokerpicked) + '">' + jokerpicked + '</a>'
    } else if (jokerpicked === "Bunco") {
        jokerpicked = getRandomItem(buncojokers)
        if ((jokerpicked === "Cassette (A Side)") || (jokerpicked === "Cassette (B Side)")) { //A and B side dont have seperate wiki entries
            jokerpicked = '<a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Bunco/Cassette">' + jokerpicked + '</a>'
        } else {
            jokerpicked = '<a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Bunco/' + linkify(jokerpicked) + '">' + jokerpicked + '</a>'
        }
    } else {
        console.log("Somehow jokerstopick isnt in the list oopsies")
    }
    return jokerpicked
}


const start = [
    "On the first hand",
    "On the last hand",
    "If played hand contains [containinghand]",
    "If played hand contains [arank]", //todo: choose 1, 2, or 3 ranks
    "If played hand contains [arank] of [suitp]",
    "If played hand is [hand]", //choose hand type (3oak, flush, etc)
    "If played hand has exactly <span class='orange-text'>" + (getRandomInt(3)+2) + "</span> cards",
    "If played hand contains a [suit]"
]
const cardplayed = [
    "Played [suitp]",
    "Played [rankp] and [rankp]", //plural rank
    "Played [rankp]",
    "Played [rankp] with [suit] suit",
    "Played <span class='orange-text'>face</span> cards",
    "For each [rank] held in hand,",
    "For each [cardtype] held in hand,"
]
const independentstart =[
    "When [arank] is discarded,",
    "If discarded hand is [hand],",
    "When [acardtype] is scored,",
    "When a <span class='orange-text'><a target='_blank' rel='noopener noreferrer' href='https://balatrowiki.org/w/Vouchers'>Voucher</a></span> is bought,",
    "When a <span class='orange-text'><a target='_blank' rel='noopener noreferrer' href='https://balatrowiki.org/w/Booster_Packs'>Booster Pack</a></span> is skipped,",
    "When a <span class='orange-text'><a target='_blank' rel='noopener noreferrer' href='https://balatrowiki.org/w/Booster_Packs'>Booster Pack</a></span> is opened,",
    "When a card is added to your deck,",
    //"When a card changes <span class='orange-text'><a target='_blank' rel='noopener noreferrer' href='https://balatrowiki.org/w/Card_Modifiers#Enhanced_Cards'>Enhancement</a></span>,",
    "When a card is sold,",
    "When the <span class='orange-text'><a target='_blank' rel='noopener noreferrer' href='https://balatrowiki.org/w/Blinds_and_Antes#Boss_Blind'>Boss Blind</a></span> is defeated,",
    "When <span class='orange-text'><a target='_blank' rel='noopener noreferrer' href='https://balatrowiki.org/w/Blinds_and_Antes'>Blind</a></span> is selected,",
]

const mid = [
    "create [tarot]<br><span class='inactive-text'>(Must have room)</span>",
    "create [spectral]<br><span class='inactive-text'>(Must have room)</span>",
    "create [planet]<br><span class='inactive-text'>(Must have room)</span>",
    "earn <span class='money-text'>$[lownumber]</span>",
    "create a random <span class='orange-text'>Joker</span>",
    "create [tag]",
    "add [acardtype] to the deck",
    //"this Joker gains X[lownumber] [multorchips]",
    //"this Joker gains <span class='mult-text'>+[multnumber]</span> Mult",
    //"this Joker gains <span class='chips-text'>+[chipsnumber]</span> Chips",
]

const end = [
    "<span class='odds-text'>1 in [chance]</span> chance this is destroyed at the end of round.", //banana
    "Destroyed in <span class='orange-text'>[lownumber]</span> rounds",
]

const suit = [
    "<span class='spade-text'>Spade", "<span class='club-text'>Club",
    "<span class='heart-text'>Heart", "<span class='diamond-text'>Diamond",
]
const rank = [
    "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace",
]
const hand = [
    "High Card", "Pair", "Two Pair", "Three of a Kind", "Straight", "Flush", "Full House",
    "Four of a Kind", "Straight Flush", "Five of a Kind", "Flush House", "Flush Five"
]
const containinghand = [
    "Pair", "Two Pair", "Three of a Kind", "Straight", "Flush", "Full House",
    "Four of a Kind", "Five of a Kind"
]
const tarot = [
    "Fool", "Magician", "High Priestess", "Empress", "Emperor", "Hierophant", "Lovers", 
    "Chariot", "Justice", "Hermit", "Wheel of Fortune", "Strength", "Hanged Man",
    "Death", "Temperance", "Devil", "Tower", "Star", "Moon", "Sun", "Judgement", "World"
]
const spectral = [
    "Familiar", "Grim", "Incantation", "Talisman", "Aura", "Wraith", "Sigil",
    "Ouija", "Ectoplasm", "Immolate", "Ankh", " Deja Vu", "Hex",
    "Trance", "Medium", "Cryptid",
]

const planet = [
    "Pluto", "Mercury", "Uranus", "Venus", "Saturn", "Jupiter",
    "Earth", "Mars", "Neptune" //, "Planet X", "Ceres", "Eris" //"Secret" Planets
]
const tag = [
    "Uncommon", "Rare", "Negative", "Foil", "Holographic", "Polychrome",
    "Investment", "Voucher", "Boss", "Standard", "Charm", "Meteor",
    "Buffoon", "Handy", "Garbage", "Ethereal", "Coupon", "Double",
    "Juggle", "D6", "Top-up", "Speed", "Orbital", "Economy"

]
const cardtype = [
    "Bonus", "Mult", "Wild", "Glass", "Steel", "Stone", "Gold", "Lucky"
]
const rarities = [
    "Common", "Uncommon", "Rare", "Legendary"
]
const rarityweights = [
    50, 30, 15, 5
]
const paperback = [
    "Apostle",
    "<span class='crown-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Paperback/Suits'>Crown",
    "<span class='star-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Paperback/Suits'>Star",
    "Quaoar", "Haumea", "Sedna", "Makemake", //Planets
    "Spectrum", "Straight Spectrum", "Spectrum House", "Spectrum Five",//Hands

    "Angel Investment", "Divination", "Dichrome","High Risk", "Breaking",//tags

    "Soaked", "Ceramic", "Wrapped", "Bandaged", "Domino", "Stained"

    
]
const cryptid = [
//Hands
    "Bulwark", "Clusterfuck", "Ultimate Pair", "The Entire Fucking Deck",
//tarots
    "Eclipse", "Seraph", "Instability", "Blessing", "Automaton",
//spectrals
    "Lock", "Vacuum", "Hammerspace", "Trade", "Summoning", "Replica",
    "Analog", "Typhoon", "Ritual", "Meld", "Source", "Adversary",
    "Chambered", "Conduit", "Gateway",
//tags
    "Epic", "Glitched", "Mosiac", "Oversaturated", "Fragile", "Golden",
    "Blurred", "Astral", "Jolly", "Cat", "Gambler's", "Golden Voucher",
    "Memory", "Better Top-up", "Bundle", "Gourmand", "Empowered", "Triple",
    "Quadruple", "Quintuple", "Scope", "Schematic", "Loss", "Banana",
    "Booster", "Console",
//planets
    "Asteroid Belt", "Void", "Phobos & Deimos", "The Universe In Its Fucking Entirety",
    "Ruutu", "Risti", "Hertta", "Pata", "Kaikki", "Voxel", "Planet.lua", "Neutron Star",

    "Echo", "Light", "Abstract"

]
const bunco = [
    "<span class='fleuron-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Bunco/Suits'>Fleuron",
    "<span class='halberd-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Bunco/Suits'>Halberd",
    
    "<span class='exotic-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Bunco/Suits'>Exotic Card",

    "Breaking", "Arcade", "Glitter", "Flourecent", "Filigree",

    "Cleanse", "The 8",
    "Quaoar", "Haumea", "Sedna", "Makemake",
    "Spectrum", "Straight Spectrum", "Spectrum House", "Spectrum Five",//Hands
    "Adjustment", "Lust", "Art", "Universe", "Sky", "Abyss", 
    "Cracker", "Copper"
]
const visibility = [

]
const pokermon = [

]
const hevven = [
    
]
function changebuttonstates() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    let allChecked = true;
    let nonechecked = true
    for (let i = 0; i < checkboxes.length; i++) {
        if (!checkboxes[i].checked) {
        allChecked = false;
        }
    }
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
        nonechecked = false;
        }
    }
    if (allChecked === true) {
        document.getElementById('checkall').disabled = true;
    } else {
        document.getElementById('checkall').disabled = false;
    }
    if (nonechecked === true) {
        document.getElementById('uncheckall').disabled = true;
    } else {
        document.getElementById('uncheckall').disabled = false;
    }
}

function initvisibility() {
    changebuttonstates()
    if (document.getElementById("visibility").checked) {

    } else { //remove things\

    }
}
function initbunco() {
    changebuttonstates()
    if (document.getElementById("bunco").checked) {
        suit.push("<span class='fleuron-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Bunco/Suits'>Fleuron");
        suit.push("<span class='halberd-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Bunco/Suits'>Halberd");

        suit.push("<span class='exotic-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Bunco/Suits'>Exotic Card");
        if (!(document.getElementById("paperback").checked)) { //If paperback is checked, then its already there
            tag.push("Breaking")
            planet.push("Quaoar");
            planet.push("Haumea");
            planet.push("Sedna");
            planet.push("Makemake");
            containinghand.push("Spectrum")
            hand.push("Spectrum")
            hand.push("Straight Spectrum")
            hand.push("Spectrum House")
            hand.push("Spectrum Five")
        }
        tag.push("Breaking"), tag.push("Arcade"), tag.push("Glitter"), tag.push("Flourecent"), tag.push("Filigree")
        mid.push("create a <span class='polymino-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Bunco/Polymino_Cards'>Polymino</a></span> card")
        spectral.push("Cleanse"), spectral.push("The 8")
        cardtype.push("Cracker"), cardtype.push("Copper")
        tarot.push("Adjustment"), tarot.push("Lust"), tarot.push("Art"), tarot.push("Universe"), tarot.push("Sky"), tarot.push("Abyss") 
    } else { //remove things\
        removefrom("<span class='fleuron-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Bunco/Suits'>Fleuron", suit)
        removefrom("<span class='halberd-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Bunco/Suits'>Halberd", suit)

        removefrom("<span class='exotic-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Bunco/Suits'>Exotic Card", suit)

        if (!(document.getElementById("paperback").checked)) {//if paperback is checked, then dont remove 
            removefrom("Breaking", tag)
            removefrom("Quaoar", planet)
            removefrom("Haumea", planet)
            removefrom("Sedna", planet)
            removefrom("Makemake", planet)
            removefrom("Spectrum", containinghand)
            removefrom("Spectrum", hand)
            removefrom("Straight Spectrum", hand)
            removefrom("Spectrum House", hand)
            removefrom("Spectrum Five", hand)
        }
        removefrom("Breaking", tag), removefrom("Arcade", tag), removefrom("Glitter", tag), removefrom("Flourecent", tag), removefrom("Filigree", tag)
        removefrom("create a <span class='polymino-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Bunco/Polymino_Cards'>Polymino</a></span> card", mid)
        removefrom("Cleanse", spectral), removefrom("The 8", spectral)
        removefrom("Cracker", cardtype), removefrom("Copper", cardtype)
        removefrom("Adjustment", tarot), removefrom("Lust", tarot), removefrom("Art", tarot), removefrom("Universe", tarot), removefrom("Sky", tarot), removefrom("Abyss", tarot) 
    }
}
function initpokermon() {
    changebuttonstates()
    if (document.getElementById("pokermon").checked) {

    } else { //remove things\

    }
}
function inithevven() {
    changebuttonstates()
    if (document.getElementById("hevven").checked) {

    } else { //remove things\

    }
}
function initpaperback() {
    changebuttonstates()
    if (document.getElementById("paperback").checked) {
        suit.push("<span class='crown-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Paperback/Suits'>Crown");
        suit.push("<span class='star-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Paperback/Suits'>Star");
        suit.push("<span class='heart-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Paperback/Suits'>Light Suit");
        suit.push("<span class='spade-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Paperback/Suits'>Dark Suit");
        rank.push("Apostle");



        tag.push("Angel Investment"), tag.push("Divination"), tag.push("Dichrome"), tag.push("High Risk")
        if (!(document.getElementById("bunco").checked)) { //If bunco is checked, then its already there
            tag.push("Breaking")
            planet.push("Quaoar");
            planet.push("Haumea");
            planet.push("Sedna");
            planet.push("Makemake");
            containinghand.push("Spectrum")
            hand.push("Spectrum")
            hand.push("Straight Spectrum")
            hand.push("Spectrum House")
            hand.push("Spectrum Five")
        }
        

        cardtype.push("Soaked"), cardtype.push("Ceramic"), cardtype.push("Wrapped"), cardtype.push("Bandaged"), cardtype.push("Domino"), cardtype.push("Stained")

        mid.push("create a <span class='minorarcana-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Paperback/Minor_Arcana_Cards'>Minor Arcana</a></span> card")
    } else { //remove things
        removefrom("<span class='crown-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Paperback/Suits'>Crown", suit)
        removefrom("<span class='star-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Paperback/Suits'>Star", suit)
        removefrom("<span class='heart-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Paperback/Suits'>Light Suit", suit);
        removefrom("<span class='spade-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Paperback/Suits'>Dark Suit", suit);
        removefrom("Apostle", rank)


        removefrom("Angel Investment", tag), removefrom("Divination", tag), removefrom("Dichrome", tag), removefrom("High Risk", tag)
        if (!(document.getElementById("bunco").checked)) {//if bunco is not checked, then remove 
            removefrom("Breaking", tag)
            removefrom("Quaoar", planet)
            removefrom("Haumea", planet)
            removefrom("Sedna", planet)
            removefrom("Makemake", planet)
            removefrom("Spectrum", containinghand)
            removefrom("Spectrum", hand)
            removefrom("Straight Spectrum", hand)
            removefrom("Spectrum House", hand)
            removefrom("Spectrum Five", hand)
        }
        
        removefrom("create a <span class='minorarcana-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Paperback/Minor_Arcana_Cards'>Minor Arcana</a></span> card", mid)

        removefrom("Soaked", cardtype), removefrom("Ceramic", cardtype), removefrom("Wrapped", cardtype), removefrom("Bandaged", cardtype), removefrom("Domino", cardtype), removefrom("Stained", cardtype)
    }
}

function initcryptid() {
    changebuttonstates()
    
    if (document.getElementById("cryptid").checked) {
        hand.push("Bulwark")
        hand.push("Clusterfuck")
        hand.push("Ultimate Pair")
        hand.push("The Entire Fucking Deck")

        tag.push("Epic"), tag.push("Glitched"), tag.push("Mosiac"), tag.push("Oversaturated"), tag.push("Fragile"), tag.push("Golden")
        tag.push("Blurred"), tag.push("Astral"), tag.push("Jolly"), tag.push("Cat"), tag.push("Gambler's"), tag.push("Golden Voucher")
        tag.push("Memory"), tag.push("Better Top-up"), tag.push("Bundle"), tag.push("Gourmand"), tag.push("Empowered"), tag.push("Triple")
        tag.push("Quadruple"), tag.push("Quintuple"), tag.push("Scope"), tag.push("Schematic"), tag.push("Loss"), tag.push("Banana")
        tag.push("Booster"), tag.push("Console")

        spectral.push("Lock"), spectral.push("Vacuum"), spectral.push("Hammerspace"), spectral.push("Trade"), spectral.push("Summoning"), spectral.push("Replica")
        spectral.push("Analog"), spectral.push("Typhoon"), spectral.push("Ritual"), spectral.push("Meld"), spectral.push("Source"), spectral.push("Adversary")
        spectral.push("Chambered"), spectral.push("Conduit"), spectral.push("Gateway")

        planet.push("Asteroid Belt"), planet.push("Void"), planet.push("Phobos & Deimos"), planet.push("The Universe In Its Fucking Entirety")
        planet.push("Ruutu"), planet.push("Risti"), planet.push("Hertta"), planet.push("Pata"), planet.push("Kaikki"), planet.push("Voxel"), planet.push("Planet.lua"), planet.push("Neutron Star")

        tarot.push("Eclipse"), tarot.push("Seraph"), tarot.push("Instability"), tarot.push("Blessing"), tarot.push("Automaton")
        rarities.push("Candy"), rarityweights.push(5)
        rarities.push("Epic"), rarityweights.push(10)
        rarities.push("Exotic"), rarityweights.push(5)
        rarities.push("Cursed"), rarityweights.push(3)

        mid.push("create a <span class='code-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Cryptid/Code_Cards'>Code</a></span> card")
        cardtype.push("Echo"), cardtype.push("Light"), cardtype.push("Abstract")
    } else { //remove things
        removefrom("Bulwark", hand)
        removefrom("Clusterfuck", hand)
        removefrom("Ultimate Pair", hand)
        removefrom("The Entire Fucking Deck", hand)
        removefrom("Epic", tag), removefrom("Glitched", tag), removefrom("Mosiac", tag), removefrom("Oversaturated", tag), removefrom("Fragile", tag), removefrom("Golden", tag)
        removefrom("Blurred", tag), removefrom("Astral", tag), removefrom("Jolly", tag), removefrom("Cat", tag), removefrom("Gambler's", tag), removefrom("Golden Voucher", tag)
        removefrom("Memory", tag), removefrom("Better Top-up", tag), removefrom("Bundle", tag), removefrom("Gourmand", tag), removefrom("Empowered", tag), removefrom("Triple", tag)
        removefrom("Quadruple", tag), removefrom("Quintuple", tag), removefrom("Scope", tag), removefrom("Schematic", tag), removefrom("Loss", tag), removefrom("Banana", tag)
        removefrom("Booster", tag), removefrom("Console", tag)

        removefrom("Lock", spectral), removefrom("Vacuum", spectral), removefrom("Hammerspace", spectral), removefrom("Trade", spectral), removefrom("Summoning", spectral), removefrom("Replica", spectral)
        removefrom("Analog", spectral), removefrom("Typhoon", spectral), removefrom("Ritual", spectral), removefrom("Meld", spectral), removefrom("Source", spectral), removefrom("Adversary", spectral)
        removefrom("Chambered", spectral), removefrom("Conduit", spectral), removefrom("Gateway", spectral)

        removefrom("Asteroid Belt", planet), removefrom("Void", planet), removefrom("Phobos & Deimos", planet), removefrom("Nibiru", planet), removefrom("The Universe In Its Fucking Entirety", planet)
        removefrom("Ruutu", planet), removefrom("Risti", planet), removefrom("Hertta", planet), removefrom("Pata", planet), removefrom("Kaikki", planet), removefrom("Voxel", planet), removefrom("Planet.lua", planet), removefrom("Neutron Star", planet)

        removefrom("Eclipse", tarot), removefrom("Seraph", tarot), removefrom("Instability", tarot), removefrom("Blessing", tarot), removefrom("Automaton", tarot)

        removefrom("create a <span class='code-text'><a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Cryptid/Code_Cards'>Code</a></span> card", mid)

        removerarity("Candy"), removerarity("Epic"), removerarity("Exotic"), removerarity("Cursed")
        removefrom("Echo", cardtype), removefrom("Light", cardtype), removefrom("Abstract", cardtype)

    }
}

const formats = [
    "[start], [cardplayed] [mid]",
    "When a hand is played, [cardplayed] [mid]",
    "[independentstart] [mid]",
    "[start], [mid]",
]

var message = getRandomItem(formats)

function generate() {
    message = getRandomItem(formats)

    if (getRandomInt(4) === 1) { //1 in number chance to add an "ending"
        message = message.concat("<br>" + getRandomItem(end))
    }

    message = message.replace("[start]", getRandomItem(start))
    message = message.replace("[cardplayed]", getRandomItem(cardplayed))
    message = message.replace("[independentstart]", getRandomItem(independentstart))
    message = message.replace("[mid]", getRandomItem(mid))

    do {
        message = message.replace("[chance]", (getRandomInt(5)+1)*2)

        if (message.includes("[lownumber]")) {
            var lownumber = getRandomInt(5)+1
            message = message.replace("[lownumber]", lownumber)
            if (lownumber === 1) {
                message = message.replace("rounds", "round")
            }
        }
        //message = message.replace("[multnumber]", getRandomInt(16)+1)
        //message = message.replace("[chipsnumber]", getRandomInt(31)+4)
        if (message.includes("[suit]")) {
            var suitpicked = getRandomItem(suit)
            if (suitpicked.includes("Light Suit") || suitpicked.includes("Dark Suit")) {
                message = message.replace("with [suit] suit", "with a " + suitpicked + "</a></span>")
            }
            if (suitpicked.includes("Exotic Card")) {
                message = message.replace("Played [rankp] with [suit] suit", "Played [rankp] with an " + suitpicked + "</a></span> suit") 
                message = message.replace("with [suit] suit", "that is an " + suitpicked + "</a></span> suit")
                message = message.replace("If played hand contains a [suit]", "If played hand contains an " + suitpicked + "</a></span> suit")
            }
            if (paperback.includes(suitpicked) || bunco.includes(suitpicked)) {
                message = message.replace("[suit]",(suitpicked + "</a></span>"))
            } else {//</a>
                message = message.replace("[suit]",(suitpicked + "</span>"))
            }
        }
        if (message.includes("[suitp]")) {
            var suitpicked = getRandomItem(suit)
            if (suitpicked.includes("Light Suit") || suitpicked.includes("Dark Suit")) {
                message = message.replace("of [suitp]", "of a " + suitpicked + "</a></span>")
                message = message.replace("Played [suitp]", "Played cards with a " + suitpicked + "</a></span>")
            }
            if (suitpicked.includes("Exotic Card")) {
                message = message.replace("If played hand contains [arank] of [suitp]", "If played hand contains [arank] that is an " + suitpicked + "</a></span> suit")
                message = message.replace("of [suitp]", "that are an " + suitpicked + "</a></span>")
                message = message.replace("Played [suitp]", "Played " + suitpicked + "s</a></span>")
            }
            if (paperback.includes(suitpicked) || bunco.includes(suitpicked)) {
                message = message.replace("[suitp]",(suitpicked + "s</a></span>"))
            } else {//</a>
                message = message.replace("[suitp]",(suitpicked + "s</span>"))
            }
        }

        if (message.includes("[containinghand]")) {
            var containinghandpicked = getRandomItem(containinghand)
            if (paperback.includes(containinghandpicked)) {
                if (document.getElementById("bunco").checked) {//buncos wiki has priority
                    message = message.replace("[containinghand]", (getArticle(containinghandpicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Bunco/Poker_Hands">'+ containinghandpicked + '</a></span>'))
                }
                message = message.replace("[containinghand]", (getArticle(containinghandpicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Paperback/Poker_Hands">'+ containinghandpicked + '</a></span>'))
            } else {
                message = message.replace("[containinghand]", (getArticle(containinghandpicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatrowiki.org/w/Poker_Hands">'+ containinghandpicked + '</a></span>'))
            }
        }
        if (message.includes("[hand]")) {
            var handpicked = getRandomItem(hand)
            if (paperback.includes(handpicked)) {
                if (document.getElementById("bunco").checked) {//buncos wiki has priority
                    message = message.replace("[hand]", (getArticle(handpicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Bunco/Poker_Hands">'+ handpicked + '</a></span>'))
                }
                message = message.replace("[hand]", (getArticle(handpicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Paperback/Poker_Hands">'+ handpicked + '</a></span>'))
            } else if (cryptid.includes(handpicked)) {
                message = message.replace("[hand]", (getArticle(handpicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Cryptid/Poker_Hands">'+ handpicked + '</a></span>'))
            } else {
                message = message.replace("[hand]", (getArticle(handpicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatrowiki.org/w/Poker_Hands">'+ handpicked + '</a></span>'))
            }
        }

        if (message.includes("[acardtype]")) {
            var cardtypepicked = getRandomItem(cardtype)
            if (paperback.includes(cardtypepicked)) {
                message = message.replace("[acardtype]", (getArticle(cardtypepicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Paperback/Card_Modifiers">'+ cardtypepicked + ' Card</a></span>'))
            } else if (cryptid.includes(cardtypepicked)) {
                message = message.replace("[acardtype]", (getArticle(cardtypepicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Cryptid/Card_Modifiers">'+ cardtypepicked + ' Card</a></span>'))
            } else if (bunco.includes(cardtypepicked)) {
                message = message.replace("[acardtype]", (getArticle(cardtypepicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Bunco/Card_Modifiers">'+ cardtypepicked + ' Card</a></span>'))
            } else {
                message = message.replace("[acardtype]", (getArticle(cardtypepicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatrowiki.org/w/' + cardtypepicked + '_Cards">'+ cardtypepicked + ' Card</a></span>'))
            }
        }
        if (message.includes("[cardtype]")) {
            var cardtypepicked = getRandomItem(cardtype)
            if (paperback.includes(cardtypepicked)) {
                message = message.replace("[cardtype]", (' <span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Paperback/Card_Modifiers">'+ cardtypepicked + ' Card</a></span>'))
            } else if (cryptid.includes(cardtypepicked)) {
                message = message.replace("[cardtype]", (' <span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Cryptid/Card_Modifiers">'+ cardtypepicked + ' Card</a></span>'))
            } else if (bunco.includes(cardtypepicked)) {
                message = message.replace("[cardtype]", (' <span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Bunco/Card_Modifiers">'+ cardtypepicked + ' Card</a></span>'))
            } else {
                message = message.replace("[cardtype]", (' <span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatrowiki.org/w/' + cardtypepicked + '_Cards">'+ cardtypepicked + ' Card</a></span>'))
            }
        }

        if (message.includes("[arank]") || message.includes("[rank]") || message.includes("[rankp]")) {
            var rankchosen = getRandomItem(rank)
            if (message.includes("[rankp] and [rankp]")) { //dont have double ranks
                message = message.replace("[rankp]", ('<span class="orange-text">'+ rankchosen + "s" + '</span>'))
                removefrom(rankchosen, rank)
                ranktoaddback = rankchosen
                var rankchosen = getRandomItem(rank)
                message = message.replace("[rankp]", ('<span class="orange-text">'+ rankchosen + "s" + '</span>'))
                rank.push(ranktoaddback)
            }
            if (paperback.includes(rankchosen)) {
                message = message.replace("[arank]", (getArticle(rankchosen) + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Paperback#Ranks"> '+ rankchosen + '</a></span>'))
                message = message.replace("[rank]", ('<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Paperback#Ranks">'+ rankchosen + '</a></span>'))
                message = message.replace("[rankp]", ('<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Paperback#Ranks">'+ rankchosen + "s" + '</a></span>'))
            } else {
                message = message.replace("[arank]", (getArticle(rankchosen) + '<span class="orange-text"> '+ rankchosen + '</span>'))
                message = message.replace("[rank]", ('<span class="orange-text">'+ rankchosen + '</span>'))
                message = message.replace("[rankp]", ('<span class="orange-text">'+ rankchosen + "s" + '</span>'))
            }
        }
        if (getRandomInt(2) === 1) { //one in number chance to replace with a specific spectral/tarot
            if (message.includes("[planet]")) {
                var planetpicked = getRandomItem(planet)
                if (cryptid.includes(planetpicked)) {
                    message = message.replace("[planet]", (getArticle(planetpicked) + " " + '<span class="planet-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Cryptid/Planet_Cards">' + planetpicked + '</a></span>'))
                } else if (paperback.includes(planetpicked)) {
                    if (document.getElementById("bunco").checked) {//buncos wiki has priority
                        message = message.replace("[planet]", (getArticle(planetpicked) + " " + '<span class="planet-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Bunco/Planet_Cards">'+ planetpicked + ' </a></span>'))
                    }
                    message = message.replace("[planet]", (getArticle(planetpicked) + " " + '<span class="planet-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Paperback/Planet_Cards">' + planetpicked + '</a></span>'))
                } else {
                    message = message.replace("[planet]", (getArticle(planetpicked) + " " + '<span class="planet-text"><a target="_blank" rel="noopener noreferrer" href="' + vanillalinkify(planetpicked)+ '">' + planetpicked + '</a></span>'))
                }
            }
            if (message.includes("[tarot]")) {
                var tarotpicked = getRandomItem(tarot)
                if (cryptid.includes(tarotpicked)) {
                    message = message.replace("[tarot]", (getArticle(tarotpicked) + " " + '<span class="tarot-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Cryptid/Tarot_Cards">' + tarotpicked + '</a></span>')) 
                } else if (bunco.includes(tarotpicked)) {
                    message = message.replace("[tarot]", (getArticle(tarotpicked) + " " + '<span class="tarot-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Bunco/Tarot_Cards">' + tarotpicked + '</a></span>')) 
                }{
                    message = message.replace("[tarot]", (getArticle(tarotpicked) + " " + '<span class="tarot-text"><a target="_blank" rel="noopener noreferrer" href="' + vanillalinkify(tarotpicked)+ '">' + tarotpicked + '</a></span>'))
                }
            }
            if (message.includes("[spectral]")) {
                var spectralpicked = getRandomItem(spectral)
                if (cryptid.includes(spectralpicked)) {
                    message = message.replace("[spectral]", (getArticle(spectralpicked) + " " + '<span class="spectral-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Cryptid/Spectral_Cards">' + spectralpicked + '</a></span>'))
                } else if (bunco.includes(spectralpicked)) {
                    message = message.replace("[spectral]", (getArticle(spectralpicked) + " " + '<span class="spectral-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Bunco/Spectral_Cards">' + spectralpicked + '</a></span>'))
                } else {
                    message = message.replace("[spectral]", (getArticle(spectralpicked) + " " + '<span class="spectral-text"><a target="_blank" rel="noopener noreferrer" href="' + vanillalinkify(spectralpicked)+ '">' + spectralpicked + '</a></span>'))
                }
            }
            if (message.includes("[tag]")) {
                var tagpicked = getRandomItem(tag)
                if (paperback.includes(tagpicked)) {

                    if (tagpicked === "Breaking" && document.getElementById("bunco").checked) {//both paperback and bunco have breaking, with paperback ommiting itself if bunco is enabled
                        message = message.replace("[tag]", (getArticle(tagpicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Bunco/Tags">'+ tagpicked + ' Tag</a></span>'))
                    }
                    message = message.replace("[tag]", (getArticle(tagpicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Paperback/Tags">'+ tagpicked + ' Tag</a></span>'))

                } else if (bunco.includes(tagpicked)) {
                    message = message.replace("[tag]", (getArticle(tagpicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Bunco/Tags">'+ tagpicked + ' Tag</a></span>'))
                } else if (cryptid.includes(tagpicked)) {

                    if (tagpicked === "Loss") { //Loss Doesnt have the "tag" text
                        message = message.replace("[tag]", (getArticle(tagpicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Cryptid/Tags">'+ tagpicked + '</a></span>'))
                    } else {
                        message = message.replace("[tag]", (getArticle(tagpicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatromods.miraheze.org/wiki/Cryptid/Tags">'+ tagpicked + ' Tag</a></span>'))
                    }

                } else {
                    message = message.replace("[tag]", (getArticle(tagpicked) + " " + '<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatrowiki.org/w/Tags">'+ tagpicked + ' Tag</a></span>'))
                    if (tagpicked === "Charm") { //change colors
                        message = message.replace('<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatrowiki.org/w/Tags">', '<span class="tarot-text"><a target="_blank" rel="noopener noreferrer" href="https://balatrowiki.org/w/Tags">')
                    }else if (tagpicked === "Ethereal") { //change colors
                        message = message.replace('<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatrowiki.org/w/Tags">', '<span class="spectral-text"><a target="_blank" rel="noopener noreferrer" href="https://balatrowiki.org/w/Tags">')
                    }else if (tagpicked === "Investment") { //change colors
                        message = message.replace('<span class="orange-text"><a target="_blank" rel="noopener noreferrer" href="https://balatrowiki.org/w/Tags">', '<span class="money-text"><a target="_blank" rel="noopener noreferrer" href="https://balatrowiki.org/w/Tags">')
                    }
                }
            }
        }
        else {
            message = message.replace("[planet]", "a <a target='_blank' rel='noopener noreferrer' href='https://balatrowiki.org/w/Planet_Cards'><span class='planet-text'>Planet</span> card</a>")
            message = message.replace("[tarot]", "a <a target='_blank' rel='noopener noreferrer' href='https://balatrowiki.org/w/Tarot_Cards'><span class='tarot-text'>Tarot</span> card</a>")
            message = message.replace("[spectral]", "a <a target='_blank' rel='noopener noreferrer' href='https://balatrowiki.org/w/Spectral_Cards'><span class='spectral-text'>Spectral</span> card</a>")
            message = message.replace("[tag]", "a <span class='orange-text'><a target='_blank' rel='noopener noreferrer' href='https://balatrowiki.org/w/Tags'>Tag</a></span>")
        }

    } while (message.includes("["))
    if (!document.getElementById("fusions").checked) {
        var rarity = weightedRandom(rarities, rarityweights)
    } else {
        var rarity = "Fusion"
    }
    if (rarity === "Common") {
        var raritytext = "Common"
        var raritycolor = "#0093FF"
        var raritycolorshadow = "#005cab"
        var raritytextshadow = "#1e547c" 
    } else if (rarity === "Uncommon") {
        var raritytext = "Uncommon"
        var raritycolor = "#35bd86"
        var raritycolorshadow = "#1b7954"
        var raritytextshadow = "#32644f" 
    } else if (rarity === "Rare") {
        var raritytext = "Rare"
        var raritycolor = "#ff4c40"
        var raritycolorshadow = "#a92b23" 
        var raritytextshadow = "#7c3a36" 
    } else if (rarity === "Legendary") {
        var raritytext = "Legendary"
        var raritycolor = "#ab5bb5" 
        var raritycolorshadow = "#6d3574"
        var raritytextshadow = "#5d4061" 
    } else if (rarity === "Candy") {
        var raritytext = "<a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Category:Cryptid/Candy_Jokers'>Candy</a>"
        var raritycolor = "#e275e6" 
        var raritycolorshadow = "#974e9a"
        var raritytextshadow = "#974e9a" 
    } else if (rarity === "Epic") {
        var raritytext = "<a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Category:Cryptid/Epic_Jokers'>Epic</a>"
        var raritycolor = "#ef0098" 
        var raritycolorshadow = "#a00066"
        var raritytextshadow = "#a00066" 
    } else if (rarity === "Exotic") {
        var raritytext = "<a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Category:Cryptid/Exotic_Jokers'>Exotic</a>"
        var raritycolor = "#4795a6" 
        var raritycolorshadow = "#30646f"
        var raritytextshadow = "#30646f" 
    } else if (rarity === "Cursed") {
        var raritytext = "<a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Category:Cryptid/Cursed_Jokers'>Cursed</a>"
        var raritycolor = "#474931" 
        var raritycolorshadow = "#303121"
        var raritytextshadow = "#303121" 
    } else if (rarity === "Fusion") {
        var raritytext = "<a target='_blank' rel='noopener noreferrer' href='https://balatromods.miraheze.org/wiki/Fusion_Jokers'>Fusion</a>"
        var raritycolor = "#f7d762" 
        var raritycolorshadow = "#a59042"
        var raritytextshadow = "#a59042" 
    }
    if (document.getElementById("fusions").checked) {
        message = message.concat("<br><span class='inactive-text'>(" + pickrandomjoker() + " + " + pickrandomjoker() + ")</span>")
    }

    document.getElementById("jokertext").innerHTML = "<h1>" + message + "</h1>"
    document.getElementById("raritytext").innerHTML = "<h2>" + raritytext + "</h2>"

    document.getElementById("raritycolorclass").style.backgroundColor = raritycolor

    document.getElementById("raritycolorclass").style.boxShadow = '0px 7px' + raritycolorshadow

    document.getElementById("raritytext").style.textShadow = '0px 4px' + raritytextshadow

    // console.log(message)
}
generate()

function copybasetext() {
    var texttocopy = message
    texttocopy = texttocopy.replace(/<br>/g, "\n")
    texttocopy = texttocopy.replace(/<\/?[^>]+(>|$)/g, '')//remove all formatting

    navigator.clipboard.writeText(texttocopy);

    var copybase = document.getElementById("copybase");
    copybase.innerHTML = "Copied!";
}

function baseoutFunc() {
    var copybase = document.getElementById("copybase");
    copybase.innerHTML = "Copy Base Text";
}

function copyformat() {
    var texttocopy = message
    texttocopy = texttocopy.replace(/<br>/g, "\n")
    texttocopy = texttocopy.replace(/<a\b[^>]*>/gi, '')
    texttocopy = texttocopy.replace(/<\/a>/gi, '');

    texttocopy = texttocopy.replaceAll("'", '"')

    texttocopy = texttocopy.replaceAll('<span class="orange-text">', '{C:attention}')
    texttocopy = texttocopy.replaceAll('<span class="mult-text">', '{C:mult}')
    texttocopy = texttocopy.replaceAll('<span class="chips-text">', '{C:chips}')
    texttocopy = texttocopy.replaceAll('<span class="odds-text">', '{C:green}')
    texttocopy = texttocopy.replaceAll('<span class="tarot-text">', '{C:tarot}')
    texttocopy = texttocopy.replaceAll('<span class="spectral-text">', '{C:spectral}')
    texttocopy = texttocopy.replaceAll('<span class="money-text">', '{C:money}')
    texttocopy = texttocopy.replaceAll('<span class="spectral-text">', '{C:spectral}')
    texttocopy = texttocopy.replaceAll('<span class="planet-text">', '{C:planet}')
    texttocopy = texttocopy.replaceAll('<span class="planet-text">', '{C:planet}')
    texttocopy = texttocopy.replaceAll('<span class="inactive-text">', '{C:inactive}')
    texttocopy = texttocopy.replaceAll('<span class="spade-text">', '{C:spades}')
    texttocopy = texttocopy.replaceAll('<span class="club-text">', '{C:hearts}')
    texttocopy = texttocopy.replaceAll('<span class="heart-text">', '{C:clubs}')
    texttocopy = texttocopy.replaceAll('<span class="diamond-text">', '{C:diamonds}')

    texttocopy = texttocopy.replaceAll('<span class="fleuron-text">', '{C:bunc_fleurons}')
    texttocopy = texttocopy.replaceAll('<span class="halberd-text">', '{C:bunc_halberds}')
    texttocopy = texttocopy.replaceAll('<span class="exotic-text">', '{C:bunco_exotic}')
    texttocopy = texttocopy.replaceAll('<span class="polymino-text">', '{C:bunco_virtual_dark}')

    texttocopy = texttocopy.replaceAll('<span class="code-text">', '{C:cry_code}')

    texttocopy = texttocopy.replaceAll('<span class="minorarcana-text">', '{C:paperback_minor_arcana}')

    texttocopy = texttocopy.replaceAll('<span class="crown-text">', '{C:paperback_crowns}')
    texttocopy = texttocopy.replaceAll('<span class="star-text">', '{C:paperback_stars}')

    texttocopy = texttocopy.replaceAll('</span>', '{}')

    navigator.clipboard.writeText(texttocopy);

    var copybase = document.getElementById("copyformatting");
    copybase.innerHTML = "Copied!";
}

function formatout() {
    var copybase = document.getElementById("copyformatting");
    copybase.innerHTML = "Copy Formatting";
}

function checkall() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true  
    }
    initpaperback()
    initcryptid()
    initbunco()
    initvisibility()
    initpokermon()
    inithevven()

    changebuttonstates()
}
function uncheckall() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false
    }
    initpaperback()
    initcryptid()
    initbunco()
    initvisibility()
    initpokermon()
    inithevven()

    changebuttonstates()
}

document.getElementById("paperback").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/Paperback", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('paperback');
        checkbox.checked = !checkbox.checked;
    }
    initpaperback()
}
document.getElementById("cryptid").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/Cryptid", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('cryptid');
        checkbox.checked = !checkbox.checked;
    }
    initcryptid()
}
document.getElementById("bunco").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/Bunco", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('bunco');
        checkbox.checked = !checkbox.checked;
    }
    initbunco()
}
document.getElementById("fusions").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/Fusion_Jokers", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('fusions');
        checkbox.checked = !checkbox.checked;
    }
    changebuttonstates()
}
document.getElementById("visibility").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/Visibility", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('visibility');
        checkbox.checked = !checkbox.checked;
    }
    initvisibility()
}
document.getElementById("pokermon").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/Pokermon", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('pokermon');
        checkbox.checked = !checkbox.checked;
    }
    initpokermon()
}
document.getElementById("hevven").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/Balatro_Hevven", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('hevven');
        checkbox.checked = !checkbox.checked;
    }
    inithevven()
}
document.getElementById("buffoonery").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/Buffoonery", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('buffoonery');
        checkbox.checked = !checkbox.checked;
    }
    changebuttonstates()
}
document.getElementById("prism").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/Prism", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('prism');
        checkbox.checked = !checkbox.checked;
    }
    changebuttonstates()
}
document.getElementById("arcanium").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/Redux_Arcanum", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('arcanium');
        checkbox.checked = !checkbox.checked;
    }
    changebuttonstates()
}
document.getElementById("luckyrabbit").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/Lucky_Rabbit", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('luckyrabbit');
        checkbox.checked = !checkbox.checked;
    }
    changebuttonstates()
}
document.getElementById("sixsuits").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/Six_Suits", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('sixsuits');
        checkbox.checked = !checkbox.checked;
    }
    changebuttonstates()
}
document.getElementById("ortalab").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/Ortalab", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('ortalab');
        checkbox.checked = !checkbox.checked;
    }
    changebuttonstates()
}
document.getElementById("artbox").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/ArtBox", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('artbox');
        checkbox.checked = !checkbox.checked;
    }
    changebuttonstates()
}
document.getElementById("bees").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/Beelatro", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('bees');
        checkbox.checked = !checkbox.checked;
    }
    changebuttonstates()
}
document.getElementById("extracredit").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/Extra_Credit", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('extracredit');
        checkbox.checked = !checkbox.checked;
    }
    changebuttonstates()
}
document.getElementById("morefluff").onclick = function (e) {
    if (e.ctrlKey) {
        window.open("https://balatromods.miraheze.org/wiki/More_Fluff", "_blank", "noopener noreferrer");
        const checkbox = document.getElementById('morefluff');
        checkbox.checked = !checkbox.checked;
    }
    changebuttonstates()
}

//regex to remove the contents of <a> (remove all hyperlinks)

//.replace(/<a\b[^>]*>/gi, '')
//.replace(/<\/a>/gi, '');

//dont mess with variables because i dont want to


