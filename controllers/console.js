const Model = require("./model.js");
const config = require("../config.json");

class Controller extends Model
{
    trigger(params, fromModule, event)
    {
        console.log("Event-logger - Console");
        console.log("Trigger - " + (fromModule ?? 'undefined') + '-' + (event ?? 'undefined'));
        console.log(params);
    }
}

module.exports = new Controller(config['console'] ?? {});