const Alexa = require('ask-sdk-core');
// const i18n = require('i18next');
const { BEM_VINDO, FATOS, ERRO } = require('./falas');
const L = console.log;

const LaunchRequestHandler = {
  canHandle(handlerInput) {
  
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    console.log(BEM_VINDO);
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

// const Internacionalizacao = () =>

module.exports.hello = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    FatosSobreAguaIntentHandler)
  .addErrorHandlers(ErrorHandler)
  .lambda();
