"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomes_devedores = void 0;
const nomes_devedores_1 = require("../../controllers/servicos_diversos/nomes_devedores");
const nomes_devedores = async (route) => {
    route.post("/servicos_diversos/nomes_devedores", (request, replay) => {
        return new nomes_devedores_1.nomes_devedores_controller().handle(request, replay);
    });
};
exports.nomes_devedores = nomes_devedores;
