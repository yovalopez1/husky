module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "my first lambda!",
        input: event,
      },
      null,
      2
    ),
  };
};
