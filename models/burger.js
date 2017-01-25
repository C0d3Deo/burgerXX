module.exports = function(sequelize, DataTypes) {
  var NewBurger = sequelize.define("NewBurger", {
    burger_name: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		len: [1]
    	},
    devoured: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    },
}
  });
  return NewBurger;
};
