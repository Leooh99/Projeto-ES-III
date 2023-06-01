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

  it('should not create a new user with invalid data', async () => {
    const newUser = {
      name: '',
      email: 'pedro@example.com',
      password: '',
    }

    const response = await request(app)
      .post('/users')
      .send(newUser)
      .expect(400)

    expect(response.body).toHaveProperty('error');
  });
});

describe('Board create', () => {
  it('should create a new board', async () => {
    const newBoard = {
      title: 'Discover'
    };

    const response = await request(app)
      .post('/board')
      .send(newBoard)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe(newBoard.title);
  });
});

describe('Card create', () => {
  it('should create a new card', async () => {
    const newCard = {
      title: 'Task1',
      date: '2022-05-05',
      boardId: '1'
    };

    const response = await request(app)
      .post('/card')
      .send(newCard)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe(newCard.title);
    expect(response.body.date).toBe(newCard.date);
    expect(response.body.boardId).toBe(newCard.boardId);
  });
});


describe('Label create', () => {
  it('should create a new label', async () => {
    const newLabel = {
      color: '#1ebffa',
      text: 'Frontend',
      cardId: '1'
    };

    const response = await request(app)
      .post('/label')
      .send(newLabel)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.color).toBe(newLabel.color);
    expect(response.body.text).toBe(newLabel.text);
    expect(response.body.cardId).toBe(newLabel.cardId);
  });
});


describe('Task create', () => {
  it('should create a new task', async () => {
    const newTask = {
      completed: 'true', 
      text: 'Task1_subtask1', 
      cardId: '1'
    };

    const response = await request(app)
      .post('/task')
      .send(newTask)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.completed).toBe(newTask.completed);
    expect(response.body.text).toBe(newTask.text);
    expect(response.body.cardId).toBe(newTask.cardId);
  });
});