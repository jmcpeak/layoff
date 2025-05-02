import { server } from '@/mocks/node';

server.listen();

// This is a simple Node.js application that
// does a network request and prints the response.
async function app() {
  const response = await fetch(' http://localhost:3000/user');

  try {
    const user = await response.json();
    console.log(user);
  } catch (e) {
    console.log('error', e);
  }
}

app();
