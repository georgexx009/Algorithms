// the algorithm is a Graph traversal - depth-first search
// respects the immutability principle from functional programming
const iterateAndCleanObject = (layerToClean) => Object.entries(layerToClean).reduce((elementCleaned, [key, value]) => {
    if (typeof value === 'string') {
        return {
            ...elementCleaned,
            [key]: value.trim(),
        };
    }
    // remember - the type from an array in JS is also an object
    if (typeof value === 'object') {
        const cleanedObject = iterateAndCleanObject(value);
        return {
            ...elementCleaned,
            [key]: cleanedObject,
        };
    }
    if (Array.isArray(value)) {
        const cleanedArray = value.map((element) => iterateAndCleanObject(element));
        return {
            ...elementCleaned,
            [key]: cleanedArray,
        };
    }
    // fallback if not supported
    return {
        ...elementCleaned,
        [key]: value,
    };
}, {});

const objectToTest = {
  merchant_id: '098',
  reason: '   reason   ',
  to_location_id: '2aca7db7-8982-11ea-8147-06a06199bb40',
  zendeskTicket: '123234534',
  items: [
      {
          id: '0001',
          name: 'zero',
          serial_number: '   32345678901234    ',
      },
      {
          id: '0001',
          name: 'zero',
          serial_number: '32345678901275      ',
      },
  ],
  from: {
      first_name: 'Test',
      last_name: 'Test',
      email: 'Test@hotmail.com    ',
      phone: '6672332312   ',
      address: {
          address1: 'Street with number',
          address2: 'number',
          city: 'GDL',
          colony: '    colony    ',
          country: 'Mexico',
          municipality: 'Guadalajara',
          postal_code: '45120',
          state: 'ciudad de mexico',
      },
  },
};

const iterateAndCleanObjectV2 = (value) => {
  if (typeof value === 'string') {
      return value.trim();
  }

  // remember - the type from an array in JS is also an object
  if (typeof value === 'object') {
      // If it is an object or array, it recursively cleans all values.
      const temporalValue = Array.isArray(value) ? [...value] : { ...value };
      Object.keys(temporalValue).forEach((key) => {
          temporalValue[key] = iterateAndCleanObjectV2(value[key]);
      });

      return temporalValue;
  }
  return value;
};

const cleanWhiteSpaces = (elementToClean) => {
  // unsupported elements would be returned
  if (typeof elementToClean !== 'object') return elementToClean;

  return iterateAndCleanObject(elementToClean);
};

console.time()
cleanWhiteSpaces(objectToTest)
cleanWhiteSpaces(objectToTest)
cleanWhiteSpaces(objectToTest)
cleanWhiteSpaces(objectToTest)
console.timeEnd()