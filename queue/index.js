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

    // 入队 出队
    var buildArray = function(target, n) {
        const arr = []
        let i = 1
        while(i <= n && target.length > 0) {
            if(i === target[0]) {
                arr.push('Push')
                target.shift()
            } else {
                arr.push('Push')
                arr.push('Pop')
            }
            i++
        }
        return arr
    };
    console.log(
        buildArray([1,3]
            ,3)
    )