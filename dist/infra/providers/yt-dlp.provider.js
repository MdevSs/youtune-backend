"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeDlProvider = exports.YTDLP_PROVIDER = void 0;
const environment_1 = require("../../environment/environment");
const youtube_dl_exec_1 = require("youtube-dl-exec");
exports.YTDLP_PROVIDER = 'YT-DLP-CLIENT';
exports.YoutubeDlProvider = {
    provide: exports.YTDLP_PROVIDER,
    useValue: (0, youtube_dl_exec_1.create)(environment_1.ENVIRONMENT.YT_DLP_PATH),
};
//# sourceMappingURL=yt-dlp.provider.js.map