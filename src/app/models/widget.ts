import {Output} from "./output";
import {Input} from "./input";
import {UI} from "../services/ui-constants"
import {Workflow} from "./workflow";
import {SafeHtml} from "@angular/platform-browser";

export class Widget {

    inputs:Input[];
    parameters:Input[];
    outputs:Output[];
    showDialog:boolean = false;
    showResults:boolean = false;
    showRenameDialog:boolean = false;
    showVisualizationDialog:boolean = false;
    showInteractionDialog:boolean = false;
    showHelp:boolean = false;
    selected:boolean = false;

    visualizationHtml:SafeHtml = '';
    interactionHtml:SafeHtml = '';

    static SPECIAL_TYPES:Array<string> = ['input', 'output', 'for_input', 'for_output',
                                          'cv_input', 'cv_output', 'cv_input2', 'cv_input3'];

    constructor(
        public id:number,
        public url:string,
        public x:number,
        public y:number,
        public name:string,
        public finished:boolean,
        public error:boolean,
        public running:boolean,
        public interaction_waiting:boolean,
        public type:string,
        public progress:number,
        public abstract_widget:number,
        public description:string,
        public icon:string,
        inputs:any[],
        outputs:any[],
        public workflow:Workflow,
        public workflow_link:string
    ){
        // Keep proper inputs and parameters separately
        this.inputs = new Array<Input>();
        this.parameters = new Array<Input>();
        for (let input of inputs) {
            let input_obj:Input = new Input(input.id, input.url, input.deserialized_value, input.name, input.short_name,
                                            input.description, input.variable, input.required, input.parameter,
                                            input.multi_id, input.parameter_type, input.order, input.inner_output,
                                            input.outer_output, input.options, this);
            if (input.parameter) {
                this.parameters.push(input_obj);
            } else {
                this.inputs.push(input_obj);
            }
        }
        this.outputs = new Array<Output>();
        for (let output of outputs) {
            this.outputs.push(new Output(output.url, output.name, output.short_name,
                                         output.description, output.variable, output.order,
                                         output.inner_output, output.outer_output, this));
        }
    }

    public static createFromJSON(data:any, workflow:Workflow):Widget {
        return new Widget(data.id, data.url, data.x, data.y, data.name, data.finished, data.error,
            data.running, data.interaction_waiting, data.type, data.progress, data.abstract_widget,
            data.description, data.icon, data.inputs, data.outputs, workflow, data.workflow_link)
    }

    get boxHeight() {
        let nInputs = this.inputs ? this.inputs.length - 1 : 1;
        let nOutputs = this.outputs ? this.outputs.length - 1 : 1;
        let nSignals = Math.max(0, nInputs, nOutputs);
        return 50 + (UI.signalHeight + 10)*nSignals;
    }

    get labelY() {
        return this.boxHeight + 20;
    }

    get isSpecialWidget() {
        return Widget.SPECIAL_TYPES.indexOf(this.type) != -1;
    }

    static omitKeys(key:string, value:any) {
        let omitAttributes = ['inputs', 'parameters', 'outputs', 'visualizationHtml', 'interactionHtml', 'showDialog',
                              'showResults', 'showRenameDialog', 'showVisualizationDialog', 'showInteractionDialog',
                              'showHelp', 'selected'];
        if (omitAttributes.indexOf(key) != -1) {
            return undefined;
        } else if (key == 'workflow') {
            return value.url;
        }
        return value;
    }
}