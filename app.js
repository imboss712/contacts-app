const yargs = require("yargs");
const contacts = require("./contacts");

yargs.version("1.0.1");

// Create Contact
// node app.js add --name="Shashi Kant Yadav" --phone="9876543210" --email="shashikant@example.com"

yargs.command({
  command: "add",
  describe: "Add a contact ...",
  builder: {
    name: {
      describe: "Contact Name",
      demandOption: true,
      type: "string"
    },
    phone: {
      describe: "Contact Mobile No.",
      demandOption: true,
      type: "string"
    },
    email: {
      describe: "Contact Email",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    contacts.addContact(argv.name, argv.phone, argv.email);
  }
});

// Remove Contact
// node app.js remove --name="Shashi Kant Yadav"

yargs.command({
  command: "remove",
  describe: "Remove a contact ...",
  builder: {
    name: {
      describe: "Contact Name",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    contacts.removeContact(argv.name);
  }
});

// Read Contact
// node app.js read --name="Shashi Kant Yadav"

yargs.command({
  command: "read",
  describe: "Read a contact ...",
  builder: {
    name: {
      describe: "Contact Name",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    contacts.readContact(argv.name);
  }
});

// List Contacts
// node app.js list

yargs.command({
  command: "list",
  describe: "List all contact ...",
  handler() {
    contacts.listContact();
  }
});

// console.log(yargs.argv._[0])

yargs.parse();
