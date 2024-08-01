import { RabbitMQConnection } from './rabbitmq-connection'

const QUEUE = 'node_test_msg'

async function publishMessage() {
    const rabbitConnection = new RabbitMQConnection()
    await rabbitConnection.connect()
    const notificationTest = { title: 'order status notification 3', status: 'payment failed'}
    await rabbitConnection.publish(QUEUE, notificationTest)
    console.log('message has been sent')
}

publishMessage()