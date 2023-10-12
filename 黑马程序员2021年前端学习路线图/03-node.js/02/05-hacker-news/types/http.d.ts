declare module 'http' {
    interface ServerResponse {
        render: (filename: string) => void;
    }
}