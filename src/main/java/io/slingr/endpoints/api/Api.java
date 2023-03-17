package io.slingr.endpoints.api;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.framework.annotations.ApplicationLogger;
import io.slingr.endpoints.framework.annotations.SlingrEndpoint;
import io.slingr.endpoints.services.AppLogs;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SlingrEndpoint(name = "api")
public class Api extends HttpEndpoint {

    private Logger logger = LoggerFactory.getLogger(Api.class);

    @ApplicationLogger
    protected AppLogs appLogger;


    @Override
    public String getApiUri() {
        return null;
    }
}
