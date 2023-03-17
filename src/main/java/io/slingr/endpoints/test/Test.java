package io.slingr.endpoints.test;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.framework.annotations.ApplicationLogger;
import io.slingr.endpoints.framework.annotations.SlingrEndpoint;
import io.slingr.endpoints.services.AppLogs;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SlingrEndpoint(name = "test", functionPrefix = "_")
public class Test extends HttpEndpoint {

    private Logger logger = LoggerFactory.getLogger(Test.class);

    @ApplicationLogger
    protected AppLogs appLogger;


    @Override
    public String getApiUri() {
        return null;
    }
}