//  * Aula 287 - Constructor privado e singleton

/*
    _Nota_
    _ padrão de projeto Singleton da GoF, só permite ter uma instância
    _ da classe, você vai receber a instância já criada da classe ou se
    _ não houver instâncias será criada uma e você recebera.
    _ Usa o método Factory Method da GoF
*/

export class Database {
  private static database: Database;
  //  # constructor que não permite acesso ao new
  private constructor(private host: string, private user: string, private password: string) {}

  public connect(): void {
      console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(
      host: string,
      user: string,
      password: string
  ): Database {
      if(Database.database) {
          console.log("Retornando instância já criada");
          return Database.database;
      }
      console.log("Criando nova instância");
      Database.database = new Database(host,user,password);
      return Database.database;
  }
}

const db1 = Database.getDatabase("localhost", "root", "123456");
db1.connect();

const db2 = Database.getDatabase("localhost", "root", "123456");
db2.connect();
