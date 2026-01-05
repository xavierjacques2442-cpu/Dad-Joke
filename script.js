 //Xavier 
 //1/5/2026
 //Fetch a random joke from an API and display it on the webpage when a button is clicked
 //Peer Review:
 
 const jokeDiv = document.getElementById("joke");
    const btn = document.getElementById("getJoke");

    btn.addEventListener("click", async () => {
      // fetch a random joke
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      });

      const data = await response.json();
      jokeDiv.textContent = data.joke;
    });