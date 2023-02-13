import json from "./version.json" assert { type: "json" };

document.getElementById("version").innerHTML = json.version;
