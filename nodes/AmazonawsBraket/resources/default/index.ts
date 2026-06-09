import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Cancel Job",
					"value": "Cancel Job",
					"action": "Cancel Job",
					"description": "Cancels an Amazon Braket job.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/job/{{$parameter[\"jobArn\"]}}/cancel"
						}
					}
				},
				{
					"name": "Cancel Quantum Task",
					"value": "Cancel Quantum Task",
					"action": "Cancel Quantum Task",
					"description": "Cancels the specified task.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/quantum-task/{{$parameter[\"quantumTaskArn\"]}}/cancel"
						}
					}
				},
				{
					"name": "Create Job",
					"value": "Create Job",
					"action": "Create Job",
					"description": "Creates an Amazon Braket job.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/job"
						}
					}
				},
				{
					"name": "Create Quantum Task",
					"value": "Create Quantum Task",
					"action": "Create Quantum Task",
					"description": "Creates a quantum task.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/quantum-task"
						}
					}
				},
				{
					"name": "Get Device",
					"value": "Get Device",
					"action": "Get Device",
					"description": "<p>Retrieves the devices available in Amazon Braket.</p> <note> <p>For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/device/{{$parameter[\"deviceArn\"]}}"
						}
					}
				},
				{
					"name": "Get Job",
					"value": "Get Job",
					"action": "Get Job",
					"description": "Retrieves the specified Amazon Braket job.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/job/{{$parameter[\"jobArn\"]}}"
						}
					}
				},
				{
					"name": "Get Quantum Task",
					"value": "Get Quantum Task",
					"action": "Get Quantum Task",
					"description": "Retrieves the specified quantum task.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/quantum-task/{{$parameter[\"quantumTaskArn\"]}}"
						}
					}
				},
				{
					"name": "List Tags For Resource",
					"value": "List Tags For Resource",
					"action": "List Tags For Resource",
					"description": "Shows the tags associated with this resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tags/{{$parameter[\"resourceArn\"]}}"
						}
					}
				},
				{
					"name": "Tag Resource",
					"value": "Tag Resource",
					"action": "Tag Resource",
					"description": "Add a tag to the specified resource.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tags/{{$parameter[\"resourceArn\"]}}"
						}
					}
				},
				{
					"name": "Search Devices",
					"value": "Search Devices",
					"action": "Search Devices",
					"description": "Searches for devices using the specified filters.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/devices"
						}
					}
				},
				{
					"name": "Search Jobs",
					"value": "Search Jobs",
					"action": "Search Jobs",
					"description": "Searches for Amazon Braket jobs that match the specified filter values.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/jobs"
						}
					}
				},
				{
					"name": "Search Quantum Tasks",
					"value": "Search Quantum Tasks",
					"action": "Search Quantum Tasks",
					"description": "Searches for tasks that match the specified filter values.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/quantum-tasks"
						}
					}
				},
				{
					"name": "Untag Resource",
					"value": "Untag Resource",
					"action": "Untag Resource",
					"description": "Remove tags from a resource.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tags/{{$parameter[\"resourceArn\"]}}#tagKeys"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /job/{jobArn}/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Job"
					]
				}
			}
		},
		{
			"displayName": "Job Arn",
			"name": "jobArn",
			"required": true,
			"description": "The ARN of the Amazon Braket job to cancel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Job"
					]
				}
			}
		},
		{
			"displayName": "PUT /quantum-task/{quantumTaskArn}/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Quantum Task"
					]
				}
			}
		},
		{
			"displayName": "Quantum Task Arn",
			"name": "quantumTaskArn",
			"required": true,
			"description": "The ARN of the task to cancel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Quantum Task"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "The client token associated with the request.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Quantum Task"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Quantum Task"
					]
				}
			}
		},
		{
			"displayName": "POST /job",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Algorithm Specification",
			"name": "algorithmSpecification",
			"type": "json",
			"default": "{\n  \"containerImage\": {\n    \"uri\": {}\n  },\n  \"scriptModeConfig\": {}\n}",
			"description": "Defines the Amazon Braket job to be created. Specifies the container image the job uses and the paths to the Python scripts used for entry and training.",
			"routing": {
				"send": {
					"property": "algorithmSpecification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Job"
					]
				}
			}
		},
		{
			"displayName": "Checkpoint Config",
			"name": "checkpointConfig",
			"type": "json",
			"default": "{\n  \"s3Uri\": {}\n}",
			"description": "Contains information about the output locations for job checkpoint data.",
			"routing": {
				"send": {
					"property": "checkpointConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "A unique token that guarantees that the call to this API is idempotent.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Device Config",
			"name": "deviceConfig",
			"type": "json",
			"default": "{}",
			"description": "Configures the quantum processing units (QPUs) or simulator used to create and run an Amazon Braket job.",
			"routing": {
				"send": {
					"property": "deviceConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Job"
					]
				}
			}
		},
		{
			"displayName": "Hyper Parameters",
			"name": "hyperParameters",
			"type": "json",
			"default": "{}",
			"description": "Algorithm-specific parameters used by an Amazon Braket job that influence the quality of the training job. The values are set with a string of JSON key:value pairs, where the key is the name of the hyperparameter and the value is the value of th hyperparameter.",
			"routing": {
				"send": {
					"property": "hyperParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Job"
					]
				}
			}
		},
		{
			"displayName": "Input Data Config",
			"name": "inputDataConfig",
			"type": "json",
			"default": "[\n  {\n    \"contentType\": {},\n    \"dataSource\": {}\n  }\n]",
			"description": "A list of parameters that specify the name and type of input data and where it is located.",
			"routing": {
				"send": {
					"property": "inputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Instance Config",
			"name": "instanceConfig",
			"type": "json",
			"default": "{\n  \"instanceType\": {},\n  \"volumeSizeInGb\": {}\n}",
			"description": "Configures the resource instances to use while running the Amazon Braket hybrid job on Amazon Braket.",
			"routing": {
				"send": {
					"property": "instanceConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Name",
			"name": "jobName",
			"type": "string",
			"default": "",
			"description": "The name of the Amazon Braket job.",
			"routing": {
				"send": {
					"property": "jobName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output Data Config",
			"name": "outputDataConfig",
			"type": "json",
			"default": "{\n  \"s3Path\": {}\n}",
			"description": "Specifies the path to the S3 location where you want to store job artifacts and the encryption key used to store them.",
			"routing": {
				"send": {
					"property": "outputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Role Arn",
			"name": "roleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform tasks on behalf of a user. It can access user resources, run an Amazon Braket job container on behalf of user, and output resources to the users' s3 buckets.",
			"routing": {
				"send": {
					"property": "roleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Job"
					]
				}
			}
		},
		{
			"displayName": "Stopping Condition",
			"name": "stoppingCondition",
			"type": "json",
			"default": "{}",
			"description": "Specifies limits for how long an Amazon Braket job can run. ",
			"routing": {
				"send": {
					"property": "stoppingCondition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Job"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "{}",
			"description": "A tag object that consists of a key and an optional value, used to manage metadata for Amazon Braket resources.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Job"
					]
				}
			}
		},
		{
			"displayName": "POST /quantum-task",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Quantum Task"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Action",
			"name": "action",
			"type": "string",
			"default": "",
			"description": "The action associated with the task.",
			"routing": {
				"send": {
					"property": "action",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Quantum Task"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "The client token associated with the request.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Quantum Task"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Device Arn",
			"name": "deviceArn",
			"type": "string",
			"default": "",
			"description": "The ARN of the device to run the task on.",
			"routing": {
				"send": {
					"property": "deviceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Quantum Task"
					]
				}
			}
		},
		{
			"displayName": "Device Parameters",
			"name": "deviceParameters",
			"type": "string",
			"default": "",
			"description": "The parameters for the device to run the task on.",
			"routing": {
				"send": {
					"property": "deviceParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Quantum Task"
					]
				}
			}
		},
		{
			"displayName": "Job Token",
			"name": "jobToken",
			"type": "string",
			"default": "",
			"description": "The token for an Amazon Braket job that associates it with the quantum task.",
			"routing": {
				"send": {
					"property": "jobToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Quantum Task"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output S 3 Bucket",
			"name": "outputS3Bucket",
			"type": "string",
			"default": "",
			"description": "The S3 bucket to store task result files in.",
			"routing": {
				"send": {
					"property": "outputS3Bucket",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Quantum Task"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output S 3 Key Prefix",
			"name": "outputS3KeyPrefix",
			"type": "string",
			"default": "",
			"description": "The key prefix for the location in the S3 bucket to store task results in.",
			"routing": {
				"send": {
					"property": "outputS3KeyPrefix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Quantum Task"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Shots",
			"name": "shots",
			"type": "number",
			"default": 0,
			"description": "The number of shots to use for the task.",
			"routing": {
				"send": {
					"property": "shots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Quantum Task"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "{}",
			"description": "Tags to be added to the quantum task you're creating.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Quantum Task"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Quantum Task"
					]
				}
			}
		},
		{
			"displayName": "GET /device/{deviceArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Device"
					]
				}
			}
		},
		{
			"displayName": "Device Arn",
			"name": "deviceArn",
			"required": true,
			"description": "The ARN of the device to retrieve.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Device"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Device"
					]
				}
			}
		},
		{
			"displayName": "GET /job/{jobArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Job"
					]
				}
			}
		},
		{
			"displayName": "Job Arn",
			"name": "jobArn",
			"required": true,
			"description": "The ARN of the job to retrieve.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Job"
					]
				}
			}
		},
		{
			"displayName": "GET /quantum-task/{quantumTaskArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Quantum Task"
					]
				}
			}
		},
		{
			"displayName": "Quantum Task Arn",
			"name": "quantumTaskArn",
			"required": true,
			"description": "the ARN of the task to retrieve.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Quantum Task"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Quantum Task"
					]
				}
			}
		},
		{
			"displayName": "GET /tags/{resourceArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"required": true,
			"description": "Specify the <code>resourceArn</code> for the resource whose tags to display.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /tags/{resourceArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"required": true,
			"description": "Specify the <code>resourceArn</code> of the resource to which a tag will be added.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "{}",
			"description": "Specify the tags to add to the resource.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Devices"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Devices"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Devices"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Filters",
			"name": "filters",
			"type": "json",
			"default": "[\n  {\n    \"values\": {}\n  }\n]",
			"description": "The filter values to use to search for a device.",
			"routing": {
				"send": {
					"property": "filters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Devices"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return in the response.",
			"routing": {
				"send": {
					"property": "maxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Devices"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": "A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended.",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Devices"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Jobs"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Filters",
			"name": "filters",
			"type": "json",
			"default": "[\n  {\n    \"operator\": {},\n    \"values\": {}\n  }\n]",
			"description": "The filter values to use when searching for a job.",
			"routing": {
				"send": {
					"property": "filters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return in the response.",
			"routing": {
				"send": {
					"property": "maxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": "A token used for pagination of results returned in the response. Use the token returned from the previous request to continue results where the previous request ended.",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Jobs"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /quantum-tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Quantum Tasks"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Quantum Tasks"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Quantum Tasks"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Filters",
			"name": "filters",
			"type": "json",
			"default": "[\n  {\n    \"operator\": {},\n    \"values\": {}\n  }\n]",
			"description": "Array of <code>SearchQuantumTasksFilter</code> objects.",
			"routing": {
				"send": {
					"property": "filters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Quantum Tasks"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"type": "number",
			"default": 0,
			"description": "Maximum number of results to return in the response.",
			"routing": {
				"send": {
					"property": "maxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Quantum Tasks"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": "A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended.",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Quantum Tasks"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Quantum Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tags/{resourceArn}#tagKeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"required": true,
			"description": "Specify the <code>resourceArn</code> for the resource from which to remove the tags.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Tag Keys",
			"name": "tagKeys",
			"required": true,
			"description": "Specify the keys for the tags to remove from the resource.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "tagKeys",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
];
