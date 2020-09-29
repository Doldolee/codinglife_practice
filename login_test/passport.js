const passport = require('passport');
const LocalStrategy = require('passsport-local').Strategy;
var session = require('express-session')
var helmet = require('helmet')
var assert = require('assert')

const Users = require('./user');

//local 로그인 전략
module.exports = ()=>{
    passport.serializeUser((user, done) => { //strategy성공 시 호출됨. //로그인 성공 시 실행되는 done(null,user)에서 user객체를 전달받아 세션(req.session.passport.user)에 저장
        done(null, user); //여기의 user가 deserializiUser의 첫 번째 매캐변수로 이동
    });

    passport.deserializeUser((user,done) => { //매개변수 user는 serializeUser의 done의 인자 user를 받은 것 //실제 서버로 들어오는 요청마다 세션정보를 실제 DB데이터와 비교
        done(null, user); //여기의 user가 req.user가 됨
    });

    passport.use(new LocalStrategy({ //local 전략을 세움.
        usernameField: 'id',
        passwordField:'pw',
        session: true, //session에 저장 여부
        passReqToCalloback: true,
    }, (req, id, password, done) => {
        Users.findOne({id: id}, (findError,user)=>{
            if (findError) return done(findError); //서버 에러 처리        
            if(!user) return done(null, false, {message: '존재하지 않는 아이디입니다.'}); //임의 에러 처리
            return user.comparePassword(password,(passError, isMatch)=>{
                if (ismatch){
                    return done(null, user); //검증 성공
                }
                return done(null, false, {message:'비밀번호가 틀렸습니다.'}); //임의 에러 처리
            });
        });
    }));
};