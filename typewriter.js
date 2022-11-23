const sentence = "hello there from lighthouse labs";

  const timedRelease = function(sentence) {

    for (let x=0; x < sentence.length; x++) {
      setTimeout(() => {
        process.stdout.write(sentence[x])
      }, 50 * x);
    }
    setTimeout(() => {
      console.log()
    }, (sentence.length * 50) + 50 );

  }



  timedRelease(sentence)
