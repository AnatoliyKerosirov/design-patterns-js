//Factory pattern

class SimpleSubscriber {
    constructor(name) {
        this.name = name
        this.cost = 100
    }
}

class StandardSubscriber {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumSubscriber {
    constructor(name) {
        this.name = name
        this.cost = 250
    }
}

class SubscriberFactory {
    static list = {
        simple: SimpleSubscriber,
        standard: StandardSubscriber,
        premium: PremiumSubscriber
    }

    create(name, type = 'simple') {
        const Subscriber = SubscriberFactory.list[type] || SubscriberFactory.list.simple
        const subscriber = new Subscriber(name)
        subscriber.type = type
        subscriber.getSubscriber = function(){
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return subscriber
    }
}

const factory = new SubscriberFactory()

const subscribers = [
    factory.create('Vladilen', 'simple'),
    factory.create('Anatoliy', 'premium'),
    factory.create('Kirill', 'standard'),
    factory.create('Oleg', 'premium'),
    factory.create('Petr')
]

subscribers.forEach(s => {
    s.getSubscriber()
})
