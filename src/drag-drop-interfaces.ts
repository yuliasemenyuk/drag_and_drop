//Drag and Drop Interfaces
//namespaces is a TS feature
namespace App {
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragStopHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
  }
}
