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
          current.left = nodo;
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
        current.right = nodo;
      }
    }
  }
}


const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(9);
tree.insert(1);
tree.insert(10);
tree.insert(11);
tree.insert(8);
tree.insert(4);
tree.insert(3);