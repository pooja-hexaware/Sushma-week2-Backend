"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menulistDto = void 0;
const openapi = require("@nestjs/swagger");
class menulistDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { itemname: { required: true, type: () => String }, itemdescription: { required: true, type: () => String }, amount: { required: true, type: () => String }, toppings: { required: true, type: () => String } };
    }
}
exports.menulistDto = menulistDto;
//# sourceMappingURL=menulist-dto.dto.js.map