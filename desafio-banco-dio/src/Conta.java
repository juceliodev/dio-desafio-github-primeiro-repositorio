
public abstract class Conta implements Iconta{

    private static final int AGENCIA_PADRAO = 1;
    private static int SEQUENCIAL = 1;

    protected int agencia;
    protected int numero_conta;
    protected double saldo;
    protected Cliente cliente;

    public Conta(Cliente cliente) {
        this.agencia = this.AGENCIA_PADRAO;
        this.numero_conta = this.SEQUENCIAL++;
        this.cliente = cliente;
    }

    @Override
    public void sacar(double valor) {
        this.saldo -= valor;
    }

    @Override
    public void depositar(double valor) {
        this.saldo =+ valor;
    }

    @Override
    public void transferir(double valor, Conta contaDestino) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    protected void imprimirInfoComuns() {
        System.out.println(String.format("Cliente: %s", this.cliente.getNome()));
        System.out.println(String.format("Agencia: %d", this.agencia));
        System.out.println(String.format("Numero Conta: %d", this.numero_conta));
        System.out.println(String.format("Saldo: %.2f", this.saldo));
    }


    public int getAgencia() {
        return agencia;
    }

    public int getNumero_conta() {
        return numero_conta;
    }

    public double getSaldo() {
        return saldo;
    }
}
