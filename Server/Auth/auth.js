export class UserAuth{
    static userName(username){
        if(typeof username !== 'string') throw new Error('UserName must be a string')
    }
}