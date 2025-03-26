exports.handler = async () => {
    return {
      statusCode: 200,
      body: JSON.stringify([
        { id: 1, text: "This is a test feedback" },
        { id: 2, text: "Another feedback example" }
      ]),
    };
  };