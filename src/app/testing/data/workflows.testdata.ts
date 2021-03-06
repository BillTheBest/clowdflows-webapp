import {Workflow} from "../../models/workflow";

export var testWorkflows = [
    Workflow.createFromJSON({
        "url": "http://testurl.com/api/workflows/1/",
        "id": 1,
        "widgets": [],
        "user": {"username": "testuser"},
        "connections": [],
        "is_subprocess": false,
        "is_public": true,
        "preview": "",
        "name": "Test workflow 1",
        "description": "Test workflow 1 description",
        "widget": null,
        "template_parent": null
    }),
    Workflow.createFromJSON({
        "url": "http://testurl.com/api/workflows/2/",
        "id": 2,
        "widgets": [],
        "user": {"username": "testuser"},
        "connections": [],
        "is_subprocess": false,
        "is_public": true,
        "preview": "",
        "name": "Test workflow 2",
        "description": "Test workflow 2 description",
        "widget": null,
        "template_parent": null
    }),
    Workflow.createFromJSON({
        "url": "http://testurl.com/api/workflows/3/",
        "id": 3,
        "widgets": [{
            "id": 6,
            "url": "http://testurl.com/api/widgets/6/",
            "workflow": "http://testurl.com/api/workflows/2/",
            "x": 6,
            "y": 73,
            "name": "Create Integer",
            "abstract_widget": 26,
            "finished": true,
            "error": false,
            "running": false,
            "interaction_waiting": false,
            "description": "Creates an integer object from a parameter.",
            "icon": "http://testurl.com/static/base/icons/widget/417px-Latex_integers.svg.png",
            "type": "regular",
            "progress": 0,
            "inputs": [{
                "url": "http://testurl.com/api/inputs/10/",
                "id": 10,
                "deserialized_value": "5",
                "options": [],
                "name": "Type your integer",
                "short_name": "int",
                "description": "",
                "variable": "integer",
                "required": true,
                "parameter": true,
                "multi_id": 0,
                "parameter_type": "text",
                "order": 1,
                "widget": "http://testurl.com/api/widgets/6/",
                "inner_output": null,
                "outer_output": null
            }],
            "outputs": [{
                "url": "http://testurl.com/api/outputs/7/",
                "id": 7,
                "name": "Integer",
                "short_name": "int",
                "description": "The returned integer.",
                "variable": "integer",
                "order": 1,
                "widget": "http://testurl.com/api/widgets/6/",
                "inner_input": null,
                "outer_input": null
            }],
            "workflow_link": null,
            "recommended_inputs": [],
            "recommended_outputs": ["Filter integers", "Multiply integers"]
        }, {
            "id": 7,
            "url": "http://testurl.com/api/widgets/7/",
            "workflow": "http://testurl.com/api/workflows/2/",
            "x": -4,
            "y": 243,
            "name": "Create Integer",
            "abstract_widget": 26,
            "finished": true,
            "error": false,
            "running": false,
            "interaction_waiting": false,
            "description": "Creates an integer object from a parameter.",
            "icon": "http://testurl.com/static/base/icons/widget/417px-Latex_integers.svg.png",
            "type": "regular",
            "progress": 0,
            "inputs": [{
                "url": "http://testurl.com/api/inputs/11/",
                "id": 11,
                "deserialized_value": "10",
                "options": [],
                "name": "Type your integer",
                "short_name": "int",
                "description": "",
                "variable": "integer",
                "required": true,
                "parameter": true,
                "multi_id": 0,
                "parameter_type": "text",
                "order": 1,
                "widget": "http://testurl.com/api/widgets/7/",
                "inner_output": null,
                "outer_output": null
            }],
            "outputs": [{
                "url": "http://testurl.com/api/outputs/8/",
                "id": 8,
                "name": "Integer",
                "short_name": "int",
                "description": "The returned integer.",
                "variable": "integer",
                "order": 1,
                "widget": "http://testurl.com/api/widgets/7/",
                "inner_input": null,
                "outer_input": null
            }],
            "workflow_link": null,
            "recommended_inputs": [],
            "recommended_outputs": ["Filter integers", "Multiply integers"]
        }, {
            "id": 8,
            "url": "http://testurl.com/api/widgets/8/",
            "workflow": "http://testurl.com/api/workflows/2/",
            "x": 42,
            "y": 404,
            "name": "Create Integer",
            "abstract_widget": 26,
            "finished": true,
            "error": false,
            "running": false,
            "interaction_waiting": false,
            "description": "Creates an integer object from a parameter.",
            "icon": "http://testurl.com/static/base/icons/widget/417px-Latex_integers.svg.png",
            "type": "regular",
            "progress": 0,
            "inputs": [{
                "url": "http://testurl.com/api/inputs/12/",
                "id": 12,
                "deserialized_value": "5",
                "options": [],
                "name": "Type your integer",
                "short_name": "int",
                "description": "",
                "variable": "integer",
                "required": true,
                "parameter": true,
                "multi_id": 0,
                "parameter_type": "text",
                "order": 1,
                "widget": "http://testurl.com/api/widgets/8/",
                "inner_output": null,
                "outer_output": null
            }],
            "outputs": [{
                "url": "http://testurl.com/api/outputs/9/",
                "id": 9,
                "name": "Integer",
                "short_name": "int",
                "description": "The returned integer.",
                "variable": "integer",
                "order": 1,
                "widget": "http://testurl.com/api/widgets/8/",
                "inner_input": null,
                "outer_input": null
            }],
            "workflow_link": null,
            "recommended_inputs": [],
            "recommended_outputs": ["Filter integers", "Multiply integers"]
        }, {
            "id": 9,
            "url": "http://testurl.com/api/widgets/9/",
            "workflow": "http://testurl.com/api/workflows/2/",
            "x": 375,
            "y": 116,
            "name": "Multiply integers",
            "abstract_widget": 3,
            "finished": true,
            "error": false,
            "running": false,
            "interaction_waiting": false,
            "description": "Multiplies integers and outputs their product",
            "icon": "http://testurl.com/static/widget-icons/question-mark.png",
            "type": "regular",
            "progress": 0,
            "inputs": [{
                "url": "http://testurl.com/api/inputs/13/",
                "id": 13,
                "deserialized_value": "",
                "options": [],
                "name": "Integers",
                "short_name": "int",
                "description": "",
                "variable": "integers",
                "required": false,
                "parameter": false,
                "multi_id": 3,
                "parameter_type": null,
                "order": 1,
                "widget": "http://testurl.com/api/widgets/9/",
                "inner_output": null,
                "outer_output": null
            }, {
                "url": "http://testurl.com/api/inputs/15/",
                "id": 15,
                "deserialized_value": "",
                "options": [],
                "name": "Integers",
                "short_name": "int",
                "description": "",
                "variable": "integers",
                "required": false,
                "parameter": false,
                "multi_id": 3,
                "parameter_type": null,
                "order": 2,
                "widget": "http://testurl.com/api/widgets/9/",
                "inner_output": null,
                "outer_output": null
            }, {
                "url": "http://testurl.com/api/inputs/16/",
                "id": 16,
                "deserialized_value": "",
                "options": [],
                "name": "Integers",
                "short_name": "int",
                "description": "",
                "variable": "integers",
                "required": false,
                "parameter": false,
                "multi_id": 3,
                "parameter_type": null,
                "order": 3,
                "widget": "http://testurl.com/api/widgets/9/",
                "inner_output": null,
                "outer_output": null
            }, {
                "url": "http://testurl.com/api/inputs/65/",
                "id": 65,
                "deserialized_value": "",
                "options": [],
                "name": "Integers",
                "short_name": "int",
                "description": "",
                "variable": "integers",
                "required": false,
                "parameter": false,
                "multi_id": 3,
                "parameter_type": null,
                "order": 4,
                "widget": "http://testurl.com/api/widgets/9/",
                "inner_output": null,
                "outer_output": null
            }],
            "outputs": [{
                "url": "http://testurl.com/api/outputs/10/",
                "id": 10,
                "name": "Integer",
                "short_name": "int",
                "description": "",
                "variable": "integer",
                "order": 1,
                "widget": "http://testurl.com/api/widgets/9/",
                "inner_input": null,
                "outer_input": null
            }],
            "workflow_link": null,
            "recommended_inputs": ["Create Integer"],
            "recommended_outputs": ["Display String"]
        }, {
            "id": 10,
            "url": "http://testurl.com/api/widgets/10/",
            "workflow": "http://testurl.com/api/workflows/2/",
            "x": 691,
            "y": 97,
            "name": "Display String",
            "abstract_widget": 31,
            "finished": true,
            "error": false,
            "running": false,
            "interaction_waiting": false,
            "description": "",
            "icon": "http://testurl.com/static/base/icons/widget/display_string.png",
            "type": "regular",
            "progress": 0,
            "inputs": [{
                "url": "http://testurl.com/api/inputs/14/",
                "id": 14,
                "deserialized_value": "",
                "options": [],
                "name": "String",
                "short_name": "str",
                "description": "Displays the string so that it is readable.",
                "variable": "string",
                "required": false,
                "parameter": false,
                "multi_id": 0,
                "parameter_type": null,
                "order": 1,
                "widget": "http://testurl.com/api/widgets/10/",
                "inner_output": null,
                "outer_output": null
            }],
            "outputs": [],
            "workflow_link": null,
            "recommended_inputs": ["Multiply integers"],
            "recommended_outputs": []
        }, {
            "id": 24,
            "url": "http://testurl.com/api/widgets/24/",
            "workflow": "http://testurl.com/api/workflows/2/",
            "x": 688,
            "y": 337,
            "name": "square",
            "abstract_widget": null,
            "finished": true,
            "error": false,
            "running": false,
            "interaction_waiting": false,
            "description": null,
            "icon": "http://testurl.com/static/images/120px-Gears_icon.png",
            "type": "subprocess",
            "progress": 0,
            "inputs": [{
                "url": "http://testurl.com/api/inputs/108/",
                "id": 108,
                "deserialized_value": "",
                "options": [],
                "name": "Input",
                "short_name": "inp",
                "description": null,
                "variable": "Input33",
                "required": false,
                "parameter": false,
                "multi_id": 0,
                "parameter_type": null,
                "order": 1,
                "widget": "http://testurl.com/api/widgets/24/",
                "inner_output": "http://testurl.com/api/outputs/30/",
                "outer_output": null
            }],
            "outputs": [{
                "url": "http://testurl.com/api/outputs/23/",
                "id": 23,
                "name": "Output",
                "short_name": "out",
                "description": "",
                "variable": "Output26",
                "order": 1,
                "widget": "http://testurl.com/api/widgets/24/",
                "inner_input": "http://testurl.com/api/inputs/79/",
                "outer_input": null
            }],
            "workflow_link": "http://testurl.com/api/workflows/7/",
            "recommended_inputs": [],
            "recommended_outputs": []
        }, {
            "id": 144,
            "url": "http://testurl.com/api/widgets/144/",
            "workflow": "http://testurl.com/api/workflows/2/",
            "x": 1003,
            "y": 282,
            "name": "Display String (copy)",
            "abstract_widget": 31,
            "finished": true,
            "error": false,
            "running": false,
            "interaction_waiting": false,
            "description": "",
            "icon": "http://testurl.com/static/base/icons/widget/display_string.png",
            "type": "regular",
            "progress": 0,
            "inputs": [{
                "url": "http://testurl.com/api/inputs/288/",
                "id": 288,
                "deserialized_value": "",
                "options": [],
                "name": "String",
                "short_name": "str",
                "description": "Displays the string so that it is readable.",
                "variable": "string",
                "required": false,
                "parameter": false,
                "multi_id": 0,
                "parameter_type": null,
                "order": 1,
                "widget": "http://testurl.com/api/widgets/144/",
                "inner_output": null,
                "outer_output": null
            }],
            "outputs": [],
            "workflow_link": null,
            "recommended_inputs": ["Multiply integers"],
            "recommended_outputs": []
        }],
        "user": {"username": "anze"},
        "connections": [{
            "url": "http://testurl.com/api/connections/5/",
            "output_widget": "http://testurl.com/api/widgets/6/",
            "input_widget": "http://testurl.com/api/widgets/9/",
            "output": "http://testurl.com/api/outputs/7/",
            "input": "http://testurl.com/api/inputs/13/",
            "workflow": "http://testurl.com/api/workflows/2/"
        }, {
            "url": "http://testurl.com/api/connections/6/",
            "output_widget": "http://testurl.com/api/widgets/7/",
            "input_widget": "http://testurl.com/api/widgets/9/",
            "output": "http://testurl.com/api/outputs/8/",
            "input": "http://testurl.com/api/inputs/15/",
            "workflow": "http://testurl.com/api/workflows/2/"
        }, {
            "url": "http://testurl.com/api/connections/7/",
            "output_widget": "http://testurl.com/api/widgets/8/",
            "input_widget": "http://testurl.com/api/widgets/9/",
            "output": "http://testurl.com/api/outputs/9/",
            "input": "http://testurl.com/api/inputs/16/",
            "workflow": "http://testurl.com/api/workflows/2/"
        }, {
            "url": "http://testurl.com/api/connections/8/",
            "output_widget": "http://testurl.com/api/widgets/9/",
            "input_widget": "http://testurl.com/api/widgets/10/",
            "output": "http://testurl.com/api/outputs/10/",
            "input": "http://testurl.com/api/inputs/14/",
            "workflow": "http://testurl.com/api/workflows/2/"
        }, {
            "url": "http://testurl.com/api/connections/37/",
            "output_widget": "http://testurl.com/api/widgets/9/",
            "input_widget": "http://testurl.com/api/widgets/24/",
            "output": "http://testurl.com/api/outputs/10/",
            "input": "http://testurl.com/api/inputs/108/",
            "workflow": "http://testurl.com/api/workflows/2/"
        }, {
            "url": "http://testurl.com/api/connections/39/",
            "output_widget": "http://testurl.com/api/widgets/24/",
            "input_widget": "http://testurl.com/api/widgets/144/",
            "output": "http://testurl.com/api/outputs/23/",
            "input": "http://testurl.com/api/inputs/288/",
            "workflow": "http://testurl.com/api/workflows/2/"
        }],
        "is_subprocess": false,
        "is_public": true,
        "preview": "",
        "name": "Test workflow 3",
        "description": "Test description 3",
        "widget": null,
        "template_parent": null
    })
];