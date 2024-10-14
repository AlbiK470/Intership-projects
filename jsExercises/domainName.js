const domainName = (url) => {
    const urlWithoutProtocol = url.replace(/^https?:\/\//, '');
    const domainParts = urlWithoutProtocol.split('.');
    if (domainParts.length === 2) {
      return domainParts[0];
    } else if (domainParts.length === 3 && domainParts[1].length === 2) {
      return domainParts[0];
    } else {
      return domainParts.slice(1, -1).join('.');
    }
  };
  
  console.log(domainName('www.google.ca')); // google
  console.log(domainName('http://google.com')); // google
  console.log(domainName('https://google.com')); // google
  console.log(domainName('http://google.co.jp')); // google
  console.log(domainName('https://www.google.com')); // google