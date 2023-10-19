const user = require("./user");

const reposetory = {
  FindAll: (queryParams) => {
    // 1) filter the query for filter the data....
    const queryObj = { ...queryParams };
    const excludedField = ["page", "sort", "limit", "fields"];
    excludedField.forEach((el) => delete queryObj[el]);
    let query = user.find(queryObj);

    // 2) sort the data
    if (queryParams["sort"]) {
      query = query.sort(queryParams["sort"]);
    } else {
      query = query.sort("age");
    }

    // 3) Field limiting...
    if (queryParams["fields"]) {
      const fields = queryParams["fields"].split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // 4) Pagination...
    const page = queryParams["page"] * 1 || 1;
    const limit = queryParams["limit"] * 1 || 10;
    const Skip = (page - 1) * limit;
    query = query.skip(Skip).limit(limit);

    // Return the Query
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
