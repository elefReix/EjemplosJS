
//angular es una variable global de angularjs
//module crea un modulo
//el primer paramtro es el nombre del modulo
    angular.module('moduloLista', [])
      .controller('Controller', function() {
      //Primer parametro 'Controller' es el nombre del controlador
      //Segundo paramtro funcion js con el codigo que se va a ejecutar
      var scope = this;
      // se define un arrglo para poder asignar distintos elementos a la variable del scope
        scope.todos = [
          {text:'aprender AngularJS', done:true},
          {text:'contruir un app con AngularJS ', done:false}
          //nombre : "sineti",ram : "8gb",hd :"420gb",display : "14in",available : false
          ];

        scope.addTodo = function() {
          scope.todos.push({text:scope.todoText, done:false});
          scope.todoText = '';
        };

        scope.remaining = function() {
          var count = 0;
          angular.forEach(scope.todos, function(todo) {
            count += todo.done ? 0 : 1;
          });
          return count;
        };

        scope.archive = function() {
          var oldTodos = scope.todos;
          scope.todos = [];
          angular.forEach(oldTodos, function(todo) {
            if (!todo.done) scope.todos.push(todo);
          });
        };
      });
