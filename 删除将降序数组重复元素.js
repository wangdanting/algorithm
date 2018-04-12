let a = [1, 1, 2, 3, 3, 3, 4, 5, 5];

let b = (arr) => {
    let i = 0, j = 0;
    let len = arr.length;
    while(i < len){
        if(arr[i] != arr[i+1]){
            i++;
        } else {
            for(j = i; j < len; j++){
                arr[j] = arr[j+1];
            }
            arr.length--;
        }
    }
    return arr;
}

b(a);