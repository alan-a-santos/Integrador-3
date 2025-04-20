"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualiza = void 0;
const atualiza_1 = require("../../controllers/clientes/atualiza");
const atualiza = async (route) => {
    route.put("/clientes/atualiza", (request, replay) => {
        return new atualiza_1.atualiza_controller().handle(request, replay);
    });
};
exports.atualiza = atualiza;
