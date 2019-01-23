const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>hey</h1>');
});

const actions = [];
const sockets = {};

io.on('connection', socket => {
  console.log('connection', socket.id);

  sockets[socket.id] = socket;

  socket.on('action', data => {
    console.log(data.type);
    actions.push({ ...data, fromServer: true, createdOn: new Date() });
    
    socket.broadcast.emit('action', { ...data, fromServer: true });
  });

  socket.on('disconnect', () => {
    console.log('disconnect', socket.id);
    delete sockets[socket.id];
    io.emit('disconnect', {user: socket.id});
  });

  socket.emit('state', actions.sort((a, b) => b.date - a.date));
  // socket.broadcast.emit('action', {type: '[User] UserConnect', payload: {id: socket.id}, fromServer: true})
});



app.post('/addTodo', (req, res) => {
  console.log('todo', req.body);

  res.send(req.body);
});

http.listen(3000, () => {
  console.log('server running');
});
