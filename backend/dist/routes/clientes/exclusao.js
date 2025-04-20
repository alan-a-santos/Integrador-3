"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclusao = void 0;
const exclusao_1 = require("../../controllers/clientes/exclusao");
const exclusao = async (route) => {
    route.post("/clientes/exclusao", (request, replay) => {
        return new exclusao_1.exclusao_controller().handle(request, replay);
    });
};
exports.exclusao = exclusao;
