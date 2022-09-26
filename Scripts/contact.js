class Contact {
    // private instance members (fields)
    fullName;
    contactNumber;
    emailAddress;
    // public properties
    get FullName() {
        return this.fullName;
    }
    set FullName(name) {
        this.fullName = name;
    }
    get ContactNumber() {
        return this.contactNumber;
    }
    set ContactNumber(contactNumber) {
        this.contactNumber = contactNumber;
    }
    get EmailAddress() {
        return this.emailAddress;
    }
    set EmailAddress(emailAddress) {
        this.emailAddress = emailAddress;
    }
    // constructor
    /**
     *Creates an instance of Contact.

     * @param {string} [fullName="unknown name"]
     * @param {string} [contactNumber="no contact number"]
     * @param {string} [emailAdress="unknown email address"]
     * @memberof Contact
     */
    constructor(fullName = "unknown name", contactNumber = "no contact number", emailAdress = "unknown email address") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAdress;
    }
    // public methods
    /**
     * This method overrides the built-in toString method for the Contact class
     *
     * @returns {string}
     * @memberof Contact
     */
    toString() {
        let outputString = "";
        outputString += `Full Name     : ${this.FullName}\n`;
        outputString += `Contact Number: ${this.ContactNumber}\n`;
        outputString += `Email Address : ${this.EmailAddress}\n`;
        return outputString;
    }
}
//# sourceMappingURL=contact.js.map