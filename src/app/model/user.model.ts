export class User{
    userName : string
    password: string
    constructor(){
        this.userName = "",
        this.password = ""
    }
}

export interface IUserModel {
  userId: number;
  emailId: string;
  password: string;
  createdDate: string;
  projectName: string;
  fullName: string;
  mobileNo: string;
  extraId: number;
}