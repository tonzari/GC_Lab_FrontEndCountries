class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let usa = new Country("USA", "Murican", "Oh my god, eww, I'm gonna sue you.", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Que pedo, guey!", ["red", "white", "green"]);
let japan = new Country("Japan", "Japanese", "Sumimasen Sumimasen", ["white", "red", "red"]);
let italy = new Country("Italy", "Italian", "Che cazz stai facendo?", ["red","green","white"]);
let china = new Country("China", "Mandarin", "Ni shi wo de baba ma?", ["red", "yellow", "yellow"]);

let Countries = [usa, mexico, japan, italy, china];


function SwitchCountry() {

    let selectDropDown = document.getElementById("CountryList");
    let userChoice = selectDropDown.value;
    let country;

    for(i=0; i<Countries.length; i++)
    {
        if(selectDropDown.value === Countries[i].name)
        {
            country = Countries[i];
        }
    }

    DisplayColors(country);
    UpdateCountryDetails(country);
}

function DisplayColors(theCountry)
{
    document.getElementById("Color1").style.backgroundColor = theCountry.colors[0];
    document.getElementById("Color2").style.backgroundColor = theCountry.colors[1];
    document.getElementById("Color3").style.backgroundColor = theCountry.colors[2];
}

function UpdateCountryDetails(theCountry)
{
    document.getElementById("OfficialLanguage").innerText = theCountry.lang;
    document.getElementById("HelloWorld").innerText = theCountry.greeting;
    document.getElementById("CountryName").innerText = theCountry.name;
}
