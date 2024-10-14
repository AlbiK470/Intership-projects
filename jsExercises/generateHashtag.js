const generateHashtag = str => {
    const hashtag = '#' + str.replace(/\b\w/g, c => c.toUpperCase()).replace(/\s+/g, '');
    return hashtag.length > 1 && hashtag.length <= 140 ? hashtag : false;
  };
  
  console.log(generateHashtag('JavaScript')); // #JavaScript
  console.log(generateHashtag('Do we have a Hashtag')); // #DoWeHaveAHashtag
  console.log(generateHashtag('    Hello     World   ')); // #HelloWorld
  console.log(generateHashtag('coding' + ' '.repeat(140) + 'for life')); // #CodingForLife
  console.log(generateHashtag('')); // false
  console.log(generateHashtag(' ')); // false
  console.log(generateHashtag('a'.repeat(140))); // false
  console.log(generateHashtag(' '.repeat(200))); // false