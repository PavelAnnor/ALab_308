const PI = 3.1415;
const container_radius = 5;
const container_area = PI * container_radius * container_radius;
const capacity_80 = container_area * 0.8; //80% of capacity
const capacity_50 = container_area * 0.5; // 50% of capatiy
const one_plant_area = 0.8; //Each plant requires a minimum space of 0.8 square meters

let num_plants = 20; //Expected to double each week
let num_weeks = 1;
let all_plants_area;

//part 1
console.log("");
console.log(
  "The Maximum area of the contaier is " + container_area + " meters squared",
);
console.log("80% capactiy is " + capacity_80 + " meters squared");
console.log("50% capactiy is " + capacity_50 + " meters squared");
console.log("");

//for loop that doubles number of plants each week, runs 3 times for 3 weeks
for (let i = 0; i < 3; i++) {
  all_plants_area = num_plants * one_plant_area; // calculate area all the plants take up
  console.log(
    `We have ${num_plants} total plants in week ${num_weeks}. They take up an area of ${all_plants_area} meters squared.`,
  ); //print out info for that week

  //control flow for decisons:
  switch (true) {
    
    //are we above 80% capacity
    case all_plants_area > capacity_80:
      console.log("Please prune the plants");
      break;

    //if not, are we above 50%
    case all_plants_area > capacity_50:
      console.log("Please monitor the plants");
      break;

    //not above 50%
    default:
      console.log("Plant more.");
  }
  console.log("");
  num_plants *= 2; //double number of plants
  num_weeks += 1; //increase week by 1
}

//part 2
num_plants = 100;
num_weeks = 1;
console.log(
  `\nPart 2 and 3 \nWe are starting with ${num_plants} plants in week ${num_weeks}`,
);

//for loop, runs 10 times for 10 weeks
for (i = 0; i < 10; i++) {
  all_plants_area = num_plants * one_plant_area; // calculate area all the plants take up

  console.log(`We have ${num_plants} total plants in week ${num_weeks}. They take up an area of ${all_plants_area} meters.`); //print out info for that week
  
  try {
    if (all_plants_area > container_area)
      throw `Error. The current area of all the plants ${all_plants_area} meters squared surpasses the maximum capacity of ${container_area}`;
  } catch (error) {
    console.log(error);
  }

  console.log("");
  num_plants *= 2; //double number of plants
  num_weeks += 1; //increase week by 1
}

console.log(`The radius of this expanded garden would be ${((num_plants * one_plant_area) / PI) ** 0.5} meeters squared.`,);
