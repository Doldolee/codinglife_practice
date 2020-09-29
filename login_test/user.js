const mongoose = ruquire('mongoose');

const userSchema = new mongoose.Schema({
    id:String,
    passoword:String
});

userSchema.methods.comparePassword = function(inputPassword, cb) {
    if (inputPassword ===this.password) {
        cb(null, true);
    }else {
        cb('error');
    }
};

module.exports = mongoose.model('users', userSchema, 'users');