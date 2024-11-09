import * as yup from "yup";
export declare const schema: yup.ObjectSchema<{
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
