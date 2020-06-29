import VueGtag from "vue-gtag";

const _validateParams = (vue, id, appName, router) => {
  const msgStub = "Internal Analytics says:\n\nYou are missing required setup parameter:\n\n";
  if (!vue) console.warn(`${msgStub}Vue Instance`);
  if (!id) console.warn(`${msgStub}GA Key`);
  if (!router) console.warn(`${msgStub}Vue Router Instance`);
  if (!appName) console.warn(`${msgStub}Application Name`);
}

export const initGoogleAnalytics = (vue, id, appName, router) => {

  _validateParams(vue, id, appName, router)
  vue.use(VueGtag, {
    config: { 
      id,
      clientId: '',
      userId: '',
      appName: appName,
    },
  }, router);
}

export const setUserIdInGoogleAnalytics = (userId, gtag) => {
  if (!gtag) {
    console.warn('You must provide your gtag instance when calling setUserIdInGoogleAnalytics()')
    return false;
  }
  if (userId === '') {
    console.warn('The client ID you are passing is empty!')
    return false;
  }
  let isSet = '';
  if (isSet === '') {
    isSet = userId;
    gtag.config({
      userId: userId
    })
  }
}

export const setClientIdInGoogleAnalytics = (clientId, gtag) => {
  if (!gtag) {
    console.warn('You must provide your gtag instance when calling setClientIdInGoogleAnalytics()')
    return false;
  }
  if (clientId === '') {
    console.warn('The client ID you are passing is empty!');
    return false;
  }
  let isSet = '';
  if (isSet === '') {
    isSet = clientId;
    gtag.config({
      clientId: clientId
    })
  }
}
