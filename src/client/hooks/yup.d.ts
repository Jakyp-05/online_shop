import * as yup from "yup";
export declare const schemaRegister: yup.ObjectSchema<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}, yup.AnyObject, {
    username: undefined;
    email: undefined;
    password: undefined;
    confirmPassword: undefined;
}, "">;
export declare const schemaLogin: yup.ObjectSchema<{
    username: string;
    password: string;
}, yup.AnyObject, {
    username: undefined;
    password: undefined;
}, "">;
