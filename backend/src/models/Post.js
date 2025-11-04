import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Post = sequelize.define("Post", {
  content: { type: DataTypes.STRING(280), allowNull: false },
});

export default Post;
