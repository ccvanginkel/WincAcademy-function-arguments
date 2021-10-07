const paintWalls = function(colors, position) {
    console.log("The " + position + " wall has been painted " + colors);
}

const positive_color = "green";
const negative_color = "red";

const wallNorth = "north";
const wallSouthEast = "south-east";

paintWalls(positive_color, wallNorth);
paintWalls(negative_color, wallSouthEast);

paintWalls(negative_color, wallSouthEast);
paintWalls();

//antwoord bij single argument vraag 7 = toont geen resultaat
//antwoord bij multiple arguments vraag 6 = ja dat maakt uir want het resultaat wordt bepaald door de volgorde
//antwoord bij multiple arguments vraag 7 = zolang er geen calling is gebeurt er niks
//antwoord bij multiple arguments vraag 8 = ze worden dan in die specifieke volgorde weergegeven