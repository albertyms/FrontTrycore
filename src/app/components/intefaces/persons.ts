export interface Persons {
    id: number;
    age: number;
    fullName: string;
    idNumber: number;
    height: number;
    weight: number;
    gender: number;
    birthDate: Date;
    countView: number;
}

export interface ResponsePersons {
    ok: boolean; 
    persons: Persons[]   
}

