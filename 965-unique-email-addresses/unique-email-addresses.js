/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    //easy to understand solution
    const set = new Set();
    for(let email of emails){
        let [local,domain] = email.split('@');  //split into local,domain
        local=local.split('.').join(''); //replace "." with ""
        local=local.split('+')[0];  //take first part in "+"
        set.add(local+'@'+domain);  //add to set
    }
    return set.size;

};