let language = "Indonesia";
let greeting = null;

switch(language){
    case "English":
        greeting = "Good morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu";
        break;
    default:
        greeting = "Selamat Pagi!";
               
}
console.log(greeting);