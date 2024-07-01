import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js"

const server = fastify();

const database = new DatabaseMemory();


server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body;   


    database.create({
        title,
        description,
        duration,
    })
    
    

    return reply.status(201).send();
});

server.get('/videos', (request, reply) => {
    const videos = database.list()

    return videos
});

server.put('/videos/:id', () => {
    return `Updating video with ID: ${id}`
});

server.delete('/videos/:id', () => {
    return `Deleting video with ID: ${id}`
});

server.listen({
    port: 3333,
    host: "localhost"
})