const queue = []
// 入队
queue.push(1)
queue.push(2)
// 出队
queue.shift()
queue.shift()

var RecentCounter = function() {
    this.q = []
    };
    
    RecentCounter.prototype.ping = function(t) {
        this.q.push(t)
        while(this.q[0] < t - 3000) {
            this.q.shift()
        }
        return this.q.length
    };
    
    function recentCounter () {
        this.queue = []
    }
    recentCounter.prototype.ping = (t) => {
        this.queue.push(t)
        while(this.queue[0] < t - 3000) {
            this.queue.shift()
        }
        return this.queue.length
    }