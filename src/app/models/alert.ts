export class Alert {
    type: AlterType;
    message: string;
}

export enum AlterType {
    Success,
    Error,
    Info,
    Warning
}