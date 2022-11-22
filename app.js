const config = require("./config.json");
const Interface = require("./class/Interface.js");

Interface.trigger("app-start");

let _controllers = {};
console.log(config);
    for (let controller in (config ?? {})) {
        try {
            _controllers[controller] = require("./controllers/" + controller + ".js");
        } catch (e) {}
    }

const delay = ms => new Promise(resolve => setInterval(resolve, ms));
(async ()=>{await delay(1000)})();