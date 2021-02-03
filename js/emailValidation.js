function validateEmail(sEmail) {
    var filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}