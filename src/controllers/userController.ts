/** @format */

import status from "http-status";
import usersModel from "@models/users";
import has from "@util/hasKeys";

export default {
  async getCalzadosAll(_req: any, res: any) {
    let prueba = usersModel.getCalzado();
    const resposne = await prueba.doc("/example").get();
    if (resposne.exists) res.json(resposne.data());
  },

  async getUserById(req: any, res: any) {
    if (!has.getHaskey(req.params, "id"))
      throw { code: status.BAD_REQUEST, message: "You must specify the id" };
    let { id } = req.params;
    let data = null;
    if (!data) throw { code: status.BAD_REQUEST, message: "User not found" };
    res.json({ status: true, message: "Returning user", data });
  },
};
