"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menulistService = void 0;
const common_1 = require("@nestjs/common");
const menulist_repo_1 = require("../repository/menulist.repo");
let menulistService = class menulistService {
    constructor(menulistRepo) {
        this.menulistRepo = menulistRepo;
    }
    async findAll() {
        return this.menulistRepo.findAll();
    }
    async create(data) {
        data.createddate = new Date();
        return this.menulistRepo.create(data);
    }
    async update(menulistId, data) {
        return this.menulistRepo.update(menulistId, data);
    }
    async delete(menulistId) {
        return this.menulistRepo.delete(menulistId);
    }
};
menulistService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [menulist_repo_1.menulistRepo])
], menulistService);
exports.menulistService = menulistService;
//# sourceMappingURL=menulist.service.js.map