const allParts = [
  { id: "A", name: "Red Wheel", type: "wheel", needsPartId: "AXLE_X" },
  { id: "AXLE_X", name: "Axle X", type: "axle", needsPartId: null }, // This is the axle needed by Red Wheel
  { id: "C", name: "Blue Wheel", type: "wheel", needsPartId: "AXLE_Y" },
  // Note: AXLE_Y is missing from the allParts array
  { id: "D", name: "Toy Car Body", type: "body", needsPartId: null },
];

// Define which types of parts we consider "final usable assemblies"
// (as per the example narrative, we don't want to collect axles on their own here)
const interestingAssemblyTypes = ["wheel", "body"];

const usableParts = allParts.filter((currentPart, index, allPartsInTheBox) => {
  // 1. "Is this a part I'm interested in (for the final assembly)?"
  //    Check if the current part's type is one we want to collect.
  if (!interestingAssemblyTypes.includes(currentPart.type)) {
    // If it's an axle, for example, and we're only collecting wheels/bodies,
    // then we are not directly interested in keeping just an axle.
    return false;
  }

  // 2. "Does this part need another specific part?"
  if (currentPart.needsPartId) {
    // Yes, it needs another part.
    // "Okay, now I need to look through my entire box of parts (allPartsInTheBox)...
    // Is the needed part (e.g., 'AXLE_X') in here?"

    // We use .some() which is efficient as it stops as soon as it finds a match.
    // It returns true if at least one element in the array passes the test.
    const neededPartExists = allPartsInTheBox.some(
      (partInBox) => partInBox.id === currentPart.needsPartId
    );

    if (neededPartExists) {
      // "Great! Since the needed part is in the box, this part is usable."
      return true; // Keep the currentPart
    } else {
      // "Oh. Since the needed part is NOT in the box, this part is NOT usable right now."
      return false; // Don't keep the currentPart
    }
  } else {
    // No, it doesn't need any other specific part from this box to be considered "usable" by itself.
    // And it's an interesting type (passed the first check).
    // "So, I keep this part."
    return true;
  }
});

console.log("All Parts in the Box:", allParts);
console.log("-----------------------------------");
console.log("Usable Parts for Assembly:", usableParts);
