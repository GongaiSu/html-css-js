function createObject(o){
  function F(){}
  F.prototype=o
  return new F()
}

function inherit(Subtype,SuperType){
  Subtype.prototype = createObject(SuperType.prototype)
  Object.defineProperty(Subtype.prototype,"constructor",{
    configurable:true,
    writable:true,
    enumerable:false,
    value:Subtype
  })
}