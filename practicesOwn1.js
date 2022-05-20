//1 practice 


//  getInfo below/set (after click - good choice!) - pictures) = onmouseover([pictures])


let article = document.querySelector("#article") //id #
let span1 = document.getElementById("b1")
let span2 = document.getElementById("b2")
let span3 = document.getElementById("b3")
let span4 = document.getElementById("b4")
let span5 = document.getElementById("b5")
let span6 = document.getElementById("b6")
let span7 = document.getElementById("b7")
let span8 = document.getElementById("b8")
let span9 = document.getElementById("b9")

class Figures{ //instance
    constructor(figure){   //object figure
                           //field $el
        this.$el = document.querySelector(figure) //id personally BEFORE one-threaded
           //size to the constructor NOT that object
    }


    get Info(){  //on an object
         article.innerHTML = `<span style = "margin-left: 114px; line-height: 55px">Our clients</span>` //innerhtml only with inner
    }

    set Info(newInfo){ //on an object
        article.innerHTML = newInfo
    }
    
    //instance methoda and etc
    makeSmaller(){  //not an instance method
         this.$el.style.width  = this.$el.style.height = "23px" //we CANT do ANY operations w/ style
    }

    makeBigger(){
        this.$el.style.width  = this.$el.style.height = "523px" 
    }
}


class AllTypes extends Figures{
       constructor(options){
           super(options.figure)// as the second constructor
           this.$el.style.width = this.$el.style.height = options.size + "px" //px as measure
           this.$el.style.background = options.background  //style DOESNT show
           this.$el.style.padding = options.padding + "px" 
           this.$el.style.marginRight = options.marginRight + "px" 
           this.$el.style.borderRadius = options.borderRadius + "%"
       }
      //methods outside of our constructor
      // pictures(){
      //       this.$el.innerHTML = `<img src = "https://s3.wp.wsu.edu/uploads/sites/2797/2022/03/space.jpg" style="width: 160px; position: relative; top: 43px; left: 17px" >`
      // }
}

class Rectangle extends AllTypes{
       constructor(options){
           super(options) //work with a node in DOM
           this.$el.style.width = options.width + "px"
           this.$el.style.height = options.height + "px"
       }
}

const circle1 = new AllTypes({ //object exist only in JS
      figure: "#b1",
      size: 200,
      //deafult background - transparent
      background: "black",
      padding: 3,
      marginRight: 4,
      borderRadius: 270
})




//addEventlistener - ONLY HTML DOM DOCUMENTS
span1.addEventListener("mouseover", () => { //static method 
     //many functions BUT only one way how to call it
     span1.innerHTML = `<img src = "https://s3.wp.wsu.edu/uploads/sites/2797/2022/03/space.jpg" style="width: 160px; position: relative; top: 43px; left: 17px" >`
}) 

span2.addEventListener("mouseover", () => { //static method 
     //many functions BUT only one way how to call it
     span2.innerHTML = `<img src = "https://www.statnews.com/wp-content/uploads/2021/06/SPACE_MOUSE.jpg" style="width: 169px; position: relative; top: 43px; left: 17px" >`
}) 

span3.addEventListener("mouseover", () => { //static method 
     //many functions BUT only one way how to call it
     span3.innerHTML = `<img src = "https://honeywell.scene7.com/is/image/honeywell/AeroBT-s_363654452_2880x1440-1:5-2-hero" style="width: 169px; height: 100px; position: relative; top: 43px; left: 17px" >`
}) 
span4.addEventListener("mouseover", () => { //static method 
     //many functions BUT only one way how to call it
     span4.innerHTML = `<img src = "http://www.nasa.gov/sites/default/files/pia17838_-harrison1_0.jpg" style="width: 169px; position: relative; top: 43px; left: 17px" >`
}) 
span5.addEventListener("mouseover", () => { //static method 
     //many functions BUT only one way how to call it
     span5.innerHTML = `<img src = "https://i.natgeofe.com/n/8a3e578f-346b-479f-971d-29dd99a6b699/nationalgeographic_2751013_16x9.jpg" style="width: 169px; position: relative; top: 43px; left: 17px" >`
}) 
span6.addEventListener("mouseover", () => { //static method 
     //many functions BUT only one way how to call it
     span6.innerHTML = `<img src = "https://cdn.mos.cms.futurecdn.net/DiotLQz4NUZG8BPWybjifK.jpg" style="width: 169px; position: relative; top: 43px; left: 17px" >`
}) 
span7.addEventListener("mouseover", () => { //static method 
     //many functions BUT only one way how to call it
     span7.innerHTML = `<img src = "https://cdn.mos.cms.futurecdn.net/xcLR5HMU2kxskdAy3ZVuTf.jpg" style="width: 169px; position: relative; top: 43px; left: 67px" >`
}) 
span8.addEventListener("mouseover", () => { //static method 
     //many functions BUT only one way how to call it
     span8.innerHTML = `<img src = "https://static.independent.co.uk/2021/06/04/10/DESY_GRB_still_1.jpeg?width=1200" style="width: 169px; position: relative; top: 43px; left: 67px" >`
}) 
span9.addEventListener("mouseover", () => { //static method 
     //many functions BUT only one way how to call it
     span9.innerHTML = `<img src = "https://static01.nyt.com/images/2022/04/21/travel/00spacetravel-illo/00spacetravel-illo-mediumSquareAt3X.jpg" style="width: 149px; height: 100px; position: relative; top: 54px; left: 77px" >`
}) 

const circle2 = new AllTypes({ //object exist only in JS
      figure: "#b2",
      size: 200,
      //deafult background - transparent
      background: "orange",
      padding: 3,
      marginRight: 4,
      borderRadius: 270
})
const circle3 = new AllTypes({ //object exist only in JS
      figure: "#b3",
      size: 200,
      //deafult background - transparent
      background: "black",
      padding: 3,
      marginRight: 4,
      borderRadius: 270
})


const square1 = new AllTypes({ //object exist only in JS
      figure: "#b4",
      size: 200,
      //deafult background - transparent
      background: "black",
      padding: 3,
      marginRight: 4,
      borderRadius: 0
})

const square2 = new AllTypes({ //object exist only in JS
      figure: "#b5",
      size: 200,
      //deafult background - transparent
      background: "orange",
      padding: 3,
      marginRight: 4,
      borderRadius: 0
})

const square3 = new AllTypes({ //object exist only in JS
      figure: "#b6",
      size: 200,
      //deafult background - transparent
      background: "black",
      padding: 3,
      marginRight: 4,
      borderRadius: 0
})

const rectangle1 = new Rectangle({ //object exist only in JS
      figure: "#b7",
      width: 300,
      height: 200,
    //   height: 5,
      //deafult background - transparent
      background: "black",
      padding: 3,
      marginRight: 4,
      borderRadius: 270
})

const rectangle2 = new Rectangle({ //object exist only in JS
      figure: "#b8",
      width: 300,
      height: 200,
      //deafult background - transparent
      background: "orange",
      padding: 3,
      marginRight: 4,
      borderRadius: 270
})

const rectangle3 = new Rectangle({ //object exist only in JS
      figure: "#b9",
      width: 300,
      height: 200,
      //deafult background - transparent
      background: "black",
      padding: 3,
      marginRight: 4,
      borderRadius: 270
})



const emotions = document.getElementById("emotions")
const tours = document.getElementById("tours")

const messages = new Promise((resolve) => {         //w/o conditions - reolve
      rectangle1.Info                              // IN 1 class will reassign ALL
     
      setTimeout(()=> {
           emotions.innerHTML = `<span style = "grid-column: 2; margin-left: 121px; line-height: 55px "> their emotions</span>` 
           resolve()
      }, 2000)
      
})

messages.then( () => setTimeout(() => {  //To avoid misunderstanding
    tours.innerHTML = `<span style = "grid-column: 3 ; margin-left: 121px; line-height: 55px ">names of tours</span>`  //STYLE is an attribute
}, 2000 ) )


// circle1.addEventListener("mouseover",()=>{ //it is not available yet
//       console.log("Testing")
// })

// const obj = new Figures({
//     // figure: "#b2",
//     // size: 123
// })

// figure.makeSmaller()



//default height of a div - 0 
//default width - auto

//cant use numbers before


//OBJECTS EXIST ONLY IN JS!!!


//? w/o extends +++++++
//ONLY 1 constructor +++++


//querySelector - TO WORK IN JS +++

//with span WE can specify width and height using block or inline block display


//bigegr() smaller() ??

//appendChild()
//createElement()