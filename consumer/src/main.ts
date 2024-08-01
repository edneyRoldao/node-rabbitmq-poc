import { RabbitMQConnection } from './rabbitmq-connection'

async function consumeMessage() {
    const rabbitConnection = new RabbitMQConnection()
    await rabbitConnection.connect()

    const message = await rabbitConnection.listen()
    console.log(message);
    
    console.log('message has been read and consumed')
}

consumeMessage()