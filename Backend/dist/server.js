"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const POST = 8088;
app_1.default.listen(POST, () => {
    console.log(`Server is running on port http://localhost:${POST}`);
});
//# sourceMappingURL=server.js.map