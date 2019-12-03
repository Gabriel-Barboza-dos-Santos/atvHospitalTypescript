///<reference path="paciente.ts"/>
///<reference path="enfermeiro.ts"/>
///<reference path="medico.ts"/>
///<reference path='hospital.ts'/>
var hospital;
(function (hospital_1) {
    var hospital = new hospital_1.Hospital();
    hospital.setNome("Santa Marcelina Itaquera");
    var paciente = new hospital_1.Paciente();
    paciente.setNome("Carlos");
    paciente.setCpf("123.456.469-10");
    paciente.setcodPaciente(5);
    var paciente2 = new hospital_1.Paciente();
    paciente2.setNome("Julia");
    paciente2.setCpf("258.221.594-21");
    paciente2.setcodPaciente(7);
    var paciente3 = new hospital_1.Paciente();
    paciente3.setNome("Negao");
    paciente3.setCpf("243.254.354-35");
    paciente3.setcodPaciente(6);
    var medico = new hospital_1.Medico();
    medico.setNome("Gabriel");
    medico.setCpf("758.525.789-44");
    medico.setCrm(258960);
    medico.setEspecialidade("Pediatra");
    medico.setcodFuncionario(1);
    var medico2 = new hospital_1.Medico();
    medico2.setNome("Jonas");
    medico2.setCpf("777.645.789-15");
    medico2.setCrm(895645);
    medico2.setEspecialidade("Cirurgião");
    medico2.setcodFuncionario(2);
    var medico3 = new hospital_1.Medico();
    medico3.setNome("Gustavinho");
    medico3.setCpf("785.888.444-65");
    medico3.setCrm(895456);
    medico3.setEspecialidade("Ginecologista");
    medico3.setcodFuncionario(3);
    var enfermeiro = new hospital_1.Enfermeiro();
    enfermeiro.setNome("Janete");
    enfermeiro.setCpf("654.654.485-54");
    enfermeiro.setCoren(65435);
    enfermeiro.setcodFuncionario(1);
    var enfermeiro2 = new hospital_1.Enfermeiro();
    enfermeiro2.setNome("Daniel");
    enfermeiro2.setCpf("546.654.345-32");
    enfermeiro2.setCoren(65463);
    enfermeiro2.setcodFuncionario(2);
    var enfermeiro3 = new hospital_1.Enfermeiro();
    enfermeiro3.setNome("Carlos");
    enfermeiro3.setCpf("154.156.889-41");
    enfermeiro3.setCoren(65645);
    enfermeiro3.setcodFuncionario(3);
    hospital.addPacientes(paciente);
    hospital.addPacientes(paciente2);
    hospital.addPacientes(paciente3);
    hospital.addMedicos(medico);
    hospital.addMedicos(medico2);
    hospital.addMedicos(medico3);
    hospital.addEnfermeiro(enfermeiro);
    hospital.addEnfermeiro(enfermeiro2);
    hospital.addEnfermeiro(enfermeiro3);
    var tbPaciente = document.getElementById("paciente");
    var conteudoP = "<tr><th>Paciente</th></tr><tr><td>Codigo</td><td>Nome</td><td>CPF</td></tr>";
    hospital.getPacientes().forEach(function (element) {
        conteudoP += "<tr> <td>" + element.getcodPaciente() + "</td><td>" + element.getNome() + "</td><td>" + element.getCpf() + "</td></tr>";
    });
    tbPaciente.innerHTML = conteudoP;
    var tbMedico = document.getElementById("medico");
    var conteudoM = "<tr><th>Medico</th></tr><tr><td>CRM</td><td>Nome</td><td>Especialidade</td></tr>";
    hospital.getMedicos().forEach(function (element) {
        conteudoM += "<tr> <td>" + element.getCrm() + "</td><td>" + element.getNome() + "</td><td>" + element.getEspecialidade() + "</td></tr>";
    });
    tbMedico.innerHTML = conteudoM;
    var tbEnfermeiro = document.getElementById("enfermeiro");
    var conteudoE = "<tr><th>Enfermeiro</th></tr><tr><td>COREN</td><td>Nome</td></tr>";
    hospital.getEnfermeiro().forEach(function (element) {
        conteudoE += "<tr> <td>" + element.getCoren() + "</td><td>" + element.getNome() + "</td></tr>";
    });
    tbEnfermeiro.innerHTML = conteudoE;
})(hospital || (hospital = {}));
