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