function addBlog(){
    var title = document.getElementById('title').value || 'Untitled',
        date = document.getElementById('date').value || 'Month X, XXXX'
        author = document.getElementById('author').value || 'Anon',
        blog = document.getElementById('blogText').value || 'Your text here!',
        div = document.createElement('div'),
        h = document.createElement('h2'),
        p = document.createElement('p'),
        p2 = document.createElement('p'),
        li = document.createElement('li'),

        div.setAttribute('class', 'blog-post');
        h.setAttribute('class', 'blog-post-title');
        p.setAttribute('class', 'blog-post-meta');

        h.appendChild(document.createTextNode(title));
        p.appendChild(document.createTextNode(`${date} by ${author}`));
        p2.appendChild(document.createTextNode(blog));

        li.appendChild(div);
        li.appendChild(h);
        li.appendChild(p);
        li.appendChild(p2);
        document.getElementById('ul-blog').appendChild(li);
        cleanUp();
}
function cleanUp(){
    document.getElementById('title').value = '';
    document.getElementById('date').value = '';
    document.getElementById('author').value = '';
    document.getElementById('blogText').value = 'Your blog may replace this text!';
}
function printError(id, message) {
    var name = document.getElementById(id);
    name.innerHTML = message;
}
function validateField(field, fieldErr, regex) {
    var f = document.getElementsByName(field);

    if (f[0].value === "") {
        printError(fieldErr, "Error: Empty " + field + ".");
        return false;
    }
    else if (regex.test(f[0].value) == false && field != 'comments') {
        printError(fieldErr, "Error: Invalid " + field + ".");
        return false;
    }
    else {
        printError(fieldErr, "");
        return true;
    }
}
//Backend Functions
function validateName() {
    var regex = /^[a-zA-Z/s ]+$/;
    return validateField("name", "nameErr", regex);
}
function validateEmail() {
    var regex = /^\S+@\S+\.\S+$/;
    return validateField("email", "emailErr", regex);
}
function validatePhone() {
    var regex = /[0-9]{10}/;
    return validateField("mobile", "mobileErr", regex);
}
function validateComments(){
    var regex = /[.*]/
    return validateField("comments", "commentErr", regex);
}
//Actual function being called
function validateForm() {
    var submit = document.getElementById("submit");
    submit.disabled = true;
    //Validation array
    var valArray = new Array(5);
    valArray[0] = validateName();
    valArray[1] = validateEmail();
    valArray[2] = validatePhone();
    valArray[3] = validateComments();

    for (var i = 0; i < valArray.length; i++) {
        if (valArray[i] == false) {
            return false;
        }
    }

    submit.disabled = false;
}
function successfulSubmission(){
    alert("Form submitted succesfully!");
    document.getElementById('comments').value = "";
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('number').value = "";
}