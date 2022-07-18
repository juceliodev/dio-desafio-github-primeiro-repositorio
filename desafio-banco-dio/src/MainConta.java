public class MainConta {
    public static void main(String[] args) {
        Cliente c1 = new Cliente();
        c1.setNome("Joao");

        Cliente c2 = new Cliente();
        c2.setNome("Maria");

        Conta cc = new ContaCorrente(c1);
        Conta cp = new ContaPoupanca(c2);


//       cc.depositar(500);
//       cc.transferir(100,cp);

        cc.imprimirExtrato();
        cp.imprimirExtrato();





    }
}
