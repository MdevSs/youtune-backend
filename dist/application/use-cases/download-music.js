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
exports.DownloadMusicUseCase = void 0;
const common_1 = require("@nestjs/common");
const node_stream_1 = require("node:stream");
let DownloadMusicUseCase = class DownloadMusicUseCase {
    ytdlp;
    constructor(ytdlp) {
        this.ytdlp = ytdlp;
    }
    execute({ url }) {
        const subprocess = this.ytdlp.exec(url, {
            output: '-',
            format: 'bestaudio',
            audioFormat: 'mp3',
            audioQuality: 0,
            quiet: true,
        });
        const stream = new node_stream_1.PassThrough();
        if (!subprocess.stdout) {
            throw new Error('No stdout stream from yt-dlp');
        }
        subprocess.stdout.pipe(stream);
        subprocess.stderr?.on('data', (data) => {
            console.error('yt-dlp stderr:', data);
        });
        subprocess.on('error', (err) => {
            stream.destroy(err);
        });
        subprocess.on('close', (code) => {
            if (code !== 0) {
                stream.destroy(new Error(`yt-dlp exited with code ${code}`));
            }
        });
        return Promise.resolve(stream);
    }
};
exports.DownloadMusicUseCase = DownloadMusicUseCase;
exports.DownloadMusicUseCase = DownloadMusicUseCase = __decorate([
    __param(0, (0, common_1.Inject)('YT-DLP-CLIENT')),
    __metadata("design:paramtypes", [void 0])
], DownloadMusicUseCase);
//# sourceMappingURL=download-music.js.map