function mdArray() {
    let subArray1 = [];
    let subArray2 = [];

    name1 = prompt("Enter the first name Genevieve");
    name2 = prompt("Enter the second name Juan");
    name3 = prompt("Enter the third name Luna");
    name4 = prompt("Enter the fourth name Gabriel");
    name5 = prompt("Enter the fifth name Elise");

    age1 = prompt("Enter the first age 24");
    age2 = prompt("Enter the second age 65");
    age3 = prompt("Enter the third age 21");
    age4 = prompt("Enter the fourth age 5");
    age5 = prompt("Enter the fourth age 9");

    multiArray = []

    subArray1.push(name1);
    subArray1.push(name2);
    subArray1.push(name3);
    subArray1.push(name4);
    subArray1.push(name5);
    
    subArray2.push(parseInt(age1));
    subArray2.push(parseInt(age2));
    subArray2.push(parseInt(age3));
    subArray2.push(parseInt(age4));
    subArray2.push(parseInt(age5));
    
    multiArray.push([subArray1[0], subArray2[0]]);
    multiArray.push([subArray1[1], subArray2[1]]);
    multiArray.push([subArray1[2], subArray2[2]]);
    multiArray.push([subArray1[3], subArray2[3]]);
    multiArray.push([subArray1[4], subArray2[4]]);

    alert(multiArray);
}