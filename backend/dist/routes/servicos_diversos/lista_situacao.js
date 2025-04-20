"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_situacao = void 0;
const lista_situacao_1 = require("../../controllers/servicos_diversos/lista_situacao");
const lista_situacao = async (route) => {
    route.get("/servicos_diversos/lista_situacao", (request, replay) => {
        return new lista_situacao_1.lista_situacao_controller().handle(request, replay);
    });
};
exports.lista_situacao = lista_situacao;
