
var obj = [
    {name:"player1",age:"20",id:1},
    {name:"player2",age:"21",id:2},
    {name:"player3",age:"22",id:3},
    {name:"player4",age:"23",id:4},
    {name:"player5",age:"24",id:5},
    {name:"player6",age:"25",id:6},
    {name:"player7",age:"26",id:7},
    {name:"player8",age:"27",id:8},
    {name:"player9",age:"28",id:9},
    {name:"player10",age:"29",id:10},

]

var obj = {
    data : [
        {name:"player1",age:"20",id:1},
        {name:"player2",age:"21",id:2},
        {name:"player3",age:"22",id:3},
        {name:"player4",age:"23",id:4},
        {name:"player5",age:"24",id:5},
        {name:"player6",age:"25",id:6},
        {name:"player7",age:"26",id:7},
        {name:"player8",age:"27",id:8},
        {name:"player9",age:"28",id:9},
        {name:"player10",age:"29",id:10},

    ],
    get : function (id) {
        return this.data[(id-1)]
    },
    all : function () {
        return this.data;
    }

}
export  default obj;