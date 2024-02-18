

abstract class Shape{
  abstract getArea():void
}

class Triangle extends Shape{
  getArea() {
    console.log("这是三角形的面积")
  }
}

class Circular extends Shape{
  getArea() {
    console.log("这是圆形的面积")
  }
}
class Rectangle extends Shape{
  getArea(){
    console.log("这是长方形的面积")
  }
}

function calcArea(shape:Shape){
  shape.getArea()
}

calcArea(new Rectangle())
calcArea(new Circular())
calcArea(new Triangle())