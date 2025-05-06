import { PassThrough } from 'node:stream';
import { Create } from 'youtube-dl-exec';
export declare class DownloadMusicUseCase {
    private readonly ytdlp;
    constructor(ytdlp: ReturnType<Create>);
    execute({ url }: Input): Promise<Output>;
}
export type Input = {
    url: string;
};
export type Output = PassThrough;
