import { Response } from 'express';
import { DownloadMusicUseCase } from '../../application/use-cases/download-music';
export declare class DownloadController {
    private readonly downloadMusic;
    constructor(downloadMusic: DownloadMusicUseCase);
    download(url: string, res: Response): Promise<void>;
}
