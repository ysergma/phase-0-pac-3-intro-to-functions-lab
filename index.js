const shout= function (string){
    return string.toUpperCase();
}

const whisper= function (string){
    return string.toLowerCase();
}

const logWhisper= function (string){
    return console.log(string.toLowerCase());
}

const logShout= function (string){
    return console.log(string.toUpperCase());
}

const sayHiToHeadphonedRoommate= function (string){
    if(string===string.toUpperCase()){
        return "YES INDEED!"
    }
    else if(string===string.toLowerCase()){
        return "I can't hear you!"
    }
    else if(string==="Let's have dinner together!"){
        return "I would love to!"
    }
}