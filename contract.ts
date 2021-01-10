import { Ask } from './deps.ts';
const ask = new Ask();
const answers = await ask.prompt([{
  name: "customer",
  type: "input",
  message: "Who is the customer?",
}, {
  name: "date",
  type: "input",
  message: "What is the effective date?",
}, {
  name: "services",
  type: "input",
  message: "What is the provided service?",
}, {
  name: "freelancer",
  type: "input",
  message: "Who is providing the service?",
}]);

const { customer, date, services, freelancer } = answers;

const contractTemplate = await Deno.readTextFile("./template.txt");

const contract = contractTemplate
  .replaceAll("[customer]", customer)
  .replaceAll("[date]", date)
  .replaceAll("[freelancer]", freelancer)
  .replaceAll("[services]", services);

await Deno.writeTextFile(`${date}--contract.txt`, contract);
console.log(`File written to ${`${date}--contract.txt`}`);
