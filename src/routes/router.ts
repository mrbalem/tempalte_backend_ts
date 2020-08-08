import express from "express";

//[*] import routes
import userRouter from "./userRoutes";

/**
 * @author DigitalNew
 * @see https://digitalnew.solutions/
 * @process 1
 * @version 1.0
 */

export default class Routes {
  public pathname: string = "/api/v1/rest";
  /**
   * @function routes
   * @generator router for this proyect api rest
   * @param app aplication use for express route
   * @description continene todas las rutas establecidas para el proyecto
   */
  public routes(app: express.Application): void {
    // [*] lista de rutas del proyecto
    new userRouter(app).Endpoint(this.pathname);
    // [+] instanciar las rutas necesarias para el proyecto
  }
}
