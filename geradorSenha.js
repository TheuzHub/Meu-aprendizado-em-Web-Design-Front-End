document.getElementById('generate').addEventListener('click', function() {
    var length = parseInt(document.getElementById('length').value);
    var includeUppercase = document.getElementById('includeUppercase').checked;
    var includeLowercase = document.getElementById('includeLowercase').checked;
    var includeNumbers = document.getElementById('includeNumbers').checked;
    var includeSymbols = document.getElementById('includeSymbols').checked;
    var password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    document.getElementById('password').value = password;
});

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    var charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = '';
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}
