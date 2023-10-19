const user = require("./user");

class apiFeature {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  Filter() {
    // 1) filter the query for filter the data....
    const queryObj = { ...this.queryStr };
    const excludedField = ["page", "sort", "limit", "fields"];
    excludedField.forEach((el) => delete queryObj[el]);
     this.queryStr = this.query.find(queryObj);

    return this;
  }

  Sort() {
    // 2) sort the data
    if (this.query["sort"]) {
      this.queryStr = this.queryStr.sort(this.query["sort"]);
    } else {
      this.queryStr = this.queryStr.sort("age");
    }

    return this;
  }

  FieldLimitation() {
    // 3) Field limiting...
    if (this.query["fields"]) {
      const fields = this.query["fields"].split(",").join(" ");
      this.queryStr = this.queryStr.select(fields);
    } else {
      this.queryStr = this.queryStr.select("-__v");
    }

    return this;
  }

  Pagination() {
    // 4) Pagination...
    const page = this.query["page"] * 1 || 1;
    const limit = this.query["limit"] * 1 || 10;
    const Skip = (page - 1) * limit;
    this.queryStr = this.queryStr.skip(Skip).limit(limit);

    return this;
  }
}

const reposetory = {
  FindAll: (queryParams) => {
    const feature = new apiFeature(user.find(), queryParams)
      .Filter()
      .Sort()
      .FieldLimitation()
      .Pagination();

      return feature
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
