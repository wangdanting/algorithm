let a = [3, 5, 8, 11];
let b = [2, 6, 8, 9, 11, 15, 20];
let c = [];
let i = 0, j = 0, z = 0;

while(a[i] && b[j]){
    if(a[i] < b[j]){
        c[z] = a[i];
        i++;
    } else {
        c[z] = b[j];
        j++;
    }
    z++;
}

while(a[i]){
    c[z] = a[i];
    z++;
    i++;
}

while(b[j]){
    c[z] = b[j];
    z++;
    j++;
}