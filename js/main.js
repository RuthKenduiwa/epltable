var age = prompt('Enter:');
if (age > 18 && age < 120) {
    console.log('Go to Vaxx');
}
else if (age == 18 ) {
    console.log('Get id');
}
else if (age > 0 && age < 18) {
    console.log('Got to rupa');
}
else{
    console.log('Enter appropriate age')
}