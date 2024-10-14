const removeDuplicates = nums => {
    const uniqueElements = new Set(nums);
    
    return uniqueElements.size; 
  };
  
 
  console.log(removeDuplicates([1, 1, 2])); // Output: 2
  console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5
  console.log(removeDuplicates([])); // Output: 0