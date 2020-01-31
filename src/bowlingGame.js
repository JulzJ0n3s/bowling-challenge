

class Airport{

  constructor(){
    this._hangar = [];
    // this. refers to this specific object called airport 
    // the use of underscorce this is to indicate that this should be a private method.
  };

  planes(){
    // return []; refactored to this._hanger
    return [];
  };

  clearForLanding(plane){
    this._hangar.push(plane);
  };
};