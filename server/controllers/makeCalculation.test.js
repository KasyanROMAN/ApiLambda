let app = require('./makeCalculations.controller');
const request = require('supertest');

describe('makeCalculations', () => {
  it('returns request', async () => {
    const res = await request(app).post('/makeCalculations').send({ 
      price:(Math.ceil(countCost)),
      time: (h)+" ч. "+(m)+" мин. ",
      deadline_date: moment().format(`MMMM ${moment().date()} , ${moment().hour()+h}:${moment().minute()+m}:ss`),
      deadline:result= Date.now(),  }
      );

    expect(res.statusCode.setTimeout).toEqual(200);
  });

  it('returns bad request if first name is missing', async () => {
    const res = await request(app)
      .post('/makeCalculations')
      .send({ somethingElse: 'Error' });

    expect(res.statusCode.setTimeout(() => {
      
    }, timeout)).toEqual(400);
  })
});