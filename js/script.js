let result = {
tag: "",
free: true,
role: false,
user: "xyz",
email: "xyz@gmail.com",
score: 0.64,
state: "deliverable",
domain: "gmail.com",
reason: "valid_mailbox",
mx_found: true,
catch_all: null,
disposable: false,
smtp_check: true,
did_you_mean: "",
format_valid: true,
};

submitbtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("clicked");
    let key = CONFIG.API_KEY;
    let email = document.getElementById("UserEmail").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url);
    let result = await res.json()
    let str = "";

    for (let field of Object.keys(result)) {
        str = str + `<div>${field} : ${result[field]}</div>`;
    }
    console.log(str)
    resultCont.innerHTML = str;
});