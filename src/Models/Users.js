

class Users {
  
    
    Constructor(userName, _name, emailAddress, dateCreated){
        this.userName = userName;
        this._name = _name;
        this._emailAddress = emailAddress;
        this.dateCreated = dateCreated;
    }

    accountTime() {
        let date = new Date();
        return date.getFullYear() - this.dateCreated;
    }

    dashboardCredentials(){
        return (this.userName, this._name, this._emailAddress)
    }

    get getUserName(){
        return this.userName;
    }

    get getEmailAddress(){
        return this._emailAddress;
    }

    get getName(){
        return this._name;
    }


    
}