


const args = process.argv.slice(2);

const [operation, ...values] = args;

if (!operation) {
  console.error('Please specify an operation to perform.');
  process.exit(1);
}

switch (operation) {
  case 'addition':
    if (values.length === 0) {
      console.error('No value entered, Please specify at least one value for addition');
      process.exit(1);
    }
    if (values.some(value => isNaN(parseInt(value)))) {
      console.error('Please enter numeric values only for addition');
      process.exit(1);
    }
   
    const sum = values.reduce((acc, curr) => acc + parseInt(curr), 0);
    console.log(`${values.join('+')}=${sum}`);
    break;
    
    let newValues = values.map((data)=>parseInt(data));
    console.log(newValues);
    console.log(`${newValues.join('+')}=${sum}`);
    break;

   
  case 'subtraction':
    if (values.length !== 2) {
      console.error(' For subtraction you need to have 2 values, please specify exactly two values for subtraction');
      process.exit(1);
    }
    const difference = parseInt(values[0]) - parseInt(values[1]);
    console.log(`${values[0]}-${values[1]}=${difference}`);
    break;
  case 'multiplication':
    if (values.length === 0) {
      console.error('No value entered, Please specify at least one value for multiplication');
      process.exit(1);
    }
    const product = values.reduce((acc, curr) => acc * parseInt(curr), 1);
    console.log(`${values.join('*')}=${product}`);
    break;
  case 'division':
    if (values.length !== 2) {
      console.error('Please specify exactly two values for division');
      process.exit(1);
    }
    if (parseInt(values[1]) === 0) {
      console.error('Cannot divide by zero');
      process.exit(1);
    }
    const quotient = parseInt(values[0]) / parseInt(values[1]);
    console.log(`${values[0]}/${values[1]}=${quotient}`);
    break;
  default:
    console.error(`Unsupported operation: ${operation}`);
    process.exit(1);
}
