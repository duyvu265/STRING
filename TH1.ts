class EmailRegex {
    EMAIL_REGEX: RegExp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;

    validate(regex: string) {
        return this.EMAIL_REGEX.test(regex);
    }
}

let emailRegex = new EmailRegex();
let validate: string[] = ["a@gmail.com", "a@gmail.com", "abc@gmail.com"];
let invaliEmail: string[] = ["@gmail.com", "ab@gmail.com", "@#abc@gmail.com"];
for (let email of validate) {
    let isvalid: boolean = emailRegex.validate(email);
    console.log("Email is " + email + "is valid " + isvalid)
}
for (let email of invaliEmail) {
    let isvalid: boolean = emailRegex.validate(email);
    console.log("Email is " + email + "is valid" + isvalid)

}