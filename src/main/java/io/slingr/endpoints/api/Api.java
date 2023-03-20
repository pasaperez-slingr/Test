package io.slingr.endpoints.api;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.configurations.Configuration;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.exceptions.ErrorCode;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.WebServiceRequest;
import io.slingr.endpoints.ws.exchange.WebServiceResponse;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.entity.ContentType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SlingrEndpoint(name = "api")
public class Api extends HttpEndpoint {
    private Logger logger = LoggerFactory.getLogger(Api.class);

    @ApplicationLogger
    private AppLogs appLogs;

    @EndpointProperty
    private String apiKey;

    @EndpointConfiguration
    private Json configuration;

    @Override
    public String getApiUri() {
        return "https://api.sendgrid.com/v3";
    }

    @Override
    public void endpointStarted() {
        final String headers = configuration.string("defaultHeaders", "");
        try {
            final Json jHeaders = checkHeaders(headers);
            jHeaders.forEachMapString(httpService()::setupDefaultHeader);
        } catch (Exception ex) {
            appLogs.error(String.format("Invalid default headers defined for HTTP endpoint. Please check them [%s]", headers));
        }

        httpService().setDefaultEmptyPath(configuration.string("emptyPath", ""));

        httpService().setRememberCookies(Configuration.parseBooleanValue(configuration.string("rememberCookies"), false));

        httpService().setFollowRedirects(Configuration.parseBooleanValue(configuration.string("followRedirects"), true));
        httpService().setConnectionTimeout(configuration.integer("connectionTimeout", 5000));
        httpService().setReadTimeout(configuration.integer("readTimeout", 60000));

        final String authType = configuration.string("authType", "apiKey");

        if (StringUtils.isNotBlank(authType) && "apiKey".equalsIgnoreCase(authType)) {
            httpService().setupAuthenticationHeader("Bearer", apiKey);

            logger.info("Configured HTTP apiKey authentication");
        } else {
            logger.info("Configured without HTTP authentication");
        }

    }

    /**
     * Converts the string headers representation in a Json map object
     *
     * @param stringHeaders string headers list
     * @return json map object
     */
    private static Json checkHeaders(String stringHeaders) {
        final Json headers = Json.map();
        try {
            if (StringUtils.isNotBlank(stringHeaders)) {
                final String[] pairs = StringUtils.split(stringHeaders, ",");
                for (String pair : pairs) {
                    final String[] keyValue = StringUtils.split(pair, "=");

                    headers.set(keyValue[0].trim(), keyValue.length > 1 ? keyValue[1].trim() : true);
                }
            }
        } catch (Exception e) {
            throw EndpointException.permanent(ErrorCode.ARGUMENT, String.format("Default headers [%s] are invalid", stringHeaders));
        }
        return headers;
    }

    @EndpointWebService(path = "/sync")
    public WebServiceResponse optionsLoad(WebServiceRequest request) {
        try {
            Json body = request.getJsonBody();
            Json options = (Json) events().sendSync("webhookSync", body);
            return new WebServiceResponse(options, ContentType.APPLICATION_JSON.toString());
        } catch (ClassCastException cce) {
            appLogs.error("The response to the sync webhook from the listener is not a valid JSON");
        } catch (Exception e) {
            appLogs.error("There was an error processing sync webhook: " + e.getMessage(), e);
        }
        return new WebServiceResponse(Json.map(), ContentType.APPLICATION_JSON.toString());
    }


}