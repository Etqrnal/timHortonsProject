
var arrayShuffle = function(array) {
    for ( var i = 0, length = array.length, swap = 0, temp = ''; i < length; i++ ) {
       swap        = Math.floor(Math.random() * (i + 1));
       temp        = array[swap];
       array[swap] = array[i];
       array[i]    = temp;
    }
    return array;
 };
 
 var percentageChance = function(values, chances) {
    for ( var i = 0, pool = []; i < chances.length; i++ ) {
       for ( var i2 = 0; i2 < chances[i]; i2++ ) {
          pool.push(i);
       }
    }
    return values[arrayShuffle(pool)['0']];
 };
 

  
var buttonHolder = document.getElementById("InputDiv")
var simDiv = document.getElementById("simulationDiv")
// MAIN BUTTONS //
var BCBtn = document.getElementById('BCBtn')
var albertaBtn = document.getElementById('AlbertaBtn')
var SaskatchewanBtn = document.getElementById('SaskatchewanBtn')
// SIMULATION BUTTONS //
var xOneBtn = document.getElementById('xOneBtn')
var xFiveBtn = document.getElementById('xFiveBtn')
var xGrandPrizeBtn = document.getElementById('xGrandPrizeBtn')
var xFiveHundredDonutsBtn = document.getElementById('xFiveHundredDonutsBtn')
// TABLE HOLDER //
var tableHolder = document.getElementById("tableHolder")

// HANDLER BUTTONS //
var continueBtn = document.getElementById('ContinueBtn')

// REGION VARIABLES //
var region
// TEXT CHANGABLES //
var wonItemPlaceHolder = document.getElementById("wonItem")
var wonItemText = document.getElementById("itemWon")

albertaBtn.addEventListener("click", function(){ // HANDLER FOR THE ALBERTA BUTTON //

    
    if (tableHolder.classList.contains("hidden")) {

        region = "Alberta"

        if (region == "Alberta"){

            var albertaText = document.getElementById("AlbertaText")
            // CLASSES HANDLER //
            tableHolder.classList.remove("hidden")
            buttonHolder.classList.add("hidden")   
            continueBtn.classList.remove("hidden")
    
            // CHANGES HANDLER //
            tableHolder.style.display = "block";
            albertaText.style.color = "red"
            albertaText.innerText = "Currently Selected: " + region
    
        }
 
    }

})

SaskatchewanBtn.addEventListener("click", function(){ // HANDLER FOR THE Saskatchewan BUTTON //

    
    if (tableHolder.classList.contains("hidden")) {

        region = "Saskatchewan"

        if (region == "Saskatchewan"){

            var SaskatchewanText = document.getElementById("SaskatchewanText")
            // CLASSES HANDLER //
            tableHolder.classList.remove("hidden")
            buttonHolder.classList.add("hidden")   
            continueBtn.classList.remove("hidden")
    
            // CHANGES HANDLER //
            tableHolder.style.display = "block";
            SaskatchewanText.style.color = "red"
            SaskatchewanText.innerText = "Currently Selected: " + region
    
        }
 
    }

})

BCBtn.addEventListener("click", function(){ // HANDLER FOR THE BC BUTTON //

    
    if (tableHolder.classList.contains("hidden")) {

        region = "BC"

        if (region == "BC"){

            var BCText = document.getElementById("BCText")
            // CLASSES HANDLER //
            tableHolder.classList.remove("hidden")
            buttonHolder.classList.add("hidden")   
            continueBtn.classList.remove("hidden")
    
            // CHANGES HANDLER //
            tableHolder.style.display = "block";
            BCText.style.color = "red"
            BCText.innerText = "Currently Selected: " + region
    
        }
 
    }

})


function getRegionPrizes(regionGiven){
    if (regionGiven == "Alberta"){

        return percentage = percentageChance(
            [
                'Free Donut', 
                'Free Coffee', 
                'Please Play Again', 
                'Grand Prize'
            ], 
            [
                40, 
                40,
                15, 
                5
            ]
        );
      
    }  else if (regionGiven == "BC") {
        return percentage = percentageChance(
            [
                'Please Play Again', 
                'Grand Prize', 
                'Free Donut', 
                'Free Coffee'
            ], 
            [
                70, 
                10,
                10, 
                10,
            ]
        );

    } else if (regionGiven == "Saskatchewan") {
        return percentage = percentageChance(
            [
                'Please Play Again', 
                'Grand Prize', 
                'Free Donut', 
                'Free Coffee'
            ], 
            [
                70, 
                28,
                1, 
                1,
            ]
        );
    }

}

function handleSimulations(reason, currentRegion){
    // CALCULATED VARIABLES //

    var startLoop
    var endLoop

        if (reason == "Once") {
            startLoop = 1
            endLoop = 2

            for (let step = startLoop; step < endLoop; step++) {

                var prize = getRegionPrizes(currentRegion)

                wonItemPlaceHolder.classList.remove("hidden")
                wonItemText.innerText = prize
            }
        } else if (reason == "FiveTimes") {
            startLoop = 1
            endLoop = 6
            wonItemText.innerText = ""
            for (let step = startLoop; step < endLoop; step++) {
                
                var prize = getRegionPrizes(currentRegion)
                
                wonItemPlaceHolder.classList.remove("hidden")
                wonItemText.innerText += prize + ", "

            }
        } else if (reason == "GrandPrize") {
            var Tries = 0
            var LastPrize
            do {
                var Currentprize = getRegionPrizes(currentRegion) 
                Tries++
                if (prize == "Grand Prize" == false) {
                    LastPrize = Currentprize
                    if (LastPrize == "Grand Prize") {
                        wonItemPlaceHolder.classList.remove("hidden")
                        wonItemText.innerText = "Grand Prize after: " + Tries + " Tries"
                        return LastPrize
                    }
                }  
            }
            while (LastPrize == "Grand Prize" == false);  
            
        } else if (reason == "500Donuts") {
            var Donut = 0
            do {
                
                var Currentprize = getRegionPrizes(currentRegion) 
                if(Currentprize == "Free Donut"){
                    Donut++
                }

            }
            while (Donut != 500)
            wonItemPlaceHolder.classList.remove("hidden")
            wonItemText.innerText = "You Won: " + Donut + " Donuts" 
        }

}




// HANDLE CONTINUE //

continueBtn.addEventListener("click", function(){
    var currentRegion = document.getElementById("currentRegion")

    // CLASSES HANDLER //
    tableHolder.classList.add("hidden") 
    continueBtn.classList.add("hidden")
    simDiv.classList.remove("hidden")

    // CHANGES HANDLER //
    tableHolder.style.display = "none";
    currentRegion.innerText = region

    },
)

// SIMULATION BUTTONS //

xOneBtn.addEventListener("click", function(){
    handleSimulations("Once",region) // USE TO DISPLAY VALUE WON
},
)

xFiveBtn.addEventListener("click", function(){
    handleSimulations("FiveTimes",region) // USE TO DISPLAY VALUE WON
},
)

xGrandPrizeBtn.addEventListener("click", function(){
    handleSimulations("GrandPrize",region)
},
)

xFiveHundredDonutsBtn.addEventListener("click", function(){
    handleSimulations("500Donuts",region)
},
)


