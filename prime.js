function checkprime(num){
    for(let i=1;i<=num;i++){
        if(num%i){
            return true
        }
        else{
            return false
        }
    }
}
checkprime(num)