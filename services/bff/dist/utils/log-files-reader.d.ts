export declare const readLogFiles: (dirname: string) => Promise<{
    filesContent: {
        [x: string]: {
            content: any;
        };
    };
    filenames: string[];
}>;
export declare const loadLogFiles: (repository: any) => Promise<unknown>;
