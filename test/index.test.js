const supertest = require('supertest');

const app = require('../app');

describe("probar el sistema de autenticacion", ()=>{
    it("deberia de obtener un login con un user y password correctos", (done)=>{
        supertest(app).post("/login")
        .send({'email':'a334083@uach.mx', 'password': '123'})
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            }else{
                done();
            }
        });
    });


    it("esta no deberia tener login con user y password incorrectos", (done)=>{
        supertest(app).post("/login")
        .send({'email':'ab334083@uach.mx', 'password': '1234'})
        .expect(403)
        .end(function(err, res){
            if(err){
                done(err);
        }else{
            done();
        }
    })
    });
});

