function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Joe";

document.body.innerHTML = greeter(user);