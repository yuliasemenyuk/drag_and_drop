namespace App {
  type Listener<T> = (items: T[]) => void;

  class State<T> {
    protected listeners: Listener<T>[] = [];
    addListener(listenerFunc: Listener<T>) {
      this.listeners.push(listenerFunc);
    }
  }

  //Project state managament
  export class ProjectState extends State<Project> {
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
      super();
    }

    static getInstance() {
      if (this.instance) {
        return this.instance;
      }
      this.instance = new ProjectState();
      return this.instance;
    }

    addProject(title: string, description: string, numOfPeople: number) {
      const newProject = new Project(
        Math.random().toString(),
        title,
        description,
        numOfPeople,
        ProjectStatus.Active
      );
      this.projects.push(newProject);
      this.updateListeners();
    }

    moveProject(id: string, newStatus: ProjectStatus) {
      const project = this.projects.find((prj) => prj.id === id);
      if (project && project.status !== newStatus) {
        project.status = newStatus;
        this.updateListeners();
      }
    }

    private updateListeners() {
      for (const listenerFn of this.listeners) {
        // slice for returning a copy instead of original array
        listenerFn(this.projects.slice());
      }
    }
  }

  //Only possible 1 object - singleton
  export const projectState = ProjectState.getInstance();
}
