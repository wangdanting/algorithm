let a = [1,2,3,4,5];
let b = 0;

for (let i = 0, len = a.length; i < (len - 1)/2; i++){
    b = a[i];
    a[i] = a[len - i - 1];
    a[len - i - 1] = b;
}