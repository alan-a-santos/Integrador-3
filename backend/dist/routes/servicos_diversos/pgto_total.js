"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgto_total = void 0;
const pgto_total_1 = require("../../controllers/servicos_diversos/pgto_total");
const pgto_total = async (route) => {
    route.post("/servicos_diversos/pgto_total", (request, replay) => {
        return new pgto_total_1.pgto_total_controller().handle(request, replay);
    });
};
exports.pgto_total = pgto_total;
