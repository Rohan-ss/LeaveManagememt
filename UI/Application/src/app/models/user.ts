export class User {
    public reg_no: string;
    public role_id: string;
    public fname: string;
    public mname: string;
    public lname: string;
    public gender: string;
    public status: string;
    public pan_number: string;
    public uid_no: string;
    public password: string;
    public opcito_email: string;
    public personal_email: string;
    public current_address1: string;
    public current_address2: string;
    public current_address3: string;
    public current_city: string;
    public  current_state: string;
    public current_pin: string;
    public permanent_address1: string;
    public permanent_address2: string;
    public permanent_address3: string;
    public permanent_state: string;
    public permanent_city: string;
    public permanent_pin: string;
    public emergency_contact_name1: string;
    public emergency_contact_number1: string;
    public emergency_contact_name2: string;
    public emergency_contact_number2: string;
    public contact: string;
    constructor() {}
}
/*
export class User
{constructor(public reg_no : string,
            public role_id : string,
            public fname: string,
            public mname: string,
            public lname: string,
             public gender : string,
             public status : string,
             public pan_number : string,
             public uid_no : string,
             public password : string,
             public opcito_email : string,
             public personal_email : string,
             public current_address1 : string,
             public current_address2 : string,
             public current_address3 : string,
             public current_city : string,
             public  current_state : string,
             public current_pin : string,
             public permanent_address1 : string,
             public permanent_address2 : string,
             public permanent_address3 : string,
             public permanent_state : string,
             public permanent_city : string,
             public permanent_pin : string,
             public emergency_contact_name1 : string,
             public emergency_contact_number1 : string,
             public emergency_contact_name2 : string,
             public emergency_contact_number2 : string,
             public contact : string
)
{}}
*/


export interface Lead {
    id: string;
    fname: string;
    lname: string;
}