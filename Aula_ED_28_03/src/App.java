import java.util.Stack;

public class App {
    public static void main(String[] args) throws Exception {
        Stack<String> pilha_pratos = new Stack<>();
        pilha_pratos.push("Prato Laranja"); //Base
        pilha_pratos.push("Prato Azul");
        pilha_pratos.push("Prato Verde");
        pilha_pratos.push("Prato Vermelho"); //Top

        int tamanho = pilha_pratos.size();
        System.out.println("O tamanho da pilha é: "+tamanho);

        String rem = pilha_pratos.pop();
        System.out.println("O prato removido foi: "+rem);

        tamanho = pilha_pratos.size();
        System.out.println("O tamanho da pilha é: "+tamanho);

        String topo = pilha_pratos.peek();
        System.out.println("O prato que está no topo: "+topo);

        Boolean r = pilha_pratos.empty();
        System.out.println("A pilha está vazia: "+r);
    }
}
