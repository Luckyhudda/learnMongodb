const user = require('./user');


const reposetory = {
    FindAll:() =>{
        return user.find();
    },
    FindOne : (id) =>{
        return user.findOne({'_id':id})
    },
    
    InsertOne : (data) =>{
        const users = new user(data)
        return users.save();
    },
    InsertMany : (data) =>{
        // const users = new user(data)
        // return users.save();
        console.log(data)
        return user.insertMany(data)
    },
    
    UpdateOne : (id,data) =>{
        
    },
    
    UpdateMany : (id,data) =>{
        
    },
    
    DeleteOne : (id) =>{
        return user.deleteOne({'_id':id})
    },
    DeleteMany : () =>{
        return user.deleteMany()
    },
    
};

module.exports = reposetory;