const container_raduis = 5
const PI = 3.1415;
const max_container_area = PI * container_raduis**2; //max area is 78.53 m^2
let weeks = 1;
let weeks2 = 10;



const plant_area = 0.8; //area of one plant
 
let num_plants = 20; 
//Number of plants for part1, expctedt to double each weeek
let plantsarray = [0,20];//array to keep track of number of plants when we start with 20 plants, EX: plantsarray[1] = number of plants in week 1 

let plantsarray2 = [0,100];//array to keep track of number of plants when we start with 20 plants, EX: plantsarray[1] = number of plants in week 1 





let current_plants_area; //How much area all the plants are currenly taking up

//start with an algorithim to find number of plants in x weeks
function calc_num_plants(w){


    //base cases I have an answer to, if we're on week 1 and week 0.
    if(w ==0){
        num_plants= plantsarray[w];
        current_plants_area = num_plants*plant_area;
        return plantsarray[w];   
    }
    else if(w ==1){
        num_plants= plantsarray[w];
        current_plants_area = num_plants*plant_area;
        return plantsarray[w];
    }
    
    //asking for a week I dont have the answer too?
    else{

       
        if(plantsarray.length == w){   //check if I have the number_of_plants 1 week prior
       
        let z = plantsarray[w-1]*2     //Just double the number of plants from a week prior, store it in a temp variable and push it into the array
        plantsarray.push(z);  
        
        num_plants= plantsarray[w];
        current_plants_area = num_plants*plant_area; //update number of plants AND the current aread they take up 
        return plantsarray[w];   //Return the number of plants from the week they asked for
         
        
        }

        //if I dont have number_of_plants from exacatly 1 week prior, keep going back until I do, and populate the array from there, recursivley
        else{
            let z =  calc_num_plants(w-1)*2; //call it recursivley
            plantsarray.push(z);
            num_plants= plantsarray[w]; //update number of plants  
            current_plants_area = num_plants*plant_area;  
            return plantsarray[w];//Return the number of plants from the week they asked for 
        }
    }

   
}


function calc_num_plants2(w){


    //base cases I have an answer to, if we're on week 1 and week 0.
    if(w ==0){
        num_plants= plantsarray2[w];
        current_plants_area = num_plants*plant_area;
        return plantsarray2[w];   
    }
    else if(w ==1){
        num_plants= plantsarray2[w];
        current_plants_area = num_plants*plant_area;
        return plantsarray2[w];
    }
    
    //asking for a week I dont have the answer too?
    else{

       
        if(plantsarray2.length == w){   //check if I have the number_of_plants 1 week prior
       
        let z = plantsarray2[w-1]*2     //Just double the number of plants from a week prior, store it in a temp variable and push it into the array
        plantsarray2.push(z);  
        
        num_plants= plantsarray2[w];
        current_plants_area = num_plants*plant_area; //update number of plants AND the current aread they take up 
        return plantsarray2[w];   //Return the number of plants from the week they asked for
         
        
        }

        //if I dont have number_of_plants from exacatly 1 week prior, keep going back until I do, and populate the array from there, recursivley
        else{
            let z =  calc_num_plants2(w-1)*2; //call it recursivley
            plantsarray2.push(z);
            num_plants= plantsarray2[w]; //update number of plants  
            current_plants_area = num_plants*plant_area;  
            return plantsarray2[w];//Return the number of plants from the week they asked for 
        }
    }

   
}
//fucntion to give action to be taken dependant on if the current area of the plants surpasses our capacity

function action(){  
    //above 80% capacity? prune
    if(current_plants_area>0.8*max_container_area){
       return ("Please prune the garden.");

    }
    //between 50 and 80? Monitor
    else if(current_plants_area< (0.5*max_container_area) && current_plants_area >(0.8 *max_container_area) ){
        return ("Please monitor the garden.");
    }

    else{
        return ("Please plant more plants");
    }
}

console.log(`The Maximum area of the container is ${max_container_area} m^2`);
console.log(`80% Capacity is ${0.8*max_container_area}`);
console.log(`50% Capacity is ${0.5*max_container_area} `);
console.log("");

// Part 1
// week 1
console.log("We are in week 1!");
console.log(`The Number of plants within week ${weeks} is: ${calc_num_plants(weeks,plantsarray)} plants.`);
console.log(`${num_plants} number of plants will take up ${num_plants*plant_area} meters Squared. ${action()} `);
console.log("");





weeks = 2;
// //week 2
// weeks=2;;
console.log("We are in week 2!");
console.log(`The Number of plants within week ${weeks} is: ${calc_num_plants(weeks,plantsarray)} plants.`);
console.log(`${num_plants} number of plants will take up ${num_plants*plant_area} meters Squared. ${action()} `)
console.log("");


weeks = 3;
// //week 3
// weeks=3;;
console.log("We are in week 3!");
console.log(`The Number of plants within week ${weeks} is: ${calc_num_plants(weeks,plantsarray)} plants.`);
console.log(`${num_plants} number of plants will take up ${num_plants*plant_area} meters Squared. ${action()} `)
console.log("");

// Part 2 
console.log(`If we started with 100 plants and did not prune for 10 Weeks: we would have ${calc_num_plants2(weeks2)} plants.` );
console.log(`The raduis of this expaned garden would be ${(calc_num_plants2(weeks2) *0.8)^0.5} meters.`);







