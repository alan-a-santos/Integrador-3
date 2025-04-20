"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login_1 = require("../../controllers/login/login");
const login = async (route) => {
    route.post("/", (request, replay) => {
        return new login_1.login_controller().handle(request, replay);
    });
};
exports.login = login;
