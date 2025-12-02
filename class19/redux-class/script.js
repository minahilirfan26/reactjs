mainObj = {
  Ahmad: { age: 22, sport: "Cricket", skills: ["batting", "fielding"], team: { name: "Lahore Lions", wins: 5 } },
  Ahsan: { age: 24, sport: "Football", position: "Midfielder", team: "Karachi Kings" },
  Bilal: { age: 27, hobbies: ["hiking", "swimming"], active: true },
  Danish: { age: 30, sport: "Tennis", titles: 3, retired: false },
  Farhan: { city: "Islamabad", matches: 10, captain: true },
  Hassan: { education: "BSCS", sport: "Hockey", medal: "Gold" },
  Imran: { battingAvg: 45.2, country: "Pakistan", leftHanded: true },
  Jawad: { runs: [40, 55, 60], topScore: 85 },
  Kashif: { wickets: 12, overs: 20, economy: 4.5 },
  Luqman: { sport: "Kabaddi", wins: 10, fans: 10000 },

  Muneeb: { role: "Keeper", catches: 20, stumpings: 5 },
  Naeem: { team: "Peshawar Panthers", coach: "Asif" },
  Osama: { experience: 8, sport: "Athletics", medals: ["Silver", "Bronze"] },
  Parvez: { bestTime: "10.2s", event: "100m" },
  Qasim: { sport: "Swimming", national: true, height: "6ft" },
  Rizwan: { fifties: 15, hundreds: 3, captain: true },
  Saad: { city: "Multan", awards: 2 },
  Talha: { debutYear: 2018, matches: 25 },
  Umair: { lastMatch: "2024-11-15", injured: false },
  Waqas: { stats: { score: 99, balls: 60 }, recordHolder: true },

  Yasir: { test: 80, odi: 45, t20: 20 },
  Zeeshan: { bowlingStyle: "Fast", speed: "145km/h" },
  Asad: { fitness: "Excellent", trainer: "Rehan" },
  Babar: { battingStyle: "Right", avg: 52.4 },
  Daniyal: { club: "Islamabad United", debut: 2021 },
  Ehsan: { friends: ["Ahmad", "Bilal"], mentor: "Wasim Akram" },
  Faisal: { fielding: "Good", runouts: 4 },
  Gohar: { wicketsTaken: 28, strikeRate: 20 },
  Haris: { age: 19, debut: true },
  Irfan: { team: "Quetta Gladiators", jersey: 99 },

  Junaid: { isAllRounder: true, matches: 15 },
  Kamran: { nickname: "Kami", followers: 20000 },
  Lala: { realName: "Shahid", sixes: 300 },
  Mubashir: { noOfTours: 7, longestInning: 150 },
  Noman: { record: "Fastest 50", year: 2020 },
  Owais: { specialSkills: ["Dive catch", "Quick runout"] },
  Pervaiz: { country: "UAE", training: true },
  Qadeer: { sport: "Basketball", points: 120 },
  Rehan: { under19: true, futureStar: true },
  Shahbaz: { partnership: [50, 70], best: 112 },

  Taimoor: { style: "Aggressive", favoriteShot: "Pull" },
  Usman: { testAvg: 33, odiAvg: 40 },
  Vaqas: { spinBowler: true, matches: 22 },
  Waleed: { hattrick: true, bestFigure: "4/15" },
  Yousaf: { mentor: "Inzamam", trainingYears: 3 },
  Zain: { finalScore: 80, manOfTheMatch: 2 },
  Abrar: { wicketkeeper: true, gloves: "SS" },
  Bashir: { catchRecord: 18, mostInSeason: 6 },
  Khizer: { fitnessScore: 90, endurance: "High" },
  Sheryar: { debutMonth: "March", debutYear: 2023 }
};

// Display output in console
console.log("Total Players: " + Object.keys(mainObj).length);
console.log("Info about Babar:", mainObj.Babar);
console.log("Is Waqas a record holder?", mainObj.Waqas.recordHolder);
console.log("Yasir Test Matches:", mainObj.Yasir.test);
console.log("Zeeshan Bowling Speed:", mainObj.Zeeshan.speed);