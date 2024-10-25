

function stringHandsOn() {
    
    const str = "     Hey you are doing good,  keep it up      ";
     console.log(`===============================================================`);
     
    // Step 1: Print the string as it is on console
    console.log(`Original String: "${str}"`);
    console.log(`===============================================================`);
  
    // Step 2: Calculate the length of the String
    console.log(`Length of the original string is: ${str.length}`);
    console.log(`===============================================================`);
  
    // Step 3: Remove the leading and trailing extra spaces and log string on console with its length
    const trimmedStr = str.trim();
    console.log(`Trimmed String: "${trimmedStr}"`);
    console.log(`Length of the trimmed string is: ${trimmedStr.length}`);
    console.log(`===============================================================`);
  
    // Step 4: Print the total number of extra spaces removed
    const extraSpacesCount = str.length - trimmedStr.length;
    console.log(`Total number of extra spaces removed: ${extraSpacesCount}`);
    console.log(`===============================================================`);
  
    // Step 5: Print the first and last character on the same line after trim()
    const firstChar = trimmedStr[0];
    const lastChar = trimmedStr[trimmedStr.length - 1];
    console.log(`First and last character after trimming: "${firstChar}" and "${lastChar}"`);
    console.log(`===============================================================`);
  
    // Step 6: Print the count of total words available in the string after trim()
    const wordCount = trimmedStr.split(/\s+/).length;
    console.log(`Total number of words in the trimmed string: ${wordCount}`);
    console.log(`===============================================================`);
  
    // Step 7: Print the index of the word “good” from the given string
    const indexOfGood = trimmedStr.indexOf("good");
    console.log(`Index of the word 'good': ${indexOfGood}`);
    console.log(`===============================================================`);
  
    // Step 8: Print the substring starting from index 22
    const substringFromIndex22 = trimmedStr.substring(22);
    console.log(`Substring starting from index 22: "${substringFromIndex22}"`);
    console.log(`===============================================================`);
  
    // Step 9: Check if the string ends with "up" after trimming
    const endsWithUp = trimmedStr.endsWith("up");
    console.log(`Does the trimmed string end with 'up'? ${endsWithUp}`);
    console.log(`===============================================================`);
  
    // Step 10: Check if the string starts with "Hey" after trimming
    const startsWithHey = trimmedStr.startsWith("Hey");
    console.log(`Does the trimmed string start with 'Hey'? ${startsWithHey}`);
    console.log(`===============================================================`);
  }
  
  // Invoke the function
  stringHandsOn();
  