const deepObjectWithArrays = {
  merchant_id: '098',
  reason: '   reason   ',
  to_location_id: '2aca7db7-11ea-8147-06a06199bb40',
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
      email: 'Test@hotmail.com    ',
      phone: '123   ',
      address: {
          address1: 'Street with number',
          address2: 'number',
          colony: '    colony    ',
          country: 'Mexico',
          state: 'ciudad de mexico',
      },
  },
};

module.exports = {
  deepObjectWithArrays
}
