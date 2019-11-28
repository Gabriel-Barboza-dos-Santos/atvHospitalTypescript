namespace hospital{
    export class Hospital{
        public _nome:string;
        public _enfermeiros:Array<Enfermeiro>=[];
        public _medicos:Array<Medico>=[];
        public _pacientes:Array<Paciente>=[];

        public getNome(){
            this._nome;
        }

        public setNome(nome:string){
            this._nome = nome;      
        }

        public getEnfermeiro(){
            this._nome;
        }

        public addEnfermeiro(nome:){
            this._nome = nome;      
        }

    }
}