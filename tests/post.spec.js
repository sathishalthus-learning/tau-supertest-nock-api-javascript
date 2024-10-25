import app from "../src/app.js";
import request from "supertest";
import { expect } from "chai";

describe('post requests', () => {
    it('json response', () => {
        request(app)
            .post('/course')
            .send({ "name": "supertest" })
            .set("Accept", 'application/json')
            .end((err, res) => {
                expect(res.body.name).to.be.equal('supertest')
            });
    });

    //

    it('form response',(done)=>{
        request(app)
        .post('/course')
        .send('name=supertest')
        .set('Accept','application/json')
        .expect(200,{"id":"2","name":"supertest"},done)
    });
})