namespace hospital{
    export abstract class Pessoa{
        private _nome:string;
        private _cpf:string;

        public getNome(){
            this._nome;
        }

        public setNome(nome:string):void{
            this._nome = nome;
        }

        public getCpf(){
            this._cpf;
        }

        public setCpf(cpf:string):void{
            this._cpf = cpf;
        }
    }
}