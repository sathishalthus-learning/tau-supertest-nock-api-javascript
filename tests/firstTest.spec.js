const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;

// const app = express();

// app.get('/first',(err,res)=> {
//     res.status(200).json({"ok":"response"});
// });

// describe("first test",()=> {
//     it('ok response',()=>{
//         request(app)
//         .get('/first')
//         .end((err,res)=>{
//                 expect(res.statusCode).to.be.equal(200);
//         });
//     });
// })

describe("mocky.io",()=>{
    it('mocky check',()=>{
        request('http://www.mocky.io')
        .get('v2/')
        .expect(200,done);
    });
});