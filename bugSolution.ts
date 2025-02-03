function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 10); // Correct

function addSafe(a: number, b: string): number {
  const bNum = parseFloat(b);
  if (isNaN(bNum)) {
    return a; // Or handle the error appropriately
  }
  return a + bNum; 
}
let result2 = addSafe(5, "10"); // Corrected using parseFloat