module.exports = function account() {
  var output = {}
  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1'
  }

  function setAccountType () {
    if (customerAccount.checking === '1') {
      customerAccount.type = 'checking'
    } else {
      customerAccount.type = 'savings'
    }
  }

  var signupBonus = 250
  var deposit = 1000

  var openAccount = function(account) {
    account.balance += signupBonus
    debugger
    output['New balance after signup bonus is '] = account.balance
    return account.balance += deposit
    debugger
  }

  output['Account before opening'] = customerAccount

  openAccount(customerAccount)
  setAccountType()
  output['Account after opening'] = customerAccount
  return output
}
