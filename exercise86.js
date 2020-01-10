/*
86. Write a JavaScript program to find the types of a given angle.  Go to the editor

    Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/

function func(givenAngle){
    if(givenAngle >= 0 && givenAngle <= 90){
        return "Acute angle";
    }else if(givenAngle === 90){
        return "Right angle";
    }else if(givenAngle >= 90 && givenAngle <= 180){
        return "Obtuse angle";
    }else if(givenAngle === 180){
        return "Straight angle";
    };
};
