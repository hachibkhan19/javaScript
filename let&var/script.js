let iAmGlobal = 'Something';
if (true) {
    let iAmLocal = 'Anything';
    var local = 'local';
    document.write(iAmGlobal +'<br>');
    document.write(iAmLocal +'<br>');
}

document.write(iAmGlobal +'<br>');
document.write(local +'<br>');     // can access outside a function if we use VAR keyword
document.write(iAmLocal +'<br>');   // can not access outside a function if we use LET keyword
