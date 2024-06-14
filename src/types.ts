export interface RiskClassification {
    src: string;
    title: string;
}

export interface UNCodes {
    unCodes: Array<string>;
}

export interface Employee {
    name: string;
    charge: string;
    identification: string;
}

export interface Equipment {
    name: string;
    status: boolean;
}

export interface MessageLog {
    user?: string;
    message: string;
    time: string;
}