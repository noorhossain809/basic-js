
var kilometer = [300, 400, 500];
function kilometerToMeter(kilometer){
 var meter = kilometer * 1000;
for(var i = 1; i < kilometer.length; i++){
    var meter = kilometer * i;
    
 } 
return meter
}
var result = kilometerToMeter(kilometer[0]);
console.log(result);





function budgetCalculator(clock, phone, laptop){
    var totalClockCost = clock * 50;
    var totalPhoneCost = phone * 100;
    var totalLaptopCost = laptop * 500;
    var totalCost = totalClockCost + totalPhoneCost + totalLaptopCost;
    return totalCost
}
var total = budgetCalculator(5 , 5 , 5);
console.log(total);







 
function hotelCost(Rent){
    var price = 0;
    if(Rent <= 10){
        price = Rent * 100;
    } else if (Rent <= 20){
        var firstPrice  = 10 * 100;
        var due = Rent - 10;
        var secondPrice = due * 80;
        price = firstPrice + secondPrice;
    } else{
        var firstPrice = 10 * 100;
        var secondPrice = 10 * 80;
        var due = Rent - 20;
        var thirdPrice = due * 50;
        price = firstPrice + secondPrice + thirdPrice;
    }
    return price;
}
var count = hotelCost(40);
console.log(count);



function megaFriend(groups){
    var max = groups[0];
    for(var i = 0; i< groups.length; i++){
        var element = groups[i];
        if(element.length > max.length){
            max = element;
        }
    }
    return max;
}
var lergestName = megaFriend(['Rafi','Mahmudullah','Habib', 'Mushfiqur rahim']);
console.log(lergestName);
    











