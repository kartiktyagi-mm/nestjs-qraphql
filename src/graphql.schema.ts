
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface UserInput {
    _id: string;
    FirstName: string;
    LastName?: Nullable<string>;
    Email: string;
    PhoneNumber?: Nullable<number>;
}

export interface User {
    _id?: Nullable<string>;
    FirstName?: Nullable<string>;
    LastName?: Nullable<string>;
    Email?: Nullable<string>;
    PhoneNumber?: Nullable<number>;
}

export interface IQuery {
    getAllUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    getUserById(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createUser(user?: Nullable<UserInput>): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
