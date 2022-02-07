/* 
 * User.js
 */


class User {
        id_user = ''
        name_user = ''
        firstname_user = ''
        email_user = ''
        pseudo_user = ''
        password_user = ''
    constructor(id_user, name_user,firstname_user, email_user, pseudo_user, password_user) {
        this.id_user = id_user
        this.name_user = name_user
        this.firstname_user = firstname_user
        this.email_user = email_user
        this.pseudo_user = pseudo_user
        this.password_user = password_user
    }
    // fonction sans paramètre
    getIdUser() {
        return this.id_user
    }
    getNameUser() {
        return this.name_user
    }
    getFirstNameUser() {
        return this.firstname_user
    }
    getEmailUser() {
        return this.email_user
    }
    getPseudoUser(){
        return this.pseudo_user
    }
    getPassord(){
        return this.password_user
    }
    // procédure paramétrée
    setIdUser(id_user) {
        this.id_user = id_user
    }
    setNameUser(name_user) {
        this.name_user = name_user
    }
    setFirstNameUser(firstname_user){
        this.firstname_user = firstname_user
    }
    setEmailUser(email_user){
        this.email_user = email_user
    }
    setPseudoUser(pseudo_user){
        this.pseudo_user = pseudo_user
    }
    setPassword(password_user){
        this.password_user = password_user
    }
} /// class User

module.exports = User