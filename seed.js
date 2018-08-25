var db=require('./models');

db.Category.remove({}, function(err, succ){
  console.log(succ);

});

var cat1 = {
  "_id": 1,
  "title": "politics",
  "clues": [
    {
      "answer": "Election Day",
      "question": "1st Tuesday after the 1st Monday in November",
      "value": 100
    },
    {
      "answer": "Maine",
      "question": "Traditionally speaking, as this state goes, \"so goes the nation\"",
      "value": 200
    },
    {
      "answer": "a whistle stop",
      "question": "\"Shrill\" name for train tour electioneering",
      "value": 300
    },
    {
      "answer": "the Democrats",
      "question": "The rooster was symbol of this party before Thomas Nast drew their new one in 1870",
      "value": 400
    },
    {
      "answer": "Harry S. Truman",
      "question": "He called himself \"the plain people's pres. against the privileged people's Congress\"",
      "value": 500
    }
  ]
}
var cat2 = {
  "_id": 2,
  "title": "baseball",
  "clues": [
    {
      "answer": "the Western division",
      "question": "The Atlanta Braves are in this division of the National League",
      "value": 100
    },
    {
      "answer": "a midget",
      "question": "Eddie Gaedel, number 1\/8th, was the only one ever to play in the Major Leagues",
      "value": 200
    },
     {
      "answer": "Don Larsen",
      "question": "Now a paper company sales rep, he pitched only perfect game in World Series history",
      "value": 300
    },
    {
      "answer": "Fenway Park",
      "question": "Boston's \"Green Monster\" is in this stadium",
      "value": 400
    },
    {
      "answer": "Haiti",
      "question": "All baseballs used in the major leagues have the name of this foreign country printed on them",
      "value": 500
    }
  ]
}
var cat3 = {
  "_id": 3,
  "title": "odd jobs",
  "clues": [
    {
      "answer": "sold flowers (flower girl accepted)",
      "question": "Eliza Doolittle did it for a living",
      "value": 100
    },
    {
      "answer": "wranglers",
      "question": "In the Old West they were in charge of horses, on a movie set in charge of chickens",
      "value": 200
    },
    {
      "answer": "a bailiff",
      "question": "He solemnly swears you in, in court",
      "value": 300
    },
    {
      "answer": "cartoonists (or animators)",
      "question": "Ub Iwerks, Friz Freleng & Tex Avery drew the line at this job",
      "value": 400
    },
    {
      "answer": "grinder",
      "question": "This job title can be preceded by lens or organ",
      "value": 500
    }
  ]
}
var cat4 = {
  "_id": 4,
  "title": "movies",
  "clues": [
    {
      "answer": "<i>Star Trek III<\/i>",
      "question": "Subtitled \"The Search for Spock\"",
      "value": 100
    },
    {
      "answer": "<i>Risky Business<\/i>",
      "question": "Title describing Tom Cruise's precarious commercial enterprise",
      "value": 200
    },
    {
      "answer": "<i>All of Me<\/i>",
      "question": "Film where Lily Tomlin is really Steve Martin's better half",
      "value": 300
    },
    {
      "answer": "<i>Amadeus<\/i>",
      "question": "Mozart's middle name becomes a movie",
      "value": 400
    },
    {
      "answer": "George Burns",
      "question": "In his first screen role since 1939, he won the 1975 Best Supporting Actor Oscar for \"The Sunshine Boys\"",
      "value": 500
    }
  ]
}
var cat5 = {
  "_id": 5,
  "title": "australia",
  "clues": [
    {
      "answer": "(1 of) kangaroo and emu",
      "question": "1 of 2 animals on its coat of arms",
      "value": 100
    },
    {
      "answer": "\"Waltzing Matilda\"",
      "question": "Title of this song, which actually means \"to tramp the roads with a backpack\"",
      "value": 200
    },
    {
      "answer": "Tasmanian devil",
      "question": "\"Satanic\" mammal found only on island S. of Australia",
      "value": 300
    },
    {
      "answer": "oil",
      "question": "Amazingly, commercial field production of this energy source didn't begin in Australia until the 1960s",
      "value": 400
    },
    {
      "answer": "Unknown Southern Land",
      "question": "Early maps of Australia marked the area \"Terra Australis Incognita\", meaning this",
      "value": 500
    }
  ]
}
var cat6 = {
  "_id": 6,
  "title": "\"cat\" egory",
  "clues": [
    {
      "answer": "cat people",
      "question": "Malcolm McDowell & Nastassja Kinski's \"purr\"fect roles in 1982",
      "value": 100
    },
    {
      "answer": "a catapult",
      "question": "Ancient weapon kept a stone's throw from its target",
      "value": 200
    },
    {
      "answer": "a catalyst",
      "question": "It gets things going in a chemical reaction",
      "value": 300
    },
    {
      "answer": "Maggie the Cat",
      "question": "Elizabeth Taylor character that could have burnt her paws on a hot tin roof",
      "value": 400
    },
    {
      "answer": "a CAT scan",
      "question": "During one in a hospital, your brain should think \"cheese\"",
      "value": 500
    }
  ]
}
var cat7 = {
  "_id": 7,
  "title": "u.s. cities",
  "clues": [
    {
      "answer": "Anchorage",
      "question": "Alaskan city renamed this because ships docked there",
      "value": 100
    },
    {
      "answer": "Pueblo",
      "question": "Colorado city whose name means \"town\" in Spanish",
      "value": 200
    },
    {
      "answer": "Buffalo",
      "question": "The city of Niagara Falls is its largest suburb",
      "value": 300
    },
    {
      "answer": "Fargo",
      "question": "Known for manufacturing grain silos, it's North Dakota's largest city",
      "value": 400
    },
    {
      "answer": "Lubbock, Texas",
      "question": "\"Hub of the high plains\" Mac Davis saw it in his rearview mirror",
      "value": 500
    }
  ]
}
var cat8 = {
  "_id": 8,
  "title": "time",
  "clues": [
    {
      "answer": "quartz",
      "question": "Watch named for the vibrating crystal that runs it",
      "value": 100
    },
    {
      "answer": "March",
      "question": "It \"comes in like a lion & goes out like a lamb\"",
      "value": 200
    },
    {
      "answer": "4",
      "question": "Number of months with exactly 30 days",
      "value": 300
    },
    {
      "answer": "Sunday",
      "question": "Lucky children born that day are \"fair & wise & good & gay\"",
      "value": 400
    },
    {
      "answer": "week",
      "question": "Repeating group of days whose name means \"a turning\" in Old Norse",
      "value": 500
    }
  ]
}
var cat9 = {
  "_id": 9,
  "title": "dining out",
  "clues": [
    {
      "answer": "maitre d\\'",
      "question": "Shortened from French meaning \"master of hotel\", he greets you & seats you",
      "value": 100,
    },
    {
      "answer": "busboys",
      "question": "If employed by Greyhound their motto might be \"Leave the clearing to us\"",
      "value": 200,
    },
    {
      "answer": "antipasto",
      "question": "In Italian it's the course ordered \"before the meal\"",
      "value": 300,
    },
    {
      "answer": "wine steward",
      "question": "As sommelier, he hopes to ply you with the finest vintage",
      "value": 400,
    },
    {
      "answer": "surf and turf",
      "question": "Rhyming name given to a lobster & steak combo",
      "value": 500,
    }
  ]
}
var cat10 = {
  "_id": 10,
  "title": "children's literature",
  "clues": [
    {
      "answer": "Rebecca",
      "question": "Little girl who called \"Sunnybrook Farm\" home",
      "value": 100
    },
    {
      "answer": "ice skates",
      "question": "Hans Brinker's were silver",
      "value": 200
    },
    {
      "answer": "The Little Engine",
      "question": "As it called, it chanted, \"I think I can, I think I can\"",
      "value": 300
    },
    {
      "answer": "<i>National Velvet<\/i>",
      "question": "Enid Bagnold's book that became Liz Taylor's 1st starring vehicle",
      "value": 400
    },
    {
      "answer": "King Arthur",
      "question": "In \"The Sword in the Stone\", Kay calls this main character \"The Wart\"",
      "value": 500
    }
  ]
}
var cat11 = {
  "_id": 11,
  "title": "\"ac\"\/\"dc\"",
  "clues": [
    {
      "answer": "Dick Clark",
      "question": "For this perennial teen-ager, life's been one big \"Bandstand\"",
      "value": 100
    },
    {
      "answer": "Alistair Cooke",
      "question": "He's the master of \"Masterpiece Theater\"",
      "value": 200
    },
    {
      "answer": "Dyan Cannon",
      "question": "She's the mother of Cary Grant's only child",
      "value": 300
    },
    {
      "answer": "Alexander Calder",
      "question": "American sculptor known for his playful metal mobiles",
      "value": 400
    },
    {
      "answer": "Alice Cooper",
      "question": "Born Vincent Furnier, this flamboyant singer \"welcomed us to his nightmare\" in '75",
      "value": 500
    }
  ]
}
var cat12 = {
  "_id": 12,
  "title": "animals",
  "clues": [
    {
      "answer": "a fox",
      "question": "\"Sly\" creature sought by sportsmen riding to hounds",
      "value": 100
    },
    {
      "answer": "a camel",
      "question": "The \"ship of the desert\"",
      "value": 200
    },
    {
      "answer": "turkeys",
      "question": "The children are poults, the mothers, hens & the fathers,toms",
      "value": 300
    },
    {
      "answer": "falconry",
      "question": "Name of the sport of hunting birds with other birds",
      "value": 400
    },
    {
      "answer": "the Portuguese man-of-war",
      "question": "Floating sea creature named by sailors for the Iberian fighting ship it resembles",
      "value": 500
    }
  ]
}
var cat13 = {
  "_id": 13,
  "title": "inventions",
  "clues": [
    {
      "answer": "a steamboat",
      "question": "\"Fulton's Folly\"",
      "value": 100
    },
    {
      "answer": "a bicycle",
      "question": "Early ones were called the \"hobby horse\", \"penny-farthing\" & \"high-wheeler\"",
      "value": 200
    },
    {
      "answer": "a paper clip",
      "question": "1899 device for attaching papers that can ruin a computer disc when magnetized",
      "value": 300
    },
    {
      "answer": "Archimedes",
      "question": "After inventing the lever & pulley, this Greek said, \"I will move the Earth\"",
      "value": 400
    },
    {
      "answer": "a submarine",
      "question": "1st one to attempt sinking a warship was the \"Turtle\" in the Revolutionary War",
      "value": 500
    }
  ]
}
var cat14 = {
  "_id": 14,
  "title": "ancient worlds",
  "clues": [
    {
      "answer": "Rome",
      "question": "Where all roads were supposed to have led",
      "value": 100
    },
    {
      "answer": "Egypt",
      "question": "Its people called it \"kemet\", color of black, from land after flooding by Nile",
      "value": 200
    },
    {
      "answer": "the Bronze Age",
      "question": "Followed the Stone Age; named for copper alloy people used for tools & weapons",
      "value": 300
    },
    {
      "answer": "painting",
      "question": "The Chinese once regarded calligraphy as a branch of this art",
      "value": 400
    },
    {
      "answer": "the Phoenicians",
      "question": "Civilization of sailors that developed 1st Western alphabet",
      "value": 500
    }
  ]
}
var cat15 = {
  "_id": 15,
  "title": "hollywood legends",
  "clues": [
    {
      "answer": "Henry Fonda",
      "question": "Brando was 2 when his mom appeared on stage with this dad of Peter & Jane",
      "value": 100
    },
    {
      "answer": "Edith Head",
      "question": "She won 8 Academy Awards with only her clothes appearing on screen",
      "value": 200
    },
    {
      "answer": "Natalie Wood, James Dean, and Sal Mineo",
      "question": "The 3 stars of \"Rebel Without a Cause\" who met with untimely deaths",
      "value": 300
    },
    {
      "answer": "Elizabeth Taylor",
      "question": "In her 1st film she sang with \"Alfalfa\" Switzer; in her next, she was paired with Lassie",
      "value": 400
    },
    {
      "answer": "John Wayne",
      "question": "Oliver Hardy's co-star in \"The Fighting Kentuckian\"",
      "value": 500
    }
  ]
}
var cat16 = {
  "_id": 16,
  "title": "cars",
  "clues_count": 35,
  "clues": [
    {
      "answer": "C",
      "question": "The names of most Toyota models begin with this letter",
      "value": 100
    },
    {
      "answer": "Plymouth",
      "question": "A U.S. car was named this out of admiration for endurance & strength of the Pilgrims",
      "value": 200
    },
    {
      "answer": "Korea",
      "question": "New on the American market, the Hyundai is imported from this country",
      "value": 300
    },
    {
      "answer": "Pontiac",
      "question": "Make of model mentioned in this song:",
      "value": 400
    },
    {
      "answer": "push buttons",
      "question": "In the Ford Edsel, the transmission controls took this form",
      "value": 500
    }
  ]
}
var cat17 = {
  "_id": 17,
  "title": "u.s. states",
  "clues": [
    {
      "answer": "New York",
      "question": "The Empire State",
      "value": 100
    },
    {
      "answer": "Texas",
      "question": "The ceiling of its capitol features a lone star",
      "value": 200
    },
    {
      "answer": "Arizona",
      "question": "Only U.S. state with a \"Z\" in its name",
      "value": 300
    },
    {
      "answer": "Vermont",
      "question": "The New England state without an Atlantic Ocean coastline",
      "value": 400
    },
    {
      "answer": "South Carolina",
      "question": "8th state of the Union, it was the 1st state to secede",
      "value": 500
    }
  ]
}
var cat18 = {
  "_id": 18,
  "title": "\"hard\"",
  "clues": [
    {
      "answer": "hard cider",
      "question": "Fermented apple juice",
      "value": 100
    },
    {
      "answer": "hard-boiled",
      "question": "Descriptive of Mike Hammer, Private Eye, or a 20-minute egg",
      "value": 200
    },
    {
      "answer": "hard of hearing",
      "question": "Reason people used to stick a trumpet in their ear",
      "value": 300
    },
    {
      "answer": "Hardcastle",
      "question": "TV role Brian Keith judged OK to play",
      "value": 400
    },
    {
      "answer": "<i>A Hard Day\\'s Night<\/i>",
      "question": "Album & film featuring \"Tell Me Why\" & \"You Can't Do That\"",
      "value": 500
    }
  ]
}
var cat19 = {
  "_id": 19,
  "title": "landmarks",
  "clues": [
    {
      "answer": "The Pentagon",
      "question": "World's largest office building, named for its geometric shape",
      "value": 100
    },
    {
      "answer": "the Sphinx",
      "question": "De\"faced\" by sand & invading armies, it crouches near the Great Pyramids",
      "value": 200
    },
    {
      "answer": "William Penn",
      "question": "His statue is atop Philadelphia's City Hall",
      "value": 300
    },
    {
      "answer": "the Arc de Triomphe",
      "question": "France's Unknown Soldier lies beneath this Champs-Elysses landmark",
      "value": 400
    },
    {
      "answer": "July 4, 1776",
      "question": "The date on the tablet held by the Statue of Liberty",
      "value": 500
    }
  ]
}
var cat20 = {
  "_id": 20,
  "title": "comedians",
  "clues": [
    {
      "answer": "Richard Pryor",
      "question": "Comic whose \"Trial by Fire\" fueled his comedy routines",
      "value": 100
    },
    {
      "answer": "Jack Benny",
      "question": "Master of the pause followed by \"Now cut that out!\"",
      "value": 200
    },
    {
      "answer": "the Smothers Brothers",
      "question": "Pat Paulsen ran for president on their controversial \"Comedy Hour\"",
      "value": 300
    },
    {
      "answer": "Woody Allen",
      "question": "After playing the nightclub circuit, he broke into movies with \"What's New, Pussycat?\"",
      "value": 400
    },
    {
      "answer": "Bill Cosby",
      "question": "Though originally a comic, he was 1st black regular on a U.S. dramatic TV series",
      "value": 500
    }
  ]
}

db.Category.create(cat1, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat2, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat3, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat4, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat5, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat6, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat7, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat8, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat9, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat10, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat11, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat12, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat13, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat14, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat15, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat16, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat17, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat18, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat19, function(err, succ) {
  console.log(succ);
})
db.Category.create(cat20, function(err, succ) {
  console.log(succ);
})
