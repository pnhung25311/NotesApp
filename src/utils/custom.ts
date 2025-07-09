export class Customer {
  generateCode(): string {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // getMonth() trả về 0-11
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');

    const randomNumber = Math.floor(1000 + Math.random() * 9000); // Số random 4 chữ số

    return `${year}${month}${day}${hour}${randomNumber}`;
  }
}
