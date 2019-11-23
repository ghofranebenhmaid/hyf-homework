

//Item array removal

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';
 names.splice(1, 1);
console.log(names);


const travelInformation = {
    speed: 50,
    destinationDistance: 432
  };
  function myFunction(travelInformation){

     time = travelInformation.destinationDistance / travelInformation.speed ;
    hours = Math.floor(time); 
    minutes = Math.floor((time - hours)  * 60);
    
    return travelTime = `${hours} hours and ${minutes} minutes`;
  }
  
  //const travelTime = myFunction(travelInformation);
  myFunction(travelInformation);
  console.log(travelTime); // 4 hours and 42 minutes

  //Series duration of my life

  const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Sopranos',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    }
  ];
function SeriesSpan(seriesDurations){
    let res = [];
    let totalSeriesSpan = 0;
    for (let i = 0; i < seriesDurations.length; i++) {
       
        
        let SD = seriesDurations[i];
        L = 80 * 365 * 24 * 60;
        D = SD.days * 24 * 60 ;
        H = SD.hours * 60 ;
        M = SD.minutes;
        LDH = ((D + H + M) / L) * 100 ;
        LDH3 = Math.round(LDH * 1000 ) /1000;
        res[i] = `${SD.title} took ${LDH3}% of my life`;
        totalSeriesSpan = totalSeriesSpan + LDH3;
        }
        
        return console.log(res), console.log(totalSeriesSpan); 
}

SeriesSpan(seriesDurations);

//My favorite songs
const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
  {
    songId: 5,
    title: 'My baby',
    artist: 'Zaineb',
  }
];
//const song = {};
const myPlaylist = [];
const myPlaylist2 = [];

const song = {
  songId: 5,
  title: 'Ghnaya 1',
  artist: 'GG',};

function addSongToDatabase(song){
    songDatabase.push(song);
        return `${song.title} added to songDatabase`; 
      }

console.log(addSongToDatabase(song));
console.log(songDatabase);


//Searching for a song

function getSongByTitle(title){
  let songs = [];
  for (let i = 0; i < songDatabase.length; i++) {
    let songTitle = songDatabase[i].title;
     if (songTitle == title) {
       
      songs.push(songDatabase[i]);
         
    }
     
 }
return songs;
}
console.log(getSongByTitle("Ghnaya 1"));
console.log(getSongByTitle("Blacker than black") );
console.log(getSongByTitle("3 nails in wood"));
console.log(getSongByTitle("My baby"));

//Create our own playlist

function addSongToMyPlaylist(playlist,title){
 let song = getSongByTitle(title);
 playlist.push(song);
 return `${song.title} added to playlist`;
}
console.log(addSongToMyPlaylist(myPlaylist, "My baby"));
console.log(myPlaylist);
console.log(addSongToMyPlaylist(myPlaylist2, "Ghnaya 1"));
console.log(myPlaylist2);

//Save a note

const notes = [];
function addNote(content, id) {
  notes.push({content: content, id: id});
  return notes;
}
addNote("add content 1", 1);
console.log(notes);
addNote("add content 2", 2);
console.log(notes);
addNote("add content 3", 3);
console.log(notes);
addNote("add content 4", 4);
console.log(notes);


function getNoteFromId(id) {
  const output = [];
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      output.push(notes[i]);
    }
  }
  if (output.length > 0) {
    return output;
  }else{
    return " Error: id doesn't exist";
  }
}
console.log(getNoteFromId(3));
console.log(getNoteFromId(5));


function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
   console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`);
   
  }
}
logOutNotesFormatted();

// Extra feature .
function addNoteAndCheckId(content, id) {
  let status = "notExist";
  for (let i = 0; i < notes.length; i++) {
      if (id === notes[i].id) {
          status = "exist";
          console.log("Id already exists")
      }
  }
  if (status === "notExist"){
      notes.push(content, id);
      console.log("Id has been added")
  }  
  
}

addNoteAndCheckId("add content 2", 2);
addNoteAndCheckId("add content 5", 5);
console.log(notes);

//Cactus IO

const activities = [];

function addActivity( activity, duration) {
  let today  = new Date();
  activities.push({date: today.toString('dd-MMM-yyyy') , activity: activity, duration: duration});
  return activities;
  
}
addActivity('Youtube', 30);
addActivity('Facebook', 20);
console.log(activities);


//Show my status

function showStatus(activities, limit) {
  
if (activities.length > 0) {
  
  let totalDuration = 0;
  for (let i = 0; i < activities.length; i++) {
    
    totalDuration = totalDuration + activities[i].duration;
  }
  if (totalDuration >= limit) {
    return `You have reached your limit, no more smartphoning for you!`;
  }else{

    numberOfActivities = activities.length;
    return `You have added ${numberOfActivities} activities. They amount to ${totalDuration} min. of usage`;
  }
  }else{
    return `Add some activities before calling showStatus`;
}
}
console.log(showStatus(activities, 40));


