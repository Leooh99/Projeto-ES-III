import request from 'supertest';
import app from '../src/app';

describe('User create', () => {
  it ('should create a new user', async () => {
    const newUser = {
      name: 'Pedro',
      email: 'pedro@example3.com.br',
      password: '123456',
      area: 'dev',
    };

    const response = await request(app)
      .post('/users')
      .send(newUser)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(newUser.name);
    expect(response.body.email).toBe(newUser.email);
  });
});
