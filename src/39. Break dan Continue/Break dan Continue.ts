// Break dan Continue

let counter = 0;

do {
  counter++;

  if (counter == 10) {
    break;
  }

  if (counter % 2 == 0) {
    console.log("Continue",counter);
    continue;
  }

  console.info(counter);
} while (true);
