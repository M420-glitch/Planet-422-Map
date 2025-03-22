window.onload = function () {
  const divZones = document.querySelectorAll(".zone");
  const output = document.getElementById("zone-output");
  const glow = document.getElementById("zone-glow");
  let hideGlowTimeout;

  const glowPositions = {
    "Zone 1": [357, 60],
    "Zone 2": [430, 120],
    "Zone 3": [430, 190],
    "Zone 4": [420, 270],
    "Zone 5": [355, 340],
    "Zone 6": [257, 365],
    "Zone 7": [155, 340],
    "Zone 8": [95, 270],
    "Zone 9": [70, 190],
    "Zone 10": [95, 120],
    "Zone 11": [155, 60],
    "Zone 12": [257, 20]
  };

  const messages = {
    "Zone 1": "💀 Zone 1: Static winds twist through control towers.",
    "Zone 2": "💀 Zone 2: Surveillance drones drift endlessly.",
    "Zone 3": "💀 Zone 3: Obsidian walls hum with denial.",
    "Zone 4": "💀 Zone 4: No signal. No memory. No escape.",
    "Zone 5": "💀 Zone 5: Steel blooms in scorched soil.",
    "Zone 6": "💀 Zone 6: The Rebel Heart — Where the Legends ignite their resistance, fighting back against the Barons to reclaim the outer circle.",
    "Zone 7": "💀 Zone 7: They buried the light here long ago.",
    "Zone 8": "💀 Zone 8: Cold fire, colder silence.",
    "Zone 9": "💀 Zone 9: A gate sealed with forgotten names.",
    "Zone 10": "💀 Zone 10: Cyber mines echo with despair.",
    "Zone 11": "💀 Zone 11: Mrs. Shackles' Land — Icy mountains under Baron rule, where the chill cuts deeper than the steel of control.",
    "Zone 12": "💀 Zone 12: The sky is blacker here than night."
  };

  // Add support for div-based zones
  divZones.forEach(zone => {
    const zoneName = zone.dataset.zone;

    zone.addEventListener("mouseenter", () => {
      clearTimeout(hideGlowTimeout);
      output.innerText = `👁️ Hovering over: ${zoneName}`;
  
      // Glow positioning
      if (glowPositions[zoneName]) {
        const [x, y] = glowPositions[zoneName];
        glow.style.display = "block";
        glow.style.top = `${y}px`;
        glow.style.left = `${x}px`;
      }
    });

    zone.addEventListener("mouseleave", () => {
      hideGlowTimeout = setTimeout(() => {
        output.innerText = "";
        glow.style.display = "none";
      }, 150);
    });

    zone.addEventListener("click", () => {
      output.innerText = messages[zoneName] || `You clicked on ${zoneName}`;
    });
  });
};
