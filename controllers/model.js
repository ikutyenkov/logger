const Interface = require("../class/Interface.js");

class Model
{
    constructor(modules) {

        this.modules = modules;

        for (let _module in this.modules) {

            for (let i = 0; i < this.modules[_module].length; i++)
                Interface.subscribe(_module, this.modules[_module][i], this.trigger);
        }
    }

    trigger(params)
    {
        return true;
    }
}

module.exports = Model;