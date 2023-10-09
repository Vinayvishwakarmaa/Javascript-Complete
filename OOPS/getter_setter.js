class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}vinay`;
  }
  set password(value) {
    this._password = value;
  }
}

const vinay = new User("v@google.ai", "abtr");
console.log(vinay.email);
