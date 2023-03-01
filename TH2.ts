class AccountRegex{
    Account:RegExp= /^[_a-z0-9]{6,}$/;
    validate(regex:string):boolean{
        return this.Account.test(regex);
    }
}
let accountall=new AccountRegex();
let account:string[]=["123abc_", "_abc123", "______", "123456", "abcdefgh"];
let  invaliAccount:string[]= [".@", "12345", "1234_", "abcde"];
for (let accountt of account) {
    let isvalid:boolean= accountall.validate(accountt);
    console.log("Account is "+account+"is valid"+isvalid);

}
for (let accountt of invaliAccount) {
    let isvalid:boolean= accountall.validate(accountt);
    console.log("Account is "+account+"is valid"+isvalid);

}