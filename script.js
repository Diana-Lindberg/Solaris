const openOverlay = document.querySelectorAll(".openOverlay");
const overlay = document.querySelector("#overlay")
let data;
let planets;

async function getPlanets() {
  try {
      let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
          method: "GET",
          headers: { "x-zocom": "solaris-1Cqgm3S6nlMechWO" },
      });
      data = await resp.json();
      planets = data.bodies;
      console.log(planets)

  } catch (error) {
      console.error("Error fetching planet data:", error);
  }
}

 getPlanets();


 openOverlay.forEach((openOverlay, i) => {
    openOverlay.addEventListener('click', async function () {
        document.querySelector('#overlay').classList.toggle('show');

      console.log(i);

        document.querySelector(".name").innerText = data.bodies[i].name;
        document.querySelector(".latinName").innerText = data.bodies[i].latinName;
        document.querySelector(".desc").innerText = data.bodies[i].desc;
        document.querySelector(".circumference").innerText = data.bodies[i].circumference;
        document.querySelector(".distance").innerText = data.bodies[i].distance;
        document.querySelector(".tempDay").innerText = data.bodies[i].temp.day;
        document.querySelector(".tempNight").innerText = data.bodies[i].temp.night;
        document.querySelector(".moons").innerText = data.bodies[i].moons;
    });
  });
 





