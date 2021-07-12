import { Role } from './role';

export class Account {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    jwtToken?: string;
    dateCreated: string;
    isVerified: boolean;
    refreshTokens: string[];
    resetToken?: string;
    resetTokenExpires?: string;
    password: string;

    constructor(init?:Partial<Account>) {
        this.id="";
        this.title="";
        this.firstName="";
        this.lastName="";
        this.email="";
        this.role=Role.User;
        this.dateCreated=new Date().toISOString();
        this.isVerified=false;
        this.refreshTokens = [""];
        this.resetToken = "";
        this.resetTokenExpires = "";
        this.password = "";
        Object.assign(this, init);
    }
}