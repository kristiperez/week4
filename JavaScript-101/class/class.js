
class BankAccount {
    constructor(firstName,lastName,middleName,accountType,balance,status,number) {
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountType = accountType
        this.balance = balance
        this.status = status
        this.number = number
    }
    balance = 100
    openAccount() {
        if(balance >= 100) {
            let bankAccount = new BankAccount ("Tom","Jones","Brady","Checking", balance,"Opened",1)
        }

    amount = 10 

    if(amount > 100) {
        let account = BankAccount() // bank account is not open   ***Azam example***

    
    }
    transferMoney() {

    }
    
    withdrawMoney(number, amount) {
        balance -= amount
    }
    
    chargeFee() {
        if(balance < 0) {
            balance -= 35
        }

    }
}


}





- Status (Opened/Closed/Freeze) 