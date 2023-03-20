# Javascript API

The Javascript API of the sendgrid endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`PATCH`,`PUT`,`DELETE` requests to the [sendgrid API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.sendgrid.get('/ips/pools')
var response = app.endpoints.sendgrid.post('/validations/email', body)
var response = app.endpoints.sendgrid.post('/validations/email')
var response = app.endpoints.sendgrid.patch('/tracking_settings/google_analytics', body)
var response = app.endpoints.sendgrid.patch('/tracking_settings/google_analytics')
var response = app.endpoints.sendgrid.put('/marketing/contacts/imports', body)
var response = app.endpoints.sendgrid.put('/marketing/contacts/imports')
var response = app.endpoints.sendgrid.delete('/suppression/bounces')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/asm/suppressions'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.asm.suppressions.get()
```
---
* API URL: '/asm/groups'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.asm.groups.get()
```
---
* API URL: '/user/webhooks/parse/settings'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.user.webhooks.parse.settings.get()
```
---
* API URL: '/user/webhooks/parse/stats'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.user.webhooks.parse.stats.get()
```
---
* API URL: '/user/webhooks/event/settings'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.user.webhooks.event.settings.get()
```
---
* API URL: '/user/profile'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.user.profile.get()
```
---
* API URL: '/user/email'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.user.email.get()
```
---
* API URL: '/user/username'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.user.username.get()
```
---
* API URL: '/user/credits'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.user.credits.get()
```
---
* API URL: '/user/account'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.user.account.get()
```
---
* API URL: '/whitelabel/domains'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.whitelabel.domains.get()
```
---
* API URL: '/whitelabel/domains/subuser'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.whitelabel.domains.subuser.get()
```
---
* API URL: '/whitelabel/domains/default'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.whitelabel.domains.default.get()
```
---
* API URL: '/whitelabel/links'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.whitelabel.links.get()
```
---
* API URL: '/whitelabel/links/default'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.whitelabel.links.default.get()
```
---
* API URL: '/contactdb/recipients/count'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.contactdb.recipients.count.get()
```
---
* API URL: '/contactdb/recipients/billable_count'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.contactdb.recipients.billableCount.get()
```
---
* API URL: '/contactdb/lists'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.contactdb.lists.get()
```
---
* API URL: '/contactdb/segments'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.contactdb.segments.get()
```
---
* API URL: '/contactdb/reserved_fields'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.contactdb.reservedFields.get()
```
---
* API URL: '/contactdb/status'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.contactdb.status.get()
```
---
* API URL: '/ips/pools'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.ips.pools.get()
```
---
* API URL: '/ips/remaining'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.ips.remaining.get()
```
---
* API URL: '/ips/assigned'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.ips.assigned.get()
```
---
* API URL: '/suppression/blocks'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.suppression.blocks.get()
```
---
* API URL: '/suppression/spam_reports'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.suppression.spamReports.get()
```
---
* API URL: '/suppression/unsubscribes'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.suppression.unsubscribes.get()
```
---
* API URL: '/scopes'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.scopes.get()
```
---
* API URL: '/scopes/requests'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.scopes.requests.get()
```
---
* API URL: '/marketing/contacts'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.marketing.contacts.get()
```
---
* API URL: '/marketing/contacts/count'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.marketing.contacts.count.get()
```
---
* API URL: '/marketing/lists'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.marketing.lists.get()
```
---
* API URL: '/marketing/senders'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.marketing.senders.get()
```
---
* API URL: '/marketing/field_definitions'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.marketing.fieldDefinitions.get()
```
---
* API URL: '/mail_settings'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.mailSettings.get()
```
---
* API URL: '/mail_settings/plain_content'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.mailSettings.plainContent.get()
```
---
* API URL: '/mail_settings/template'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.mailSettings.template.get()
```
---
* API URL: '/mail_settings/forward_spam'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.mailSettings.forwardSpam.get()
```
---
* API URL: '/mail_settings/address_whitelist'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.mailSettings.addressWhitelist.get()
```
---
* API URL: '/mail_settings/bcc'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.mailSettings.bcc.get()
```
---
* API URL: '/teammates'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.teammates.get()
```
---
* API URL: '/teammates/pending'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.teammates.pending.get()
```
---
* API URL: '/tracking_settings'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.trackingSettings.get()
```
---
* API URL: '/tracking_settings/click'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.trackingSettings.click.get()
```
---
* API URL: '/tracking_settings/subscription'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.trackingSettings.subscription.get()
```
---
* API URL: '/categories/stats'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.categories.stats.get()
```
---
* API URL: '/categories/stats/sums'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.categories.stats.sums.get()
```
---
* API URL: '/categories'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.categories.get()
```
---
* API URL: '/access_settings/activity'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.accessSettings.activity.get()
```
---
* API URL: '/subusers/stats'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.subusers.stats.get()
```
---
* API URL: '/subusers/stats/monthly'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.subusers.stats.monthly.get()
```
---
* API URL: '/subusers/stats/sums'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.subusers.stats.sums.get()
```
---
* API URL: '/subusers/reputations'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.subusers.reputations.get()
```
---
* API URL: '/messages'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.messages.get()
```
---
* API URL: '/partner_settings'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.partnerSettings.get()
```
---
* API URL: '/browsers/stats'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.browsers.stats.get()
```
---
* API URL: '/devices/stats'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.devices.stats.get()
```
---
* API URL: '/templates'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.templates.get()
```
---
* API URL: '/clients/stats'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.clients.stats.get()
```
---
* API URL: '/geo/stats'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.geo.stats.get()
```
---
* API URL: '/mailbox_providers/stats'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.mailboxProviders.stats.get()
```
---
* API URL: '/stats'
* HTTP Method: 'GET'
```javascript
app.endpoints.sendgrid.stats.get()
```
---
* API URL: '/asm/suppressions/global'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.asm.suppressions.global.post(body)
```
---
* API URL: '/user/webhooks/event/test'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.user.webhooks.event.test.post(body)
```
---
* API URL: '/user/scheduled_sends'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.user.scheduledSends.post(body)
```
---
* API URL: '/whitelabel/ips'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.whitelabel.ips.post(body)
```
---
* API URL: '/contactdb/recipients/search'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.contactdb.recipients.search.post(body)
```
---
* API URL: '/contactdb/custom_fields'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.contactdb.customFields.post(body)
```
---
* API URL: '/ips'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.ips.post(body)
```
---
* API URL: '/ips/warmup'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.ips.warmup.post(body)
```
---
* API URL: '/marketing/contacts/exports'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.marketing.contacts.exports.post(body)
```
---
* API URL: '/marketing/contacts/search'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.marketing.contacts.search.post(body)
```
---
* API URL: '/marketing/segments'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.marketing.segments.post(body)
```
---
* API URL: '/marketing/singlesends'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.marketing.singlesends.post(body)
```
---
* API URL: '/subusers'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.subusers.post(body)
```
---
* API URL: '/messages/download'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.messages.download.post(body)
```
---
* API URL: '/mail/batch'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.mail.batch.post(body)
```
---
* API URL: '/mail/send'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.mail.send.post(body)
```
---
* API URL: '/campaigns'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.campaigns.post(body)
```
---
* API URL: '/alerts'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.alerts.post(body)
```
---
* API URL: '/api_keys'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.apiKeys.post(body)
```
---
* API URL: '/senders'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.senders.post(body)
```
---
* API URL: '/v3/whitelabel/dns/email'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.v3.whitelabel.dns.email.post(body)
```
---
* API URL: '/validations/email'
* HTTP Method: 'POST'
```javascript
app.endpoints.sendgrid.validations.email.post(body)
```
---
* API URL: '/user/settings/enforced_tls'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.sendgrid.user.settings.enforcedTls.patch(body)
```
---
* API URL: '/contactdb/recipients'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.sendgrid.contactdb.recipients.patch(body)
```
---
* API URL: '/mail_settings/forward_bounce'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.sendgrid.mailSettings.forwardBounce.patch(body)
```
---
* API URL: '/mail_settings/footer'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.sendgrid.mailSettings.footer.patch(body)
```
---
* API URL: '/mail_settings/spam_check'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.sendgrid.mailSettings.spamCheck.patch(body)
```
---
* API URL: '/mail_settings/bounce_purge'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.sendgrid.mailSettings.bouncePurge.patch(body)
```
---
* API URL: '/tracking_settings/google_analytics'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.sendgrid.trackingSettings.googleAnalytics.patch(body)
```
---
* API URL: '/tracking_settings/open'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.sendgrid.trackingSettings.open.patch(body)
```
---
* API URL: '/partner_settings/new_relic'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.sendgrid.partnerSettings.newRelic.patch(body)
```
---
* API URL: '/user/password'
* HTTP Method: 'PUT'
```javascript
app.endpoints.sendgrid.user.password.put(body)
```
---
* API URL: '/marketing/contacts/imports'
* HTTP Method: 'PUT'
```javascript
app.endpoints.sendgrid.marketing.contacts.imports.put(body)
```
---
* API URL: '/whitelabel/links/subuser'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.sendgrid.whitelabel.links.subuser.delete()
```
---
* API URL: '/suppression/bounces'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.sendgrid.suppression.bounces.delete()
```
---
* API URL: '/suppression/invalid_emails'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.sendgrid.suppression.invalidEmails.delete()
```
---
* API URL: '/access_settings/whitelist'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.sendgrid.accessSettings.whitelist.delete()
```
---

</details>
    
## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint: 
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>GET,POST,PATCH,PUT,DELETE</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/asm/suppressions<br>/asm/groups<br>/user/webhooks/parse/settings<br>/user/webhooks/parse/stats<br>/user/webhooks/event/settings<br>/user/profile<br>/user/email<br>/user/username<br>/user/credits<br>/user/account<br>/whitelabel/domains<br>/whitelabel/domains/subuser<br>/whitelabel/domains/default<br>/whitelabel/links<br>/whitelabel/links/default<br>/contactdb/recipients/count<br>/contactdb/recipients/billable_count<br>/contactdb/lists<br>/contactdb/segments<br>/contactdb/reserved_fields<br>/contactdb/status<br>/ips/pools<br>/ips/remaining<br>/ips/assigned<br>/suppression/blocks<br>/suppression/spam_reports<br>/suppression/unsubscribes<br>/scopes<br>/scopes/requests<br>/marketing/contacts<br>/marketing/contacts/count<br>/marketing/lists<br>/marketing/senders<br>/marketing/field_definitions<br>/mail_settings<br>/mail_settings/plain_content<br>/mail_settings/template<br>/mail_settings/forward_spam<br>/mail_settings/address_whitelist<br>/mail_settings/bcc<br>/teammates<br>/teammates/pending<br>/tracking_settings<br>/tracking_settings/click<br>/tracking_settings/subscription<br>/categories/stats<br>/categories/stats/sums<br>/categories<br>/access_settings/activity<br>/subusers/stats<br>/subusers/stats/monthly<br>/subusers/stats/sums<br>/subusers/reputations<br>/messages<br>/partner_settings<br>/browsers/stats<br>/devices/stats<br>/templates<br>/clients/stats<br>/geo/stats<br>/mailbox_providers/stats<br>/stats<br>/asm/suppressions/global<br>/user/webhooks/event/test<br>/user/scheduled_sends<br>/whitelabel/ips<br>/contactdb/recipients/search<br>/contactdb/custom_fields<br>/ips<br>/ips/warmup<br>/marketing/contacts/exports<br>/marketing/contacts/search<br>/marketing/segments<br>/marketing/singlesends<br>/subusers<br>/messages/download<br>/mail/batch<br>/mail/send<br>/campaigns<br>/alerts<br>/api_keys<br>/senders<br>/v3/whitelabel/dns/email<br>/validations/email<br>/user/settings/enforced_tls<br>/contactdb/recipients<br>/mail_settings/forward_bounce<br>/mail_settings/footer<br>/mail_settings/spam_check<br>/mail_settings/bounce_purge<br>/tracking_settings/google_analytics<br>/tracking_settings/open<br>/partner_settings/new_relic<br>/user/password<br>/marketing/contacts/imports<br>/whitelabel/links/subuser<br>/suppression/bounces<br>/suppression/invalid_emails<br>/access_settings/whitelist<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Event</td>
        <td>dropDown</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used to define event after the call. <br>
            Possible values are: <br>
            File Downloaded, Callback
        </td>
    </tr>
    <tr>
        <td>Callback data</td>
        <td>textarea</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is an object you can send that you will get back when the function is processed.
        </td>
    </tr>
    <tr>
        <td>Callbacks</td>
        <td>Script</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is a map where you can listen for different function
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*