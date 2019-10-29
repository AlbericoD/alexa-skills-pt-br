const Alexa = require('ask-sdk-core');
const { BEM_VINDO, FATOS, ERRO } = require('./falas');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {


    return handlerInput.responseBuilder
      .speak(BEM_VINDO)
      .reprompt(BEM_VINDO)
      .withSimpleCard('Titulo', BEM_VINDO)
      .getResponse();
  }
}

const FatosSobreAguaIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'FatosSobreAgua';
  },
  handle(handlerInput) {


    return handlerInput.responseBuilder
      .speak(FATOS)
      .withSimpleCard('FATOS', FATOS)
      .getResponse();
  }
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak(ERRO)
      .reprompt(ERRO)
      .getResponse();
  },
};

module.exports.hello = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    FatosSobreAguaIntentHandler)
  .addErrorHandlers(ErrorHandler)
  .lambda();
