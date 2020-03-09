# Contacts-App

Contacts App is developed in JavaScript and NodeJS and works in terminal. User provides specified input in terminal and get outputs in terminal too. Contacts App is used to Create a Contact, Read a Contact, Remove a Contact and Read all Contacts. A Contact body contains ` name ` , ` mobile ` and ` email `.

### Demo : [CodeSandBox](https://codesandbox.io/s/contacts-terminal-i3ny4)
###### ( Add a new writable terminal in codesandbox and run the commnads )

## Commands with Demo Images:

###### ( Run commands in terminal )

### Create a New Contact

`node app.js add --name="Shashi Kant Yadav" --phone="9876543210" --email="shashikant@example.com"`

<p align="center">
  <img src="/demo1.png">
</p>

If Mobile number already present, It will show error

<p align="center">
  <img src="/demo6.png">
</p>

### Remove a Contact

`node app.js remove --name="Shashi Kant Yadav"`

<p align="center">
  <img src="/demo2.png">
</p>

If Contact is not present in JSON file, then it will show error

<p align="center">
  <img src="/demo5.png">
</p>

### Read a Contact

`node app.js read --name="Shashi Kant Yadav"`

<p align="center">
  <img src="/demo3.png">
</p>

If Contact not found then it will show an error

<p align="center">
  <img src="/demo7.png">
</p>

### List All Contact

`node app.js list`

<p align="center">
  <img src="/demo4.png">
</p>

If No contacts in JSON File, then it will show something like this

<p align="center">
  <img src="/demo8.png">
</p>

## Built With :

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en/)
- [Chalk](https://www.npmjs.com/package/chalk)
- [Yargs](https://www.npmjs.com/package/yargs)

## Developed By :

- [Shashi Kant Yadav](https://github.com/shashikant712)
