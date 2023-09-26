class Node {
  constructor(value) {
    //Un nodo tiene un valor
    this.value = value;
    //Su izquierda y derecha no tienen nada ya que parten como hojas
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    //Al crearlo parte con una raiz nula(no tiene info)
    this.root = null;
  }

  insert(value) {
    //Hay 4 casos posibles
    const node = new Node(value);

    //1. root no tenga nada(arbol vacio)
    if (this.root === null) {
      this.root = node;
      return;
    }

    //Si la raiz ya existe
    let current = this.root;

    while (true) {
      //2. Si el nodo actual es igual al actual lo ignoro
      if (value === current.value) break;

      //3. Mi valor es menor al del nodo actual:
      if (value < current.value) {
        //Si el hijo es null inserto ahí el nodo
        if (current.left === null) {
          current.left = node;
          break;
        }
        //Sino es una hoja hago que el nodo apunte al lado siguiente
        current = current.left;
      } else {
        //4. Mi valor es mayor al valor actual
        if (current.right === null) {
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
  }

  serch(value) {
    if (this.root === null) return false;

    //Parto de la raiz
    let current = this.root;
    let i = 0;

    //Mientras el valor no sea el actual o null sigo
    while (current) {
      //nos va mostrar lo que tenia i ya aumentandole 1 y si se pone i++ lo va mostrar y despues sumar
      console.log(++i);

      //Si el nodo actual es el que busco lo retorno
      if (value === current.value) return current;

      //Sino pregunto el valor es menor a mi nodo y me voy a la izquierda y sino a la derecha
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}

//Recursividad: funcion que se llama a si misma 
function recursiveShowMessage(n){
  //N Numero que queremos que se repita 
  //Llamar a la misma funcion y cuando me detengo

  //Si llega a 0 se sale
  if(n===0) return; //En este punto sacara lo de la pila
  
  console.log('pila', n) //Va apilar 5, 4, 3, 2, 1 (el elemento que entro al final sale primero)
  //Se llama a si misma pero si se recibe un 4 por ejemplo esto entregara un 3 luego un 2 etc
  recursiveShowMessage(n-1);

  //Va imprimir todo lo de la pila en forma 1, 2, 3, 4, 5
  console.log('mensaje', n)

}

recursiveShowMessage(5)

//Uso arbol binario de busqueda
const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(9);
tree.insert(1);
tree.insert(10);
tree.insert(11);
tree.insert(8);
tree.insert(4);
tree.insert(3);

console.log(tree.serch(40));
