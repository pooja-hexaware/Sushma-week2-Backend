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
exports.menulistSchema = exports.menulist = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let menulist = class menulist {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], menulist.prototype, "itemname", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], menulist.prototype, "itemdescription", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], menulist.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], menulist.prototype, "toppings", void 0);
menulist = __decorate([
    (0, mongoose_1.Schema)()
], menulist);
exports.menulist = menulist;
exports.menulistSchema = mongoose_1.SchemaFactory.createForClass(menulist);
//# sourceMappingURL=menulist.schema.js.map