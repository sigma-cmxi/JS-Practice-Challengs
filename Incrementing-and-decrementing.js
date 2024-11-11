function main() {
    let myPoints = 3
    
    function add3Points() {
        myPoints += + 3 
        console.log(myPoints)
    }
    
    
    function remove1Point() {
        myPoints += - 1
        console.log(myPoints)
    }
    
    add3Points()
    remove1Point()
}