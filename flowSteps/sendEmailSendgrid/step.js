/**
 * This flow step will send generic request.
 *
 * @param {object} inputs
 * {text} method, This is used to config method.
 * {text} url, This is used to config external URL.
 * {Array[string]} pathVariables, This is used to config path variables.
 * {Array[string]} headers, This is used to config headers.
 * {Array[string]} params, This is used to config params.
 * {string} body, This is used to send body request.
 * {string} callbackData, This is used to send callback data.
 * {text} callbacks, This is used to send callbacks.
 * {boolean} followRedirects, This is used to config follow redirects.
 * {boolean} download, This is used to config download.
 * {boolean} fullResponse, This is used to config full response.
 * {number} connectionTimeout, Read timeout interval, in milliseconds.
 * {number} readTimeout, Connect timeout interval, in milliseconds.
 */
step.sendEmailSendgrid = function (inputs) {

	var inputsLogic = {
		from: inputs.from || "",
		subject: inputs.subject || "",
		message: inputs.message || "",
		to: inputs.to || ""

	};

	var msg = {
		"personalizations": [
			{
				"to": [
					{
						"email": inputsLogic.to
					}
				]
			}
		],
		"from": {
			"email": inputsLogic.from
		},
		"subject": inputsLogic.subject,
		"content": [
			{
				"type": "text/plain",
				"value": inputsLogic.message
			}
		]
	};

	var options = {
		path: "/mail/send",
		body: msg
	}

	return endpoint._post(options);

};

