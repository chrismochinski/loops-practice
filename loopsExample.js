console.log( 'Loops Example' );

// while loops
// will always have condition, and as long as condition is true,
// it'll keep running the script inside it

let index = 0;
const max = 10;

while ( index < max ) {
  console.log( 'in while loop, index:', index );
  index++;
}//end while loops
console.log( 'index after while loop is now', index+ ', homies!');
//index jumps outside loop once complete!

// for loops

// Below, we are letting i be zero, i is less than THE
//const "max" which is 10, and we're going to incredment i

for ( let i=0; i<max; i++ ){
  console.log( 'in this "for" loop', i ,'is as such!');
} // this is the SAME CODE AS THE WHILE above, but in one simple line!
// // //  console.log ('after that for loop', i ,'is the number, boiiii');
// returns error - why? Because i is definied INSIDE CODE BLOCK of for...
//does not exist outside the code block

let hand = ['Q', '3', 'J', '9', '6', 'K', 'A'];

console.log( 'Does anybody have any 9s?');

for( let i=0; i<hand.length; i++){ //COMMON PATTERN for looping thru whole array
  console.log( 'for loop', hand[ i ]);
    if( hand [ i ] === '9'){ //finds match!
      console.log( "Hey, that's a match!");
    } // end for -- if
} // end for loop

        console.log('-----next up -  FOR IN LOOP!-----')
              //FOR IN Loops

// the index for each card in the hand loop is going to be i
for(i in hand){
  console.log( 'for in loop', hand [ i ] );
    if( hand [ i ] === '9'){
      console.log ( 'match!')
    } // end for in - if statement
} // end of for in

        //FOR OF loop - will not use index - behaves a bit different
        console.log("~~~~~NEXT UP - FOR OF LOOP~~~~~~~");

//similar, behaves differently
for(card of hand){
  console.log( 'for of loop,', card ); //NOT EVEN ACCESSING i
    if (card === '9'){
      console.log('That is a', card ,'match!')
    } // end for of - if statement
} // end of for of

// end JS
