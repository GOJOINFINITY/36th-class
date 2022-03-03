class Form {
  constructor() {
  this.title=createImg("assets/title.png")
  this.input=createInput("").attribute("placeholder", "Enter Your Name")
  this.button=createButton("P L A Y")
  this.greeting=createElement("h2")
 
  }
  display(){
    this.title.position(200,40)
    this.title.size(900,150)
    this.input.position(width/2-100,height/2-20)
     this.input.style("background-color","blue")
     this.button.position(width/2-50,height/2+20)
     this.button.style("background-color","blue")
     this.button.mouseClicked(()=>{
      this.input.hide()
      this.button.hide() 
   this.greeting.position(width/2-100,height/2-20)  
    this.greeting.html("WELCOME "+this.input.value())
     })
  }

}