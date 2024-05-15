import { INewUser } from "@/types";
import { ID } from "appwrite";
import { account, avatars } from "./config";

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name   
        );

        if(!newAccount) throw new Error('Failed to create user account!');

        const avatarUrl = avatars.getInitials(user.name);
        //const newUser = await saveUserToDB()
        return newAccount
    } catch (error) {
        console.log(error);
        
    }
}

export async function saveUserToDB(user: {
    accountId: string;
    name: string;
    username: string;
    email: string;
    imageUrl: string;
    bio: string;

}
){

}