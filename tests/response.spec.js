import app from "../src/app.js";
import request from "supertest";
import { expect } from "chai";

describe('response',()=>{
    it('json response',()=>{
        request(app)
        .get('/course')
        .end((err,res)=>{
            expect(res.body.id).to.be.equal('1');
        });
    });

    //
    it('text response',()=>{
        request(app)
        .get('/course')
        .end((err,res)=>{
            expect(res.text).to.contain('1');
        });
    });

    //
    it('status response',()=>{
        request(app)
        .get('/course')
        .end((err,res)=>{
            expect(res.ok).to.be.true;
        });
    });
});