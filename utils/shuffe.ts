export function shuffle(array: []) {
  const coppyArray = [...array];
  let currentIndex = coppyArray.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [coppyArray[currentIndex], coppyArray[randomIndex]] = [
      coppyArray[randomIndex],
      coppyArray[currentIndex],
    ];
  }
  return coppyArray;
}
