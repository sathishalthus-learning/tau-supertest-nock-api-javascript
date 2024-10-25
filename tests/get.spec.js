import app from "../src/app.js";
import  request from "supertest";
import { expect } from "chai";

describe('get requests',()=>{
it('get requests',()=>{
    request(app)
    .get('/course/1')
    .end((err,res)=>{expect(res.body.id).to.be.equal('1')

    });
});

//
it('get query param name',(done)=>{
    request(app)
    .get('/course')
    .query({name:'mocha'})
        .expect(200,{id:'1',name:'mocha'},done)
});


});