$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(500, 550, 200, 20, "pink")
createPlatform(500, 0, 20, 290,"purple")
createPlatform(1350, 400, 50, 50, "pink")
createPlatform(1150, 300, 50,50, "pink")
createPlatform(1350, 200, 50, 50,"pink")
createPlatform(1100, 0, 25, 350, "purple")
createPlatform(200, 650, 200, 20,"pink")
createPlatform(200, 1250, 10, 100, "lime")
createPlatform(850, 450, 400, 20,"pink")
createCollectable("steve", 1350, 50)
createCollectable("diamond", 200, 170, 0.5, 0.7)
createCollectable("diamond", 1000, 170, 0.5, 0.7)
createCannon("top", 200, 1000)
createCannon("right", 650, 1500)
createCannon("bottom",900, 2500)



    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
