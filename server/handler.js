const { Configuration, OpenAIApi } = require("openai");

let myHandler = async function (event, context, callback, logger) {
  const configuration = new Configuration({
    apiKey: process.env.api_key,//"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"
  });
  const openai = new OpenAIApi(configuration);
  let finalPrompt = JSON.parse(event.body).prompt;
  await openai.createCompletion({
    model: process.env.model,
    prompt: finalPrompt,
    temperature: +process.env.temperature,
    max_tokens: +process.env.max_tokens,
    top_p: +process.env.top_p,
    frequency_penalty: +process.env.frequency_penalty,
    presence_penalty: +process.env.presence_penalty
  }).then((aiRes) => {
    let res = new context.HTTPResponse(context.env, {
      "res-type": "context.env",
      "faas-content-type": "json",
    }, "application/json", "200");
    res.body = { "data": JSON.stringify(aiRes.data.choices)};
    callback(res);
  }).catch(error => {
    logger.error("--------Error-------");
    logger.error("error: " + error);
    logger.error("error msg: " + error.msg);
    callback(error);
  });
};

module.exports.myHandler = myHandler;