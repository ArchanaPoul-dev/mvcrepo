import { Countries } from "./countries";
import { States } from "./states";

export interface Registration {
    Name: string;
    UserName: string;
    Password: string;
    GaurdianType: string;
    GaurdianName: string;
    Address: string;
    Citizenship: string;
    //    Country: Countries[];
    //    State: States[];
    Country: number;
    State: number;
    EmailAddress: string;
    Gender: string;
    MaritalStatus: string;
    ContactNo: number;
    DOB: Date;
    RegDate: Date;
    AccountType: string;
    CitizenStatus: string;
    InitialDepAmt: string;
    IDProofType: string;
    IDDocNo: string;
    RefAccholderName: string;
    RefAccholderNo: string;
    RefAccholderAddress: string;
    //    token:string;

}
