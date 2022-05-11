/** Bem nesse ponto estou Assinando um Contrato 
 * de que a entidade Book na minha aplicação deverá
 * assumir todas as características aqui descritas
 */

interface Book {
    id?: number;
    title: string;
    price: number;
    author: string;
    isbn: string;
  }
  
  export default Book;