const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todos');

let data = [{
    text:'This is insertion one'
},{
    text:'This is insertion two'
}];

beforeEach((done)=>{
    Todo.remove({}).then(()=>{
        return Todo.insertMany(data);
    }).then(()=>done());
});

describe('POST /todos',() => {
   it('It should create todo function!',(done)=>{
     let text = 'Todo Text';

     request(app)
         .post('/todos')
         .send({text})
         .expect(200)
         .expect((res)=>{
            expect(res.body.text).toBe(text);
         })
         .end((err,res)=>{
            if(err){
                return done(err);
            }
            Todo.find().then((todos)=>{
               expect(todos.length).toBe(3);
               expect(todos[2].text).toBe(text);
               done();
            }).catch((e)=>done(e));
         });
   });

    it('It should create todo empty function!',(done)=>{
        let text = 'Todo Text';

        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err,res)=>{
                if(err){
                    return done(err);
                }
                Todo.find().then((todos)=>{
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e)=>done(e));
            });
    });
});

describe('GET /todos',()=>{
    it('It should return some todos',(done)=>{
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res)=>{
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});