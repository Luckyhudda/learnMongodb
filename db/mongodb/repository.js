const user = require("./user");

const reposetory = {
  FindAll: (queryParams) => {
    const queryObj = { ...queryParams };
    const excludedField = ["page", "sort", "limit", "fields"];

    // 1) filter the query for filter the data....
    excludedField.forEach((el) => delete queryObj[el]);
    let query = user.find(queryObj);

    // 2) sort the data 
    if (queryParams["sort"]) {
      query = query.sort(queryParams["sort"]);
    }
    return query;

  },
  FindOne: (id) => {
    return user.findOne({ _id: id });
  },

  InsertOne: (data) => {
    const users = new user(data);
    return users.save();
  },
  InsertMany: (data) => {
    // const users = new user(data)
    // return users.save();
    return user.insertMany(data);
  },

  UpdateOne: (id, data) => {
    return user.updateOne({ _id: id }, data, { new: true });
  },

  // UpdateMany : (id,data) =>{
  //      return user.updateMany(_, data);
  // },

  DeleteOne: (id) => {
    return user.deleteOne({ _id: id });
  },
  DeleteMany: () => {
    return user.deleteMany();
  },
};

module.exports = reposetory;
