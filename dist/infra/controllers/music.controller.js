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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadController = void 0;
const common_1 = require("@nestjs/common");
const download_music_1 = require("../../application/use-cases/download-music");
let DownloadController = class DownloadController {
    downloadMusic;
    constructor(downloadMusic) {
        this.downloadMusic = downloadMusic;
    }
    async download(url, res) {
        const stream = await this.downloadMusic.execute({ url });
        res.set({
            'Content-Type': 'audio/mpeg',
            'Content-Disposition': 'attachment; filename="music.mp3"',
        });
        stream.pipe(res);
    }
};
exports.DownloadController = DownloadController;
__decorate([
    (0, common_1.Get)('music'),
    __param(0, (0, common_1.Query)('url')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DownloadController.prototype, "download", null);
exports.DownloadController = DownloadController = __decorate([
    (0, common_1.Controller)('download'),
    __metadata("design:paramtypes", [download_music_1.DownloadMusicUseCase])
], DownloadController);
//# sourceMappingURL=music.controller.js.map