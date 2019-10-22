// I would like to build an app for rowing coaches, to help them set lineups for
// their teams

Coach = class {
    constructor(name, team) {
        this.name = name
        this.team = team
    }
//     the coach should be able to choose a boat for practice
    selectBoat(lineup, boat) {
        lineup.boat = boat
    }
//     the coach should be able to add rowers to the lineup
    assignRower(lineup, rower) {
        lineup.rowers.push(rower)
    }
}

// Each team has many members

Team = class {
    constructor(name) {
        this.name = name
        this.members = []
        this.boats = []
    }
//     When a team buys a boat, they should be able to add it.
    addBoat(boat) {
        this.boats.push(boat)
    }
}

// Each rower has different rowing skills.  Some row port, others starboard, and some row both sides.  
// We call them bisweptual. Really.
// Every sweep boat also needs a small shouty person to steer the boat and tell the rowers what to do.  These
// are the coxswains and they are increadibly important.
// Some rowers also scull, which give a coach more flexibility because sculling boats don't require a coxswain.

Rower = class {
    constructor(name, sweep, scull) {
        this.name = name
        this.sweep = sweep
        this.scull = scull
    }
//     Rowers should be able to join a team
    joinTeam(team) {
        team.members.push(this)
    }
}

// Every team has certain boats available to them, each of which has a certain number of seats.

Boat = class {
    constructor(name, seats, coxswain) {
        this.name = name
        this.seats = seats
        this.coxswain = coxswain
    }
}


// For each practice or regatta, a coach needs to create a lineup, which consists of a boat and rowers

Lineup = class {
    constructor(date, boat) {
        this.date = date
        this.rowers = []
    }
}

// Let's create some examples

rny = new Team("Row New York")

claudia = new Coach("Claudia", rny)

kraus = new Boat("Kraus", 4, true)

meredith = new Rower("Meredith", "bisweptual", true)
michael = new Rower("Michael", "starboard", true)
tim = new Rower("Tim", "port", false)
abby = new Rower("Abby", "starboard", true)
kate = new Rower("Kate", "coxswain", false)

practice = new Lineup("2019.10.23")

// Let's test our actions

// We bought a boat!
rny.addBoat(kraus)

// My friends and I all want to join Row New York
meredith.joinTeam(rny)
michael.joinTeam(rny)
kate.joinTeam(rny)
abby.joinTeam(rny)
tim.joinTeam(rny)

// Claudia needs to set up our lineups for tomorrow's practice!
// She's decided we'll row the Kraus tomorrow
claudia.selectBoat(practice, kraus)
// She is adding everyone to the lineup!
claudia.assignRower(practice, kate)
claudia.assignRower(practice, tim)
claudia.assignRower(practice, michael)
claudia.assignRower(practice, meredith)
claudia.assignRower(practice, abby)

// Let's see if I can figure out how to do that again, but with #forEach

nextPractice = new Lineup("2019.10.24")

claudia.selectBoat(nextPractice, kraus)

rny.members.forEach( (rower) => {
    claudia.assignRower(nextPractice, rower)
    }
)

console.log(practice.date)
console.log(practice)

console.log(nextPractice.date)
console.log(nextPractice)