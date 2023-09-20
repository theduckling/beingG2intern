const d1 = { day: "shanbe", time: 10, houre: "10 am" }
const d2 = { day: "yekshanbe", time: 11, houre: "10 am" }
const d3 = { day: "doshanbe", time: 13, houre: "10 am" }
const d4 = { day: "seshanbe", time: 10, houre: "10 am" }
const d5 = { day: "charshanbe", time: 10, houre: "10 am" }
const G2 = [d1, d2, d3, d4]
const d6 = { day: "panjshanbe", time: 9, houre: "10 am" }
const d7 = { day: "jome", time: 11, houre: "10 am" }
const d8 = { day: "shanbe", time: 13, houre: "10 am" }
const G1 = [d6, d7, d8]
    // G2.push(d5);//be akharesh ezafe mikone
    // G2.pop();//az akharesh km mikone
    // G2.unshift(d0 = { day: "shanbe", time: 10 })
    // G3 = G2.shift() //ham g2 ro shift mikone hm objecti ke shift karde ro tuye g3 mizare
    // G4 = G2.slice(1, 3) // 1 ro barmidare 2 ro barmidare khod 3 ro barnmidare
G5 = G2.concat(G1)
    // G5.map((item) => {
    //     console.log(item.time)
    // })
const result = G5.filter((item) => {
    return (item.time > 10)
})
console.log(result)

// function add(x1, x2) {
//     const sum = x1 + x2;
//     return sum;
// }

// const add = (a, b) => { return a + b }
// const ret1 = add(1, 2)
// console.log(ret1)
// console.log(G2, 'g2')
// console.log(G2[1].time)
// console.log(G3, 'g3')
// console.log(G4)