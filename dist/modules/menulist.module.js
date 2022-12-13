"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menulistModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const menulist_controller_1 = require("../controllers/menulist.controller");
const menulist_service_1 = require("../services/menulist.service");
const menulist_repo_1 = require("../repository/menulist.repo");
const menulist_schema_1 = require("../schemas/menulist.schema");
let menulistModule = class menulistModule {
};
menulistModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: menulist_schema_1.menulist.name, schema: menulist_schema_1.menulistSchema }])
        ],
        controllers: [menulist_controller_1.menulistController],
        providers: [menulist_service_1.menulistService, menulist_repo_1.menulistRepo],
        exports: [menulist_service_1.menulistService, menulist_repo_1.menulistRepo]
    })
], menulistModule);
exports.menulistModule = menulistModule;
//# sourceMappingURL=menulist.module.js.map