import appModel from './app';
import routerModel from './router';
import datapreview from './datapreview';
// import pointdetail from './pointdetail'

export function registerModels(app) {
  app.model(appModel);
  app.model(routerModel);
  app.model(datapreview);
  // app.model(pointdetail);
}
