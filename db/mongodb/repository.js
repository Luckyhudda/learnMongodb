const user = require('./user');


const reposetory = {
    FindAll:() =>{
        return user.find();
    },
    FindOne : (id) =>{
        return user.findOne({'_id':id})
    },
    
    InsertOne : (data) =>{
        const user = new user({data})
        return user.save();
    },
    InsertMany : (data) =>{
        const user = new user([...data])
        return user.save();
    },
    
    UpdateOne : (id,data) =>{
        
    },
    
    UpdateMany : (id,data) =>{
        
    },
    
    DeleteOne : (id) =>{
        return user.deleteOne({'_id':id})
    },
    DeleteMany : (id) =>{
        return user.deleteMany({'_id':id})
    },
    
};

module.exports = reposetory;