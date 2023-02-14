# queries

```
query getAuthorInfo {
  getAuthors {
    id
    firstName
    lastName
    email
    phoneNumber
  }
  getAuthorById(id: 1) {
    firstName
  }
}
```

# mutations

```
mutation authorMutation {
  createAuthor(createAuthorDto: {
    firstName:"Kartik",
    lastName:"Tyagi",
    email:"kartik@gmail.com",
    phoneNumber: 98765432
  }){
    firstName
    lastName
    email
    phoneNumber
  }

  updateAuthor(id: 1, createAuthorDto:{
    firstName:"Tyagi"
    lastName:"Kartik"
    email:"tyagi@gmail.com"
  }){
    firstName
    lastName
    email
  }

  deleteAuthor (id: 2){
    firstName
  }
}
```
