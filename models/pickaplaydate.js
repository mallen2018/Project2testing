module.exports = function(sequelize, DataTypes) {
  var pickaplaydate = sequelize.define("pickaplaydate", {
    name: DataTypes.STRING,
    has_pet: DataTypes.STRING,
    pet_name: DataTypes.STRING,
    pet_age: DataTypes.STRING,
    pet_size: DataTypes.STRING,
    pet_temperament: DataTypes.STRING,
    owner_zipcode: DataTypes.INTEGER(5)
    
  });
  return pickaplaydate;
};

///added DataTypes. in front of integers for owner_zipcode line 9
//removed extra curly bracket between line 9 and return
//updated table creation name and var