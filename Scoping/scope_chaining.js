const globalHero = "Superman"; // Level 1: Global Scope

function outerLayer() {
  const outerHero = "Batman"; // Level 2: Outer Scope

  function middleLayer() {
    const middleHero = "Flash"; // Level 3: Middle Scope

    function innerLayer() {
      const innerHero = "Robin"; // Level 4: Local Scope

      // JavaScript searches outward through every level
      console.log(innerHero);  // 1st check: Local ("Robin")
      console.log(middleHero); // 2nd check: Middle ("Flash")
      console.log(outerHero);  // 3rd check: Outer ("Batman")
      console.log(globalHero); // 4th check: Global ("Superman")
    }

    innerLayer();
  }

  middleLayer();
}

outerLayer();