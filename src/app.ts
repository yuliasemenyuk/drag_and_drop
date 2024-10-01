class ProjectInput {
    templateEl: HTMLTemplateElement;
    hostEl: HTMLDivElement;
    element: HTMLFormElement
    constructor() {
        this.templateEl = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostEl = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateEl.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.attach();
    }

    // splitting selection and rendering logic, inserts form into app
    private attach() {
        this.hostEl.insertAdjacentElement('afterbegin', this.element)
    }
}

const ProjInput = new ProjectInput;

