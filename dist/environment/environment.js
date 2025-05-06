"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENVIRONMENT = void 0;
const env_var_1 = require("env-var");
const ENVIRONMENT = {
    YT_DLP_PATH: (0, env_var_1.get)('YT_DLP_PATH').default('yt-dlp').asString(),
};
exports.ENVIRONMENT = ENVIRONMENT;
//# sourceMappingURL=environment.js.map