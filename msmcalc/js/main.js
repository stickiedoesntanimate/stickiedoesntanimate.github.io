var elements = [

]
var combos = [

]
const nameTable = {
  o1000000000: "Tweedle",
  o0100000000: "Potbelly",
  o0010000000: "Noggin",
  o0001000000: "Toe Jammer",
  o0000100000: "Mammott",

  o1100000000: "Dandidoo",
  o1010000000: "Cybop",
  o1001000000: "Quibble",
  o1000100000: "Pango",
  o0110000000: "Shrubb",
  o0101000000: "Oaktopus",
  o0100100000: "Furcorn",
  o0011000000: "Fwog",
  o0010100000: "Drumpler",
  o0001100000: "Maw",

  o1110000000: "Reedling",
  o1101000000: "Spunge",
  o1100100000: "Thumpies",
  o1011000000: "Scups",
  o1010100000: "PomPom",
  o1001100000: "Congle",
  o0111000000: "Pummel",
  o0110100000: "Clamble",
  o0101100000: "Bowgart",
  o0011100000: "T-Rox",

  o1111000000: "Shellbeat",
  o1110100000: "Quarrister",
  o1101100000: "Deedge",
  o1011100000: "Riff",
  o0111100000: "Entbrat",

  o1111100000: "Mimic",

    
  o0000010000: "Kayna",

  o1000010000: "Glowl",
  o0100010000: "Flowah",
  o0010010000: "Stogg",
  o0001010000: "Phangler",
  o0000110000: "Boskus",

  o1100010000: "Barrb",
  o1010010000: "Floogul",
  o1001010000: "Whaddle",
  o1000110000: "Woolabee",
  o0110010000: "Repatillo",
  o0101010000: "Rootitoot",
  o0100110000: "Sooza",
  o0011010000: "Thrumble",
  o0010110000: "Ziggurab",
  o0001110000: "Wynq",

  o1110010000: "Tring",
  o1101010000: "Bisonorus",
  o1100110000: "Yelmut",
  o1011010000: "Flum Ox",
  o1010110000: "Krillby",
  o1001110000: "Sneyser",
  o0111010000: "Edamimi",
  o0110110000: "PongPing",
  o0101110000: "Incisaur",
  o0011110000: "Tiawa",

  o1111010000: "Candelavra",
  o1110110000: "Drummidary",
  o1101110000: "Bowhead",
  o1011110000: "Tuskski",
  o0111110000: "Gnarls",

  o0000001000: "Theremind",
  o0000000100: "Clackula",
  o0000000010: "Fluoress",
  o0000000001: "Floot Fly",

  o0100001000: "Bonkers",
  o0100000010: "Gob",
  o0010000100: "Peckinda",
  o0010000001: "HippityHop",
  o0001001000: "Poppette",
  o0001000100: "Denchuhs",
  o0000100010: "Bulbo",
  o0000100001: "Squot",
  o0000011000: "Yuggler",
  o0000010100: "Hawlo",
  o0000010010: "Pluckbill",
  o0000010001: "Whimmzies",
  o0000001100: "Xyster",
  o0000001010: "Cahoot",
  o0000001001: "Déjà-Jin",
  o0000000110: "Roarick",
  o0000000101: "Osstax",
  o0000000011: "Knucklehead",

  o0101001000: "Tapricorn",
  o0100100010: "Spytrap",
  o0100011000: "Rooba",
  o0100010010: "TooToo",
  o0011000100: "Withur",
  o0010100001: "Cantorell",
  o0010010100: "Uuduk",
  o0010010001: "Bridg-it",
  o0001011000: "Periscorp",
  o0001010100: "Banjaw",
  o0000110010: "Fiddlement",
  o0000110001: "Clavi Gnat",
  o0000001110: "G'day",
  o0000001101: "Larvaluss",
  o0000001011: "Frondley",
  o0000000111: "Mushaboom",

  o0101011000: "Gloptic",
  o0100110010: "Blow't",
  o0011010100: "Plinkajou",
  o0010110001: "Pladdie",
  o0000001111: "Enchantling",
};
const nameMapper = (name) => nameTable[name] || "Monster";

const filepath = '../msmcalc/assets/monsters/'

function calculate() {
    reset()
    addelements()
    combos = findcombos(elements)
    

    for (i = 0; i < combos.length; i++) {
        var img = filepath.concat(calculateimage(combos[i]), ".webp")
        var location = findlocation(combos[i])

        const monster = document.createElement("div");
        monster.classList.add("monster")

        location = document.getElementById(location)
        location = location.querySelector('.monsterlist');

        location.appendChild(monster);

        const monsterimg = document.createElement("img");
        monsterimg.classList.add("monsterpicture")

        if (!(UrlExists(img))) {
            img = '../msmcalc/assets/monsters/unknown.png'
        }

        monsterimg.src = img

        monster.appendChild(monsterimg);

        const nameLabel = document.createElement("h2");
        nameLabel.innerText = nameMapper("o" + calculateimage(combos[i]));
        monster.appendChild(nameLabel)

        const elementbox = document.createElement("div");

        elementbox.classList.add("monsterelementbox" + findboxlength(combos[i].length))
        elementbox.classList.add("monsterelementbox")

        for (j = 0; j < combos[i].length; j++) {
            const elementtoadd = document.createElement("img");
            elementtoadd.src = '../msmcalc/assets/elements/' + combos[i].at(j) + '.webp'
            elementtoadd.classList.add("monsterelement")

            elementbox.appendChild(elementtoadd);
        }
        monster.appendChild(elementbox)
    }
    addSpecial(seasonalcombos, seasonals, 'seasonal', '../msmcalc/assets/seasonalelements/')

    addSpecial(etherealcombos, ethereals, 'ethereal', '../msmcalc/assets/etherealelements/')
    
    //remove thingies without any
    const lists = document.querySelectorAll('.monsterlist');
    for (i = 0; i < lists.length; i++) {

        const parent = lists[i].parentNode
        if (lists[i].childNodes.length > 0) {
            parent.style.display = "block";
        } else {
            parent.style.display = "none";
        }

    }
}

function addelements() {
    elements = [

    ]

    if (document.getElementById("air").checked) {
        elements.push("air")
    }
    if (document.getElementById("plant").checked) {
        elements.push("plant")
    }
    if (document.getElementById("earth").checked) {
        elements.push("earth")
    }
    if (document.getElementById("water").checked) {
        elements.push("water")
    }
    if (document.getElementById("cold").checked) {
        elements.push("cold")
    }
    if (document.getElementById("fire").checked) {
        elements.push("fire")
    }
    if (document.getElementById("psychic").checked) {
        elements.push("psychic")
    }
    if (document.getElementById("bone").checked) {
        elements.push("bone")
    }
    if (document.getElementById("light").checked) {
        elements.push("light")
    }
    if (document.getElementById("faerie").checked) {
        elements.push("faerie")
    }
}
function findlocation(combo) {
    if (combo.length == 1) {
        return "single"
    } 
    if (combo.length == 2) {
        return "double"
    } 
    if (combo.length == 3) {
        return "triple"
    } 
    if (combo.length == 4) {
        return "quadruple"
    } 
    if (combo.length == 5) {
        return "quintuple"
    } 
    if (combo.length == 6) {
        return "sextuple"
    } 
    if (combo.length == 7) {
        return "septuple"
    } 
    if (combo.length == 8) {
        return "octuple"
    } 
    if (combo.length == 9) {
        return "nonuple"
    } 
    if (combo.length == 10) {
        return "decuple"
    } 
}
function calculateimage(arr) {
    var img = ''
    if (arr.includes('air')) {
        img = img.concat('1')
    } else {
        img = img.concat('0')
    }
    if (arr.includes('plant')) {
        img = img.concat('1')
    } else {
        img = img.concat('0')
    }
    if (arr.includes('earth')) {
        img = img.concat('1')
    } else {
        img = img.concat('0')
    }
    if (arr.includes('water')) {
        img = img.concat('1')
    } else {
        img = img.concat('0')
    }
    if (arr.includes('cold')) {
        img = img.concat('1')
    } else {
        img = img.concat('0')
    }
    if (arr.includes('fire')) {
        img = img.concat('1')
    } else {
        img = img.concat('0')
    }
    if (arr.includes('psychic')) {
        img = img.concat('1')
    } else {
        img = img.concat('0')
    }
    if (arr.includes('bone')) {
        img = img.concat('1')
    } else {
        img = img.concat('0')
    }
    if (arr.includes('light')) {
        img = img.concat('1')
    } else {
        img = img.concat('0')
    }
    if (arr.includes('faerie')) {
        img = img.concat('1')
    } else {
        img = img.concat('0')
    }
    return img
}
function findcombos(arr) {
    const res = [];

    function help(curr, remain) {
        if (remain.length === 0) {
            if (curr.length > 0) {
                res.push(curr);
            }
            return;
        }

        help([...curr, remain[0]], remain.slice(1));

        help(curr, remain.slice(1));
    }

    help([], arr);
    return res;
}
function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}
function findboxlength(length) {
    if (length == 1) {
        return '1'
    }
    if (length == 2) {
        return '2'
    }
    if (length == 3 || length == 6) {
        return '3'
    }
    if (length == 4 || length == 8) {
        return '4'
    }
    if (length == 5 || length == 10) {
        return '5'
    }
    if (length == 7) {
        return '7'
    }
    if (length == 9) {
        return '9'
    }
}
function reset() {
    const monsterlists = document.getElementsByClassName("monsterlist");
    
    for (i = 0; i < monsterlists.length; i++) {
        while (monsterlists[i].firstChild) {
            monsterlists[i].removeChild(monsterlists[i].lastChild);
        }
    }
}

const seasonalcombos  = [
    ["plant", "earth", "water", "cold"], //Punkleton
    ["air", "plant", "water", "cold"], //Yool
    ["air", "earth", "water", "cold"], //Schmoochle
    ["air", "plant", "earth", "water"], //Blabbit
    ["air", "earth", "cold"], //Hoola
    ["air", "fire"], //Gobbleygourd
    ["earth", "water", "bone"], //Clavavera
    ["plant", "earth", "water", "cold"], //Viveine
    ["bone", "light", "faerie"], //Carillong
    ["plant", "cold", "fire", "light"], //Whiz-bang
    ["earth", "cold", "fire", "faerie"], //Ffidyll
    ["plant", "water", "fire", "psychic"], //Boo'qwurm
    ["water", "cold", "fire"]//Spurrit
]
const seasonals = [
    "Punkleton",
    "Yool",
    "Schmoochle",
    "Blabbit",
    "Hoola",
    "Gobbleygourd",
    "Clavavera",
    "Viveine",
    "Carillong",
    "Whiz-bang",
    "Ffidyll",
    "Boo'qwurm",
    "Spurrit",
]
const etherealcombos  = [
    ["plant", "earth", "water", "cold"],
    ["plant", "air", "water", "cold"],
    ["air", "earth", "water", "cold"],
    ["plant", "earth", "water", "air"],
    ["plant", "earth", "air", "cold"]
]
const ethereals = [
    "Ghazt",
    "Grumpyre",
    "Reebro",
    "Jeeode",
    "Humbug"
]

function addSpecial(monstercombos, monsternames, list, elementpath) {
    for (i = 0; i < monstercombos.length; i++) {
        var pass = 1
        for (j = 0; j < monstercombos[i].length; j++) {
            if (!(elements.includes(monstercombos[i].at(j)))) {
                pass = 0
            }
        }
        if (pass == 1) {
            var img = filepath.concat(monsternames[i], ".webp")
            var location = list

            const monster = document.createElement("div");
            monster.classList.add("monster")

            location = document.getElementById(location)
            location = location.querySelector('.monsterlist');

            location.appendChild(monster);

            const monsterimg = document.createElement("img");
            monsterimg.classList.add("monsterpicture")

            monsterimg.src = img

            monster.appendChild(monsterimg);

            const nameLabel = document.createElement("h2");
            nameLabel.innerText = monsternames[i];
            monster.appendChild(nameLabel)

            const elementbox = document.createElement("div");

            elementbox.classList.add("monsterelementbox" + '1')
            elementbox.classList.add("monsterelementbox")

            const elementtoadd = document.createElement("img");
            elementtoadd.src = elementpath + monsternames[i] + '.webp'
            elementtoadd.classList.add("monsterelement")

            elementbox.appendChild(elementtoadd);

            monster.appendChild(elementbox)
        }
    }
}