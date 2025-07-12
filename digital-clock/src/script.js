const clockContainer = document.getElementById("clock");

const formatTime = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
};

const formatTime12Hour = (hours)=>{
    
}


const updateClock = () => {
  // Step 1: Create a new Date object
  const now = new Date();
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());
  // Step 2: Create a time string
  const timeString = `${hours}:${minutes}:${seconds}`;
  // Step 3: Display in HTML
  clockContainer.innerHTML = timeString;
};

setInterval(updateClock, 1000); // Update every second
