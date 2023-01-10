let roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

let roadGraph = buildGraph(roads);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place !== this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place !== p.address);
      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place === address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};

runRobot ( VillageState.random () , randomRobot ) ;

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length === 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place === to) return route.concat(place);
      if (!work.some(w => w.at === place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length === 0) {
    let parcel = parcels[0];
    if (parcel.place !== place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

runRobot(VillageState.random(),
    goalOrientedRobot, []);

/*
1-Measuring a robot.

It’s hard to objectively compare robots by just letting them solve a few scenarios.
Maybe one robot just happened to get easier tasks or the kind of tasks that it is good at, whereas the other didn’t.
Write a function compareRobots that takes two robots (and their starting memory).
It should generate 100 tasks and let each of the robots solve each of these tasks.
When done, it should output the average number of steps each robot took per task.
For the sake of fairness, make sure you give each task to both robots, rather than generating different tasks per robot.
*/
function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {

      for (let parcel of state.parcels) {
          let {place:pickup, address} = parcel;
      }

      if (state.parcels.length == 0) {
          return turn;
      }

      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let totalTurnsRobot1 = 0;
  let totalTurnsRobot2 = 0;

  for (var task = 0; task < 100; task++) {
      let taskState = VillageState.random();

      totalTurnsRobot1 += runRobot(taskState, robot1, memory1);
      totalTurnsRobot2 += runRobot(taskState, robot2, memory2);
  }

  console.log(`Avg turns taken by robot1 to complete ${task} tasks: ${totalTurnsRobot1 / task}.`)
  console.log(`Avg turns taken by robot2 to complete ${task} tasks: ${totalTurnsRobot2 / task}.`)
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
//  Avg turns taken by robot1 to complete 100 tasks: 18.21.
//  Avg turns taken by robot2 to complete 100 tasks: 14.9.

/*

2-Robot efficiency.

Can you write a robot that finishes the delivery task faster than goalOrientedRobot?
If you observe that robot’s behavior, what obviously stupid things does it do? How could those be improved?
If you solved the previous exercise, you might want to use your compareRobots function to verify whether you improved the robot.
*/

function efficientRobot( { place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[getNearestParcelIndex(place, parcels)];
    if(parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) }
}


function getNearestParcelIndex(currentPlace, parcels) {
  let nearestParcelLocation = '';
  let shortestRouteSoFar = 99;
  let index = -1;
  for (let parcel of parcels) {
    index++;
    route = findRoute(roadGraph, currentPlace, parcel.place);
    if (route.length < shortestRouteSoFar) {
      shortestRouteSoFar = route.length;
      indexForShortestRoute = index;
    }
  }
  return indexForShortestRoute;
}

compareRobots(routeRobot, [], efficientRobot, []);