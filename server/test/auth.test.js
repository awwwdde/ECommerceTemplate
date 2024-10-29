// test/auth.test.js
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js'; // Убедитесь, что указываете .js в конце, если это ES-модуль
const { expect } = chai;

chai.use(chaiHttp);

describe('Authentication API', () => {
    it('should register a new user', (done) => {
        chai.request(app)
            .post('/api/auth/register')
            .send({
                name: 'Test User',
                email: 'test@example.com',
                password: 'yourpassword'
            })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('message').eql('User  created');
                done();
            });
    });

    it('should login the user', (done) => {
        chai.request(app)
            .post('/api/auth/login')
            .send({
                email: 'test@example.com',
                password: 'yourpassword'
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('token');
                done();
            });
    });
});