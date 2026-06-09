import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AmazonawsBraket implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'amazonaws-braket',
		name: 'N8nDevAmazonawsBraket',
		icon: { light: 'file:./amazonaws-braket.png', dark: 'file:./amazonaws-braket.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Amazon Braket API Reference provides information about the operations and structures supported in Amazon Braket. Additional Resources: <a href=\'https://docs.aws.amaz..',
		defaults: { name: 'amazonaws-braket' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAmazonawsBraketApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}
