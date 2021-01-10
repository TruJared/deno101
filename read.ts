const filenames = Deno.args;

if (filenames.length > 0) {
  for (const filename of filenames) {
    const file = await Deno.readTextFile(filename);
    console.log(file);
  }
} else {
  const file = await Deno.readTextFile("./test.txt");
  console.log(file);
}
