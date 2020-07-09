//Constructor

/*
//Как делали раньше
function Server(name, ip) {
    this.name = name
    this.ip = ip
}

Server.prototype.getUrl = function () {
    return `https://${this.ip}:80`
}

const aws = new Server('AWS Poland', '183.24.256.19')
console.log(aws.getUrl())

*/

class  Server {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl() {
        return `https://${this.ip}:80`
    }
}

const aws = new Server('AWS Poland', '183.24.256.19')
console.log(aws.getUrl())