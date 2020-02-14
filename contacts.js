const fs = require("fs");
const chalk = require("chalk");

// Create a contact

const addContact = (name, phone, email) => {
  const contacts = loadContacts();
  const duplicate = contacts.find(contact => contact.phone === phone);
  if (!duplicate) {
    const person = {
      name: name,
      phone: phone,
      email: email
    };
    contacts.push(person);
    saveContacts(contacts);
    console.log(
      chalk.green.inverse.bold("\n Contact Saved !! ") +
        chalk.white.inverse.bold("\n Name : " + person.name + " \n")
    );
    console.log(
      chalk.blue.inverse.bold(` ${contacts.length} Contacts Total !! \n`)
    );
  } else {
    console.log(chalk.red.inverse.bold("\n Phone Number Already Taken !!! \n"));
  }
};

// Remove a contact

const removeContact = name => {
  const contacts = loadContacts();
  const duplicate = contacts.filter(contact => contact.name !== name);
  if (duplicate.length < contacts.length) {
    console.log(chalk.green.inverse.bold("\n Contact Removed "));
    console.log(
      chalk.white.inverse.bold("\n " + name + " deleted successfully \n")
    );
    console.log(
      chalk.blue.inverse.bold(` ${duplicate.length} Contacts Remained !! `)
    );

    saveContacts(duplicate);
  } else {
    console.log(chalk.red.inverse.bold("\n " + name + " Not Found !!! \n"));
  }
};

// Read a contacts

const readContact = name => {
  const contacts = loadContacts();
  const duplicate = contacts.find(contact => contact.name === name);
  if (!duplicate) {
    console.log(
      chalk.red.inverse.bold("\n Contact " + name + " Not Found !!! \n")
    );
  } else {
    console.log(chalk.green.inverse.bold("\n Contact Found "));
    console.log(
      chalk.white.inverse.bold(
        "\n Name : " +
          duplicate.name +
          " " +
          "\n Phone : " +
          duplicate.phone +
          " " +
          "\n Email : " +
          duplicate.email +
          " \n"
      )
    );
  }
};

// List all contact

const listContact = () => {
  const contacts = loadContacts();
  if (!contacts || contacts.length === 0) {
    console.log(chalk.red.inverse.bold("\n No Contacts Found \n"));
  } else {
    console.log(
      chalk.green.inverse.bold(`\n Your Contacts `),
      chalk.blue.inverse.bold(` ${contacts.length} `)
    );
    contacts.forEach(contact => {
      console.log(
        chalk.white.inverse.bold(
          "\n Name : " +
            contact.name +
            " " +
            "\n Phone : " +
            contact.phone +
            " " +
            "\n Email : " +
            contact.email +
            " \n"
        )
      );
    });
  }
};

// Save Contact

const saveContacts = notes => {
  const data = JSON.stringify(notes);
  fs.writeFileSync("contacts.json", data);
};

// Load contacts

const loadContacts = () => {
  try {
    const data = fs.readFileSync("./contacts.json", "UTF-8");
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addContact: addContact,
  removeContact: removeContact,
  readContact: readContact,
  listContact: listContact
};
