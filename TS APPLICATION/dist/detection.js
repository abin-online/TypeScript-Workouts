"use strict";
//"TYPE NARROWING"
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    else
        return val + 3;
}
//type of "TYPE GUARDS"
function provideId(id) {
    if (!id) {
        console.log('provide Id');
        return;
    }
    id.toLowerCase();
}
function isAdminMethod(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
//INSTANCE OF NARROWING
