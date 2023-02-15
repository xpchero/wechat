const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config({ path: '../.env' })
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  openai.createCompletion({
    model: "text-davinci-002",
    prompt: "hello"
  }).then((completion)=>{
    completion.data.choices.forEach(element => {
        console.log(element.text);
    });
    
  })

let myHandler = async function(event, context, callback, logger) {

    // example of display environment variables
    /*let env1 = context.env.env1;

    // example of display logs
    logger.info("Test info log");
    logger.warn("Test warn log");
    logger.debug("Test debug log");
    logger.error("Test error log");

    logger.info("--------Start-------");
    try {
        let startTime = new Date().getTime();
        let endTime = startTime;
        let interval = 0;
        startTime = process.uptime() * 1000;

        // print input parameters and environment variables
        logger.info("request: " + JSON.stringify(event.request));

        endTime = process.uptime() * 1000;
        interval = endTime - startTime;
        logger.info("intervalTime: " + interval);
        logger.info("--------Finished-------");

        let res = new context.HTTPResponse(context.env, {
            "res-type": "context.env",
            "faas-content-type": "json",
        }, "application/json", "200");
        res.body = {"intervalTime": interval};
        callback(res);
    } catch (error) {
        logger.error("--------Error-------");
        logger.error("error: " + error);
        callback(error);
    }*/
};

module.exports.myHandler = myHandler;