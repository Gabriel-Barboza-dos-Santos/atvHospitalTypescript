///<reference path="pessoa.ts"/>
///<reference path="paciente.ts"/>
///<reference path="funcionario.ts"/>
///<reference path="medico.ts"/>
///<reference path="hospital.ts"/>
namespace hospital{
    let hospital = new Hospital();
    hospital.setNome("Santa Casa");

    let medico = new Medico();
    medico.setCrm(123456);
    medico.setEspecialidade("Cirurgião");

    let medico2  = new Medico();
    medico2.setCrm(654321);
    medico2.setEspecialidade("Pediatra");

    let medico3  = new Medico();
    medico3.setCrm(987654);
    medico3.setEspecialidade("Ginicologista");

    let enfermeiro = new Enfermeiro();
    enfermeiro.setCoren(987654321);

    let enfermeiro2 = new Enfermeiro();
    enfermeiro2.setCoren(123456789);

    let enfermeiro3 = new Enfermeiro();
    enfermeiro3.setCoren(123789456);

    let paciente = new Paciente();
    paciente.setcodPaciente(1);

    let paciente2 = new Paciente();
    paciente2.setcodPaciente(2);

    let paciente3 = new Paciente();
    paciente3.setcodPaciente(3);

    document.getElementById("especialidade").textContent = medico.getEspecialidade().;
    document.getElementById("idade").textContent = cliente.getIdade().toString();
    document.getElementById("cpf").textContent = cliente.getCpf();
    document.getElementById("codigo").textContent = cliente.getCodCliente().toString();
    document.getElementById("credito").textContent = cliente.getCredito().toString();
    document.getElementById("banco").textContent = cliente.getBanco().getNome();

}