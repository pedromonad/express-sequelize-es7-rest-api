import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

describe('## User APIs', () => {
  let user = {
    id: '',
    username: 'fulano',
    password: '1234567890'
  };

  describe('# POST /apiv1/users', () => {
    it('should create a new user', async () => {

        let res = await request(app)
          .post(`/apiv1/users`)
          .set('content-type', 'application/json')
          .send(user);

        user.id = res.body.data.id;
        expect(res.body.data.username).to.equal(user.username);
        expect(httpStatus.OK); 
    });
  });


  describe('# GET /apiv1/users/:userId', () => {
    it('should get user details', async () => {
        let res = await request(app)
            .get(`/apiv1/users/${user.id}`)
            .set('content-type', 'application/json')

        expect(res.body.data.username).to.equal(user.username);
        expect(httpStatus.OK);   
    });

    it('should report error with message - Not found, when user does not exists', async () => {
        let res = await request(app)
          .get('/apiv1/users/0')
          .set('content-type', 'application/json')

        expect(res.body.data).to.equal(null);
    });

  });


  describe('# PUT /apiv1/users/:userId', () => {
    it('should update user details', async () => {
      let userEdit = {};
      userEdit.username = 'kk';
      userEdit.password = 'kk';

      let res = await request(app)
          .put(`/apiv1/users/${user.id}`)
          .set('content-type', 'application/json')
          .send(userEdit);

        expect(res.body.data.username).to.equal('kk');
        expect(httpStatus.OK); 

    });
  });


  describe('# GET /apiv1/users/', () => {
    it('should get all users', async () => {
      let res = await request(app)
            .get(`/apiv1/users`)
            .set('content-type', 'application/json');

      expect(res.body.data).to.be.an('array');
      
    });
  });


  describe('# DELETE /apiv1/users/', () => {
    it('should delete user', async () => {

      let res = await request(app)
          .delete(`/apiv1/users/${user.id}`)
          .set('content-type', 'application/json');

        expect(res.body.success).to.equal(true);
        expect(httpStatus.OK); 
    });
  });

  
});
