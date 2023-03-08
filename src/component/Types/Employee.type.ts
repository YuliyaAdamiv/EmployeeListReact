export interface IEmployee{
    id:string;
    firstName:string;
    lastName:string;
    email:string;
}
export const dummyEmpolyeeList :IEmployee[]=[{
    id:new Date().toJSON().toString(),
    firstName:'Dummy1',
    lastName:'Dummy2',
    email:'dummy2@gmail.com'
}]
export enum PageEnum{
    list,
    add,
    edit
}