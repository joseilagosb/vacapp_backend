import { Attributes, FindOptions, Model, ModelStatic, Op } from "sequelize";

import Place from "../models/Place";
import Area from "../models/Area";

export const allMatchesByKeys = <T extends Model<any>>(
  model: ModelStatic<T>,
  keys: any,
  fromModel: typeof Place | typeof Area,
  options: FindOptions<Attributes<T>> = {}
): Promise<Array<T>> => {
  return model.findAll({
    include: {
      model: fromModel,
      where: { id: { [Op.in]: keys } },
      attributes: ["id"],
    },
    ...options,
  });
};
