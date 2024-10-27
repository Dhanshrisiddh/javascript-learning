function stringHandsOn() {
    
    var str = "     Hey you are doing good,  keep it up      ";
     console.log(`===============================================================`);
     
    console.log(`Original String: ${str}`);
    console.log(`===============================================================`);
  

    console.log(`Length of the original string is: ${str.length}`);
    console.log(`===============================================================`);

    var trimmedStr = str.trim();
    console.log(`Trimmed String: ${trimmedStr}`);
    console.log(`Length of the trimmed string is: ${trimmedStr.length}`);
    console.log(`===============================================================`);
  
    var extraSpacesCount = str.length - trimmedStr.length;
    console.log(`Total number of extra spaces removed: ${extraSpacesCount}`);
    console.log(`===============================================================`);
  
    
    var firstChar = trimmedStr[0];
    var lastChar = trimmedStr[trimmedStr.length - 1];
    console.log(`First and last character after trimming: ${firstChar} and ${lastChar}`);
    console.log(`===============================================================`);

    var wordCount = trimmedStr.split(/\s+/).length;
    console.log(`Total number of words in the trimmed string: ${wordCount}`);
    console.log(`===============================================================`);
  
   
    var indexOfGood = trimmedStr.indexOf("good");
    console.log(`Index of the word 'good': ${indexOfGood}`);
    console.log(`===============================================================`);
  
    var substringFromIndex22 = trimmedStr.substring(22);
    console.log(`Substring starting from index 22: ${substringFromIndex22}`);
    console.log(`===============================================================`);
  

    var endsWithUp = trimmedStr.endsWith("up");
    console.log(`Does the trimmed string end with 'up'? ${endsWithUp}`);
    console.log(`===============================================================`);
  
    var startsWithHey = trimmedStr.startsWith("Hey");
    console.log(`Does the trimmed string start with 'Hey'? ${startsWithHey}`);
    console.log(`===============================================================`);
  }
  stringHandsOn();
