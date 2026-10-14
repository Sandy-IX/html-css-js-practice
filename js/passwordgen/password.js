function genpassword(length, includelcase, includeucase, includeno, includesym){
    const lowercasechar = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchar = "0123456789";
    const symbolchars = "!@#$%^&*()_+-=";
    let allowedchar = "";
    let password = "";
    allowedchar += includelcase ? lowercasechar : "";
    allowedchar += includeucase ? uppercasechar : "";
    allowedchar += includeno ? numberchar : "";
    allowedchar += includesym ? symbolchars : "";
    
    if(length <= 3){
        return `(Password length must be at least 4.)`
    }
    if(allowedchar.length === 0){
        return `(At least one set of character must be selected.)`
    }
    for(i = 0; i < 16; i++)
    {
        const randomindex = Math.floor(Math.random() * allowedchar.length);
        password += allowedchar[randomindex];
    }


    return passoword;
}
const passwordlength = 16;
const includelcase = true;
const includeucase = true;
const includeno = true;
const includesym = true;

const passoword = genpassword(passwordlength,
                              includelcase,
                              includeucase,
                              includeno,
                              includesym);

console.log(`Generated password: ${password}`);

