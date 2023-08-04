sumar = async (event) => {
    const { num1, num2 } = JSON.parse(event.body);
  
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Both inputs must be numbers' }),
      };
    }
  
    const result = num1 + num2;
    console.log(result);
  
    return {
      statusCode: 200,
      body: JSON.stringify({ result }),
    };
  };
  module.exports = {sumar}