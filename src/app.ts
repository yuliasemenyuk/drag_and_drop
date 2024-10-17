//special syntacsys to import namespaces (only in TS)
/// <reference path="./components/project-input.ts"/>
/// <reference path="./components/project-list.ts"/>

//Putting everything into App namespace (same as we have in another file)
namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
