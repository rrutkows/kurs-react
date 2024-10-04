declare module "*.svg" {
    const value: string;
    export default value;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}

declare module "*.json" {
    const value: Record<string, unknown> | Array<Record<string, unknown>>;
    export default value;
}